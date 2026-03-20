import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Insight = (props) => {
  return (
    <>
      <div className="insight-container1">
        <Head>
          <title>
            Insight - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Insight - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/insight" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/insight"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="insight-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="insight-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="insight-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="insight-link1">
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
          rootClassName="thq-header-elmroot-class-name21"
        ></ThqHeaderElm>
        <div className="insight-thq-tech-insight-elm">
          <div className="insight-container2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHRlY2h8ZW58MHx8fHwxNzczMDUyMjE0fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
              className="insight-image"
            />
            <h1 className="insight-text15">Technology Insight</h1>
          </div>
          <div className="insight-thq-description-elm">
            <span className="insight-text16">
              Technology Insight is Volues’ knowledge library for thoughtful
              technical analysis. Here we publish carefully written papers on
              software architecture, web and mobile development, performance,
              security, and the long-term implications of technology choices.
              Each piece is designed to help leaders and builders make clearer,
              more informed digital decisions.
            </span>
          </div>
        </div>
        <div className="insight-thq-our-story-elm">
          <h1 className="insight-thq-heading-elm">Our Story</h1>
          <span className="insight-text17">
            Volues was born out of a conviction that software should be more
            than a product, it should be infrastructure. We saw a market filled
            with &quot;beautiful but fragile&quot; systems. We chose a different
            path: engineering for longevity. Today, we are a multidisciplinary
            firm dedicated to precision, building systems that empower
            businesses to operate with total confidence.
          </span>
        </div>
        <div className="insight-thq-list-elm">
          <h1 className="insight-text18">Tech Insight</h1>
          <a
            href="https://drfbjxkqoahwywnrwcig.supabase.co/storage/v1/object/public/Volues%20Flies/Volues%20Technology%20Insight%202026.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="insight-link2"
          >
            Volues Technology Insight 2026
          </a>
        </div>
        <div className="insight-thq-cta-elm">
          <h6 className="insight-text19">Ready to Productize Your Vision?</h6>
          <span className="insight-text20">
            Let’s discuss how our lean stack approach can accelerate your
            business growth.
          </span>
          <Link href="/discuss">
            <a className="insight-link3 button">Schedule a Strategy Session</a>
          </Link>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="insight-text21">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="insight-text22">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="insight-text23">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="insight-text24">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="insight-text25">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="insight-text26">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="insight-text27">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="insight-text28">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="insight-text29">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="insight-text30">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="insight-text31">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="insight-text32">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="insight-text33">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="insight-text34">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="insight-text35">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="insight-text36">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name21"
          text111111111={
            <Fragment>
              <span className="insight-text37">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="insight-text38">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .insight-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .insight-text10 {
            display: inline-block;
          }
          .insight-text11 {
            display: inline-block;
          }
          .insight-text12 {
            display: inline-block;
          }
          .insight-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .insight-thq-tech-insight-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .insight-container2 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .insight-image {
            width: 100%;
            object-fit: cover;
          }
          .insight-text15 {
            top: 250px;
            left: 0px;
            right: 0px;
            margin: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 48px;
            text-align: center;
            font-family: 'Inter';
          }
          .insight-thq-description-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #050505;
          }
          .insight-text16 {
            text-align: center;
            font-family: 'Inter';
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-doubleunit);
            background-color: 050505;
          }
          .insight-thq-our-story-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-doubleunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-cardradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-doubleunit);
            background-color: #030b5c;
          }
          .insight-thq-heading-elm {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .insight-text17 {
            text-align: center;
            font-family: 'Inter';
          }
          .insight-thq-list-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-doubleunit);
            padding-left: var(--dl-layout-space-doubleunit);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-doubleunit);
            justify-content: center;
            background-color: #050505;
          }
          .insight-text18 {
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .insight-link2 {
            color: var(--dl-color-pimary-300);
            align-self: flex-start;
            text-align: left;
            font-family: 'Inter';
            text-decoration: none;
          }
          .insight-thq-cta-elm {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-color: var(--dl-color-secondary-700);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-cardradius);
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            background-color: #050505;
          }
          .insight-text19 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
          }
          .insight-text20 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .insight-link3 {
            color: #050505;
            text-align: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .insight-text21 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text22 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text23 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .insight-text24 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text25 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text27 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .insight-text28 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .insight-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text31 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .insight-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text35 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text36 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text37 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .insight-text38 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .insight-thq-our-story-elm {
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-doubleunit);
              background-color: #030b5c;
            }
            .insight-thq-list-elm {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              justify-content: center;
              background-color: #050505;
            }
            .insight-text18 {
              font-family: Inter;
            }
            .insight-link2 {
              align-self: flex-start;
              text-align: left;
              font-family: Inter;
            }
            .insight-thq-cta-elm {
              width: 90%;
              background-color: #050505;
            }
            .insight-text19 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
            }
            .insight-text20 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 1rem;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .insight-link3 {
              color: #050505;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .insight-text21 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text22 {
              color: #050505;
            }
            .insight-text23 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .insight-text24 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text25 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text26 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .insight-text28 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .insight-text29 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text30 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text31 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .insight-text32 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text33 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text34 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .insight-text35 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text36 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text37 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text38 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .insight-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .insight-text15 {
              top: 255px;
            }
            .insight-thq-our-story-elm {
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-doubleunit);
              background-color: #030b5c;
            }
            .insight-thq-list-elm {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-layout-space-tripleunit);
              justify-content: center;
              background-color: #050505;
            }
            .insight-link2 {
              color: var(--dl-color-pimary-300);
              align-self: flex-start;
              text-align: left;
              font-family: Inter;
              text-decoration: none;
            }
            .insight-thq-cta-elm {
              background-color: #050505;
            }
            .insight-text19 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 20px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
            }
            .insight-text20 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .insight-link3 {
              color: rgb(5, 5, 5);
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .insight-text21 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text22 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text23 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .insight-text24 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text25 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text26 {
              color: #050505;
              font-family: Inter;
            }
            .insight-text27 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .insight-text28 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .insight-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text31 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .insight-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text33 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text35 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text36 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text37 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .insight-text38 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .insight-container1 {
              background-color: #050505;
            }
            .insight-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .insight-thq-tech-insight-elm {
              width: 100%;
              border-radius: var(--dl-layout-radius-imageradius);
              background-color: 050505;
            }
            .insight-image {
              width: 100%;
            }
            .insight-text15 {
              top: 50px;
              left: 0px;
              color: #c3c9c5;
              right: 0px;
              margin: var(--dl-layout-space-unit);
              position: absolute;
              font-size: 32px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .insight-thq-description-elm {
              width: 100%;
              align-self: center;
              margin-top: 0px;
              border-radius: var(--dl-layout-radius-imageradius);
              background-color: #050505;
            }
            .insight-text16 {
              width: 80%;
              margin-top: var(--dl-layout-space-unit);
              text-align: left;
              font-family: Inter;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-doubleunit);
              background-color: rgb(5, 5, 5);
            }
            .insight-thq-our-story-elm {
              width: 90%;
              display: block;
              margin-left: 0px;
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-doubleunit);
              background-color: #030b5c;
            }
            .insight-thq-heading-elm {
              color: var(--dl-color-pimary-900);
              width: 100%;
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .insight-text17 {
              color: var(--dl-color-pimary-900);
              width: 100%;
              display: block;
              font-size: 16px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .insight-thq-list-elm {
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .insight-text18 {
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .insight-link2 {
              color: var(--dl-color-pimary-300);
              align-self: flex-start;
              text-align: left;
              font-family: Inter;
              text-decoration: none;
            }
            .insight-thq-cta-elm {
              width: 90%;
              margin-top: var(--dl-layout-space-halfunit);
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-secondary-700);
              border-width: 1px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-unit);
              background-color: #050505;
            }
            .insight-text19 {
              fill: var(--dl-color-gray-900);
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              font-style: inherit;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .insight-text20 {
              fill: var(--dl-color-gray-900);
              color: var(--dl-color-theme-neutral-light);
              font-size: 16px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .insight-link3 {
              fill: var(--dl-color-secondary-700);
              color: rgb(5, 5, 5);
              padding-top: var(--dl-layout-space-halfunit);
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-halfunit);
              text-decoration: none;
            }
            .insight-text21 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text22 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text23 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text24 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text25 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text26 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text27 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .insight-text28 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .insight-text29 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text30 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text31 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .insight-text32 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text33 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text34 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text35 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text36 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text37 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .insight-text38 {
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

export default Insight
