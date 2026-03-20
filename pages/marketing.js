import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Marketing = (props) => {
  return (
    <>
      <div className="marketing-container1">
        <Head>
          <title>
            Marketing - Volues | High-Performance Digital Product & Growth
            Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Marketing - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/marketing" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/marketing"
          />
        </Head>
        <div className="marketing-thq-digital-marketing-hero-slider-elm">
          <ThqHeaderElm
            text={
              <Fragment>
                <span className="marketing-text10">Homes</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="marketing-text11">Our Services</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="marketing-text12">About Us</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <Link href="/contact">
                  <a className="marketing-link1">
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
            rootClassName="thq-header-elmroot-class-name4"
          ></ThqHeaderElm>
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-autoplay-delay="1000"
            data-pause-autoplay-on-mouse-enter="false"
            className="marketing-thq-slider-elm swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="marketing-thq-slider-slide-elm1 swiper-slide"
              >
                <div className="marketing-thq-dim-elm1"></div>
                <span className="marketing-text15">
                  <span className="marketing-text16">
                    Digital presence is built gradually. We help organizations
                    strengthen their visibility through consistent, thoughtful
                    marketing efforts.
                  </span>
                  <br className="marketing-text17"></br>
                  <br className="marketing-text18"></br>
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="marketing-thq-slider-slide-elm2 swiper-slide"
              >
                <div className="marketing-thq-dim-elm2"></div>
                <span className="marketing-text19">
                  Every campaign should be observed, evaluated, and refined
                  through real data.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="marketing-thq-slider-slide-elm3 swiper-slide"
              >
                <div className="marketing-thq-dim-elm3"></div>
                <span className="marketing-text20">
                  Effective marketing begins with understanding how people
                  search, read, and make decisions online
                </span>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="marketing-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
              className="marketing-thq-slider-button-prev-elm swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="marketing-thq-slider-button-next-elm swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="marketing-thq-digital-marketing-elm">
          <h1 className="marketing-text21">Digital Marketing</h1>
          <span className="marketing-text22">
            Thoughtful strategies that help organizations communicate clearly
            and reach the right audience online
          </span>
          <span className="marketing-text23">
            <span>
              We study your audience, your industry, and your goals before
              shaping any marketing strategy.
            </span>
            <br className="marketing-text25"></br>
            <br className="marketing-text26"></br>
            <span>
              Digital marketing is not a single campaign but an ongoing process
              of refinement.
            </span>
          </span>
        </div>
        <div className="marketing-thq-digital-marketing-accordion-elm">
          <h1 className="marketing-text28">What We Help You Achieve</h1>
          <div data-thq="accordion" className="marketing-accordion1">
            <details
              data-thq="accordion-trigger"
              className="marketing-thq-trigger-elm1"
            >
              <summary
                data-thq="accordion-summary"
                className="marketing-thq-summary-elm1"
              >
                <span className="marketing-text29">
                  Improved visibility online
                </span>
                <div
                  data-thq="accordion-icon"
                  className="marketing-thq-icon-container-elm1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="marketing-icon1"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="marketing-container2">
                <p className="marketing-text30">
                  <span>
                    Help your organization become more discoverable where it
                    matters.
                  </span>
                  <br className="marketing-text32"></br>
                  <br></br>
                  <span>
                    Gain insight into who your customers are and how they engage
                    with your brand.
                  </span>
                  <br className="marketing-text35"></br>
                  <br></br>
                  <span>
                    Track efforts to ensure every campaign contributes real
                    value.
                  </span>
                  <br className="marketing-text38"></br>
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="marketing-accordion2">
            <details
              data-thq="accordion-trigger"
              className="marketing-thq-trigger-elm2"
            >
              <summary
                data-thq="accordion-summary"
                className="marketing-thq-summary-elm2"
              >
                <span className="marketing-text41">
                  Stronger user engagement
                </span>
                <div
                  data-thq="accordion-icon"
                  className="marketing-thq-icon-container-elm2"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="marketing-icon3"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="marketing-container3">
                <p className="marketing-text42">
                  <span>
                    Maintain a credible and coherent presence across channels.
                  </span>
                  <br className="marketing-text44"></br>
                  <br></br>
                  <span>
                    Encourage meaningful interactions between your brand and
                    audience.
                  </span>
                  <br className="marketing-text47"></br>
                  <br></br>
                  <span>
                    Use analytics to guide strategy and refine campaigns.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="marketing-accordion3">
            <details
              data-thq="accordion-trigger"
              className="marketing-thq-trigger-elm3"
            >
              <summary
                data-thq="accordion-summary"
                className="marketing-thq-summary-elm3"
              >
                <span className="marketing-text50">
                  Connecting with the right audience
                </span>
                <div
                  data-thq="accordion-icon"
                  className="marketing-thq-icon-container-elm3"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="marketing-icon5"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="marketing-container4">
                <p className="marketing-text51">
                  <span>
                    Reach people who are actively seeking your services.
                  </span>
                  <br className="marketing-text53"></br>
                  <br></br>
                  <span>
                    Present your message clearly so it’s easy to understand and
                    act on.
                  </span>
                  <br className="marketing-text56"></br>
                  <br></br>
                  <span>
                    Build marketing efforts that contribute to long-term
                    results.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="marketing-thq-form-elm1">
          <div className="marketing-thq-form-elm2">
            <h1 className="marketing-text59">
              Looking for Digital Marketing support?
            </h1>
            <span className="marketing-text60">
              Complete this form and we will get back to you in 24 hours.
            </span>
            <span className="marketing-thq-text-elm">FULL NAME</span>
            <input
              type="text"
              placeholder="Full Name"
              className="marketing-textinput1 TextSM input"
            />
            <span className="marketing-text61">EMAIL</span>
            <input
              type="text"
              placeholder="Email"
              className="marketing-textinput2 TextSM input"
            />
            <span className="marketing-text62">MESSAGE</span>
            <textarea
              cols="80"
              rows="4"
              placeholder="Type a message"
              className="marketing-textarea TextSM textarea"
            ></textarea>
            <div className="marketing-container5">
              <div className="marketing-container6">
                <button className="marketing-button button">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="marketing-thq-our-tecnologies-elm">
          <h1 className="marketing-thq-heading-elm">
            Technologies that support our work
          </h1>
          <div className="marketing-container7">
            <div className="marketing-container8">
              <img
                alt="image"
                src="/icons8-google-analytics-64-200h.webp"
                className="marketing-image1"
              />
              <img
                alt="image"
                src="/hotjar-new-2021.svg"
                className="marketing-image2"
              />
              <img
                alt="image"
                src="/semrush-200h.webp"
                className="marketing-image3"
              />
              <img
                alt="image"
                src="/ahrefs-200h.webp"
                className="marketing-image4"
              />
              <img
                alt="image"
                src="/google-ads%5B1%5D-200h.webp"
                className="marketing-image5"
              />
              <img
                alt="image"
                src="/icons8-mailchimp-48-200h.webp"
                className="marketing-image6"
              />
              <img
                alt="image"
                src="/icons8-hootsuite-48-200h.webp"
                className="marketing-image7"
              />
              <img
                alt="image"
                src="/icons8-buffer-64-200h.webp"
                className="marketing-image8"
              />
            </div>
          </div>
        </div>
        <div className="marketing-thq-client-succes-elm">
          <div className="marketing-thq-client-success-elm">
            <h1 className="marketing-text63">Exceptional Customer Service</h1>
            <span className="marketing-text64">Have Some Quick Question?</span>
            <a
              href="https://wa.me/message/DMXFMBF3HKXGE1"
              target="_blank"
              rel="noreferrer noopener"
              className="marketing-link2 button"
            >
              Whatsapp Us
            </a>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="marketing-text65">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="marketing-text66">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="marketing-text67">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="marketing-text68">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="marketing-text69">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="marketing-text70">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="marketing-text71">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="marketing-text72">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="marketing-text73">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="marketing-text74">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="marketing-text75">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="marketing-text76">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="marketing-text77">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="marketing-text78">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="marketing-text79">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="marketing-text80">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name27"
          text111111111={
            <Fragment>
              <span className="marketing-text81">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="marketing-text82">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .marketing-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .marketing-thq-digital-marketing-hero-slider-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #050505;
          }
          .marketing-text10 {
            display: inline-block;
          }
          .marketing-text11 {
            display: inline-block;
          }
          .marketing-text12 {
            display: inline-block;
          }
          .marketing-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .marketing-thq-slider-elm {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .marketing-thq-slider-slide-elm1 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            font-family: 'Inter';
            background-size: cover;
            background-image: url('https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .marketing-thq-dim-elm1 {
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
          .marketing-text15 {
            display: flex;
            z-index: 10;
            font-size: 24px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .marketing-thq-slider-slide-elm2 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1726594703316-fc9f35c7d80f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTg1MXww&ixlib=rb-4.1.0&w=1500');
          }
          .marketing-thq-dim-elm2 {
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
          .marketing-text19 {
            display: flex;
            z-index: 10;
            font-size: 32px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .marketing-thq-slider-slide-elm3 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTkwNHww&ixlib=rb-4.1.0&w=1500');
          }
          .marketing-thq-dim-elm3 {
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
          .marketing-text20 {
            color: var(--dl-color-theme-neutral-light);
            display: flex;
            z-index: 10;
            font-size: 24px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .marketing-thq-slider-pagination-elm {
            display: block;
          }
          .marketing-thq-slider-button-prev-elm {
            display: none;
          }
          .marketing-thq-slider-button-next-elm {
            display: none;
          }
          .marketing-thq-digital-marketing-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .marketing-text21 {
            color: #050505;
            font-size: 32px;
            font-family: 'Inter';
          }
          .marketing-text22 {
            color: #050505;
            font-size: 12px;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .marketing-text23 {
            color: #050505;
            text-align: left;
            font-family: 'Inter';
          }
          .marketing-thq-digital-marketing-accordion-elm {
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
          }
          .marketing-text28 {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
          }
          .marketing-accordion1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .marketing-thq-trigger-elm1 {
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
          .marketing-thq-summary-elm1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .marketing-text29 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .marketing-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .marketing-icon1 {
            color: var(--dl-color-theme-neutral-light);
          }
          .marketing-container2 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .marketing-text30 {
            color: rgb(5, 5, 5);
            text-align: left;
            font-family: 'Inter';
          }
          .marketing-accordion2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .marketing-thq-trigger-elm2 {
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
          .marketing-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .marketing-text41 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .marketing-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .marketing-icon3 {
            color: var(--dl-color-theme-neutral-light);
          }
          .marketing-container3 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .marketing-text42 {
            color: #050505;
            font-family: 'Inter';
          }
          .marketing-accordion3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .marketing-thq-trigger-elm3 {
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
          .marketing-thq-summary-elm3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .marketing-text50 {
            color: var(--dl-color-theme-neutral-light);
            font-style: inherit;
            font-family: 'Inter';
            font-weight: 400;
          }
          .marketing-thq-icon-container-elm3 {
            transition: transform 0.3s ease-in-out;
          }
          .marketing-icon5 {
            color: var(--dl-color-theme-neutral-light);
          }
          .marketing-container4 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .marketing-text51 {
            color: rgb(5, 5, 5);
            font-family: 'Inter';
          }
          .marketing-thq-form-elm1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .marketing-thq-form-elm2 {
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
          .marketing-text59 {
            color: var(--dl-color-pimary-900);
            font-size: 1.5rem;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 2rem;
          }
          .marketing-text60 {
            color: var(--dl-color-pimary-900);
            font-family: 'Inter';
          }
          .marketing-thq-text-elm {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .marketing-textinput1 {
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
          .marketing-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .marketing-text61 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .marketing-textinput2 {
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
          .marketing-textinput2:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .marketing-text62 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .marketing-textarea {
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
          .marketing-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .marketing-container5 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .marketing-container6 {
            display: flex;
            position: relative;
          }
          .marketing-button {
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
          .marketing-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .marketing-button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .marketing-thq-our-tecnologies-elm {
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
          .marketing-thq-heading-elm {
            color: rgb(5, 5, 5);
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .marketing-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .marketing-container8 {
            width: 100%;
            height: auto;
            display: grid;
            align-self: center;
            align-items: center;
            justify-items: center;
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .marketing-image1 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .marketing-image2 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .marketing-image3 {
            width: 140px;
            height: 140px;
            object-fit: cover;
          }
          .marketing-image4 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .marketing-image5 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .marketing-image6 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .marketing-image7 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .marketing-image8 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .marketing-thq-client-succes-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
          }
          .marketing-thq-client-success-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .marketing-text63 {
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
          .marketing-text64 {
            color: rgb(5, 5, 5);
            font-size: 24px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .marketing-link2 {
            width: 35%;
            height: 15%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            border-radius: var(--dl-layout-radius-buttonradius);
            padding-bottom: 0.5rem;
            text-decoration: none;
            background-color: rgb(5, 5, 5);
          }
          .marketing-text65 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text66 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text67 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .marketing-text68 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text69 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text70 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text71 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .marketing-text72 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .marketing-text73 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text74 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text75 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .marketing-text76 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text77 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text78 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text79 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text80 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text81 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .marketing-text82 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .marketing-thq-digital-marketing-hero-slider-elm {
              background-color: #050505;
            }
            .marketing-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .marketing-thq-slider-slide-elm1 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .marketing-text15 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .marketing-text16 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .marketing-text18 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .marketing-thq-slider-slide-elm2 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1726594703316-fc9f35c7d80f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTg1MXww&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-text19 {
              font-size: 32px;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .marketing-thq-slider-slide-elm3 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTkwNHww&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-text20 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .marketing-text21 {
              font-size: 32px;
              font-family: Inter;
            }
            .marketing-text28 {
              color: rgb(5, 5, 5);
              font-size: 32px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .marketing-text59 {
              color: var(--dl-color-pimary-900);
              font-size: 1.5rem;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .marketing-text60 {
              color: var(--dl-color-pimary-900);
              font-family: Inter;
            }
            .marketing-thq-client-succes-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .marketing-link2 {
              width: 35%;
              height: 15%;
              padding-bottom: 0.5rem;
            }
            .marketing-text65 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text66 {
              color: #050505;
            }
            .marketing-text67 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-text68 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text69 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text70 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text71 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .marketing-text72 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .marketing-text73 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text74 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text75 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .marketing-text76 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text77 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text78 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .marketing-text79 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text80 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text81 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text82 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .marketing-container1 {
              background-color: #050505;
            }
            .marketing-thq-digital-marketing-hero-slider-elm {
              background-color: #050505;
            }
            .marketing-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .marketing-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .marketing-thq-slider-slide-elm1 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .marketing-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .marketing-text15 {
              display: flex;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .marketing-text16 {
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .marketing-text18 {
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .marketing-thq-slider-slide-elm2 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1726594703316-fc9f35c7d80f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTg1MXww&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .marketing-text19 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .marketing-thq-slider-slide-elm3 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTkwNHww&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .marketing-text20 {
              display: flex;
              z-index: 10;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .marketing-text21 {
              font-size: 24px;
              font-family: Inter;
            }
            .marketing-text22 {
              font-size: 12px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .marketing-text23 {
              font-family: Inter;
            }
            .marketing-text26 {
              font-family: Inter;
            }
            .marketing-thq-digital-marketing-accordion-elm {
              background-color: #050505;
            }
            .marketing-text28 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .marketing-thq-trigger-elm1 {
              background-color: #050505;
            }
            .marketing-text29 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-thq-trigger-elm2 {
              background-color: #050505;
            }
            .marketing-text41 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-thq-trigger-elm3 {
              background-color: #050505;
            }
            .marketing-text50 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-thq-form-elm2 {
              width: 100%;
            }
            .marketing-button {
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
            .marketing-thq-client-succes-elm {
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .marketing-text63 {
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
            .marketing-text64 {
              color: rgb(5, 5, 5);
              font-size: 20px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .marketing-link2 {
              width: 35%;
              height: 15%;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              padding-bottom: 0.5rem;
              background-color: #050505;
            }
            .marketing-text65 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text66 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text67 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-text68 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text69 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text70 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text71 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .marketing-text72 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .marketing-text73 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text74 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text75 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .marketing-text76 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text77 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text78 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text79 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text80 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text81 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .marketing-text82 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .marketing-container1 {
              box-shadow: 5px 5px 10px 0px #050505;
              background-color: #050505;
            }
            .marketing-thq-digital-marketing-hero-slider-elm {
              width: 100%;
              height: auto;
              background-color: #050505;
            }
            .marketing-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .marketing-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .marketing-thq-slider-slide-elm1 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .marketing-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .marketing-text15 {
              color: var(--dl-color-theme-neutral-light);
              z-index: 12;
              font-size: 20px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .marketing-text16 {
              display: flex;
              z-index: 10;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .marketing-text17 {
              color: var(--dl-color-theme-neutral-light);
              text-align: center;
              font-family: Inter;
            }
            .marketing-text18 {
              z-index: 12;
              align-self: center;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .marketing-thq-slider-slide-elm2 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1726594703316-fc9f35c7d80f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTg1MXww&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .marketing-text19 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .marketing-thq-slider-slide-elm3 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgwfHxEaWdpdGFsJTIwTWFya2V0aW5nfGVufDB8fHx8MTc3MzMxNTkwNHww&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .marketing-text20 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .marketing-thq-slider-button-prev-elm {
              display: none;
            }
            .marketing-thq-slider-button-next-elm {
              display: none;
            }
            .marketing-thq-digital-marketing-elm {
              margin-bottom: 20px;
              background-color: #050505;
            }
            .marketing-text21 {
              font-size: 24px;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .marketing-text22 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .marketing-text23 {
              text-align: left;
              font-family: Inter;
            }
            .marketing-text25 {
              text-align: left;
              font-family: Inter;
            }
            .marketing-text26 {
              font-family: Inter;
            }
            .marketing-thq-digital-marketing-accordion-elm {
              align-self: center;
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
            .marketing-text28 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .marketing-thq-trigger-elm1 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .marketing-text29 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-text30 {
              font-family: Inter;
            }
            .marketing-text32 {
              color: #050505;
              text-align: left;
              font-family: Inter;
            }
            .marketing-text35 {
              color: #050505;
              text-align: left;
              font-family: Inter;
            }
            .marketing-text38 {
              color: #050505;
              text-align: left;
              font-family: Inter;
            }
            .marketing-thq-trigger-elm2 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .marketing-text41 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-icon3 {
              fill: #050505;
            }
            .marketing-text42 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .marketing-text44 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text47 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-thq-trigger-elm3 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .marketing-text50 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .marketing-text51 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .marketing-text53 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-text56 {
              color: #050505;
              font-family: Inter;
            }
            .marketing-thq-form-elm1 {
              width: 100%;
              height: auto;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
            }
            .marketing-thq-form-elm2 {
              background-color: #050505;
            }
            .marketing-text59 {
              color: var(--dl-color-pimary-900);
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .marketing-text60 {
              color: var(--dl-color-pimary-900);
              font-size: 12px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .marketing-thq-text-elm {
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
            .marketing-text61 {
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
            .marketing-text62 {
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
            .marketing-textarea {
              z-index: 10;
            }
            .marketing-container6 {
              border-color: var(--dl-color-pimary-900);
              border-width: 1px;
              border-radius: 50px;
            }
            .marketing-button {
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
            .marketing-thq-our-tecnologies-elm {
              width: 100%;
              height: auto;
              border-width: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-layout-space-unit);
              background-color: var(--dl-color-theme-neutral-light);
            }
            .marketing-thq-heading-elm {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 22px;
              align-self: center;
              align-items: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .marketing-container8 {
              height: auto;
              align-self: center;
              justify-items: center;
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(4, 1fr);
            }
            .marketing-image1 {
              width: 70px;
              height: 70px;
            }
            .marketing-image2 {
              width: 99px;
              height: 70px;
            }
            .marketing-image3 {
              width: 70px;
              height: 70px;
            }
            .marketing-image4 {
              width: 70px;
              height: 70px;
            }
            .marketing-image5 {
              width: 70px;
              height: 70px;
            }
            .marketing-image6 {
              width: 70px;
              height: 70px;
            }
            .marketing-image7 {
              width: 60px;
              height: 60px;
            }
            .marketing-image8 {
              width: 70px;
              height: 70px;
            }
            .marketing-thq-client-succes-elm {
              width: 100%;
              height: auto;
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/5467593/pexels-photo-5467593.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .marketing-thq-client-success-elm {
              width: 100%;
              height: auto;
              padding-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .marketing-text63 {
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
            .marketing-text64 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .marketing-link2 {
              width: 35%;
              height: 15%;
              display: flex;
              font-size: 14px;
              align-self: center;
              align-items: center;
              font-family: Inter;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: 0px;
              padding-bottom: 0.5rem;
              justify-content: center;
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .marketing-text65 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text66 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text67 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text68 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text69 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text70 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text71 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .marketing-text72 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .marketing-text73 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text74 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text75 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .marketing-text76 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text77 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text78 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text79 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text80 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text81 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .marketing-text82 {
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

export default Marketing
