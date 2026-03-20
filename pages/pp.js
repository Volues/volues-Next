import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const PP = (props) => {
  return (
    <>
      <div className="pp-container1">
        <Head>
          <title>
            PP - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="PP - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/pp" />
          <meta property="og:url" content="https://mgnt.teleporthq.site/pp" />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="pp-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="pp-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="pp-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="pp-link">
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
          rootClassName="thq-header-elmroot-class-name17"
        ></ThqHeaderElm>
        <div className="pp-container2"></div>
        <div className="pp-container3">
          <h1 className="pp-thq-our-cultur-elm">Our Process</h1>
          <span className="pp-thq-sub-text-elm">
            Thoughtful systems rarely emerge from improvisation.
          </span>
          <span className="pp-thq-intro-elm">
            <span>
              At Volues, every successful digital system begins with disciplined
              thinking. Our process is designed to reduce uncertainty, clarify
              objectives, and build technology that remains dependable long
              after launch.
            </span>
            <br className="pp-text16"></br>
            <br></br>
            <span>
              Rather than rushing to implementation, we move through deliberate
              stages that ensure each solution is technically sound and aligned
              with the long-term needs of the organization it serves.
            </span>
          </span>
          <span className="pp-thq-care-elm">Understanding the Problem</span>
          <span className="pp-thq-priority-elm">
            <span>
              Every meaningful system begins with understanding. Before writing
              code or designing interfaces, we study the operational context of
              the organization: its goals, workflows, constraints, and the
              problems the technology must solve. This stage allows us to define
              the true scope of the solution and avoid building systems that
              address symptoms rather than causes.
            </span>
            <br></br>
          </span>
          <span className="pp-thq-intellectual-honesty-elm">
            <span>Strategic Planning</span>
            <br></br>
          </span>
          <span className="pp-thq-decision-elm">
            Good technology decisions begin with honest thinking. We value clear
            reasoning, open dialogue, and the willingness to challenge
            assumptions. Within our teams, ideas are evaluated on merit, not
            hierarchy. This culture allows us to make decisions that are
            technically sound and strategically responsible.
          </span>
          <span className="pp-thq-responsibility-elm">
            Design &amp; System Architecture
          </span>
          <span className="pp-thq-building-elm1">
            <span>
              Technology must be both usable and resilient. Our design process
              balances user experience with engineering practicality. Interfaces
              are structured to feel intuitive, while underlying architectures
              are built to support scalability, security, and maintainability
              over time.
            </span>
            <br></br>
          </span>
          <span className="pp-thq-continuos-elm">
            Engineering &amp; Development
          </span>
          <span className="pp-thq-building-elm2">
            This is where ideas become reliable systems. Our engineers implement
            the architecture through disciplined coding practices, modular
            design, and continuous testing. We prioritize code quality and
            long-term maintainability, ensuring that the system can evolve
            alongside the organization.
          </span>
          <span className="pp-thq-calm-execution-elm">
            Testing &amp; Validation
          </span>
          <span className="pp-thq-complex-elm">
            <span>
              Reliability is not assumed, it is verified. Before deployment,
              each system undergoes thorough testing to evaluate performance,
              security, and operational stability. This stage ensures that the
              technology performs as intended under real-world conditions.
            </span>
            <br></br>
          </span>
          <span className="pp-thq-respect-elm1">
            Deployment &amp; Continuous Support
          </span>
          <span className="pp-thq-support-elm1">
            A successful launch is the beginning, not the end. Once the system
            is deployed, we provide ongoing monitoring, optimization, and
            support. As organizations grow and requirements evolve, we help
            ensure that their digital infrastructure remains dependable and
            adaptable.
          </span>
          <span className="pp-thq-respect-elm2">
            Built for Long-Term Reliability
          </span>
          <span className="pp-thq-support-elm2">
            <span>
              Our process reflects a simple belief: meaningful technology is not
              created through speed alone, but through thoughtful planning,
              disciplined engineering, and careful stewardship of the systems
              organizations depend on.
            </span>
            <br></br>
          </span>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="pp-text29">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="pp-text30">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="pp-text31">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="pp-text32">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="pp-text33">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="pp-text34">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="pp-text35">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="pp-text36">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="pp-text37">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="pp-text38">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="pp-text39">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="pp-text40">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="pp-text41">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="pp-text42">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="pp-text43">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="pp-text44">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name24"
          text111111111={
            <Fragment>
              <span className="pp-text45">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="pp-text46">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .pp-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .pp-text10 {
            display: inline-block;
          }
          .pp-text11 {
            display: inline-block;
          }
          .pp-text12 {
            display: inline-block;
          }
          .pp-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .pp-container2 {
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
          .pp-container3 {
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
          .pp-thq-our-cultur-elm {
            display: flex;
            align-self: center;
            align-items: center;
            font-family: 'Inter';
            margin-bottom: 0px;
            justify-content: center;
          }
          .pp-thq-sub-text-elm {
            font-size: 12px;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .pp-thq-intro-elm {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-theme-accent1);
            border-style: hidden;
            border-width: 0px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-thq-care-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .pp-thq-priority-elm {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: #c52741;
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-thq-intellectual-honesty-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .pp-thq-decision-elm {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: #c52741;
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-thq-responsibility-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .pp-thq-building-elm1 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: #c52741;
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-thq-continuos-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .pp-thq-building-elm2 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: #c52741;
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-thq-calm-execution-elm {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .pp-thq-complex-elm {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: #c52741;
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-thq-respect-elm1 {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .pp-thq-support-elm1 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: #29ce50;
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-thq-respect-elm2 {
            font-family: 'Inter';
            margin-bottom: 0px;
          }
          .pp-thq-support-elm2 {
            display: block;
            align-self: center;
            text-align: left;
            font-family: 'Inter';
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-pimary-500);
            border-style: groove;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
          }
          .pp-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text31 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .pp-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text35 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .pp-text36 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .pp-text37 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text38 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text39 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .pp-text40 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text41 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text42 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text43 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text44 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text45 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .pp-text46 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .pp-container1 {
              background-color: #050505;
            }
            .pp-container2 {
              border-style: hidden;
              border-width: 0px;
            }
            .pp-container3 {
              background-color: #050505;
            }
            .pp-thq-sub-text-elm {
              font-size: 12px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .pp-thq-intro-elm {
              border-color: var(--dl-color-theme-accent1);
              border-style: hidden;
              border-width: 0px;
            }
            .pp-text29 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text30 {
              color: #050505;
            }
            .pp-text31 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .pp-text32 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text33 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text34 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text35 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .pp-text36 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .pp-text37 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text38 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text39 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .pp-text40 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text41 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text42 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .pp-text43 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text44 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text45 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text46 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .pp-container1 {
              background-color: #050505;
            }
            .pp-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .pp-container2 {
              border-style: hidden;
              border-width: 0px;
            }
            .pp-container3 {
              background-color: #050505;
            }
            .pp-thq-sub-text-elm {
              font-size: 12px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .pp-thq-intro-elm {
              border-color: var(--dl-color-theme-accent1);
              border-style: hidden;
              border-width: 0px;
            }
            .pp-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text31 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .pp-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text33 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text34 {
              color: #050505;
              font-family: Inter;
            }
            .pp-text35 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .pp-text36 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .pp-text37 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text38 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text39 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .pp-text40 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text41 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text42 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text43 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text44 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text45 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .pp-text46 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .pp-container1 {
              background-color: #050505;
            }
            .pp-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .pp-container2 {
              width: 100%;
              height: auto;
              margin-top: var(--dl-layout-space-tripleunit);
              border-style: hidden;
              border-width: 0px;
              margin-bottom: var(--dl-layout-space-tripleunit);
            }
            .pp-container3 {
              width: 90%;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              background-color: #050505;
            }
            .pp-thq-our-cultur-elm {
              display: flex;
              align-self: center;
              align-items: center;
              font-family: Inter;
              margin-bottom: 0px;
              justify-content: center;
            }
            .pp-thq-sub-text-elm {
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .pp-thq-intro-elm {
              width: 90%;
              margin-top: 20px;
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-theme-accent1);
              border-style: hidden;
              border-width: 0px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .pp-text16 {
              text-align: left;
              font-family: Inter;
            }
            .pp-thq-care-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .pp-thq-priority-elm {
              width: 90%;
              height: auto;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
            }
            .pp-thq-intellectual-honesty-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .pp-thq-decision-elm {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: #c52741;
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .pp-thq-responsibility-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .pp-thq-building-elm1 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: #c52741;
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .pp-thq-continuos-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .pp-thq-building-elm2 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: #c52741;
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .pp-thq-calm-execution-elm {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .pp-thq-complex-elm {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: #c52741;
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .pp-thq-respect-elm1 {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .pp-thq-support-elm1 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: #29ce50;
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .pp-thq-respect-elm2 {
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: 0px;
            }
            .pp-thq-support-elm2 {
              width: 90%;
              height: auto;
              display: block;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: left;
              font-family: Inter;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-pimary-500);
              border-style: groove;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .pp-text29 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text30 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text31 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text32 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text33 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text34 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text35 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .pp-text36 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .pp-text37 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text38 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text39 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .pp-text40 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text41 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text42 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text43 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text44 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text45 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .pp-text46 {
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

export default PP
