export default async function (params = {}) {
  let urlParams = {
    dataSourceId: '4ed19962-8088-4379-9cb7-1b3c13ce98ac',
    dataSourceType: 'airtable',
    tableName: 'Table 1',
  }
  let data = await fetch(
    `/api/data-source/4ed19962-8088-4379-9cb7-1b3c13ce98ac/Table 1?${new URLSearchParams(
      urlParams
    )}`,
    {
      method: 'GET',
    }
  )
  const response = await data.json()
  return response
}
