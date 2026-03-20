import fetch from 'node-fetch'

async function fetchData(params = {}) {
  const req = {
    query: params,
    method: 'GET',
  }
  
  let result = null
  let statusCode = 200
  
  const res = {
    status: (code) => {
      statusCode = code
      return res
    },
    json: (data) => {
      result = data
      return res
    },
  }
  
  await handler(req, res)
  
  if (statusCode !== 200 || !result || !result.success) {
    throw new Error(result?.error || 'Failed to fetch data')
  }
  
  return result.data
}

async function fetchCount(params = {}) {
  const req = {
    query: params,
    method: 'GET',
  }
  
  let result = null
  let statusCode = 200
  
  const res = {
    status: (code) => {
      statusCode = code
      return res
    },
    json: (data) => {
      result = data
      return res
    },
  }
  
  await getCount(req, res)
  
  if (statusCode !== 200 || !result || !result.success) {
    throw new Error(result?.error || 'Failed to get count')
  }
  
  return result.count
}

async function getCount(req, res) {
  try {
    const { query, queryColumns, filters } = req.query
    const fakeReq = { query: { query, queryColumns, filters }, method: 'GET' }
    let result = null
    let statusCode = 200
    
    const fakeRes = {
      status: (code) => {
        statusCode = code
        return fakeRes
      },
      json: (data) => {
        result = data
        return fakeRes
      },
    }
    
    await handler(fakeReq, fakeRes)
    
    if (statusCode !== 200 || !result || !result.success) {
      return res.status(500).json({
        success: false,
        error: 'Failed to get data for counting',
        timestamp: Date.now()
      })
    }
    
    const count = Array.isArray(result.data) ? result.data.length : 0
    
    return res.status(200).json({
      success: true,
      count: count,
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('Error getting count:', error)
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to get count',
      timestamp: Date.now()
    })
  }
}

const safeJSONParse = (value) => {
  if (!value) return value
  if (typeof value === 'object') return value
  try {
    return JSON.parse(value)
  } catch (e) {
    console.warn('Failed to parse JSON:', e)
    return value
  }
}

const formatDateValue = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }
  
  const hasTime = date.getHours() !== 0 || date.getMinutes() !== 0 || date.getSeconds() !== 0
  
  if (hasTime) {
    return date.toLocaleString('en-US', { ...options, ...timeOptions })
  }
  
  return date.toLocaleDateString('en-US', options)
}

const dateReplacer = (key, value) => {
  if (value instanceof Date) {
    return formatDateValue(value)
  }
  return value
}

async function handler(req, res) {
  try {
    const { query, view, limit, page, perPage, sortBy, sortOrder, filters, sorts, offset: offsetParam } = req.query
    
    const queryParams = new URLSearchParams()
    
    if (view) {
      queryParams.append('view', view)
    }
    
    // Handle sorts - new array format
    if (sorts) {
      const parsedSorts = safeJSONParse(sorts)
      if (Array.isArray(parsedSorts) && parsedSorts.length > 0) {
        parsedSorts.forEach((sort, index) => {
          if (!sort.field) return
          queryParams.append(`sort[${index}][field]`, sort.field)
          queryParams.append(`sort[${index}][direction]`, sort.order?.toLowerCase() === 'desc' ? 'desc' : 'asc')
        })
      }
    } else if (sortBy) {
      queryParams.append('sort[0][field]', sortBy)
      queryParams.append('sort[0][direction]', sortOrder || 'asc')
    }
    
    const perPageValue = limit || perPage || 100
    queryParams.append('pageSize', Math.min(parseInt(perPageValue), 100).toString())
    
    const formatAirtableValue = (value) => {
      if (typeof value === 'string') {
        return `'${value.replace(/'/g, "\\'")}'`
      } else if (typeof value === 'number') {
        return String(value)
      } else if (typeof value === 'boolean') {
        return value ? 'TRUE()' : 'FALSE()'
      }
      return `'${String(value)}'`
    }
    
    if (filters) {
      const parsedFilters = safeJSONParse(filters)
      
      if (Array.isArray(parsedFilters)) {
        const conditions = parsedFilters.map((filter) => {
          if (!filter.source || filter.destination === undefined) return null
          
          const field = filter.source
          const value = filter.destination
          const operand = filter.operand || '='
          
          if (Array.isArray(value)) {
            if (value.length === 0) return null
            const arrayConditions = value.map((v) => `{${field}}=${formatAirtableValue(v)}`)
            return arrayConditions.length > 1
              ? `OR(${arrayConditions.join(',')})`
              : arrayConditions[0]
          } else {
            const operatorMap = {
              '=': '=',
              '!=': '!=',
              '>': '>',
              '<': '<',
              '>=': '>=',
              '<=': '<=',
            }
            const airtableOp = operatorMap[operand] || '='
            return `{${field}}${airtableOp}${formatAirtableValue(value)}`
          }
        }).filter(Boolean)
        
        if (conditions.length > 0) {
          const filterFormula = conditions.length > 1 ? `AND(${conditions.join(',')})` : conditions[0]
          queryParams.append('filterByFormula', filterFormula)
        }
      } else {
        const conditions = Object.entries(parsedFilters).map(([field, value]) => {
          if (Array.isArray(value)) {
            const arrayConditions = value.map((v) => `{${field}}=${formatAirtableValue(v)}`)
            return arrayConditions.length > 1
              ? `OR(${arrayConditions.join(',')})`
              : arrayConditions[0]
          } else {
            return `{${field}}=${formatAirtableValue(value)}`
          }
        })
        
        const filterFormula = conditions.length > 1 ? `AND(${conditions.join(',')})` : conditions[0]
        if (filterFormula) {
          queryParams.append('filterByFormula', filterFormula)
        }
      }
    }
    
    let url = `https://api.airtable.com/v0/appZhutapRn1SgeQh/${encodeURIComponent('Table 1')}`
    if (queryParams.toString()) {
      url += `?${queryParams.toString()}`
    }
    
    const allRecords = []
    let airtableOffset
    const skipValue = offsetParam !== undefined ? parseInt(offsetParam) : (page ? (parseInt(page) - 1) * parseInt(perPageValue) : 0)
    const totalRecordsNeeded = skipValue + parseInt(perPageValue)
    
    do {
      const fetchUrl = airtableOffset ? `${url}&offset=${airtableOffset}` : url
      const response = await fetch(fetchUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.DATA_SOURCE_VOLUES_CAREERS_PERSONAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return res.status(response.status).json({
          success: false,
          error: errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`,
          timestamp: Date.now()
        })
      }
      
      const data = await response.json()
      allRecords.push(...data.records)
      airtableOffset = data.offset
      
      if (allRecords.length >= totalRecordsNeeded || !airtableOffset) {
        break
      }
    } while (airtableOffset)
    
    const paginatedRecords = allRecords.slice(skipValue, skipValue + parseInt(perPageValue))
    
    const formattedRecords = paginatedRecords.map((record) => ({
      id: record.id,
      ...record.fields,
      createdTime: record.createdTime
    }))
    
    const safeData = JSON.parse(JSON.stringify(formattedRecords, dateReplacer))
    
    return res.status(200).json({
      success: true,
      data: safeData,
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('Airtable fetch error:', error)
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch data',
      timestamp: Date.now()
    })
  }
}

export { fetchData, fetchCount, handler, getCount }
export default { fetchData, fetchCount, handler, getCount }
