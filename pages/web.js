import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Web = (props) => {
  return (
    <>
      <div className="web-container1">
        <Head>
          <title>
            Web - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Web - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/web" />
          <meta property="og:url" content="https://mgnt.teleporthq.site/web" />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="web-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="web-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="web-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="web-link1">
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
          rootClassName="thq-header-elmroot-class-name8"
        ></ThqHeaderElm>
        <div className="web-thq-web-hero-slider-elm">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-autoplay-delay="1000"
            data-pause-autoplay-on-mouse-enter="false"
            className="web-thq-slider-elm swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="web-thq-slider-slide-elm1 swiper-slide"
              >
                <div className="web-thq-dim-elm1"></div>
                <span className="web-text15">
                  Fast loading, intuitive navigation, and clear communication
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="web-thq-slider-slide-elm2 swiper-slide"
              >
                <div className="web-thq-dim-elm2"></div>
                <span className="web-text16">
                  we build web platforms that remain stable, adaptable, and
                  ready to evolve with your organization.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="web-thq-slider-slide-elm3 swiper-slide"
              >
                <div className="web-thq-dim-elm3"></div>
                <span className="web-text17">
                  We design systems that can expand, integrate, and support new
                  capabilities over time
                </span>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="web-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
              className="web-thq-slider-button-prev-elm swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="web-thq-slider-button-next-elm swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="web-thq-website-elm">
          <h1 className="web-text18">Web Development</h1>
          <span className="web-text19">
            Carefully built web experiences that serve business purpose.
          </span>
          <span className="web-text20">
            <span className="web-text21">
              A well-built website does more than present information. It
              becomes a dependable system through which organizations
              communicate, operate, and grow.
            </span>
            <br className="web-text22"></br>
            <br className="web-text23"></br>
            <span className="web-text24">
              We design and develop web systems that balance usability,
              performance, and technical integrity.
            </span>
          </span>
        </div>
        <div className="web-thq-web-accordion-elm">
          <h1 className="web-text25">What We Help You Achieve</h1>
          <div data-thq="accordion" className="web-accordion1">
            <details
              data-thq="accordion-trigger"
              className="web-thq-trigger-elm1"
            >
              <summary
                data-thq="accordion-summary"
                className="web-thq-summary-elm1"
              >
                <span className="web-text26">
                  Clear and dependable digital presence
                </span>
                <div
                  data-thq="accordion-icon"
                  className="web-thq-icon-container-elm1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="web-icon1"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="web-container2">
                <p className="web-text27">
                  <span>
                    A web platform that presents your organization with clarity
                    and professionalism.
                  </span>
                  <br></br>
                  <span>
                    Helping users find what they need quickly and confidently.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="web-accordion2">
            <details
              data-thq="accordion-trigger"
              className="web-thq-trigger-elm2"
            >
              <summary
                data-thq="accordion-summary"
                className="web-thq-summary-elm2"
              >
                <span className="web-text31">
                  Improved user access and experience
                </span>
                <div
                  data-thq="accordion-icon"
                  className="web-thq-icon-container-elm2"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="web-icon3"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="web-container3">
                <p className="web-text32">
                  <span>
                    Interfaces that make interaction with your organization
                    simple and intuitive.
                  </span>
                  <br></br>
                  <span>
                    Platforms that assist everyday processes rather than simply
                    display information.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div data-thq="accordion" className="web-accordion3">
            <details
              data-thq="accordion-trigger"
              className="web-thq-trigger-elm3"
            >
              <summary
                data-thq="accordion-summary"
                className="web-thq-summary-elm3"
              >
                <span className="web-text36">
                  Credibility in the digital space
                </span>
                <div
                  data-thq="accordion-icon"
                  className="web-thq-icon-container-elm3"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="web-icon5"
                  >
                    <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                  </svg>
                </div>
              </summary>
            </details>
            <div data-thq="accordion-content">
              <div className="web-container4">
                <p className="web-text37">
                  <span>
                    A website that reflects the discipline and seriousness of
                    your organization.
                  </span>
                  <br></br>
                  <span>
                    Presenting information in a structured and understandable
                    way.
                  </span>
                  <br></br>
                  <span>
                    Web systems built with stability and long-term usability in
                    mind.
                  </span>
                  <br className="web-text43"></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="web-thq-form-elm1">
          <div className="web-thq-form-elm2">
            <h1 className="web-text45">Need a Customized Mobile App?</h1>
            <span className="web-text46">
              Complete this form and we will get back to you in 24 hours.
            </span>
            <span className="web-thq-text-elm">FULL NAME</span>
            <input
              type="text"
              placeholder="Full Name"
              className="web-textinput1 TextSM input"
            />
            <span className="web-text47">EMAIL</span>
            <input
              type="text"
              placeholder="Email"
              className="web-textinput2 TextSM input"
            />
            <span className="web-text48">MESSAGE</span>
            <textarea
              cols="80"
              rows="4"
              placeholder="Type a message"
              className="web-textarea TextSM textarea"
            ></textarea>
            <div className="web-container5">
              <div className="web-container6">
                <button className="web-button button">Send message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="web-thq-our-tecnologies-elm">
          <h1 className="web-thq-heading-elm">
            Technologies that support our work
          </h1>
          <div className="web-container7">
            <div className="web-container8">
              <img
                alt="image"
                src="/icons8-html5-48-200h.webp"
                className="web-image1"
              />
              <img
                alt="image"
                src="/icons8-react-40-200h.webp"
                className="web-image2"
              />
              <img
                alt="image"
                src="/icons8-js-64-200h.webp"
                className="web-image3"
              />
              <img
                alt="image"
                src="/icons8-cloudflare-48-200h.webp"
                className="web-image4"
              />
              <img
                alt="image"
                src="/icons8-tailwind-css-48-200h.webp"
                className="web-image5"
              />
              <img
                alt="image"
                src="/icons8-laravel-48-200h.webp"
                className="web-image6"
              />
              <img
                alt="image"
                src="/icons8-supabase-48-200h.webp"
                className="web-image7"
              />
              <img
                alt="image"
                src="/icons8-aws-64-200h.webp"
                className="web-image8"
              />
            </div>
          </div>
        </div>
        <div className="web-thq-platform-elm">
          <h1 className="web-text49">Features of the Website We Built</h1>
          <div className="web-thq-platforms-elm">
            <div className="web-thq-first-elm">
              <div className="web-thq-dim-elm4"></div>
              <h1 className="web-thq-ios-elm">
                Responsive design and Intuitive
              </h1>
              <video
                src="https://images.unsplash.com/photo-1690192609138-33b5c4f04b8f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fFJlc3BvbnNpdmUlMjB3ZWJzaXRlfGVufDB8fHx8MTc3MzMxMzg3MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
                loop="true"
                muted="true"
                poster="https://images.unsplash.com/photo-1690192609138-33b5c4f04b8f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fFJlc3BvbnNpdmUlMjB3ZWJzaXRlfGVufDB8fHx8MTc3MzMxMzg3MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
                autoPlay="true"
                playsInline="true"
                className="web-video1"
              ></video>
            </div>
            <div className="web-thq-second-elm">
              <div className="web-thq-dim-elm5"></div>
              <video
                src="https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fFJlc3BvbnNpdmUlMjB3ZWJzaXRlfGVufDB8fHx8MTc3MzMxMzg3MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
                loop="true"
                muted="true"
                poster="https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fFJlc3BvbnNpdmUlMjB3ZWJzaXRlfGVufDB8fHx8MTc3MzMxMzg3MXww&amp;ixlib=rb-4.1.0&amp;w=1500"
                autoPlay="true"
                playsInline="true"
                className="web-video2"
              ></video>
              <h1 className="web-thq-android-elm">
                Fast page loading with performance optimization
              </h1>
            </div>
            <div className="web-thq-third-elm">
              <div className="web-thq-dim-elm6"></div>
              <video
                src="https://videos.pexels.com/video-files/8375446/8375446-hd_720_1366_25fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/8375446/8375446-hd_720_1366_25fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="web-thq-video-elm"
              ></video>
              <h1 className="web-thq-web-app-elm1">
                Content management integration
              </h1>
            </div>
            <div className="web-thq-fourth-elm">
              <h1 className="web-thq-web-app-elm2">
                <span className="web-text50">
                  Reliable hosting and Security
                </span>
                <br></br>
                <br className="web-text52"></br>
              </h1>
              <video
                src="https://videos.pexels.com/video-files/3627092/3627092-hd_720_1366_50fps.mp4"
                loop="true"
                muted="true"
                poster="https://videos.pexels.com/video-files/3627092/3627092-hd_720_1366_50fps.mp4"
                autoPlay="true"
                playsInline="true"
                className="web-video3"
              ></video>
              <div className="web-thq-dim-elm7"></div>
            </div>
          </div>
        </div>
        <div className="web-thq-client-succes-elm">
          <div className="web-thq-client-success-elm">
            <h1 className="web-text53">Exceptional Customer Service</h1>
            <span className="web-text54">Have Some Quick Question?</span>
            <a
              href="https://wa.me/message/DMXFMBF3HKXGE1"
              target="_blank"
              rel="noreferrer noopener"
              className="web-link2 button"
            >
              Whatsapp Us
            </a>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="web-text55">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="web-text56">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="web-text57">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="web-text58">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="web-text59">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="web-text60">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="web-text61">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="web-text62">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="web-text63">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="web-text64">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="web-text65">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="web-text66">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="web-text67">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="web-text68">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="web-text69">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="web-text70">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name26"
          text111111111={
            <Fragment>
              <span className="web-text71">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="web-text72">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .web-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .web-text10 {
            display: inline-block;
          }
          .web-text11 {
            display: inline-block;
          }
          .web-text12 {
            display: inline-block;
          }
          .web-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .web-thq-web-hero-slider-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-thq-slider-elm {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .web-thq-slider-slide-elm1 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            font-family: 'Inter';
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fFdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc3MzMwNzU0OHww&ixlib=rb-4.1.0&w=1500');
          }
          .web-thq-dim-elm1 {
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
          .web-text15 {
            display: flex;
            z-index: 10;
            font-size: 48px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .web-thq-slider-slide-elm2 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
          }
          .web-thq-dim-elm2 {
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
          .web-text16 {
            display: flex;
            z-index: 10;
            font-size: 48px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .web-thq-slider-slide-elm3 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
          }
          .web-thq-dim-elm3 {
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
          .web-text17 {
            display: flex;
            z-index: 10;
            font-size: 48px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .web-thq-slider-pagination-elm {
            display: block;
          }
          .web-thq-slider-button-prev-elm {
            display: none;
          }
          .web-thq-slider-button-next-elm {
            display: none;
          }
          .web-thq-website-elm {
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
          .web-text18 {
            font-size: 24px;
            font-family: 'Inter';
          }
          .web-text19 {
            font-size: 12px;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
          }
          .web-text20 {
            text-align: left;
            font-family: 'Inter';
          }
          .web-thq-web-accordion-elm {
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
          .web-text25 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 32px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
          }
          .web-accordion1 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .web-thq-trigger-elm1 {
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
          .web-thq-summary-elm1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .web-text26 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .web-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .web-icon1 {
            color: var(--dl-color-theme-neutral-light);
          }
          .web-container2 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .web-text27 {
            color: rgb(5, 5, 5);
            text-align: left;
            font-family: 'Inter';
          }
          .web-accordion2 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .web-thq-trigger-elm2 {
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
          .web-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .web-text31 {
            color: var(--dl-color-theme-neutral-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .web-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .web-icon3 {
            color: var(--dl-color-theme-neutral-light);
          }
          .web-container3 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .web-text32 {
            color: #050505;
            font-family: 'Inter';
          }
          .web-accordion3 {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .web-thq-trigger-elm3 {
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
          .web-thq-summary-elm3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .web-text36 {
            color: var(--dl-color-theme-neutral-light);
            font-style: inherit;
            font-family: 'Inter';
            font-weight: 400;
          }
          .web-thq-icon-container-elm3 {
            transition: transform 0.3s ease-in-out;
          }
          .web-icon5 {
            color: var(--dl-color-theme-neutral-light);
          }
          .web-container4 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-500);
          }
          .web-text37 {
            color: rgb(5, 5, 5);
            font-family: 'Inter';
          }
          .web-thq-form-elm1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .web-thq-form-elm2 {
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
          .web-text45 {
            color: var(--dl-color-pimary-900);
            font-size: 1.5rem;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 2rem;
          }
          .web-text46 {
            color: var(--dl-color-pimary-900);
            font-family: 'Inter';
          }
          .web-thq-text-elm {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .web-textinput1 {
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
          .web-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .web-text47 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .web-textinput2 {
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
          .web-textinput2:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .web-text48 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .web-textarea {
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
          .web-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .web-container5 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .web-container6 {
            display: flex;
            position: relative;
          }
          .web-button {
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
          .web-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .web-button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .web-thq-our-tecnologies-elm {
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
          .web-thq-heading-elm {
            color: rgb(5, 5, 5);
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .web-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .web-container8 {
            width: 100%;
            height: auto;
            display: grid;
            align-self: center;
            align-items: center;
            justify-items: center;
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .web-image1 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-image2 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-image3 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-image4 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-image5 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-image6 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-image7 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-image8 {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .web-thq-platform-elm {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .web-text49 {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            font-family: 'Inter';
          }
          .web-thq-platforms-elm {
            width: 100%;
            height: auto;
            display: grid;
            position: relative;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            grid-template-columns: 1fr 1fr;
          }
          .web-thq-first-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-thq-dim-elm4 {
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
          .web-thq-ios-elm {
            top: 450px;
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .web-video1 {
            width: 100%;
            height: 100%;
          }
          .web-thq-second-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-thq-dim-elm5 {
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
          .web-video2 {
            width: 100%;
            height: 100%;
          }
          .web-thq-android-elm {
            top: 450px;
            left: 0px;
            color: var(--dl-color-theme-neutral-light);
            right: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .web-thq-third-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-thq-dim-elm6 {
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
          .web-thq-video-elm {
            width: 100%;
            height: 100%;
          }
          .web-thq-web-app-elm1 {
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
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .web-thq-fourth-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-thq-web-app-elm2 {
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
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .web-text50 {
            top: 450px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 15%;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .web-video3 {
            width: 100%;
            height: 100%;
          }
          .web-thq-dim-elm7 {
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
          .web-thq-client-succes-elm {
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
            background-image: url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYxfHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
          }
          .web-thq-client-success-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .web-text53 {
            color: rgb(5, 5, 5);
            display: flex;
            font-size: 48px;
            align-self: center;
            margin-top: 450px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            align-content: middle;
            justify-content: center;
          }
          .web-text54 {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .web-link2 {
            width: 25%;
            height: 6%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            border-radius: var(--dl-layout-radius-buttonradius);
            text-decoration: none;
            background-color: rgb(5, 5, 5);
          }
          .web-text55 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text56 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text57 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .web-text58 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text59 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text60 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text61 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .web-text62 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .web-text63 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text64 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text65 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .web-text66 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text67 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text68 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text69 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text70 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text71 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .web-text72 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .web-container1 {
              background-color: #0505050;
            }
            .web-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-slider-slide-elm1 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fFdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc3MzMwNzU0OHww&ixlib=rb-4.1.0&w=1500');
            }
            .web-text15 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .web-thq-slider-slide-elm2 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-text16 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .web-thq-slider-slide-elm3 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-text17 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .web-text18 {
              font-size: 32px;
              font-family: Inter;
            }
            .web-text19 {
              font-size: 12px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .web-thq-web-accordion-elm {
              background-color: #050505;
            }
            .web-text25 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 32px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .web-thq-trigger-elm1 {
              background-color: #050505;
            }
            .web-thq-trigger-elm2 {
              background-color: #050505;
            }
            .web-thq-trigger-elm3 {
              background-color: #050505;
            }
            .web-text45 {
              color: var(--dl-color-pimary-900);
              font-size: 1.5rem;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .web-text46 {
              color: var(--dl-color-pimary-900);
              font-family: Inter;
            }
            .web-thq-platform-elm {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .web-text49 {
              color: rgb(5, 5, 5);
              font-size: 32px;
              align-self: center;
              font-family: Inter;
            }
            .web-thq-platforms-elm {
              height: 100%;
            }
            .web-video1 {
              width: 100%;
              height: 100%;
            }
            .web-video2 {
              width: 100%;
              height: 100%;
            }
            .web-thq-video-elm {
              width: 100%;
              height: 100%;
            }
            .web-video3 {
              width: 100%;
              height: 100%;
            }
            .web-thq-client-succes-elm {
              margin-bottom: 0px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYxfHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .web-text55 {
              color: #050505;
              font-family: Inter;
            }
            .web-text56 {
              color: #050505;
            }
            .web-text57 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .web-text58 {
              color: #050505;
              font-family: Inter;
            }
            .web-text59 {
              color: #050505;
              font-family: Inter;
            }
            .web-text60 {
              color: #050505;
              font-family: Inter;
            }
            .web-text61 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .web-text62 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .web-text63 {
              color: #050505;
              font-family: Inter;
            }
            .web-text64 {
              color: #050505;
              font-family: Inter;
            }
            .web-text65 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .web-text66 {
              color: #050505;
              font-family: Inter;
            }
            .web-text67 {
              color: #050505;
              font-family: Inter;
            }
            .web-text68 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .web-text69 {
              color: #050505;
              font-family: Inter;
            }
            .web-text70 {
              color: #050505;
              font-family: Inter;
            }
            .web-text71 {
              color: #050505;
              font-family: Inter;
            }
            .web-text72 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .web-container1 {
              background-color: #050505;
            }
            .web-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .web-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-slider-slide-elm1 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fFdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc3MzMwNzU0OHww&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-text15 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .web-thq-slider-slide-elm2 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-text16 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .web-thq-slider-slide-elm3 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-text17 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .web-text18 {
              font-size: 24px;
              font-family: Inter;
            }
            .web-text19 {
              font-size: 12px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .web-text20 {
              font-family: Inter;
            }
            .web-text21 {
              font-family: Inter;
            }
            .web-text22 {
              font-family: Inter;
            }
            .web-text24 {
              font-family: Inter;
            }
            .web-thq-web-accordion-elm {
              background-color: #050505;
            }
            .web-text25 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .web-thq-trigger-elm1 {
              background-color: #050505;
            }
            .web-text26 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .web-thq-trigger-elm2 {
              background-color: #050505;
            }
            .web-text31 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .web-thq-trigger-elm3 {
              background-color: #050505;
            }
            .web-text36 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .web-thq-form-elm2 {
              width: 100%;
            }
            .web-button {
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
            .web-thq-platform-elm {
              margin-bottom: 0px;
            }
            .web-text49 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .web-thq-platforms-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-dim-elm4 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-thq-ios-elm {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              font-size: 18px;
              text-align: center;
              justify-content: center;
            }
            .web-video1 {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: center;
              align-items: center;
              justify-self: center;
              justify-content: center;
            }
            .web-thq-dim-elm5 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-video2 {
              width: 100%;
              height: 100%;
            }
            .web-thq-android-elm {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              position: absolute;
              font-size: 18px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .web-thq-dim-elm6 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-thq-video-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-web-app-elm1 {
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
              font-size: 18px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .web-thq-web-app-elm2 {
              top: 300px;
              fill: var(--dl-color-theme-neutral-light);
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              margin: auto;
              display: flex;
              position: absolute;
              font-size: 18px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .web-text50 {
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
            .web-text52 {
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
            .web-video3 {
              width: 100%;
              height: 100%;
            }
            .web-thq-dim-elm7 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-thq-client-succes-elm {
              align-self: center;
              align-items: center;
              margin-bottom: 0px;
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYxfHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .web-text53 {
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
            .web-text54 {
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .web-link2 {
              width: 30%;
              height: 10%;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              background-color: #050505;
            }
            .web-text55 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text56 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text57 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .web-text58 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text59 {
              color: #050505;
              font-family: Inter;
            }
            .web-text60 {
              color: #050505;
              font-family: Inter;
            }
            .web-text61 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .web-text62 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .web-text63 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text64 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text65 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .web-text66 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text67 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text68 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text69 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text70 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text71 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .web-text72 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .web-container1 {
              background-color: #050505;
            }
            .web-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .web-thq-web-hero-slider-elm {
              width: 100%;
              height: auto;
            }
            .web-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-slider-slide-elm1 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fFdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc3MzMwNzU0OHww&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-text15 {
              color: var(--dl-color-theme-neutral-light);
              z-index: 12;
              font-size: 32px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .web-thq-slider-slide-elm2 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-text16 {
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
            .web-thq-slider-slide-elm3 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxXZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzMzMDc3Mjh8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-text17 {
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
            .web-thq-slider-button-prev-elm {
              display: none;
            }
            .web-thq-slider-button-next-elm {
              display: none;
            }
            .web-thq-website-elm {
              margin-bottom: 20px;
              background-color: #050505;
            }
            .web-text18 {
              font-size: 24px;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .web-text19 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .web-text20 {
              text-align: left;
              font-family: Inter;
            }
            .web-text21 {
              font-family: Inter;
            }
            .web-text22 {
              font-family: Inter;
            }
            .web-text23 {
              text-align: left;
            }
            .web-text24 {
              font-family: Inter;
            }
            .web-thq-web-accordion-elm {
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
            .web-text25 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .web-thq-trigger-elm1 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .web-text26 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .web-text27 {
              font-family: Inter;
            }
            .web-thq-trigger-elm2 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .web-text31 {
              color: var(--dl-color-theme-neutral-light);
              font-style: normal;
              font-family: Inter;
              font-weight: 400;
            }
            .web-icon3 {
              fill: #050505;
            }
            .web-text32 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .web-thq-trigger-elm3 {
              border-width: 0px;
              padding-right: 24px;
              background-color: #050505;
            }
            .web-text36 {
              color: var(--dl-color-theme-neutral-light);
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .web-text37 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .web-text43 {
              color: #050505;
              font-family: Inter;
            }
            .web-thq-form-elm1 {
              width: 100%;
              height: auto;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
            }
            .web-thq-form-elm2 {
              background-color: #050505;
            }
            .web-text45 {
              color: var(--dl-color-pimary-900);
              font-size: 22px;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .web-text46 {
              color: var(--dl-color-pimary-900);
              font-size: 14px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .web-thq-text-elm {
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
            .web-text47 {
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
            .web-text48 {
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
            .web-textarea {
              z-index: 10;
            }
            .web-container6 {
              border-color: var(--dl-color-pimary-900);
              border-width: 1px;
              border-radius: 50px;
            }
            .web-button {
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
            .web-thq-our-tecnologies-elm {
              width: 100%;
              height: auto;
              border-width: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-layout-space-unit);
              background-color: var(--dl-color-pimary-700);
            }
            .web-thq-heading-elm {
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
            .web-container8 {
              height: auto;
              align-self: center;
              justify-items: center;
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(4, 1fr);
            }
            .web-image1 {
              width: 70px;
              height: 70px;
            }
            .web-image2 {
              width: 70px;
              height: 70px;
            }
            .web-image3 {
              width: 70px;
              height: 70px;
            }
            .web-image4 {
              width: 70px;
              height: 70px;
            }
            .web-image5 {
              width: 70px;
              height: 70px;
            }
            .web-image6 {
              width: 70px;
              height: 70px;
            }
            .web-image7 {
              width: 70px;
              height: 70px;
            }
            .web-image8 {
              width: 70px;
              height: 70px;
            }
            .web-thq-platform-elm {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              justify-content: center;
              background-color: var(--dl-color-theme-neutral-light);
            }
            .web-text49 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 24px;
              align-self: center;
              margin-top: var(--dl-layout-space-twounits);
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .web-thq-platforms-elm {
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
            .web-thq-first-elm {
              width: 100%;
              height: 100%;
              align-self: center;
              align-items: center;
              justify-self: center;
            }
            .web-thq-dim-elm4 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-thq-ios-elm {
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
            .web-video1 {
              width: 100%;
              height: 100%;
            }
            .web-thq-second-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-dim-elm5 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-video2 {
              width: 100%;
              height: 100%;
            }
            .web-thq-android-elm {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              font-size: 18px;
              text-align: center;
              font-family: Inter;
            }
            .web-thq-third-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-dim-elm6 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-thq-video-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-web-app-elm1 {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 15%;
              margin: auto;
              position: absolute;
              font-size: 18px;
              text-align: center;
              font-family: Inter;
            }
            .web-thq-fourth-elm {
              width: 100%;
              height: 100%;
            }
            .web-thq-web-app-elm2 {
              top: 0px;
              left: 0px;
              color: var(--dl-color-theme-neutral-light);
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 20%;
              margin: auto;
              position: absolute;
              font-size: 18px;
              text-align: center;
              font-family: Inter;
            }
            .web-text50 {
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
            .web-text52 {
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
            .web-video3 {
              width: 100%;
              height: 100%;
            }
            .web-thq-dim-elm7 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .web-thq-client-succes-elm {
              width: 100%;
              height: auto;
              margin-bottom: 0px;
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/5467593/pexels-photo-5467593.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .web-thq-client-success-elm {
              width: 100%;
              height: auto;
              padding-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYxfHxDdXN0b21lcnxlbnwwfHx8fDE3NzMzOTAzOTZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .web-text53 {
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
            .web-text54 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .web-link2 {
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
            .web-text55 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text56 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text57 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text58 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text59 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text60 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text61 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .web-text62 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .web-text63 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text64 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text65 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .web-text66 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text67 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text68 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text69 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text70 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text71 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .web-text72 {
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

export default Web
