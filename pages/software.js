import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Software = (props) => {
  return (
    <>
      <div className="software-container1">
        <Head>
          <title>
            Software - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Software - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/software" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/software"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="software-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="software-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="software-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="software-link1">
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
          rootClassName="thq-header-elmroot-class-name11"
        ></ThqHeaderElm>
        <div className="software-thq-software-hero-slider-elm">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-autoplay-delay="1000"
            data-pause-autoplay-on-mouse-enter="false"
            className="software-thq-slider-elm swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="software-thq-slider-slide-elm1 swiper-slide"
              >
                <div className="software-thq-dim-elm1"></div>
                <span className="software-text15">
                  Software designed around the unique processes and requirements
                  of your organization.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="software-thq-slider-slide-elm2 swiper-slide"
              >
                <div className="software-thq-dim-elm2"></div>
                <span className="software-text16">
                  Digital systems that organize tasks, approvals, and internal
                  operations in a clear and structured way.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="software-thq-slider-slide-elm3 swiper-slide"
              >
                <div className="software-thq-dim-elm3"></div>
                <span className="software-text17">
                  Connecting platforms, databases, and tools so information
                  flows reliably across the organization.
                </span>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="software-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
              className="software-thq-slider-button-prev-elm swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="software-thq-slider-button-next-elm swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="software-thq-website-elm">
          <h1 className="software-text18">Enterprise Software</h1>
          <span className="software-text19">
            We build softwares designed to remain reliable
          </span>
          <span className="software-text20">
            Enterprise software is built to support the complex processes,
            information, and workflows that sustain modern organizations.
          </span>
        </div>
        <div className="software-thq-web-accordion-elm">
          <h1 className="software-text21">What We Help You Achieve</h1>
          <div data-thq="accordion" className="software-accordion1">
            <details
              data-thq="accordion-trigger"
              className="software-thq-trigger-elm1"
            >
              <summary
                data-thq="accordion-summary"
                className="software-thq-summary-elm1"
              >
                <span className="software-text22">
                  Structured operational processes
                </span>
                <div
                  data-thq="accordion-icon"
                  className="software-thq-icon-container-elm1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="software-icon1"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="software-container2">
                <p className="software-text23">
                  Digital systems that organize tasks, approvals, and workflows
                  across team through Software designed to remain stable and
                  adaptable as operations expand..
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="software-accordion2">
            <details
              data-thq="accordion-trigger"
              className="software-thq-trigger-elm2"
            >
              <summary
                data-thq="accordion-summary"
                className="software-thq-summary-elm2"
              >
                <span className="software-text24">
                  Reliable access to information
                </span>
                <div
                  data-thq="accordion-icon"
                  className="software-thq-icon-container-elm2"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="software-icon3"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="software-container3">
                <p className="software-text25">
                  Centralized platforms that allow teams to retrieve and manage
                  critical data efficiently and improve workflow, Reducing
                  manual effort through well-designed digital processes
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="software-accordion3">
            <details
              data-thq="accordion-trigger"
              className="software-thq-trigger-elm3"
            >
              <summary
                data-thq="accordion-summary"
                className="software-thq-summary-elm3"
              >
                <span className="software-text26">
                  Improved coordination across teams
                </span>
                <div
                  data-thq="accordion-icon"
                  className="software-thq-icon-container-elm3"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="software-icon5"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="software-container4">
                <p className="software-text27">
                  <span>
                    Enterprise systems that connect departments and streamline
                    internal collaboration by allowing Clear management of
                    business data
                  </span>
                  <br className="software-text29"></br>
                  <span>
                    Platforms that structure, store, and safeguard
                    organizational information.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="software-thq-form-elm1">
          <div className="software-thq-form-elm2">
            <h1 className="software-text31">Need an Enterprise software?</h1>
            <span className="software-text32">
              Complete this form and we will get back to you in 24 hours.
            </span>
            <span className="software-thq-text-elm">FULL NAME</span>
            <input
              type="text"
              placeholder="Full Name"
              className="software-textinput1 TextSM input"
            />
            <span className="software-text33">EMAIL</span>
            <input
              type="text"
              placeholder="Email"
              className="software-textinput2 TextSM input"
            />
            <span className="software-text34">MESSAGE</span>
            <textarea
              cols="80"
              rows="4"
              placeholder="Type a message"
              className="software-textarea TextSM textarea"
            ></textarea>
            <div className="software-container5">
              <div className="software-container6">
                <button className="software-button button">Send message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="software-thq-our-tecnologies-elm">
          <h1 className="software-thq-heading-elm">
            Technologies that support our work
          </h1>
          <div className="software-container7">
            <div className="software-container8">
              <img
                alt="image"
                src="/icons8-html5-48-200h.webp"
                className="software-image1"
              />
              <img
                alt="image"
                src="/icons8-react-40-200h.webp"
                className="software-image2"
              />
              <img
                alt="image"
                src="/icons8-js-64-200h.webp"
                className="software-image3"
              />
              <img
                alt="image"
                src="/icons8-cloudflare-48-200h.webp"
                className="software-image4"
              />
              <img
                alt="image"
                src="/icons8-tailwind-css-48-200h.webp"
                className="software-image5"
              />
              <img
                alt="image"
                src="/icons8-laravel-48-200h.webp"
                className="software-image6"
              />
              <img
                alt="image"
                src="/icons8-supabase-48-200h.webp"
                className="software-image7"
              />
              <img
                alt="image"
                src="/icons8-aws-64-200h.webp"
                className="software-image8"
              />
            </div>
          </div>
        </div>
        <div className="software-thq-platform-elm">
          <h1 className="software-text35">
            Features of The Softwares We Built
          </h1>
          <div className="software-thq-platforms-elm">
            <div className="software-thq-first-elm">
              <div className="software-thq-dim-elm4"></div>
              <h1 className="software-thq-ios-elm">Workflow automation</h1>
              <video
                src="https://videos.pexels.com/video-files/8937986/8937986-hd_1080_1920_30fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/8937986/8937986-hd_1080_1920_30fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="software-video1"
              ></video>
            </div>
            <div className="software-thq-second-elm">
              <div className="software-thq-dim-elm5"></div>
              <video
                src="https://videos.pexels.com/video-files/5585988/5585988-hd_720_1280_30fps.mp4"
                loop="true"
                muted="true"
                poster="https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fFJlc3BvbnNpdmUlMjB3ZWJzaXRlfGVufDB8fHx8MTc3MzMxMzg3MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
                autoPlay="true"
                playsInline="true"
                className="software-video2"
              ></video>
              <h1 className="software-thq-android-elm">
                Secure data management
              </h1>
            </div>
            <div className="software-thq-third-elm">
              <div className="software-thq-dim-elm6"></div>
              <video
                src="https://videos.pexels.com/video-files/5075219/5075219-hd_1080_2048_25fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/5075219/5075219-hd_1080_2048_25fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="software-thq-video-elm"
              ></video>
              <h1 className="software-thq-web-app-elm1">
                Reliable system performance
              </h1>
            </div>
            <div className="software-thq-fourth-elm">
              <h1 className="software-thq-web-app-elm2">
                <span>Scalable architecture</span>
                <br></br>
                <br className="software-text38"></br>
                <br className="software-text39"></br>
              </h1>
              <video
                src="https://videos.pexels.com/video-files/5083557/5083557-hd_1080_2048_25fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/3627092/3627092-hd_720_1366_50fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="software-video3"
              ></video>
              <div className="software-thq-dim-elm7"></div>
            </div>
          </div>
        </div>
        <div className="software-thq-client-succes-elm">
          <div className="software-thq-client-success-elm">
            <h1 className="software-text40">Exceptional Customer Service</h1>
            <span className="software-text41">Have Some Quick Question?</span>
            <a
              href="https://wa.me/message/DMXFMBF3HKXGE1"
              target="_blank"
              rel="noreferrer noopener"
              className="software-link2 button"
            >
              Whatsapp Us
            </a>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="software-text42">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="software-text43">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="software-text44">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="software-text45">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="software-text46">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="software-text47">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="software-text48">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="software-text49">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="software-text50">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="software-text51">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="software-text52">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="software-text53">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="software-text54">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="software-text55">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="software-text56">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="software-text57">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name30"
          text111111111={
            <Fragment>
              <span className="software-text58">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="software-text59">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .software-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .software-text10 {
            display: inline-block;
          }
          .software-text11 {
            display: inline-block;
          }
          .software-text12 {
            display: inline-block;
          }
          .software-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .software-thq-software-hero-slider-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .software-thq-slider-elm {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .software-thq-slider-slide-elm1 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            font-family: 'Inter';
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHNvZnR3YXJlfGVufDB8fHx8MTc3MzM0MTkwNXww&ixlib=rb-4.1.0&w=1500');
          }
          .software-thq-dim-elm1 {
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
          .software-text15 {
            display: flex;
            z-index: 10;
            font-size: 40px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .software-thq-slider-slide-elm2 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1582736317407-371893d9e146?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDE5MDV8MA&ixlib=rb-4.1.0&w=1500');
          }
          .software-thq-dim-elm2 {
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
          .software-text16 {
            display: flex;
            z-index: 10;
            font-size: 40px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .software-thq-slider-slide-elm3 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg5fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDIzODR8MA&ixlib=rb-4.1.0&w=1500');
          }
          .software-thq-dim-elm3 {
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
          .software-text17 {
            display: flex;
            z-index: 10;
            font-size: 40px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .software-thq-slider-pagination-elm {
            display: block;
          }
          .software-thq-slider-button-prev-elm {
            display: none;
          }
          .software-thq-slider-button-next-elm {
            display: none;
          }
          .software-thq-website-elm {
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
          .software-text18 {
            font-size: 32px;
            font-family: 'Inter';
          }
          .software-text19 {
            font-size: 12px;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .software-text20 {
            text-align: left;
            font-family: 'Inter';
          }
          .software-thq-web-accordion-elm {
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
          .software-text21 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 32px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
          }
          .software-accordion1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .software-thq-trigger-elm1 {
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
          .software-thq-summary-elm1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .software-text22 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .software-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .software-icon1 {
            color: var(--dl-color-theme-neutral-light);
          }
          .software-container2 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .software-text23 {
            color: rgb(5, 5, 5);
            text-align: left;
            font-family: 'Inter';
          }
          .software-accordion2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .software-thq-trigger-elm2 {
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
          .software-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .software-text24 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .software-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .software-icon3 {
            color: var(--dl-color-theme-neutral-light);
          }
          .software-container3 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .software-text25 {
            color: #050505;
            font-family: 'Inter';
          }
          .software-accordion3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .software-thq-trigger-elm3 {
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
          .software-thq-summary-elm3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .software-text26 {
            color: var(--dl-color-theme-neutral-light);
            font-style: inherit;
            font-family: 'Inter';
            font-weight: 400;
          }
          .software-thq-icon-container-elm3 {
            transition: transform 0.3s ease-in-out;
          }
          .software-icon5 {
            color: var(--dl-color-theme-neutral-light);
          }
          .software-container4 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .software-text27 {
            color: rgb(5, 5, 5);
            font-family: 'Inter';
          }
          .software-thq-form-elm1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .software-thq-form-elm2 {
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
          .software-text31 {
            color: var(--dl-color-pimary-900);
            font-size: 1.5rem;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 2rem;
          }
          .software-text32 {
            color: var(--dl-color-pimary-900);
            font-family: 'Inter';
          }
          .software-thq-text-elm {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .software-textinput1 {
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
          .software-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .software-text33 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .software-textinput2 {
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
          .software-textinput2:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .software-text34 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .software-textarea {
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
          .software-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .software-container5 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .software-container6 {
            display: flex;
            position: relative;
          }
          .software-button {
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
          .software-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .software-button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .software-thq-our-tecnologies-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 0px;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .software-thq-heading-elm {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .software-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .software-container8 {
            width: 100%;
            height: auto;
            display: grid;
            align-self: center;
            align-items: center;
            justify-items: center;
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .software-image1 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-image2 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-image3 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-image4 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-image5 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-image6 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-image7 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-image8 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .software-thq-platform-elm {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .software-text35 {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            font-family: 'Inter';
          }
          .software-thq-platforms-elm {
            width: 100%;
            height: auto;
            display: grid;
            position: relative;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            grid-template-columns: 1fr 1fr;
          }
          .software-thq-first-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .software-thq-dim-elm4 {
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
          .software-thq-ios-elm {
            top: 450px;
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            margin: auto;
            display: flex;
            z-index: 12;
            position: absolute;
            font-size: 32px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .software-video1 {
            width: 100%;
            height: 100%;
          }
          .software-thq-second-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .software-thq-dim-elm5 {
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
          .software-video2 {
            width: 100%;
            height: 100%;
          }
          .software-thq-android-elm {
            top: 450px;
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 32px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .software-thq-third-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .software-thq-dim-elm6 {
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
          .software-thq-video-elm {
            width: 100%;
            height: 100%;
          }
          .software-thq-web-app-elm1 {
            top: 450px;
            fill: var(--dl-color-theme-neutral-light);
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 15%;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 32px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .software-thq-fourth-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .software-thq-web-app-elm2 {
            top: 450px;
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            width: 100%;
            height: 15%;
            margin: auto;
            display: flex;
            z-index: 12;
            position: absolute;
            font-size: 32px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .software-video3 {
            width: 100%;
            height: 100%;
          }
          .software-thq-dim-elm7 {
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
          .software-thq-client-succes-elm {
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
            background-image: url('https://images.pexels.com/photos/7682359/pexels-photo-7682359.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .software-thq-client-success-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .software-text40 {
            color: rgb(5, 5, 5);
            display: flex;
            font-size: 40px;
            align-self: center;
            margin-top: 450px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            align-content: middle;
            justify-content: center;
          }
          .software-text41 {
            color: rgb(5, 5, 5);
            font-size: 27px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .software-link2 {
            width: 35%;
            height: 15%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            border-radius: var(--dl-layout-radius-buttonradius);
            text-decoration: none;
            background-color: rgb(5, 5, 5);
          }
          .software-text42 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text43 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text44 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .software-text45 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text46 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text47 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text48 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .software-text49 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .software-text50 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text51 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text52 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .software-text53 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text54 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text55 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text56 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text57 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text58 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .software-text59 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .software-container1 {
              background-color: #050505;
            }
            .software-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-slider-slide-elm1 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHNvZnR3YXJlfGVufDB8fHx8MTc3MzM0MTkwNXww&ixlib=rb-4.1.0&w=1500');
            }
            .software-text15 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .software-thq-slider-slide-elm2 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1582736317407-371893d9e146?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDE5MDV8MA&ixlib=rb-4.1.0&w=1500');
            }
            .software-text16 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .software-thq-slider-slide-elm3 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg5fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDIzODR8MA&ixlib=rb-4.1.0&w=1500');
            }
            .software-text17 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .software-text18 {
              font-size: 32px;
              font-family: Inter;
            }
            .software-text19 {
              font-size: 12px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .software-text21 {
              color: rgb(5, 5, 5);
              font-size: 32px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .software-text31 {
              color: var(--dl-color-pimary-900);
              font-size: 1.5rem;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .software-text32 {
              color: var(--dl-color-pimary-900);
              font-family: Inter;
            }
            .software-thq-platform-elm {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .software-thq-platforms-elm {
              height: 100%;
            }
            .software-video1 {
              width: 100%;
              height: 100%;
            }
            .software-video2 {
              width: 100%;
              height: 100%;
            }
            .software-thq-video-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-web-app-elm1 {
              top: 450px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 15%;
              margin: auto;
              display: flex;
              position: absolute;
              font-size: 32px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .software-thq-web-app-elm2 {
              top: 450px;
            }
            .software-video3 {
              width: 100%;
              height: 100%;
            }
            .software-thq-client-succes-elm {
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/7682359/pexels-photo-7682359.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .software-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .software-text40 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 40px;
              align-self: center;
              margin-top: 450px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              align-content: middle;
              justify-content: center;
            }
            .software-link2 {
              width: 35%;
              height: 15%;
            }
            .software-text42 {
              color: #050505;
              font-family: Inter;
            }
            .software-text43 {
              color: #050505;
            }
            .software-text44 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .software-text45 {
              color: #050505;
              font-family: Inter;
            }
            .software-text46 {
              color: #050505;
              font-family: Inter;
            }
            .software-text47 {
              color: #050505;
              font-family: Inter;
            }
            .software-text48 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .software-text49 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .software-text50 {
              color: #050505;
              font-family: Inter;
            }
            .software-text51 {
              color: #050505;
              font-family: Inter;
            }
            .software-text52 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .software-text53 {
              color: #050505;
              font-family: Inter;
            }
            .software-text54 {
              color: #050505;
              font-family: Inter;
            }
            .software-text55 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .software-text56 {
              color: #050505;
              font-family: Inter;
            }
            .software-text57 {
              color: #050505;
              font-family: Inter;
            }
            .software-text58 {
              color: #050505;
              font-family: Inter;
            }
            .software-text59 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .software-container1 {
              background-color: #050505;
            }
            .software-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .software-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-slider-slide-elm1 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHNvZnR3YXJlfGVufDB8fHx8MTc3MzM0MTkwNXww&ixlib=rb-4.1.0&w=1500');
            }
            .software-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-text15 {
              display: flex;
              z-index: 10;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .software-thq-slider-slide-elm2 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1582736317407-371893d9e146?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDE5MDV8MA&ixlib=rb-4.1.0&w=1500');
            }
            .software-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-text16 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .software-thq-slider-slide-elm3 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg5fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDIzODR8MA&ixlib=rb-4.1.0&w=1500');
            }
            .software-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-text17 {
              display: flex;
              z-index: 10;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .software-text18 {
              font-size: 24px;
              font-family: Inter;
            }
            .software-text20 {
              font-family: Inter;
            }
            .software-text21 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .software-thq-form-elm2 {
              width: 100%;
            }
            .software-text31 {
              color: var(--dl-color-pimary-900);
              font-size: 24px;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .software-text32 {
              color: var(--dl-color-pimary-900);
              font-size: 18px;
              font-family: Inter;
            }
            .software-button {
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
            .software-text35 {
              color: rgb(5, 5, 5);
              font-size: 32px;
              align-self: center;
              font-family: Inter;
            }
            .software-thq-platforms-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-dim-elm4 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-thq-ios-elm {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              font-size: 24px;
              text-align: center;
              justify-content: center;
            }
            .software-video1 {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: center;
              align-items: center;
              justify-self: center;
              justify-content: center;
            }
            .software-thq-dim-elm5 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-video2 {
              width: 100%;
              height: 100%;
            }
            .software-thq-android-elm {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              position: absolute;
              font-size: 24px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .software-thq-dim-elm6 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-thq-video-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-web-app-elm1 {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 15%;
              margin: auto;
              display: flex;
              position: absolute;
              font-size: 24px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .software-thq-web-app-elm2 {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: block;
              position: absolute;
              font-size: 24px;
              text-align: center;
              font-family: Inter;
            }
            .software-text38 {
              top: 300px;
              left: 0px;
              color: var(--dl-color-secondary-700);
              right: 0px;
              margin: auto;
              display: flex;
              position: absolute;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .software-text39 {
              top: 300px;
              left: 0px;
              color: var(--dl-color-secondary-700);
              right: 0px;
              margin: auto;
              display: flex;
              position: absolute;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .software-video3 {
              width: 100%;
              height: 100%;
            }
            .software-thq-dim-elm7 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-thq-client-succes-elm {
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.pexels.com/photos/7682359/pexels-photo-7682359.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .software-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .software-text40 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 32px;
              align-self: center;
              margin-top: 450px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              align-content: middle;
              justify-content: center;
            }
            .software-text41 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .software-link2 {
              width: 35%;
              height: 15%;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              background-color: #050505;
            }
            .software-text42 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text43 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text44 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .software-text45 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text46 {
              color: #050505;
              font-family: Inter;
            }
            .software-text47 {
              color: #050505;
              font-family: Inter;
            }
            .software-text48 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .software-text49 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .software-text50 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text51 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text52 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .software-text53 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text54 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text55 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text56 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text57 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text58 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .software-text59 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .software-container1 {
              background-color: #050505;
            }
            .software-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .software-thq-software-hero-slider-elm {
              width: 100%;
              height: auto;
            }
            .software-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-slider-slide-elm1 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHNvZnR3YXJlfGVufDB8fHx8MTc3MzM0MTkwNXww&ixlib=rb-4.1.0&w=1500');
            }
            .software-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-text15 {
              color: var(--dl-color-theme-neutral-light);
              z-index: 12;
              font-size: 32px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .software-thq-slider-slide-elm2 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1582736317407-371893d9e146?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDE5MDV8MA&ixlib=rb-4.1.0&w=1500');
            }
            .software-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-text16 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 25px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .software-thq-slider-slide-elm3 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg5fHxzb2Z0d2FyZXxlbnwwfHx8fDE3NzMzNDIzODR8MA&ixlib=rb-4.1.0&w=1500');
            }
            .software-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-text17 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 25px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .software-thq-slider-button-prev-elm {
              display: none;
            }
            .software-thq-slider-button-next-elm {
              display: none;
            }
            .software-thq-website-elm {
              margin-bottom: 20px;
              background-color: #050505;
            }
            .software-text18 {
              font-size: 24px;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .software-text19 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .software-text20 {
              text-align: left;
              font-family: Inter;
            }
            .software-thq-web-accordion-elm {
              align-self: center;
              margin-top: 0px;
              align-items: center;
              border-color: #050505;
              border-style: hidden;
              border-width: 1px;
              border-radius: 0px;
              margin-bottom: var(--dl-layout-space-tripleunit);
              justify-content: center;
              background-color: #050505;
            }
            .software-text21 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .software-thq-trigger-elm1 {
              border-width: 0px;
              padding-right: 24px;
            }
            .software-text22 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .software-text23 {
              color: rgb(5, 5, 5);
              text-align: left;
              font-family: Inter;
            }
            .software-thq-trigger-elm2 {
              border-width: 0px;
              padding-right: 24px;
            }
            .software-text24 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .software-icon3 {
              fill: #050505;
            }
            .software-text25 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .software-thq-trigger-elm3 {
              border-width: 0px;
              padding-right: 24px;
            }
            .software-text26 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .software-text27 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .software-text29 {
              color: #050505;
              font-family: Inter;
            }
            .software-thq-form-elm1 {
              width: 100%;
              height: auto;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
            }
            .software-thq-form-elm2 {
              background-color: #050505;
            }
            .software-text31 {
              color: var(--dl-color-pimary-900);
              font-size: 22px;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .software-text32 {
              color: var(--dl-color-pimary-900);
              font-size: 14px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .software-thq-text-elm {
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
            .software-text33 {
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
            .software-text34 {
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
            .software-textarea {
              z-index: 10;
            }
            .software-container6 {
              border-color: var(--dl-color-pimary-900);
              border-width: 1px;
              border-radius: 50px;
            }
            .software-button {
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
            .software-thq-our-tecnologies-elm {
              width: 100%;
              height: auto;
              border-width: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-layout-space-unit);
              background-color: var(--dl-color-theme-neutral-light);
            }
            .software-thq-heading-elm {
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
            .software-container8 {
              height: auto;
              align-self: center;
              justify-items: center;
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(4, 1fr);
            }
            .software-image1 {
              width: 70px;
              height: 70px;
            }
            .software-image2 {
              width: 70px;
              height: 70px;
            }
            .software-image3 {
              width: 70px;
              height: 70px;
            }
            .software-image4 {
              width: 70px;
              height: 70px;
            }
            .software-image5 {
              width: 70px;
              height: 70px;
            }
            .software-image6 {
              width: 70px;
              height: 70px;
            }
            .software-image7 {
              width: 70px;
              height: 70px;
            }
            .software-image8 {
              width: 70px;
              height: 70px;
            }
            .software-thq-platform-elm {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              justify-content: center;
              background-color: var(--dl-color-theme-neutral-light);
            }
            .software-text35 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 25px;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .software-thq-platforms-elm {
              gap: 0px;
              width: 100%;
              height: 100%;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: 0px;
              background-color: var(--dl-color-theme-neutral-light);
              grid-template-rows: repeat(2, 1fr);
            }
            .software-thq-first-elm {
              width: 100%;
              height: 100%;
              align-self: center;
              align-items: center;
              justify-self: center;
            }
            .software-thq-dim-elm4 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-thq-ios-elm {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              display: block;
              z-index: 12;
              position: absolute;
              font-size: 20px;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .software-video1 {
              width: 100%;
              height: 100%;
            }
            .software-thq-second-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-dim-elm5 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-video2 {
              width: 100%;
              height: 100%;
            }
            .software-thq-android-elm {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              text-align: center;
              font-family: Inter;
              line-height: 20px;
            }
            .software-thq-third-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-dim-elm6 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-thq-video-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-web-app-elm1 {
              top: 170px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 15%;
              margin: auto;
              display: flex;
              position: absolute;
              font-size: 20px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .software-thq-fourth-elm {
              width: 100%;
              height: 100%;
            }
            .software-thq-web-app-elm2 {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              font-size: 20px;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .software-text38 {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              text-align: center;
              font-family: Inter;
            }
            .software-text39 {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              text-align: center;
              font-family: Inter;
            }
            .software-video3 {
              width: 100%;
              height: 100%;
            }
            .software-thq-dim-elm7 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .software-thq-client-succes-elm {
              width: 100%;
              height: auto;
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/7682359/pexels-photo-7682359.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .software-thq-client-success-elm {
              width: 100%;
              height: auto;
              padding-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/7682359/pexels-photo-7682359.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .software-text40 {
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
            .software-text41 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .software-link2 {
              width: 35%;
              height: 15%;
              display: flex;
              font-size: 14px;
              align-self: center;
              align-items: center;
              font-family: Inter;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: 0px;
              justify-content: center;
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .software-text42 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text43 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text44 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text45 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text46 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text47 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text48 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .software-text49 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .software-text50 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text51 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text52 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .software-text53 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text54 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text55 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text56 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text57 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text58 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .software-text59 {
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

export default Software
