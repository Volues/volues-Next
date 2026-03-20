import React, {
  Fragment,
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'
import airtableTable14ed19962 from '../utils/data-sources/airtable-table-1-4ed19962'

const Careers = (props) => {
  const ds_0_skipDebounce = useRef(true)
  const ds_0_skipCountFetch = useRef(true)
  const [ds_0_maxPages, setDs_0_maxPages] = useState(
    props?.Volues_Careers_Table_1_data_ds_0_maxPages || 0
  )
  const [ds_0_state, setDs_0_state] = useState({
    page: 1,
    debouncedQuery: '',
  })
  const [ds_0_searchQuery, setDs_0_searchQuery] = useState('')
  useEffect(() => {
    if (ds_0_skipDebounce.current) {
      ds_0_skipDebounce.current = false
      return
    }
    const timer = setTimeout(() => {
      setDs_0_state({
        page: 1,
        debouncedQuery: ds_0_searchQuery,
      })
    }, 300)
    return () => clearTimeout(timer)
  }, [ds_0_searchQuery])
  useEffect(() => {
    if (ds_0_skipCountFetch.current) {
      ds_0_skipCountFetch.current = false
      return
    }
    fetch(
      `/api/airtable-table-1-4ed19962-count?${new URLSearchParams({
        query: ds_0_state.debouncedQuery,
        queryColumns: JSON.stringify(['Name', 'Notes', 'Attachment Summary']),
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && 'count' in data) {
          setDs_0_maxPages(data.count === 0 ? 0 : Math.ceil(data.count / 10))
        }
      })
  }, [ds_0_state.debouncedQuery])
  return (
    <>
      <div className="careers-container">
        <Head>
          <title>
            Careers - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Careers - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/careers" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/careers"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="careers-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="careers-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="careers-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="careers-link">
                  <span>
                    Contact
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Us</span>
                </a>
              </Link>
            </Fragment>
          }
          rootClassName="thq-header-elmroot-class-name10"
        ></ThqHeaderElm>
        <div className="careers-thq-table-with-pagination-elm">
          <div className="careers-data-source-search-node">
            <input
              type="text"
              placeholder="Search table 1"
              className="careers-thq-search-input-elm input"
              onChange={(e) => setDs_0_searchQuery(e.target.value)}
              value={ds_0_searchQuery}
            />
          </div>
          <table className="careers-thq-table1-table-elm">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <DataProvider
                resourceDefinition={{
                  type: 'external-data-source',
                  dataSourceId: '4ed19962-8088-4379-9cb7-1b3c13ce98ac',
                  tableName: 'Table 1',
                  dataSourceType: 'airtable',
                }}
                name={'Volues_Careers_Table_1_data'}
                renderSuccess={(Volues_Careers_Table_1_data) => (
                  <>
                    <Fragment>
                      <Repeater
                        items={Volues_Careers_Table_1_data || []}
                        renderItem={(volues_careers_table_1_row, index) => (
                          <Fragment
                            key={`${volues_careers_table_1_row?.id}${index}`}
                          >
                            <tr>
                              <td>
                                <span>
                                  {typeof volues_careers_table_1_row?.Name ===
                                    'object' &&
                                  volues_careers_table_1_row?.Name !== null
                                    ? JSON.stringify(
                                        volues_careers_table_1_row?.Name
                                      )
                                    : volues_careers_table_1_row?.Name}
                                </span>
                              </td>
                            </tr>
                          </Fragment>
                        )}
                      />
                    </Fragment>
                  </>
                )}
                params={useMemo(
                  () => ({
                    page: ds_0_state.page,
                    perPage: 10,
                    query: ds_0_state.debouncedQuery,
                    queryColumns: JSON.stringify([
                      'Name',
                      'Notes',
                      'Attachment Summary',
                    ]),
                  }),
                  [ds_0_state]
                )}
                initialData={
                  ds_0_state.page === 1 && !ds_0_state.debouncedQuery
                    ? props?.Volues_Careers_Table_1_data_ds_0
                    : undefined
                }
                key={`Volues_Careers_Table_1_data-${ds_0_state.page}-${ds_0_state.debouncedQuery}`}
                fetchData={useCallback(
                  (params) =>
                    fetch(
                      `/api/airtable-table-1-4ed19962?${new URLSearchParams(
                        params
                      )}`,
                      {
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      }
                    )
                      .then((res) => res.json())
                      .then((response) => response?.data),
                  []
                )}
                persistDataDuringLoading={true}
              />
            </tbody>
          </table>
          <div className="careers-cms-pagination-node">
            <button
              className="careers-thq-previous-elm button"
              type="button"
              onClick={() =>
                setDs_0_state((state) => ({
                  ...state,
                  page: Math.max(1, state.page - 1),
                }))
              }
              disabled={ds_0_state.page <= 1}
            >
              <span>Previous</span>
            </button>
            <button
              className="careers-thq-next-elm button"
              type="button"
              onClick={() =>
                setDs_0_state((state) => ({
                  ...state,
                  page: state.page + 1,
                }))
              }
              disabled={ds_0_state.page >= ds_0_maxPages}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
        <div className="careers-thq-career-page-elm">
          <h1 className="careers-text18">Job Title</h1>
          <span className="careers-text19">Department</span>
          <span className="careers-text20">Location</span>
          <span className="careers-text21">Description</span>
          <span className="careers-text22">Application Link</span>
          <span className="careers-text23">Status</span>
          <button type="button" className="careers-button button">
            Apply Now
          </button>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="careers-text24">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="careers-text25">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="careers-text26">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="careers-text27">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="careers-text28">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="careers-text29">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="careers-text30">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="careers-text31">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="careers-text32">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="careers-text33">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="careers-text34">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="careers-text35">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="careers-text36">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="careers-text37">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="careers-text38">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="careers-text39">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name9"
          text111111111={
            <Fragment>
              <span className="careers-text40">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="careers-text41">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .careers-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .careers-text10 {
            display: inline-block;
          }
          .careers-text11 {
            display: inline-block;
          }
          .careers-text12 {
            display: inline-block;
          }
          .careers-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .careers-thq-table-with-pagination-elm {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .careers-data-source-search-node {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            justify-content: center;
          }
          .careers-thq-search-input-elm {
            width: 100%;
            border: 1px solid #ccc;
            padding: 8px;
            max-width: 200px;
            border-radius: 4px;
            background-color: #050505;
          }
          .careers-thq-table1-table-elm {
            width: 80%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .careers-cms-pagination-node {
            width: 100%;
            display: flex;
            margin-top: 8px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-doubleunit);
            justify-content: center;
          }
          .careers-thq-previous-elm {
            display: flex;
            background-color: #050505;
          }
          .careers-thq-next-elm {
            display: flex;
            background-color: #050505;
          }
          .careers-thq-career-page-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-tripleunit);
            justify-content: center;
            background-color: #050505;
          }
          .careers-text18 {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .careers-text19 {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .careers-text20 {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .careers-text21 {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .careers-text22 {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .careers-text23 {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .careers-button {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: #050505;
          }
          .careers-text24 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text25 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text26 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .careers-text27 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text28 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text30 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .careers-text31 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .careers-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text34 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .careers-text35 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text36 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text37 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text38 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text39 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text40 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .careers-text41 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .careers-thq-table1-table-elm {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-thq-career-page-elm {
              width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text18 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text19 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text20 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text21 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text22 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text23 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-button {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text24 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text25 {
              color: #050505;
            }
            .careers-text26 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .careers-text27 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text28 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text29 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text30 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .careers-text31 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .careers-text32 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text33 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text34 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .careers-text35 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text36 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text37 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .careers-text38 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text39 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text40 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text41 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .careers-container {
              background-color: #050505;
            }
            .careers-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .careers-thq-search-input-elm {
              background-color: #050505;
            }
            .careers-thq-table1-table-elm {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-thq-previous-elm {
              background-color: #050505;
            }
            .careers-thq-next-elm {
              background-color: #050505;
            }
            .careers-thq-career-page-elm {
              width: 100%;
              padding-bottom: var(--dl-layout-space-tripleunit);
            }
            .careers-text18 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text19 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text20 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text21 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text22 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-text23 {
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-button {
              fill: #050505;
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
              background-color: #050505;
            }
            .careers-text24 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text25 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .careers-text27 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text28 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text29 {
              color: #050505;
              font-family: Inter;
            }
            .careers-text30 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .careers-text31 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .careers-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text33 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text34 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .careers-text35 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text36 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text37 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text38 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text39 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text40 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .careers-text41 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .careers-container {
              background-color: #050505;
            }
            .careers-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .careers-thq-table-with-pagination-elm {
              width: 100%;
              margin-top: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .careers-data-source-search-node {
              width: 80%;
            }
            .careers-thq-search-input-elm {
              background-color: #050505;
            }
            .careers-thq-table1-table-elm {
              width: 80%;
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .careers-thq-previous-elm {
              background-color: #050505;
            }
            .careers-thq-next-elm {
              background-color: #050505;
            }
            .careers-thq-career-page-elm {
              width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
              background-color: #050505;
            }
            .careers-text18 {
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
              justify-content: center;
            }
            .careers-text19 {
              display: flex;
              align-self: center;
              font-style: normal;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              margin-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .careers-text20 {
              display: flex;
              align-self: center;
              font-style: normal;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              margin-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .careers-text21 {
              display: flex;
              align-self: center;
              font-style: normal;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              margin-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .careers-text22 {
              display: flex;
              align-self: center;
              font-style: normal;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              margin-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .careers-text23 {
              display: flex;
              align-self: center;
              font-style: normal;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              margin-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .careers-button {
              display: flex;
              align-self: center;
              font-style: normal;
              align-items: center;
              font-family: Inter;
              font-weight: 700;
              border-radius: var(--dl-layout-radius-buttonradius);
              justify-content: center;
            }
            .careers-text24 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text25 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text26 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text27 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text28 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text29 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text30 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .careers-text31 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .careers-text32 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text33 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text34 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .careers-text35 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text36 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text37 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text38 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text39 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text40 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .careers-text41 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
          }
        `}
      </style>
    </>
  )
}

export default Careers

export async function getStaticProps(context) {
  try {
    const [
      Volues_Careers_Table_1_data_ds_0,
      Volues_Careers_Table_1_data_count,
    ] = await Promise.all([
      airtableTable14ed19962
        .fetchData({
          page: 1,
          perPage: 10,
          queryColumns: JSON.stringify(['Name', 'Notes', 'Attachment Summary']),
        })
        .catch((error) => {
          console.error(
            'Error fetching Volues_Careers_Table_1_data_ds_0:',
            error
          )
          return []
        }),
      airtableTable14ed19962.fetchCount().catch((error) => {
        console.error(
          'Error fetching Volues_Careers_Table_1_data_count:',
          error
        )
        return 0
      }),
    ])
    const Volues_Careers_Table_1_data_ds_0_maxPages = Math.ceil(
      (Volues_Careers_Table_1_data_count || 0) / 10
    )
    return {
      props: {
        Volues_Careers_Table_1_data_ds_0: Volues_Careers_Table_1_data_ds_0,
        Volues_Careers_Table_1_data_ds_0_maxPages:
          Volues_Careers_Table_1_data_ds_0_maxPages,
      },
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {},
    }
  }
}
