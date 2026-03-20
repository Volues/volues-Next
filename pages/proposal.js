import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Proposal = (props) => {
  return (
    <>
      <div className="proposal-container1">
        <Head>
          <title>
            Proposal - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Proposal - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/proposal" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/proposal"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="proposal-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="proposal-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="proposal-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="proposal-link">
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
          rootClassName="thq-header-elmroot-class-name12"
        ></ThqHeaderElm>
        <div className="proposal-thq-get-a-quote-form-elm">
          <div>
            <div className="proposal-container3">
              <React.Fragment>
                <React.Fragment>
                  <Script
                    async={true}
                    src="https://tally.so/widgets/embed.js"
                  />
                  <iframe
                    data-tally-src="https://tally.so/r/0Qr9r6?transparentBackground=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100vh',
                      border: 'none',
                    }}
                    title="Volues Client Interest Form"
                  ></iframe>
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className="proposal-thq-footer-elm">
          <Footer
            text={
              <Fragment>
                <span className="proposal-text15">About Volues</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="proposal-text16">Our Culture</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="proposal-text17">Careers</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="proposal-text18">Our Process</span>
              </Fragment>
            }
            text11={
              <Fragment>
                <span className="proposal-text19">Our Services</span>
              </Fragment>
            }
            text111={
              <Fragment>
                <span className="proposal-text20">Blog</span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="proposal-text21">Resources</span>
              </Fragment>
            }
            heading3={
              <Fragment>
                <span className="proposal-text22">Company</span>
              </Fragment>
            }
            text1111={
              <Fragment>
                <span className="proposal-text23">White Papers</span>
              </Fragment>
            }
            text1112={
              <Fragment>
                <span className="proposal-text24">Privacy Policy</span>
              </Fragment>
            }
            heading11={
              <Fragment>
                <span className="proposal-text25">Legal</span>
              </Fragment>
            }
            text11111={
              <Fragment>
                <span className="proposal-text26">Tech Insight</span>
              </Fragment>
            }
            text11112={
              <Fragment>
                <span className="proposal-text27">Terms of Service</span>
              </Fragment>
            }
            text111111={
              <Fragment>
                <span className="proposal-text28">Our Team</span>
              </Fragment>
            }
            text111112={
              <Fragment>
                <span className="proposal-text29">Cookie Policy</span>
              </Fragment>
            }
            text11111111={
              <Fragment>
                <span className="proposal-text30">Contact Us</span>
              </Fragment>
            }
            rootClassName="footerroot-class-name33"
            text111111111={
              <Fragment>
                <span className="proposal-text31">Security Policy</span>
              </Fragment>
            }
            text1111111111={
              <Fragment>
                <span className="proposal-text32">NDA &amp; DPA</span>
              </Fragment>
            }
          ></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .proposal-container1 {
            width: 100%;
            height: 90vh;
            display: flex;
            min-height: 170vh;
            align-items: center;
            flex-direction: column;
            background-color: #050505;
          }
          .proposal-text10 {
            display: inline-block;
          }
          .proposal-text11 {
            display: inline-block;
          }
          .proposal-text12 {
            display: inline-block;
          }
          .proposal-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .proposal-thq-get-a-quote-form-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-container3 {
            display: contents;
          }
          .proposal-thq-footer-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .proposal-text15 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text16 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text17 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .proposal-text18 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text19 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text20 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text21 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .proposal-text22 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .proposal-text23 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text24 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text25 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .proposal-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text27 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text28 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text31 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .proposal-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .proposal-thq-get-a-quote-form-elm {
              width: 100%;
              height: 100vh;
              overflow: hidden;
            }
            .proposal-text15 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text16 {
              color: #050505;
            }
            .proposal-text17 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .proposal-text18 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text19 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text20 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text21 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .proposal-text22 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .proposal-text23 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text24 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text25 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .proposal-text26 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text27 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text28 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .proposal-text29 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text30 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text31 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text32 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .proposal-container1 {
              background-color: #050505;
            }
            .proposal-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .proposal-thq-get-a-quote-form-elm {
              width: 100%;
              height: 100vh;
              overflow: hidden;
            }
            .proposal-thq-footer-elm {
              width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .proposal-text15 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text16 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text17 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .proposal-text18 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text19 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text20 {
              color: #050505;
              font-family: Inter;
            }
            .proposal-text21 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .proposal-text22 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .proposal-text23 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text24 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text25 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .proposal-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text27 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text28 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text31 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .proposal-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .proposal-container1 {
              background-color: #050505;
            }
            .proposal-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .proposal-thq-get-a-quote-form-elm {
              width: 100%;
              height: 100vh;
              overflow: hidden;
            }
            .proposal-thq-footer-elm {
              width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .proposal-text15 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text16 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text17 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text18 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text19 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text20 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text21 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .proposal-text22 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .proposal-text23 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text24 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text25 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .proposal-text26 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text27 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text28 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text29 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text30 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text31 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .proposal-text32 {
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

export default Proposal
