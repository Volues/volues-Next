import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Consulting = (props) => {
  return (
    <>
      <div className="consulting-container1">
        <Head>
          <title>
            Consulting - Volues | High-Performance Digital Product & Growth
            Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Consulting - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link
            rel="canonical"
            href="https://mgnt.teleporthq.site/consulting"
          />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/consulting"
          />
        </Head>
        <div className="consulting-thq-consulting-elm">
          <ThqHeaderElm
            text={
              <Fragment>
                <span className="consulting-text10">Homes</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="consulting-text11">Our Services</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="consulting-text12">About Us</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <Link href="/contact">
                  <a className="consulting-link1">
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
            rootClassName="thq-header-elmroot-class-name7"
          ></ThqHeaderElm>
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-autoplay-delay="1000"
            data-pause-autoplay-on-mouse-enter="false"
            className="consulting-thq-slider-elm swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="consulting-thq-slider-slide-elm1 swiper-slide"
              >
                <div className="consulting-thq-dim-elm1"></div>
                <span className="consulting-text15">
                  We provide understanding that informs every technology
                  decision.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="consulting-thq-slider-slide-elm2 swiper-slide"
              >
                <div className="consulting-thq-dim-elm2"></div>
                <span className="consulting-text16">
                  Build systems and strategies that adapt as needs evolve.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="consulting-thq-slider-slide-elm3 swiper-slide"
              >
                <div className="consulting-thq-dim-elm3"></div>
                <span className="consulting-text17">
                  <span>
                    Practical steps that can be implemented with confidence and
                    measurable results.
                  </span>
                  <br className="consulting-text19"></br>
                  <br className="consulting-text20"></br>
                </span>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="consulting-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="consulting-thq-slider-button-prev-elm swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="consulting-thq-slider-button-next-elm swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="consulting-thq-digital-consulting-elm">
          <h1 className="consulting-text21">Digital Consulting</h1>
          <span className="consulting-text22">
            Build Mobile Applications That People Actually Use
          </span>
          <span className="consulting-text23">
            <span>
              Digital Consulting is about more than technology, it’s about
              making smart decisions that support business growth, efficiency,
              and resilience. Our team works closely with leaders to understand
              their goals, assess current systems, and create roadmaps that
              balance practical implementation with long-term strategy.
            </span>
            <br className="consulting-text25"></br>
            <br className="consulting-text26"></br>
            <span>
              Whether optimizing existing processes, integrating new technology,
              or planning digital transformation, our focus is on delivering
              clarity, reliability, and measurable value.
            </span>
          </span>
        </div>
        <div className="consulting-thq-consulting-accordion-elm">
          <h1 className="consulting-text28">What We Help You Achieve</h1>
          <div data-thq="accordion" className="consulting-accordion1">
            <details
              data-thq="accordion-trigger"
              className="consulting-thq-trigger-elm1"
            >
              <summary
                data-thq="accordion-summary"
                className="consulting-thq-summary-elm1"
              >
                <span className="consulting-text29">
                  Informed decision-making
                </span>
                <div
                  data-thq="accordion-icon"
                  className="consulting-thq-icon-container-elm1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="consulting-icon1"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="consulting-container2">
                <p className="consulting-text30">
                  Choose the right digital initiatives based on careful analysis
                  and insight. Understand your existing digital environment and
                  its potential.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="consulting-accordion2">
            <details
              data-thq="accordion-trigger"
              className="consulting-thq-trigger-elm2"
            >
              <summary
                data-thq="accordion-summary"
                className="consulting-thq-summary-elm2"
              >
                <span className="consulting-text31">
                  <span className="consulting-text32">
                    Streamlined operations
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div
                  data-thq="accordion-icon"
                  className="consulting-thq-icon-container-elm2"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="consulting-icon3"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="consulting-container3">
                <p className="consulting-text34">
                  Improve internal processes through practical technology
                  guidance. Get guidance on tools, platforms, and integrations
                  that deliver real value.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="consulting-accordion3">
            <details
              data-thq="accordion-trigger"
              className="consulting-thq-trigger-elm3"
            >
              <summary
                data-thq="accordion-summary"
                className="consulting-thq-summary-elm3"
              >
                <span className="consulting-text35">
                  Sustainable growth planning
                </span>
                <div
                  data-thq="accordion-icon"
                  className="consulting-thq-icon-container-elm3"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="consulting-icon5"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="consulting-container4">
                <p className="consulting-text36">
                  {' '}
                  Build systems and strategies that support future expansion.
                  Clear plans for implementing technology effectively. Reduce
                  risk and uncertainty when adopting new solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="consulting-thq-form-elm1">
          <div className="consulting-thq-form-elm2">
            <h1 className="consulting-text37">
              Looking for Digital Consulting?
            </h1>
            <span className="consulting-text38">
              Complete this form and we will get back to you in 24 hours.
            </span>
            <span className="consulting-thq-text-elm">FULL NAME</span>
            <input
              type="text"
              placeholder="Full Name"
              className="consulting-textinput1 TextSM input"
            />
            <span className="consulting-text39">EMAIL</span>
            <input
              type="text"
              placeholder="Email"
              className="consulting-textinput2 TextSM input"
            />
            <span className="consulting-text40">MESSAGE</span>
            <textarea
              cols="80"
              rows="4"
              placeholder="Type a message"
              className="consulting-textarea TextSM textarea"
            ></textarea>
            <div className="consulting-container5">
              <div className="consulting-container6">
                <button className="consulting-button button">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="consulting-thq-our-tecnologies-elm">
          <h1 className="consulting-thq-heading-elm">Our Technologies</h1>
          <div className="consulting-container7">
            <div className="consulting-container8">
              <img
                alt="image"
                src="/icons8-tableau-software-48-200h.webp"
                className="consulting-image1"
              />
              <img
                alt="image"
                src="/icons8-power-bi-50-200h.webp"
                className="consulting-image2"
              />
              <img
                alt="image"
                src="/icons8-slack-40-200h.webp"
                className="consulting-image3"
              />
              <img
                alt="image"
                src="/icons8-google-looker-48-200h.webp"
                className="consulting-image4"
              />
              <img
                alt="image"
                src="/icons8-trello-48-200h.webp"
                className="consulting-image5"
              />
              <img
                alt="image"
                src="/icons8-hubspot-48-200h.webp"
                className="consulting-image6"
              />
              <img
                alt="image"
                src="/icons8-azure-storage-48-200h.webp"
                className="consulting-image7"
              />
              <img
                alt="image"
                src="/icon-200h.webp"
                className="consulting-image8"
              />
            </div>
          </div>
        </div>
        <div className="consulting-thq-client-succes-elm">
          <div className="consulting-thq-client-success-elm">
            <h1 className="consulting-text41">Exceptional Customer Service</h1>
            <span className="consulting-text42">Have Some Quick Question?</span>
            <a
              href="https://wa.me/message/DMXFMBF3HKXGE1"
              target="_blank"
              rel="noreferrer noopener"
              className="consulting-link2 button"
            >
              Whatssp Us
            </a>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="consulting-text43">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="consulting-text44">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="consulting-text45">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="consulting-text46">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="consulting-text47">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="consulting-text48">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="consulting-text49">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="consulting-text50">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="consulting-text51">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="consulting-text52">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="consulting-text53">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="consulting-text54">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="consulting-text55">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="consulting-text56">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="consulting-text57">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="consulting-text58">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name28"
          text111111111={
            <Fragment>
              <span className="consulting-text59">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="consulting-text60">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .consulting-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .consulting-thq-consulting-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #050505;
          }
          .consulting-text10 {
            display: inline-block;
          }
          .consulting-text11 {
            display: inline-block;
          }
          .consulting-text12 {
            display: inline-block;
          }
          .consulting-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .consulting-thq-slider-elm {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .consulting-thq-slider-slide-elm1 {
            width: 100%;
            height: 100vh;
            display: flex;
            font-family: 'Inter';
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1582004531597-6407189db7dd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fERpZ2l0YWwlMjBDb25zdWx0aW5nfGVufDB8fHx8MTc3MzMxOTMwOHww&ixlib=rb-4.1.0&w=1500');
          }
          .consulting-thq-dim-elm1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.5);
          }
          .consulting-text15 {
            display: flex;
            z-index: 10;
            font-size: 32px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .consulting-thq-slider-slide-elm2 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1657727534676-cac1bb160d64?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
          }
          .consulting-thq-dim-elm2 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.5);
          }
          .consulting-text16 {
            display: flex;
            z-index: 10;
            font-size: 32px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .consulting-thq-slider-slide-elm3 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1545112969-bdd91ef544c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
          }
          .consulting-thq-dim-elm3 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.5);
          }
          .consulting-text17 {
            display: flex;
            z-index: 10;
            font-size: 32px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unitandhalf);
            padding-right: var(--dl-layout-space-unitandhalf);
            justify-content: center;
          }
          .consulting-thq-slider-pagination-elm {
            display: block;
          }
          .consulting-thq-slider-button-prev-elm {
            display: none;
          }
          .consulting-thq-slider-button-next-elm {
            display: none;
          }
          .consulting-thq-digital-consulting-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: #050505;
          }
          .consulting-text21 {
            font-size: 32px;
            font-family: 'Inter';
          }
          .consulting-text22 {
            font-size: 12px;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .consulting-text23 {
            text-align: left;
            font-family: 'Inter';
          }
          .consulting-thq-consulting-accordion-elm {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 0px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #050505;
          }
          .consulting-text28 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 32px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
          }
          .consulting-accordion1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .consulting-thq-trigger-elm1 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-gray-700);
            border-style: groove;
            border-width: 0px;
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #050505;
          }
          .consulting-thq-summary-elm1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .consulting-text29 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .consulting-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .consulting-icon1 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
          }
          .consulting-container2 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .consulting-text30 {
            color: rgb(5, 5, 5);
            text-align: left;
            font-family: 'Inter';
          }
          .consulting-accordion2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .consulting-thq-trigger-elm2 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-gray-700);
            border-style: groove;
            border-width: 0px;
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #050505;
          }
          .consulting-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .consulting-text31 {
            color: rgb(5, 5, 5);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .consulting-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .consulting-icon3 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
          }
          .consulting-container3 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .consulting-text34 {
            color: #050505;
            font-family: 'Inter';
          }
          .consulting-accordion3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .consulting-thq-trigger-elm3 {
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: var(--dl-color-gray-700);
            border-style: groove;
            border-width: 0px;
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #050505;
          }
          .consulting-thq-summary-elm3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .consulting-text35 {
            color: var(--dl-color-theme-neutral-light);
            font-style: inherit;
            font-family: 'Inter';
            font-weight: 400;
          }
          .consulting-thq-icon-container-elm3 {
            transition: transform 0.3s ease-in-out;
          }
          .consulting-icon5 {
            fill: var(--dl-color-theme-neutral-light);
            color: var(--dl-color-theme-neutral-light);
          }
          .consulting-container4 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .consulting-text36 {
            color: rgb(5, 5, 5);
            font-family: 'Inter';
          }
          .consulting-thq-form-elm1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .consulting-thq-form-elm2 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            padding: var(--dl-layout-space-twoandhalf);
            max-width: 700px;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius50);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .consulting-text37 {
            color: var(--dl-color-pimary-900);
            font-size: 1.5rem;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 2rem;
          }
          .consulting-text38 {
            color: var(--dl-color-pimary-900);
            font-family: 'Inter';
          }
          .consulting-thq-text-elm {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .consulting-textinput1 {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-layout-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .consulting-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .consulting-text39 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .consulting-textinput2 {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-layout-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .consulting-textinput2:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .consulting-text40 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .consulting-textarea {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-layout-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            pointer-events: auto;
          }
          .consulting-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .consulting-container5 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .consulting-container6 {
            display: flex;
            position: relative;
          }
          .consulting-button {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
              rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
            transition: 0.3s;
            font-family: 'Inter';
            line-height: 1;
            padding-top: var(--dl-layout-space-halfunit);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
            text-transform: uppercase;
            background-color: #050505;
          }
          .consulting-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .consulting-button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .consulting-thq-our-tecnologies-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 0px;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-pimary-700);
          }
          .consulting-thq-heading-elm {
            color: rgb(5, 5, 5);
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .consulting-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .consulting-container8 {
            width: 100%;
            height: auto;
            display: grid;
            align-self: center;
            align-items: center;
            justify-items: center;
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .consulting-image1 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .consulting-image2 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .consulting-image3 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .consulting-image4 {
            width: 140px;
            height: 140px;
            object-fit: cover;
          }
          .consulting-image5 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .consulting-image6 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .consulting-image7 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .consulting-image8 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .consulting-thq-client-succes-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1606588984221-7ab3e2bb038a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
          }
          .consulting-thq-client-success-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .consulting-text41 {
            color: rgb(5, 5, 5);
            display: flex;
            font-size: 32px;
            align-self: center;
            margin-top: 450px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            align-content: middle;
            justify-content: center;
          }
          .consulting-text42 {
            color: rgb(5, 5, 5);
            font-size: 24px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .consulting-link2 {
            width: 40%;
            height: 15%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            border-radius: var(--dl-layout-radius-buttonradius);
            text-decoration: none;
            background-color: rgb(5, 5, 5);
          }
          .consulting-text43 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text44 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text45 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .consulting-text46 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text47 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text48 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text49 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .consulting-text50 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .consulting-text51 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text52 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text53 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .consulting-text54 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text55 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text56 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text57 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text58 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text59 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .consulting-text60 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .consulting-container1 {
              background-color: #050505;
            }
            .consulting-thq-consulting-elm {
              background-color: #050505;
            }
            .consulting-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .consulting-thq-slider-slide-elm1 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1582004531597-6407189db7dd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fERpZ2l0YWwlMjBDb25zdWx0aW5nfGVufDB8fHx8MTc3MzMxOTMwOHww&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-text15 {
              display: flex;
              z-index: 10;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .consulting-thq-slider-slide-elm2 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1657727534676-cac1bb160d64?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-text16 {
              display: flex;
              z-index: 10;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .consulting-thq-slider-slide-elm3 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1545112969-bdd91ef544c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-text17 {
              font-size: 32px;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .consulting-text20 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .consulting-text21 {
              font-size: 32px;
              font-family: Inter;
            }
            .consulting-text22 {
              font-size: 12px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .consulting-text23 {
              font-family: Inter;
            }
            .consulting-thq-consulting-accordion-elm {
              border-color: #050505;
              background-color: #050505;
            }
            .consulting-text28 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 32px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .consulting-thq-trigger-elm1 {
              background-color: #050505;
            }
            .consulting-text29 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-icon1 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-thq-trigger-elm2 {
              background-color: #050505;
            }
            .consulting-text31 {
              font-family: Inter;
            }
            .consulting-text32 {
              color: var(--dl-color-theme-neutral-light);
            }
            .consulting-icon3 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-thq-trigger-elm3 {
              background-color: #050505;
            }
            .consulting-text35 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-icon5 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-text37 {
              color: var(--dl-color-pimary-900);
              font-size: 1.5rem;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .consulting-text38 {
              color: var(--dl-color-pimary-900);
              font-family: Inter;
            }
            .consulting-thq-our-tecnologies-elm {
              background-color: var(--dl-color-pimary-700);
            }
            .consulting-thq-heading-elm {
              color: rgb(5, 5, 5);
              font-size: 32px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .consulting-thq-client-succes-elm {
              margin-bottom: 0px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1606588984221-7ab3e2bb038a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .consulting-link2 {
              width: 40%;
              height: 15%;
            }
            .consulting-text43 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text44 {
              color: #050505;
            }
            .consulting-text45 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-text46 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text47 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text48 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text49 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .consulting-text50 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .consulting-text51 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text52 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text53 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .consulting-text54 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text55 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text56 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .consulting-text57 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text58 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text59 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text60 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .consulting-container1 {
              background-color: #050505;
            }
            .consulting-thq-consulting-elm {
              background-color: #050505;
            }
            .consulting-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .consulting-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .consulting-thq-slider-slide-elm1 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1582004531597-6407189db7dd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fERpZ2l0YWwlMjBDb25zdWx0aW5nfGVufDB8fHx8MTc3MzMxOTMwOHww&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .consulting-text15 {
              display: flex;
              z-index: 10;
              font-size: 26px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .consulting-thq-slider-slide-elm2 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1657727534676-cac1bb160d64?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .consulting-text16 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .consulting-thq-slider-slide-elm3 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1545112969-bdd91ef544c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .consulting-text17 {
              display: flex;
              font-size: 26px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
              justify-content: center;
            }
            .consulting-text20 {
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .consulting-text21 {
              font-size: 24px;
              font-family: Inter;
            }
            .consulting-text22 {
              font-size: 12px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .consulting-text23 {
              font-family: Inter;
            }
            .consulting-text28 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .consulting-thq-trigger-elm1 {
              background-color: #050505;
            }
            .consulting-text29 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-icon1 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-thq-trigger-elm2 {
              background-color: #050505;
            }
            .consulting-text31 {
              font-family: Inter;
            }
            .consulting-text32 {
              color: var(--dl-color-theme-neutral-light);
            }
            .consulting-icon3 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-thq-trigger-elm3 {
              background-color: #050505;
            }
            .consulting-text35 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-icon5 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-thq-form-elm2 {
              width: 100%;
            }
            .consulting-button {
              fill: #050505;
              color: var(--dl-color-gray-white);
              box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
                rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
              transition: 0.3s;
              font-family: Inter;
              line-height: 1;
              padding-top: var(--dl-layout-space-halfunit);
              border-color: var(--dl-color-secondary-500);
              border-width: 1px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-buttonradius);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-halfunit);
              text-transform: uppercase;
              background-color: #050505;
            }
            .consulting-thq-our-tecnologies-elm {
              background-color: var(--dl-color-pimary-700);
            }
            .consulting-thq-heading-elm {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .consulting-thq-client-succes-elm {
              align-self: center;
              align-items: center;
              margin-bottom: 0px;
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.unsplash.com/photo-1606588984221-7ab3e2bb038a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .consulting-text41 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 24px;
              align-self: center;
              margin-top: 450px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              align-content: middle;
              justify-content: center;
            }
            .consulting-text42 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .consulting-link2 {
              width: 40%;
              height: 15%;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              background-color: #050505;
            }
            .consulting-text43 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text44 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text45 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-text46 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text47 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text48 {
              color: #050505;
              font-family: Inter;
            }
            .consulting-text49 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .consulting-text50 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .consulting-text51 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text52 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text53 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .consulting-text54 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text55 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text56 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text57 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text58 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text59 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .consulting-text60 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .consulting-container1 {
              background-color: #050505;
            }
            .consulting-thq-consulting-elm {
              width: 100%;
              height: auto;
            }
            .consulting-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .consulting-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .consulting-thq-slider-slide-elm1 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1582004531597-6407189db7dd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fERpZ2l0YWwlMjBDb25zdWx0aW5nfGVufDB8fHx8MTc3MzMxOTMwOHww&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .consulting-text15 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 25px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .consulting-thq-slider-slide-elm2 {
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1657727534676-cac1bb160d64?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .consulting-text16 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 25px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .consulting-thq-slider-slide-elm3 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1545112969-bdd91ef544c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .consulting-text17 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 25px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
              justify-content: center;
            }
            .consulting-text19 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 25px;
              text-align: center;
              font-family: Inter;
            }
            .consulting-text20 {
              display: flex;
              z-index: 10;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
              justify-content: center;
            }
            .consulting-thq-slider-button-prev-elm {
              display: none;
            }
            .consulting-thq-slider-button-next-elm {
              display: none;
            }
            .consulting-thq-digital-consulting-elm {
              margin-bottom: 20px;
              background-color: #050505;
            }
            .consulting-text21 {
              font-size: 24px;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .consulting-text22 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .consulting-text23 {
              text-align: left;
              font-family: Inter;
            }
            .consulting-text25 {
              text-align: left;
              font-family: Inter;
            }
            .consulting-text26 {
              font-family: Inter;
            }
            .consulting-thq-consulting-accordion-elm {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #050505;
              margin-top: 0px;
              align-items: center;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              border-radius: 0px;
              margin-bottom: var(--dl-layout-space-tripleunit);
              justify-content: center;
              background-color: #050505;
            }
            .consulting-text28 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .consulting-thq-trigger-elm1 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .consulting-text29 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-icon1 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-text30 {
              color: rgb(5, 5, 5);
              text-align: left;
              font-family: Inter;
            }
            .consulting-thq-trigger-elm2 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .consulting-text31 {
              color: rgb(5, 5, 5);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-icon3 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-text34 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .consulting-thq-trigger-elm3 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .consulting-text35 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .consulting-icon5 {
              fill: var(--dl-color-theme-neutral-light);
            }
            .consulting-text36 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .consulting-thq-form-elm1 {
              width: 100%;
              height: auto;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
            }
            .consulting-thq-form-elm2 {
              background-color: #050505;
            }
            .consulting-text37 {
              color: var(--dl-color-pimary-900);
              font-size: 20px;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .consulting-text38 {
              color: var(--dl-color-pimary-900);
              font-size: 14px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .consulting-thq-text-elm {
              color: var(--dl-color-pimary-900);
              font-size: 0.75rem;
              margin-top: var(--dl-layout-space-halfunit);
              font-family: Inter;
              font-weight: 500;
              margin-left: 0.25rem;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .consulting-text39 {
              color: var(--dl-color-pimary-900);
              font-size: 0.75rem;
              margin-top: var(--dl-layout-space-halfunit);
              font-family: Inter;
              font-weight: 500;
              margin-left: 0.25rem;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .consulting-text40 {
              color: var(--dl-color-pimary-900);
              font-size: 0.75rem;
              margin-top: var(--dl-layout-space-halfunit);
              font-family: Inter;
              font-weight: 500;
              margin-left: 0.25rem;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .consulting-textarea {
              z-index: 10;
            }
            .consulting-container6 {
              border-color: var(--dl-color-pimary-900);
              border-width: 1px;
              border-radius: 50px;
            }
            .consulting-button {
              color: var(--dl-color-gray-white);
              font-size: 0.75rem;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
                rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
              transition: 0.3s;
              font-weight: 500;
              line-height: 1;
              padding-top: var(--dl-layout-space-halfunit);
              border-width: 1px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-buttonradius);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-halfunit);
              text-transform: uppercase;
              backdrop-filter: blur(5px);
              text-decoration: none;
              background-color: #050505;
            }
            .consulting-thq-our-tecnologies-elm {
              width: 100%;
              height: auto;
              border-width: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-layout-space-unit);
              background-color: var(--dl-color-pimary-700);
            }
            .consulting-thq-heading-elm {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 24px;
              align-self: center;
              align-items: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .consulting-container8 {
              height: auto;
              align-self: center;
              justify-items: center;
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(4, 1fr);
            }
            .consulting-image1 {
              width: 70px;
              height: 70px;
            }
            .consulting-image2 {
              width: 70px;
              height: 70px;
            }
            .consulting-image3 {
              width: 70px;
              height: 70px;
            }
            .consulting-image4 {
              width: 70px;
              height: 70px;
            }
            .consulting-image5 {
              width: 70px;
              height: 70px;
            }
            .consulting-image6 {
              width: 70px;
              height: 70px;
            }
            .consulting-image7 {
              width: 70px;
              height: 70px;
            }
            .consulting-image8 {
              width: 60px;
              height: 60px;
            }
            .consulting-thq-client-succes-elm {
              width: 100%;
              height: auto;
              margin-bottom: 0px;
            }
            .consulting-thq-client-success-elm {
              width: 100%;
              height: auto;
              padding-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1606588984221-7ab3e2bb038a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxEaWdpdGFsJTIwQ29uc3VsdGluZ3xlbnwwfHx8fDE3NzMzMTkzNTl8MA&ixlib=rb-4.1.0&w=1500');
            }
            .consulting-text41 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 20px;
              align-self: center;
              margin-top: 450px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              align-content: middle;
              flex-direction: column;
              justify-content: center;
            }
            .consulting-text42 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .consulting-link2 {
              width: 40%;
              height: 15%;
              display: flex;
              font-size: 14px;
              align-self: center;
              align-items: center;
              font-family: Inter;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: 0px;
              justify-content: center;
              background-color: rgb(5, 5, 5);
            }
            .consulting-text43 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text44 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text45 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text46 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text47 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text48 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text49 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .consulting-text50 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .consulting-text51 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text52 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text53 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .consulting-text54 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text55 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text56 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text57 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text58 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text59 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .consulting-text60 {
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

export default Consulting
