import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Counter from '../components/counter'
import Footer from '../components/footer'

const Leo = (props) => {
  return (
    <>
      <div className="leo-container1">
        <Head>
          <title>
            Leo - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Leo - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/leo" />
          <meta property="og:url" content="https://mgnt.teleporthq.site/leo" />
        </Head>
        <div className="leo-thq-image-elm">
          <ThqHeaderElm
            text={
              <Fragment>
                <span className="leo-text10">Homes</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="leo-text11">Our Services</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="leo-text12">About Us</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <Link href="/contact">
                  <a className="leo-link">
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
            rootClassName="thq-header-elmroot-class-name14"
          ></ThqHeaderElm>
        </div>
        <div className="leo-container2">
          <div className="leo-container3">
            <div className="leo-container4">
              <Counter
                type="Engineering &amp; Systems Lead"
                number="Leo Cooper"
                rootClassName="counterroot-class-name13"
              ></Counter>
            </div>
            <img
              alt="image"
              src="/external/evaristo-villegas-hkhxx_vbb7e-unsplash_1-200h.webp"
              className="leo-image"
            />
            <div className="leo-container5">
              <svg viewBox="0 0 1024 1024" className="leo-icon1">
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <span className="leo-text15">Arlington, Dallas USA</span>
            </div>
          </div>
          <div className="leo-container6">
            <div className="leo-container7"></div>
            <span className="leo-text16">
              The Engineering Lead oversees development standards, code quality,
              and system reliability. This role ensures that every product built
              by Volues follows disciplined engineering practices and remains
              maintainable, secure, and scalable as organizations grow.
            </span>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="leo-text17">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="leo-text18">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="leo-text19">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="leo-text20">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="leo-text21">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="leo-text22">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="leo-text23">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="leo-text24">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="leo-text25">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="leo-text26">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="leo-text27">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="leo-text28">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="leo-text29">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="leo-text30">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="leo-text31">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="leo-text32">Contact Us</span>
            </Fragment>
          }
          text111111111={
            <Fragment>
              <span className="leo-text33">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="leo-text34">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .leo-container1 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f2f5f9ff;
          }
          .leo-thq-image-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 500px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1631662760570-8f7b52d09fdc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxEYWxsYXN8ZW58MHx8fHwxNzczMDYwNDc1fDA&ixlib=rb-4.1.0&w=1500');
          }
          .leo-text10 {
            display: inline-block;
          }
          .leo-text11 {
            display: inline-block;
          }
          .leo-text12 {
            display: inline-block;
          }
          .leo-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .leo-container2 {
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
          .leo-container3 {
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
          .leo-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .leo-image {
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
          .leo-container5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .leo-icon1 {
            fill: var(--dl-color-theme-primary1);
            width: 20px;
            height: 20px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .leo-text15 {
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
          .leo-container6 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .leo-container7 {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .leo-text16 {
            width: 75%;
            font-size: 1.125rem;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            line-height: 1.625;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .leo-text17 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text18 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text19 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .leo-text20 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text21 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text22 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text23 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .leo-text24 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .leo-text25 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text27 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .leo-text28 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text31 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .leo-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .leo-container3 {
              flex-direction: column;
            }
            .leo-container4 {
              margin-top: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .leo-text15 {
              color: var(--dl-color-secondary-500);
              font-family: Inter;
              font-weight: 600;
              margin-left: var(--dl-layout-space-halfunit);
            }
            .leo-text17 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text18 {
              color: #050505;
            }
            .leo-text19 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .leo-text20 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text21 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text22 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text23 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .leo-text24 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .leo-text25 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text26 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .leo-text28 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text29 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text30 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .leo-text31 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text32 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text33 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text34 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .leo-thq-image-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1631662760570-8f7b52d09fdc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxEYWxsYXN8ZW58MHx8fHwxNzczMDYwNDc1fDA&ixlib=rb-4.1.0&w=1500');
            }
            .leo-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .leo-container2 {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .leo-text17 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text18 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text19 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .leo-text20 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text21 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text22 {
              color: #050505;
              font-family: Inter;
            }
            .leo-text23 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .leo-text24 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .leo-text25 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .leo-text28 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text31 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text33 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .leo-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .leo-thq-image-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1631662760570-8f7b52d09fdc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxEYWxsYXN8ZW58MHx8fHwxNzczMDYwNDc1fDA&ixlib=rb-4.1.0&w=1500');
            }
            .leo-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .leo-icon1 {
              fill: var(--dl-color-theme-primary1);
              width: 20px;
              height: 20px;
              display: flex;
              align-self: center;
              align-items: center;
              flex-direction: row-reverse;
              justify-content: center;
            }
            .leo-text15 {
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
            .leo-container6 {
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .leo-text16 {
              width: 75%;
              font-size: 1.125rem;
              align-self: center;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.625;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .leo-text17 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text18 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text19 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text20 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text21 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text22 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text23 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .leo-text24 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .leo-text25 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text26 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text27 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .leo-text28 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text29 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text30 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text31 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text32 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text33 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .leo-text34 {
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

export default Leo

export async function getStaticProps(context) {
  try {
    const [] = await Promise.all([])
    return {
      props: {},
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {},
    }
  }
}
