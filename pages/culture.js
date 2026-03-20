import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Culture = (props) => {
  return (
    <>
      <div className="culture-container1">
        <Head>
          <title>
            Culture - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Culture - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/culture" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/culture"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="culture-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="culture-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="culture-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="culture-link">
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
          rootClassName="thq-header-elmroot-class-name16"
        ></ThqHeaderElm>
        <div className="culture-container2"></div>
        <div className="culture-container3">
          <h1 className="culture-thq-our-cultur-elm">Our Culture</h1>
          <span className="culture-thq-sub-text-elm">
            How we think, work, and build.
          </span>
          <span className="culture-thq-intro-elm">
            <span>
              Technology is often described through tools and frameworks, but
              the real foundation of enduring software is culture. At Volues,
              culture shapes how we approach problems, how we treat clients, and
              how we take responsibility for the systems we build.
            </span>
            <br className="culture-text16"></br>
            <span>
              We believe thoughtful work requires patience, clarity, and respect
              for complexity. Our culture is therefore built around a few
              enduring principles.
            </span>
          </span>
          <span className="culture-thq-care-elm">
            <span className="culture-text18">
              Software should be built with care.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="culture-thq-priority-elm">
            We prioritize thoughtful engineering over rushed delivery. Every
            system we design is approached as a long-term asset for the
            organizations that depend on it. Our teams focus on reliability,
            maintainability, and clarity of architecture rather than temporary
            trends.
          </span>
          <span className="culture-thq-intellectual-honesty-elm">
            Intellectual Honesty
          </span>
          <span className="culture-thq-decision-elm1">
            Good technology decisions begin with honest thinking. We value clear
            reasoning, open dialogue, and the willingness to challenge
            assumptions. Within our teams, ideas are evaluated on merit, not
            hierarchy. This culture allows us to make decisions that are
            technically sound and strategically responsible.
          </span>
          <span className="culture-thq-responsibility-elm">
            Responsibility to Clients
          </span>
          <span className="culture-thq-decision-elm2">
            Building software carries real consequences. Organizations trust us
            with systems that power operations, store sensitive information, and
            support growth. We approach that trust with seriousness,
            prioritizing security, reliability, and thoughtful implementation.
          </span>
          <span className="culture-thq-continuos-elm">Continuous Learning</span>
          <span className="culture-thq-building-elm">
            Building software carries real consequences. Organizations trust us
            with systems Continuous Learning. Technology evolves constantly, and
            so must we. Our teams invest in research, experimentation, and
            professional growth. This commitment ensures that the solutions we
            deliver remain relevant, scalable, and aligned with global best
            practices.power operations, store sensitive information, and support
            growth. We approach that trust with seriousness, prioritizing
            security, reliability, and thoughtful implementation.
          </span>
          <span className="culture-thq-calm-execution-elm">Calm Execution</span>
          <span className="culture-thq-complex-elm1">
            Complex work benefits from clarity and discipline. We maintain a
            focused and structured working environment where thoughtful planning
            replaces unnecessary urgency. This allows our teams to solve
            difficult problems with precision and care.
          </span>
          <span className="culture-thq-respect-elm">Respect for People</span>
          <span className="culture-thq-complex-elm2">
            <span>
              Strong systems are built by strong teams.We cultivate an
              environment where individuals are respected for their ideas,
              curiosity, and dedication to quality work. Collaboration at Volues
              is grounded in mutual respect and shared responsibility
            </span>
            <br></br>
          </span>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="culture-text22">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="culture-text23">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="culture-text24">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="culture-text25">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="culture-text26">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="culture-text27">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="culture-text28">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="culture-text29">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="culture-text30">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="culture-text31">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="culture-text32">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="culture-text33">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="culture-text34">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="culture-text35">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="culture-text36">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="culture-text37">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name6"
          text111111111={
            <Fragment>
              <span className="culture-text38">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="culture-text39">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .culture-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .culture-text10 {
            display: inline-block;
          }
          .culture-text11 {
            display: inline-block;
          }
          .culture-text12 {
            display: inline-block;
          }
          .culture-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .culture-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            background-color: #050505;
          }
          .culture-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-tripleunit);
            padding-left: var(--dl-layout-space-tripleunit);
            margin-bottom: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-tripleunit);
            justify-content: center;
            background-color: #050505;
          }
          .culture-thq-our-cultur-elm {
            display: flex;
            align-self: center;
            align-items: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
            justify-content: center;
          }
          .culture-thq-sub-text-elm {
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .culture-thq-intro-elm {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 0px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .culture-thq-care-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .culture-thq-priority-elm {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .culture-thq-intellectual-honesty-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .culture-thq-decision-elm1 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .culture-thq-responsibility-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .culture-thq-decision-elm2 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .culture-thq-continuos-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .culture-thq-building-elm {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .culture-thq-calm-execution-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .culture-thq-complex-elm1 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .culture-thq-respect-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .culture-thq-complex-elm2 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .culture-text22 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text23 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text24 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .culture-text25 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text27 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text28 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .culture-text29 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .culture-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text31 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text32 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .culture-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text35 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text36 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text37 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text38 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .culture-text39 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .culture-container3 {
              background-color: #050505;
            }
            .culture-thq-intro-elm {
              border-style: hidden;
              border-width: 0px;
            }
            .culture-text22 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text23 {
              color: #050505;
            }
            .culture-text24 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .culture-text25 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text26 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text27 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text28 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .culture-text29 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .culture-text30 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text31 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text32 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .culture-text33 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text34 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text35 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .culture-text36 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text37 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text38 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text39 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .culture-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .culture-container3 {
              background-color: #050505;
            }
            .culture-thq-intro-elm {
              border-style: hidden;
              border-width: 0px;
            }
            .culture-text22 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text23 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text24 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .culture-text25 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text26 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text27 {
              color: #050505;
              font-family: Inter;
            }
            .culture-text28 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .culture-text29 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .culture-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text31 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text32 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .culture-text33 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text35 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text36 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text37 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text38 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .culture-text39 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .culture-container1 {
              background-color: #050505;
            }
            .culture-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .culture-container2 {
              width: 100%;
              height: auto;
              margin-top: var(--dl-layout-space-tripleunit);
              border-style: hidden;
              border-width: 0px;
              margin-bottom: var(--dl-layout-space-tripleunit);
              background-color: #050505;
            }
            .culture-container3 {
              width: 90%;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              background-color: #050505;
            }
            .culture-thq-our-cultur-elm {
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .culture-thq-sub-text-elm {
              font-family: Inter;
              margin-bottom: 0px;
            }
            .culture-thq-intro-elm {
              width: 90%;
              margin-top: 20px;
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .culture-text16 {
              font-style: normal;
              font-weight: 700;
            }
            .culture-thq-care-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .culture-text18 {
              font-family: Inter;
            }
            .culture-thq-priority-elm {
              width: 90%;
              height: auto;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
            }
            .culture-thq-intellectual-honesty-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .culture-thq-decision-elm1 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .culture-thq-responsibility-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .culture-thq-decision-elm2 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .culture-thq-continuos-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .culture-thq-building-elm {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .culture-thq-calm-execution-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .culture-thq-complex-elm1 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .culture-thq-respect-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .culture-thq-complex-elm2 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .culture-text22 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text23 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text24 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text25 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text26 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text27 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text28 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .culture-text29 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .culture-text30 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text31 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text32 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .culture-text33 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text34 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text35 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text36 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text37 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text38 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .culture-text39 {
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

export default Culture
