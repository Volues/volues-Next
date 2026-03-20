import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Counter from '../components/counter'
import Footer from '../components/footer'

const Princess = (props) => {
  return (
    <>
      <div className="princess-container1">
        <Head>
          <title>
            Princess - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Princess - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/princess" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/princess"
          />
        </Head>
        <div className="princess-thq-image-elm">
          <ThqHeaderElm
            text={
              <Fragment>
                <span className="princess-text10">Homes</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="princess-text11">Our Services</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="princess-text12">About Us</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <Link href="/contact">
                  <a className="princess-link">
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
            rootClassName="thq-header-elmroot-class-name9"
          ></ThqHeaderElm>
        </div>
        <div className="princess-container2">
          <div className="princess-container3">
            <div className="princess-container4">
              <Counter
                type="Product &amp; Strategy Lead"
                number="Princess Olayinka Folarin\xA0"
                rootClassName="counterroot-class-name11"
              ></Counter>
            </div>
            <img
              alt="image"
              src="/princess-200h.webp"
              className="princess-image"
            />
            <div className="princess-container5">
              <svg viewBox="0 0 1024 1024" className="princess-icon1">
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <span className="princess-text15">Ikeja, Lagos Nigeria</span>
            </div>
          </div>
          <div className="princess-container6">
            <div className="princess-container7"></div>
            <span className="princess-text16">
              Princess is responsible for translating client goals into
              structured digital solutions, the Product &amp; Strategy Lead
              works closely with organizations to define project scope, system
              requirements, and long-term technology direction. This role
              ensures that every project remains aligned with both business
              objectives and practical implementation.
            </span>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="princess-text17">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="princess-text18">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="princess-text19">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="princess-text20">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="princess-text21">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="princess-text22">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="princess-text23">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="princess-text24">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="princess-text25">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="princess-text26">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="princess-text27">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="princess-text28">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="princess-text29">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="princess-text30">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="princess-text31">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="princess-text32">Contact Us</span>
            </Fragment>
          }
          text111111111={
            <Fragment>
              <span className="princess-text33">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="princess-text34">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .princess-container1 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f2f5f9ff;
          }
          .princess-thq-image-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 500px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1648023200201-8fcede127835?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxMYWdvc3xlbnwwfHx8fDE3NzMwNjA2OTN8MA&ixlib=rb-4.1.0&w=1500');
          }
          .princess-text10 {
            display: inline-block;
          }
          .princess-text11 {
            display: inline-block;
          }
          .princess-text12 {
            display: inline-block;
          }
          .princess-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .princess-container2 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            z-index: 100;
            max-width: 1320px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            margin-top: -12rem;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-radius75);
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            background-color: #050505;
          }
          .princess-container3 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .princess-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .princess-image {
            top: -60%;
            left: 0px;
            right: 0px;
            width: 150px;
            bottom: auto;
            margin: auto;
            position: absolute;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .princess-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .princess-icon1 {
            fill: var(--dl-color-theme-primary1);
            width: 20px;
            height: 20px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .princess-text15 {
            color: var(--dl-color-secondary-500);
            display: flex;
            align-self: center;
            align-items: center;
            font-family: 'Inter';
            font-weight: 600;
            margin-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .princess-container6 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .princess-container7 {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .princess-text16 {
            width: 75%;
            font-size: 1.125rem;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.625;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .princess-text17 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text18 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text19 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .princess-text20 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text21 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text22 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text23 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .princess-text24 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .princess-text25 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text27 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .princess-text28 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text31 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .princess-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .princess-container3 {
              padding-top: 0px;
              flex-direction: column;
            }
            .princess-container4 {
              margin-top: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .princess-text15 {
              color: var(--dl-color-secondary-500);
              font-family: Inter;
              font-weight: 600;
              margin-left: var(--dl-layout-space-halfunit);
            }
            .princess-text17 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text18 {
              color: #050505;
            }
            .princess-text19 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .princess-text20 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text21 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text22 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text23 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .princess-text24 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .princess-text25 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text26 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .princess-text28 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text29 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text30 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .princess-text31 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text32 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text33 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text34 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .princess-container1 {
              background-color: #050505;
            }
            .princess-thq-image-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1696339058184-2e6d1da36ad3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxMYWdvc3xlbnwwfHx8fDE3NzMwNjA2OTN8MA&ixlib=rb-4.1.0&w=1500');
            }
            .princess-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .princess-container2 {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .princess-container3 {
              padding-top: 0px;
            }
            .princess-text17 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text18 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text19 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .princess-text20 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text21 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text22 {
              color: #050505;
              font-family: Inter;
            }
            .princess-text23 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .princess-text24 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .princess-text25 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .princess-text28 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text31 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text33 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .princess-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .princess-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .princess-container3 {
              padding-top: 0px;
            }
            .princess-icon1 {
              fill: var(--dl-color-theme-primary1);
              width: 20px;
              height: 20px;
              display: flex;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .princess-text15 {
              color: var(--dl-color-secondary-500);
              display: flex;
              align-self: center;
              align-items: center;
              font-family: Inter;
              font-weight: 600;
              margin-left: var(--dl-layout-space-halfunit);
              flex-direction: column;
              justify-content: center;
            }
            .princess-container6 {
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .princess-text16 {
              width: 75%;
              font-size: 1.125rem;
              align-self: center;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.625;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .princess-text17 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text18 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text19 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text20 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text21 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text22 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text23 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .princess-text24 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .princess-text25 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text26 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text27 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .princess-text28 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text29 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text30 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text31 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text32 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text33 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .princess-text34 {
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

export default Princess
