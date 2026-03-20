import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const WP = (props) => {
  return (
    <>
      <div className="wp-container1">
        <Head>
          <title>
            WP - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="WP - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/wp" />
          <meta property="og:url" content="https://mgnt.teleporthq.site/wp" />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="wp-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="wp-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="wp-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="wp-link">
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
          rootClassName="thq-header-elmroot-class-name24"
        ></ThqHeaderElm>
        <div className="wp-thq-white-paper-elm">
          <div className="wp-container2">
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/volues%20white%20paper-1500w.webp"
              srcSet="/volues%20white%20paper-1500w.webp 1200w, /volues%20white%20paper-tablet.webp 800w, /volues%20white%20paper-mobile.webp 480w"
              className="wp-image"
            />
            <h1 className="wp-text15">White Paper</h1>
          </div>
          <div className="wp-thq-description-elm">
            <span className="wp-text16">
              <span className="wp-text17">
                These white papers present Volues&apos; official standpoint on
                the intersection of innovation and practical technology. Rather
                than following trends, we explore the structural shifts within
                digital marketing architecture, data-driven business scaling,
                and the evolution of user-centric software.
              </span>
              <br className="wp-text18"></br>
              <br className="wp-text19"></br>
              <span className="wp-text20">
                Our analysis focuses on the sustainable growth of digital
                ecosystems, examining how businesses can transition from manual
                workflows to automated, productized operations without losing
                their human core. These papers are future-looking, designed to
                provide clarity for our partners and clients as they navigate
                the complexities of a modernizing economy. We aim to bridge the
                gap between technical possibility and commercial viability,
                ensuring that every technological investment serves a long-term
                strategic interest
              </span>
            </span>
          </div>
        </div>
        <div className="wp-thq-our-story-elm">
          <h1 className="wp-thq-heading-elm">Our Story</h1>
          <span className="wp-text21">
            Volues was born out of a conviction that software should be more
            than a product, it should be infrastructure. We saw a market filled
            with &quot;beautiful but fragile&quot; systems. We chose a different
            path: engineering for longevity. Today, we are a multidisciplinary
            firm dedicated to precision, building systems that empower
            businesses to operate with total confidence.
          </span>
        </div>
        <div className="wp-thq-list-elm">
          <h1 className="wp-text22">White Paper List</h1>
          <span className="wp-text23">Doc List will appear below</span>
        </div>
        <div className="wp-thq-cta-elm">
          <h6 className="wp-text24">Ready to Productize Your Vision?</h6>
          <span className="wp-text25">
            Let’s discuss how our lean stack approach can accelerate your
            business growth.
          </span>
          <button type="button" className="wp-button button">
            Schedule a Strategy Session
          </button>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="wp-text26">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="wp-text27">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="wp-text28">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="wp-text29">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="wp-text30">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="wp-text31">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="wp-text32">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="wp-text33">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="wp-text34">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="wp-text35">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="wp-text36">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="wp-text37">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="wp-text38">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="wp-text39">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="wp-text40">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="wp-text41">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name20"
          text111111111={
            <Fragment>
              <span className="wp-text42">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="wp-text43">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .wp-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .wp-text10 {
            display: inline-block;
          }
          .wp-text11 {
            display: inline-block;
          }
          .wp-text12 {
            display: inline-block;
          }
          .wp-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .wp-thq-white-paper-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .wp-container2 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .wp-image {
            width: 100%;
            object-fit: cover;
          }
          .wp-text15 {
            top: 350px;
            left: 0px;
            right: 0px;
            margin: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 48px;
            text-align: center;
            font-family: 'Inter';
          }
          .wp-thq-description-elm {
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
          .wp-text16 {
            text-align: center;
            font-family: 'Inter';
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-doubleunit);
            background-color: 050505;
          }
          .wp-thq-our-story-elm {
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
          .wp-thq-heading-elm {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .wp-text21 {
            text-align: center;
            font-family: 'Inter';
          }
          .wp-thq-list-elm {
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
          .wp-text22 {
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .wp-text23 {
            align-self: flex-start;
            text-align: left;
            font-family: 'Inter';
          }
          .wp-thq-cta-elm {
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
          .wp-text24 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
          }
          .wp-text25 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .wp-button {
            color: #050505;
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .wp-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text27 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text28 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .wp-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text31 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text32 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .wp-text33 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .wp-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text35 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text36 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .wp-text37 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text38 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text39 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text40 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text41 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text42 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .wp-text43 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .wp-container1 {
              background-color: #050505;
            }
            .wp-thq-our-story-elm {
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-doubleunit);
              background-color: #030b5c;
            }
            .wp-thq-list-elm {
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
            .wp-text22 {
              font-family: Inter;
            }
            .wp-text23 {
              align-self: flex-start;
              text-align: left;
              font-family: Inter;
            }
            .wp-thq-cta-elm {
              width: 90%;
              background-color: #050505;
            }
            .wp-text24 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
            }
            .wp-text25 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 1rem;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .wp-text26 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text27 {
              color: #050505;
            }
            .wp-text28 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .wp-text29 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text30 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text31 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text32 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .wp-text33 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .wp-text34 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text35 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text36 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .wp-text37 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text38 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text39 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .wp-text40 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text41 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text42 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text43 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .wp-container1 {
              background-color: #050505;
            }
            .wp-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .wp-text15 {
              top: 255px;
            }
            .wp-thq-our-story-elm {
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-doubleunit);
              background-color: #030b5c;
            }
            .wp-thq-list-elm {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-layout-space-tripleunit);
              justify-content: center;
              background-color: #050505;
            }
            .wp-thq-cta-elm {
              background-color: #050505;
            }
            .wp-text24 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
            }
            .wp-text25 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 16px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .wp-button {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .wp-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text27 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text28 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .wp-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text30 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text31 {
              color: #050505;
              font-family: Inter;
            }
            .wp-text32 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .wp-text33 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .wp-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text35 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text36 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .wp-text37 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text38 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text39 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text40 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text41 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text42 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .wp-text43 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .wp-container1 {
              background-color: #050505;
            }
            .wp-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .wp-thq-white-paper-elm {
              width: 100%;
              border-radius: var(--dl-layout-radius-imageradius);
              background-color: 050505;
            }
            .wp-image {
              width: 100%;
            }
            .wp-text15 {
              top: 155px;
              left: 0px;
              color: #c3c9c5;
              right: 0px;
              margin: var(--dl-layout-space-unit);
              position: absolute;
              font-size: 48px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .wp-thq-description-elm {
              width: 100%;
              align-self: center;
              margin-top: 0px;
              border-radius: var(--dl-layout-radius-imageradius);
              background-color: #050505;
            }
            .wp-text16 {
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
            .wp-text17 {
              width: 80%;
              margin-top: var(--dl-layout-space-unit);
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .wp-text18 {
              font-family: Inter;
              background-color: rgb(17, 17, 109);
            }
            .wp-text19 {
              width: 80%;
              margin-top: var(--dl-layout-space-unit);
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .wp-text20 {
              width: 80%;
              margin-top: var(--dl-layout-space-unit);
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .wp-thq-our-story-elm {
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
            .wp-thq-heading-elm {
              color: var(--dl-color-pimary-900);
              width: 100%;
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .wp-text21 {
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
            .wp-thq-list-elm {
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-doubleunit);
              padding-left: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .wp-text22 {
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .wp-text23 {
              font-family: Inter;
            }
            .wp-thq-cta-elm {
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
            .wp-text24 {
              fill: var(--dl-color-gray-900);
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              font-style: inherit;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .wp-text25 {
              fill: var(--dl-color-gray-900);
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .wp-button {
              fill: var(--dl-color-secondary-700);
              color: #050505;
              padding-top: var(--dl-layout-space-halfunit);
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .wp-text26 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text27 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text28 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text29 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text30 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text31 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text32 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .wp-text33 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .wp-text34 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text35 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text36 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .wp-text37 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text38 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text39 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text40 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text41 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text42 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .wp-text43 {
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

export default WP
