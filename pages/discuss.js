import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Discuss = (props) => {
  return (
    <>
      <div className="discuss-container1">
        <Head>
          <title>
            Discuss - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Discuss - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/discuss" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/discuss"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="discuss-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="discuss-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="discuss-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="discuss-link">
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
          rootClassName="thq-header-elmroot-class-name26"
        ></ThqHeaderElm>
        <div className="discuss-container2">
          <div className="discuss-container3">
            <h1 className="discuss-text15">Book a short call 📞</h1>
            <span className="discuss-text16">
              Pick a 15-minute slot that works for you. No back-and-forth, just
              a quick sync on your project goals.
            </span>
          </div>
          <div className="discuss-thq-cal-elm">
            <div className="discuss-container4">
              <div className="discuss-container5">
                <React.Fragment>
                  <React.Fragment>
                    {/* Cal inline embed code begins */}
                    <div
                      style={{
                        width: '90%',
                        height: '100%',
                        overflow: 'scroll',
                      }}
                      id="my-cal-inline-30min"
                    />
                    <Script type="text/javascript">{`
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});

  Cal.ns["30min"]("inline", {
    elementOrSelector:"#my-cal-inline-30min",
    config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
    calLink: "volues/30min",
  });

  Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
`}</Script>
                    {/* Cal inline embed code ends */}
                  </React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="discuss-text17">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="discuss-text18">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="discuss-text19">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="discuss-text20">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="discuss-text21">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="discuss-text22">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="discuss-text23">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="discuss-text24">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="discuss-text25">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="discuss-text26">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="discuss-text27">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="discuss-text28">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="discuss-text29">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="discuss-text30">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="discuss-text31">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="discuss-text32">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name32"
          text111111111={
            <Fragment>
              <span className="discuss-text33">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="discuss-text34">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .discuss-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #050505;
          }
          .discuss-text10 {
            display: inline-block;
          }
          .discuss-text11 {
            display: inline-block;
          }
          .discuss-text12 {
            display: inline-block;
          }
          .discuss-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .discuss-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .discuss-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            padding-top: var(--dl-layout-space-doubleunit);
            margin-right: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-doubleunit);
            margin-bottom: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-doubleunit);
            justify-content: center;
            background-color: #050505;
          }
          .discuss-text15 {
            font-size: 32px;
            font-family: 'Inter';
          }
          .discuss-text16 {
            font-size: 12px;
            text-align: center;
            font-family: 'Inter';
          }
          .discuss-thq-cal-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .discuss-container4 {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .discuss-container5 {
            display: contents;
          }
          .discuss-text17 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text18 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text19 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .discuss-text20 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text21 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text22 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text23 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .discuss-text24 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .discuss-text25 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text27 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .discuss-text28 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text31 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .discuss-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .discuss-container1 {
              background-color: #050505;
            }
            .discuss-container2 {
              width: 100%;
              height: 100vh;
            }
            .discuss-thq-cal-elm {
              width: 100%;
              height: 100%;
            }
            .discuss-text17 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text18 {
              color: #050505;
            }
            .discuss-text19 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .discuss-text20 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text21 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text22 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text23 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .discuss-text24 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .discuss-text25 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text26 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .discuss-text28 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text29 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text30 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .discuss-text31 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text32 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text33 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text34 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .discuss-container1 {
              background-color: #050505;
            }
            .discuss-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .discuss-container2 {
              width: 100%;
              height: 100vh;
            }
            .discuss-text16 {
              font-family: Inter;
            }
            .discuss-thq-cal-elm {
              width: 100%;
              height: 100%;
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .discuss-text17 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text18 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text19 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .discuss-text20 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text21 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text22 {
              color: #050505;
              font-family: Inter;
            }
            .discuss-text23 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .discuss-text24 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .discuss-text25 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .discuss-text28 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text31 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text33 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .discuss-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .discuss-container1 {
              background-color: #050505;
            }
            .discuss-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .discuss-container2 {
              width: 100%;
              height: 100vh;
              padding-bottom: var(--dl-layout-space-sixunits);
            }
            .discuss-container3 {
              width: 90%;
              margin-bottom: var(--dl-layout-space-halfunit);
              background-color: #050505;
            }
            .discuss-text15 {
              font-size: 27px;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .discuss-text16 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
            }
            .discuss-thq-cal-elm {
              padding-bottom: var(--dl-layout-space-sixunits);
            }
            .discuss-container4 {
              width: 100%;
              height: 100%;
            }
            .discuss-text17 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text18 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text19 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text20 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text21 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text22 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text23 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .discuss-text24 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .discuss-text25 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text26 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text27 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .discuss-text28 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text29 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text30 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text31 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text32 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text33 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .discuss-text34 {
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

export default Discuss
