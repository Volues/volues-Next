import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'

const Quote = (props) => {
  return (
    <>
      <div className="quote-container1">
        <Head>
          <title>
            Quote - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Quote - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/quote" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/quote"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="quote-text1">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="quote-text2">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="quote-text3">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="quote-link">
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
          rootClassName="thq-header-elmroot-class-name30"
        ></ThqHeaderElm>
        <div className="quote-container2">
          <div className="quote-container3">
            <React.Fragment>
              <React.Fragment>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <title>Volues' Quote Request Form</title>
                <Script async={true} src="https://tally.so/widgets/embed.js" />
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n    html {\n      margin: 0;\n      height: 100%;\n      overflow: hidden;\n    }\n\n    iframe {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      border: 0;\n    }\n  ',
                  }}
                />

                <iframe
                  data-tally-src="https://tally.so/r/68xOdO"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Volues' Quote Request Form"
                />
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .quote-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            min-height: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .quote-text1 {
            display: inline-block;
          }
          .quote-text2 {
            display: inline-block;
          }
          .quote-text3 {
            display: inline-block;
          }
          .quote-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .quote-container2 {
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .quote-container3 {
            display: contents;
          }
          @media (max-width: 991px) {
            .quote-container1 {
              align-items: center;
              justify-content: center;
            }
            .quote-container2 {
              padding-bottom: var(--dl-layout-space-sixunits);
            }
          }
          @media (max-width: 767px) {
            .quote-container1 {
              align-items: center;
              justify-content: center;
              background-color: #050505;
            }
            .quote-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .quote-container2 {
              padding-bottom: var(--dl-layout-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .quote-container1 {
              align-items: center;
              justify-content: center;
              background-color: #050505;
            }
            .quote-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .quote-container2 {
              padding-bottom: var(--dl-layout-space-sixunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Quote
