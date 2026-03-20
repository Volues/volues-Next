import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Mobile = (props) => {
  return (
    <>
      <div className="mobile-container1">
        <Head>
          <title>
            Mobile - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Mobile - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/mobile" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/mobile"
          />
        </Head>
        <div className="mobile-thq-app-hero-slider-elm">
          <ThqHeaderElm
            text={
              <Fragment>
                <span className="mobile-text10">Homes</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="mobile-text11">Our Services</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="mobile-text12">About Us</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <Link href="/contact">
                  <a className="mobile-link1">
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
            rootClassName="thq-header-elmroot-class-name1"
          ></ThqHeaderElm>
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-autoplay-delay="1000"
            data-pause-autoplay-on-mouse-enter="false"
            className="mobile-thq-slider-elm swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="mobile-thq-slider-slide-elm1 swiper-slide"
              >
                <div className="mobile-thq-dim-elm1"></div>
                <span className="mobile-text15">
                  We focus on simplicity, responsiveness, and reliability.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="mobile-thq-slider-slide-elm2 swiper-slide"
              >
                <div className="mobile-thq-dim-elm2"></div>
                <span className="mobile-text16">
                  Apps that solve real problems rather than overwhelm users with
                  features.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="mobile-thq-slider-slide-elm3 swiper-slide"
              >
                <div className="mobile-thq-dim-elm3"></div>
                <span className="mobile-text17">
                  <span className="mobile-text18">
                    We design mobile products around everyday behaviors, how
                    people move, work, communicate, and make decisions.
                  </span>
                  <br className="mobile-text19"></br>
                  <br className="mobile-text20"></br>
                </span>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="mobile-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
              className="mobile-thq-slider-button-prev-elm swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="mobile-thq-slider-button-next-elm swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="mobile-thq-mobile-app-elm">
          <h1 className="mobile-text21">Mobile App Development</h1>
          <span className="mobile-text22">
            Build Mobile Applications That People Actually Use
          </span>
          <span className="mobile-text23">
            <span className="mobile-text24">
              Mobile apps succeed when they solve real problems in a simple,
              reliable way. At Volues, we focus on designing and building mobile
              applications that are practical, scalable, and built around real
              user behavior.
            </span>
            <br className="mobile-text25"></br>
            <br className="mobile-text26"></br>
            <span className="mobile-text27">
              Whether you are launching aa new product, digitizing internal
              operations, or extending your existing platform to mobile devices,
              our team works closely with you to translate your idea into a
              well-engineered application that performs reliably in the hands of
              your users.
            </span>
            <br></br>
            <br className="mobile-text29"></br>
            <span className="mobile-text30">
              We build applications that are not only functional, but
              thoughtfully structured for long-term growth, security, and
              maintainability.
            </span>
          </span>
        </div>
        <div className="mobile-thq-app-accordion-elm">
          <h1 className="mobile-text31">What We Help You Achieve</h1>
          <div data-thq="accordion" className="mobile-accordion1">
            <details
              data-thq="accordion-trigger"
              className="mobile-thq-trigger-elm1"
            >
              <summary
                data-thq="accordion-summary"
                className="mobile-thq-summary-elm1"
              >
                <span className="mobile-text32">
                  Turn Ideas Into Working Products
                </span>
                <div
                  data-thq="accordion-icon"
                  className="mobile-thq-icon-container-elm1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="mobile-icon1"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="mobile-container2">
                <p className="mobile-text33">
                  Many businesses have strong ideas but struggle to transform
                  them into structured digital products. We guide you through
                  the process, from concept clarification to launch, so your
                  application is built on solid technical and strategic
                  foundations
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="mobile-accordion2">
            <details
              data-thq="accordion-trigger"
              className="mobile-thq-trigger-elm2"
            >
              <summary
                data-thq="accordion-summary"
                className="mobile-thq-summary-elm2"
              >
                <span className="mobile-text34">
                  Improve Access To Your Services
                </span>
                <div
                  data-thq="accordion-icon"
                  className="mobile-thq-icon-container-elm2"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="mobile-icon3"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="mobile-container3">
                <p className="mobile-text35">
                  Mobile applications make your services available directly in
                  your customers’ hands. We design apps that simplify how users
                  interact with your business and remove unnecessary friction.
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="mobile-accordion3">
            <details
              data-thq="accordion-trigger"
              className="mobile-thq-trigger-elm3"
            >
              <summary
                data-thq="accordion-summary"
                className="mobile-thq-summary-elm3"
              >
                <span className="mobile-text36">
                  Support Operational Efficiency
                </span>
                <div
                  data-thq="accordion-icon"
                  className="mobile-thq-icon-container-elm3"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="mobile-icon5"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="mobile-container4">
                <p className="mobile-text37">
                  Beyond customer-facing apps, we also develop internal mobile
                  tools that help organizations manage operations, track
                  activities, and improve communication across teams.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-thq-form-elm1">
          <div className="mobile-thq-form-elm2">
            <h1 className="mobile-text38">Need a Customized Mobile App?</h1>
            <span className="mobile-text39">
              Complete this form and we will get back to you in 24 hours.
            </span>
            <span className="mobile-thq-text-elm">FULL NAME</span>
            <input
              type="text"
              placeholder="Full Name"
              className="mobile-textinput1 TextSM input"
            />
            <span className="mobile-text40">EMAIL</span>
            <input
              type="text"
              placeholder="Email"
              className="mobile-textinput2 TextSM input"
            />
            <span className="mobile-text41">MESSAGE</span>
            <textarea
              cols="80"
              rows="4"
              placeholder="Type a message"
              className="mobile-textarea TextSM textarea"
            ></textarea>
            <div className="mobile-container5">
              <div className="mobile-container6">
                <button className="mobile-button button">Send message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-thq-our-tecnologies-elm">
          <h1 className="mobile-thq-heading-elm">Our Technologies</h1>
          <div className="mobile-container7">
            <div className="mobile-container8">
              <img
                alt="image"
                src="/icons8-material-ui-48-200h.webp"
                className="mobile-image1"
              />
              <img
                alt="image"
                src="/icons8-react-40-200h.webp"
                className="mobile-image2"
              />
              <img
                alt="image"
                src="/icons8-swift-48-200h.webp"
                className="mobile-image3"
              />
              <img
                alt="image"
                src="/icons8-xamarin-48-200h.webp"
                className="mobile-image4"
              />
              <img
                alt="image"
                src="/icons8-android-48%20(1)-200h.webp"
                className="mobile-image5"
              />
              <img
                alt="image"
                src="/icons8-app-store-48-200h.webp"
                className="mobile-image6"
              />
              <img
                alt="image"
                src="/icons8-flutter-logo-48-200h.webp"
                className="mobile-image7"
              />
              <img
                alt="image"
                src="/icons8-iconic-64-200h.webp"
                className="mobile-image8"
              />
            </div>
          </div>
        </div>
        <div className="mobile-thq-platform-elm">
          <h1 className="mobile-text42">
            <span className="mobile-text43">Platforms We Develop For</span>
            <br></br>
          </h1>
          <div className="mobile-thq-platforms-elm">
            <div className="mobile-thq-first-elm">
              <div className="mobile-thq-dim-elm4"></div>
              <h1 className="mobile-thq-ios-elm">IOS</h1>
              <video
                src="https://videos.pexels.com/video-files/5082599/5082599-hd_720_1366_25fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/5082599/5082599-hd_720_1366_25fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="mobile-video1"
              ></video>
            </div>
            <div className="mobile-thq-second-elm">
              <div className="mobile-thq-dim-elm5"></div>
              <video
                src="https://videos.pexels.com/video-files/5077483/5077483-hd_1080_2048_25fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/5077483/5077483-hd_1080_2048_25fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="mobile-video2"
              ></video>
              <h1 className="mobile-thq-android-elm">Android</h1>
            </div>
            <div className="mobile-thq-third-elm">
              <div className="mobile-thq-dim-elm6"></div>
              <video
                src="https://videos.pexels.com/video-files/20616932/20616932-hd_1080_1920_30fps.mp4"
                loop="true"
                muted="true"
                poster="https://images.pexels.com/videos/5082599/pictures/preview-0.jpeg"
                autoPlay="true"
                playsInline="true"
                className="mobile-thq-video-elm1"
              ></video>
              <h1 className="mobile-thq-web-app-elm1">WEB APP</h1>
            </div>
            <div className="mobile-thq-fourth-elm">
              <h1 className="mobile-thq-web-app-elm2">Hybrid APP</h1>
              <div className="mobile-thq-dim-elm7"></div>
              <video
                src="https://videos.pexels.com/video-files/6608789/6608789-hd_1080_1920_25fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/6608789/6608789-hd_1080_1920_25fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="mobile-thq-video-elm2"
              ></video>
            </div>
          </div>
        </div>
        <div className="mobile-thq-client-succes-elm">
          <div className="mobile-thq-client-success-elm">
            <h1 className="mobile-text45">Exceptional Customer Service</h1>
            <span className="mobile-text46">Have Some Quick Question?</span>
            <a
              href="https://wa.me/message/DMXFMBF3HKXGE1"
              target="_blank"
              rel="noreferrer noopener"
              className="mobile-link2 button"
            >
              Whatssp Us
            </a>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="mobile-text47">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="mobile-text48">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="mobile-text49">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="mobile-text50">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="mobile-text51">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="mobile-text52">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="mobile-text53">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="mobile-text54">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="mobile-text55">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="mobile-text56">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="mobile-text57">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="mobile-text58">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="mobile-text59">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="mobile-text60">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="mobile-text61">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="mobile-text62">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name25"
          text111111111={
            <Fragment>
              <span className="mobile-text63">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="mobile-text64">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .mobile-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .mobile-thq-app-hero-slider-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #050505;
          }
          .mobile-text10 {
            display: inline-block;
          }
          .mobile-text11 {
            display: inline-block;
          }
          .mobile-text12 {
            display: inline-block;
          }
          .mobile-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .mobile-thq-slider-elm {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .mobile-thq-slider-slide-elm1 {
            width: 100%;
            height: 100vh;
            display: flex;
            font-family: 'Inter';
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1633250391894-397930e3f5f2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
          }
          .mobile-thq-dim-elm1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.5);
          }
          .mobile-text15 {
            display: flex;
            z-index: 10;
            font-size: 48px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .mobile-thq-slider-slide-elm2 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
          }
          .mobile-thq-dim-elm2 {
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
          .mobile-text16 {
            display: flex;
            z-index: 10;
            font-size: 48px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .mobile-thq-slider-slide-elm3 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1641886336879-340cc977163c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxBbmRyb2lkJTIwU3R1ZGlvfGVufDB8fHx8MTc3MzI1NzE3Mnww&ixlib=rb-4.1.0&w=1500');
          }
          .mobile-thq-dim-elm3 {
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
          .mobile-text17 {
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
          .mobile-thq-slider-pagination-elm {
            display: block;
          }
          .mobile-thq-slider-button-prev-elm {
            display: none;
          }
          .mobile-thq-slider-button-next-elm {
            display: none;
          }
          .mobile-thq-mobile-app-elm {
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
          .mobile-text21 {
            font-size: 32px;
            font-family: 'Inter';
          }
          .mobile-text22 {
            font-size: 12px;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .mobile-text23 {
            text-align: left;
            font-family: 'Inter';
          }
          .mobile-thq-app-accordion-elm {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            border-color: #050505;
            border-style: hidden;
            border-width: 0px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .mobile-text31 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 24px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
          }
          .mobile-accordion1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .mobile-thq-trigger-elm1 {
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
          .mobile-thq-summary-elm1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .mobile-text32 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .mobile-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .mobile-icon1 {
            color: var(--dl-color-theme-neutral-light);
          }
          .mobile-container2 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .mobile-text33 {
            color: rgb(5, 5, 5);
            text-align: left;
            font-family: 'Inter';
          }
          .mobile-accordion2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .mobile-thq-trigger-elm2 {
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
          .mobile-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .mobile-text34 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .mobile-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .mobile-icon3 {
            color: var(--dl-color-theme-neutral-light);
          }
          .mobile-container3 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .mobile-text35 {
            color: #050505;
            font-family: 'Inter';
          }
          .mobile-accordion3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .mobile-thq-trigger-elm3 {
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
          .mobile-thq-summary-elm3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .mobile-text36 {
            color: var(--dl-color-theme-neutral-light);
            font-style: inherit;
            font-family: 'Inter';
            font-weight: 400;
          }
          .mobile-thq-icon-container-elm3 {
            transition: transform 0.3s ease-in-out;
          }
          .mobile-icon5 {
            color: var(--dl-color-theme-neutral-light);
          }
          .mobile-container4 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .mobile-text37 {
            color: rgb(5, 5, 5);
            font-family: 'Inter';
          }
          .mobile-thq-form-elm1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .mobile-thq-form-elm2 {
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
          .mobile-text38 {
            color: var(--dl-color-pimary-900);
            font-size: 1.5rem;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 2rem;
          }
          .mobile-text39 {
            color: var(--dl-color-pimary-900);
            font-family: 'Inter';
          }
          .mobile-thq-text-elm {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .mobile-textinput1 {
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
          .mobile-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .mobile-text40 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .mobile-textinput2 {
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
          .mobile-textinput2:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .mobile-text41 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .mobile-textarea {
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
          .mobile-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .mobile-container5 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-container6 {
            display: flex;
            position: relative;
          }
          .mobile-button {
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
          .mobile-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .mobile-button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .mobile-thq-our-tecnologies-elm {
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
          .mobile-thq-heading-elm {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .mobile-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mobile-container8 {
            width: 100%;
            height: auto;
            display: grid;
            align-self: center;
            align-items: center;
            justify-items: center;
            background-color: var(--dl-color-pimary-700);
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .mobile-image1 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-image2 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-image3 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-image4 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-image5 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-image6 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-image7 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-image8 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .mobile-thq-platform-elm {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .mobile-text42 {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            font-family: 'Inter';
          }
          .mobile-thq-platforms-elm {
            width: 100%;
            height: auto;
            display: grid;
            position: relative;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            grid-template-columns: 1fr 1fr;
          }
          .mobile-thq-first-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-thq-dim-elm4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.5);
          }
          .mobile-thq-ios-elm {
            top: 450px;
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .mobile-video1 {
            width: 100%;
            height: 100%;
            border-color: rgba(195, 197, 201, 0);
            border-style: hidden;
            border-width: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .mobile-thq-second-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-thq-dim-elm5 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.5);
          }
          .mobile-video2 {
            width: 100%;
            height: 100%;
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 0px;
            padding-left: 0px;
            padding-bottom: 0px;
          }
          .mobile-thq-android-elm {
            top: 450px;
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .mobile-thq-third-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-thq-dim-elm6 {
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
          .mobile-thq-video-elm1 {
            width: 100%;
            height: 100%;
            padding-top: 0px;
            padding-right: 0px;
          }
          .mobile-thq-web-app-elm1 {
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
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .mobile-thq-fourth-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .mobile-thq-web-app-elm2 {
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
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .mobile-thq-dim-elm7 {
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
          .mobile-thq-video-elm2 {
            width: 100%;
            height: 100%;
            padding-top: 0px;
            padding-left: 0px;
            padding-bottom: 0px;
          }
          .mobile-thq-client-succes-elm {
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
            background-image: url('https://images.unsplash.com/photo-1702261952301-cd8279a92c83?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxDdXN0b21lciUyMENhcmV8ZW58MHx8fHwxNzczMjU4MDM3fDA&ixlib=rb-4.1.0&w=1500');
          }
          .mobile-thq-client-success-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mobile-text45 {
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
          .mobile-text46 {
            color: rgb(5, 5, 5);
            font-size: 20px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .mobile-link2 {
            width: 35%;
            height: 12%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            border-radius: var(--dl-layout-radius-buttonradius);
            text-decoration: none;
            background-color: rgb(5, 5, 5);
          }
          .mobile-text47 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text48 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text49 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .mobile-text50 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text51 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text52 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text53 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .mobile-text54 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .mobile-text55 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text56 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text57 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .mobile-text58 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text59 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text60 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text61 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text62 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text63 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .mobile-text64 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .mobile-thq-app-hero-slider-elm {
              background-color: #050505;
            }
            .mobile-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-slider-slide-elm1 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1633250391894-397930e3f5f2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-text15 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .mobile-thq-slider-slide-elm2 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-text16 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .mobile-thq-slider-slide-elm3 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1641886336879-340cc977163c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxBbmRyb2lkJTIwU3R1ZGlvfGVufDB8fHx8MTc3MzI1NzE3Mnww&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-text17 {
              font-size: 32px;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .mobile-text18 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .mobile-text20 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .mobile-text31 {
              font-size: 32px;
            }
            .mobile-text38 {
              color: var(--dl-color-pimary-900);
              font-size: 1.5rem;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .mobile-text39 {
              color: var(--dl-color-pimary-900);
              font-family: Inter;
            }
            .mobile-thq-platform-elm {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .mobile-thq-platforms-elm {
              height: 100%;
            }
            .mobile-video1 {
              width: 100%;
              height: 100%;
            }
            .mobile-video2 {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-video-elm1 {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-web-app-elm1 {
              top: 250px;
            }
            .mobile-thq-fourth-elm {
              align-self: center;
              align-items: center;
              justify-self: center;
              justify-content: center;
            }
            .mobile-thq-web-app-elm2 {
              top: 250px;
              left: 0px;
              right: 0px;
              margin: auto;
              align-items: center;
              justify-content: center;
            }
            .mobile-thq-video-elm2 {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .mobile-text47 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text48 {
              color: #050505;
            }
            .mobile-text49 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .mobile-text50 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text51 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text52 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text53 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .mobile-text54 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .mobile-text55 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text56 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text57 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .mobile-text58 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text59 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text60 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .mobile-text61 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text62 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text63 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text64 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .mobile-container1 {
              background-color: #050505;
            }
            .mobile-thq-app-hero-slider-elm {
              background-color: #050505;
            }
            .mobile-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .mobile-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-slider-slide-elm1 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1633250391894-397930e3f5f2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              border-style: hidden;
              border-width: 0px;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-text15 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .mobile-thq-slider-slide-elm2 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-text16 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .mobile-thq-slider-slide-elm3 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1641886336879-340cc977163c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxBbmRyb2lkJTIwU3R1ZGlvfGVufDB8fHx8MTc3MzI1NzE3Mnww&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-text17 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              font-size: 20px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
              justify-content: center;
            }
            .mobile-text18 {
              display: flex;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .mobile-text19 {
              color: var(--dl-color-theme-neutral-light);
              text-align: center;
              font-family: Inter;
            }
            .mobile-text20 {
              display: flex;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .mobile-text21 {
              font-size: 24px;
              font-family: Inter;
            }
            .mobile-text22 {
              font-size: 12px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .mobile-text23 {
              font-family: Inter;
            }
            .mobile-text31 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .mobile-thq-form-elm2 {
              width: 100%;
            }
            .mobile-button {
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
            .mobile-thq-heading-elm {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .mobile-text42 {
              font-size: 24px;
              font-family: Inter;
            }
            .mobile-thq-platforms-elm {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-dim-elm4 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-thq-ios-elm {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              text-align: center;
              justify-content: center;
            }
            .mobile-video1 {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: center;
              align-items: center;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              justify-self: center;
              padding-right: 0px;
              padding-bottom: 0px;
              justify-content: center;
            }
            .mobile-thq-dim-elm5 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-video2 {
              width: 100%;
              height: 100%;
              padding-left: 0px;
              padding-bottom: 0px;
            }
            .mobile-thq-android-elm {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              position: absolute;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .mobile-thq-dim-elm6 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-thq-video-elm1 {
              width: 100%;
              height: 100%;
              padding-top: 0px;
              padding-right: 0px;
            }
            .mobile-thq-web-app-elm1 {
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
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .mobile-thq-web-app-elm2 {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              position: absolute;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .mobile-thq-dim-elm7 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-thq-video-elm2 {
              width: 100%;
              height: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-bottom: 0px;
            }
            .mobile-thq-client-succes-elm {
              align-self: center;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .mobile-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .mobile-text45 {
              color: #050505;
              display: flex;
              align-self: center;
              margin-top: 450px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              align-content: middle;
              justify-content: center;
            }
            .mobile-text46 {
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .mobile-link2 {
              width: 32%;
              height: 12%;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              background-color: #050505;
            }
            .mobile-text47 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text48 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text49 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .mobile-text50 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text51 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text52 {
              color: #050505;
              font-family: Inter;
            }
            .mobile-text53 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .mobile-text54 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .mobile-text55 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text56 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text57 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .mobile-text58 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text59 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text60 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text61 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text62 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text63 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .mobile-text64 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .mobile-container1 {
              background-color: #050505;
            }
            .mobile-thq-app-hero-slider-elm {
              width: 100%;
              height: auto;
              background-color: #050505;
            }
            .mobile-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .mobile-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-slider-slide-elm1 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1633250391894-397930e3f5f2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              border-style: hidden;
              border-width: 0px;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-text15 {
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
            .mobile-thq-slider-slide-elm2 {
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxNb2JpbGUlMjBBcHB8ZW58MHx8fHwxNzczMjU2NDQ5fDA&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-text16 {
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
            .mobile-thq-slider-slide-elm3 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1641886336879-340cc977163c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxBbmRyb2lkJTIwU3R1ZGlvfGVufDB8fHx8MTc3MzI1NzE3Mnww&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-text17 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              z-index: 10;
              font-size: 20px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
              justify-content: center;
            }
            .mobile-text18 {
              display: flex;
              z-index: 10;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
              justify-content: center;
            }
            .mobile-text19 {
              color: var(--dl-color-theme-neutral-light);
              text-align: center;
              font-family: Inter;
            }
            .mobile-text20 {
              display: flex;
              z-index: 10;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .mobile-thq-slider-button-prev-elm {
              display: none;
            }
            .mobile-thq-slider-button-next-elm {
              display: none;
            }
            .mobile-thq-mobile-app-elm {
              margin-bottom: 20px;
              background-color: #050505;
            }
            .mobile-text21 {
              font-size: 24px;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .mobile-text22 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .mobile-text23 {
              text-align: left;
              font-family: Inter;
            }
            .mobile-text24 {
              font-family: Inter;
            }
            .mobile-text25 {
              font-family: Inter;
            }
            .mobile-text26 {
              font-family: Inter;
            }
            .mobile-text27 {
              font-family: Inter;
            }
            .mobile-text29 {
              font-family: Inter;
            }
            .mobile-text30 {
              font-family: Inter;
            }
            .mobile-thq-app-accordion-elm {
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
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
            .mobile-text31 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .mobile-thq-trigger-elm1 {
              border-width: 0px;
              padding-right: 24px;
            }
            .mobile-text32 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .mobile-thq-trigger-elm2 {
              border-width: 0px;
              padding-right: 24px;
            }
            .mobile-text34 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .mobile-icon3 {
              fill: #050505;
            }
            .mobile-thq-trigger-elm3 {
              border-width: 0px;
              padding-right: 24px;
            }
            .mobile-text36 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .mobile-thq-form-elm1 {
              width: 100%;
              height: auto;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
            }
            .mobile-thq-form-elm2 {
              background-color: #050505;
            }
            .mobile-text38 {
              color: var(--dl-color-pimary-900);
              font-size: 22px;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .mobile-text39 {
              color: var(--dl-color-pimary-900);
              font-size: 14px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .mobile-thq-text-elm {
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
            .mobile-text40 {
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
            .mobile-text41 {
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
            .mobile-textarea {
              z-index: 10;
            }
            .mobile-container6 {
              border-color: var(--dl-color-pimary-900);
              border-width: 1px;
              border-radius: 50px;
            }
            .mobile-button {
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
            .mobile-thq-our-tecnologies-elm {
              width: 100%;
              height: auto;
              border-width: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-layout-space-unit);
              background-color: var(--dl-color-pimary-700);
            }
            .mobile-thq-heading-elm {
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
            .mobile-container8 {
              height: auto;
              align-self: center;
              justify-items: center;
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(4, 1fr);
            }
            .mobile-image1 {
              width: 70px;
              height: 70px;
            }
            .mobile-image2 {
              width: 70px;
              height: 70px;
            }
            .mobile-image3 {
              width: 70px;
              height: 70px;
            }
            .mobile-image4 {
              width: 70px;
              height: 70px;
            }
            .mobile-image5 {
              width: 70px;
              height: 70px;
            }
            .mobile-image6 {
              width: 70px;
              height: 70px;
            }
            .mobile-image7 {
              width: 70px;
              height: 70px;
            }
            .mobile-image8 {
              width: 70px;
              height: 70px;
            }
            .mobile-thq-platform-elm {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              justify-content: center;
              background-color: #050505;
            }
            .mobile-text42 {
              color: var(--dl-color-theme-neutral-light);
              display: flex;
              font-size: 25px;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .mobile-text43 {
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .mobile-thq-platforms-elm {
              gap: 0px;
              width: 100%;
              height: 100%;
              padding-top: 0px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: 0px;
              background-color: #050505;
              grid-template-rows: repeat(2, 1fr);
            }
            .mobile-thq-first-elm {
              width: 100%;
              height: 100%;
              align-self: center;
              align-items: center;
              justify-self: center;
            }
            .mobile-thq-dim-elm4 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-thq-ios-elm {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              font-size: 24px;
              text-align: center;
              font-family: Inter;
            }
            .mobile-video1 {
              width: 100%;
              height: 100%;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .mobile-thq-second-elm {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-dim-elm5 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-video2 {
              width: 100%;
              height: 100%;
              padding-left: 0px;
              padding-bottom: 0px;
            }
            .mobile-thq-android-elm {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              font-size: 24px;
              text-align: center;
              font-family: Inter;
            }
            .mobile-thq-third-elm {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-dim-elm6 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-thq-video-elm1 {
              width: 100%;
              height: 100%;
              padding-top: 0px;
              padding-right: 0px;
            }
            .mobile-thq-web-app-elm1 {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 15%;
              margin: auto;
              position: absolute;
              font-size: 24px;
              text-align: center;
              font-family: Inter;
            }
            .mobile-thq-fourth-elm {
              width: 100%;
              height: 100%;
            }
            .mobile-thq-web-app-elm2 {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 15%;
              margin: auto;
              display: flex;
              z-index: 12;
              position: absolute;
              font-size: 24px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .mobile-thq-dim-elm7 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .mobile-thq-video-elm2 {
              width: 100%;
              height: 100%;
              padding-top: 0px;
              padding-left: 0px;
            }
            .mobile-thq-client-succes-elm {
              width: 100%;
              height: auto;
              margin-bottom: 0px;
            }
            .mobile-thq-client-success-elm {
              width: 100%;
              height: auto;
              padding-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1702261952301-cd8279a92c83?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxDdXN0b21lciUyMENhcmV8ZW58MHx8fHwxNzczMjU4MDM3fDA&ixlib=rb-4.1.0&w=1500');
            }
            .mobile-text45 {
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
            .mobile-text46 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .mobile-link2 {
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
              background-color: rgb(5, 5, 5);
            }
            .mobile-text47 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text48 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text49 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text50 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text51 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text52 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text53 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .mobile-text54 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .mobile-text55 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text56 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text57 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .mobile-text58 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text59 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text60 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text61 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text62 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text63 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .mobile-text64 {
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

export default Mobile

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
