import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Services = (props) => {
  return (
    <>
      <div className="services-container1">
        <Head>
          <title>
            Services - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Services - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/services" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/services"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="services-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="services-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="services-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="services-link1">
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
          rootClassName="thq-header-elmroot-class-name18"
        ></ThqHeaderElm>
        <div className="services-thq-services-slider-elm">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-autoplay-delay="1000"
            data-pause-autoplay-on-mouse-enter="false"
            className="services-thq-slider-elm swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="services-thq-slider-slide-elm1 swiper-slide"
              >
                <div className="services-thq-dim-elm1"></div>
                <span className="services-text15">
                  We design and develop platforms that are reliable,
                  user-friendly, and scalable to support real business needs.
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="services-thq-slider-slide-elm2 swiper-slide"
              >
                <div className="services-thq-dim-elm2"></div>
                <span className="services-text16">
                  <span className="services-text17">
                    We help organizations communicate clearly, reach the right
                    audience, and make data-informed decisions.
                  </span>
                  <br className="services-text18"></br>
                  <br className="services-text19"></br>
                </span>
              </div>
              <div
                data-thq="slider-slide"
                className="services-thq-slider-slide-elm3 swiper-slide"
              >
                <div className="services-thq-dim-elm3"></div>
                <span className="services-text20">
                  We provide practical guidance on technology and systems to
                  align digital initiatives with business goals.
                </span>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="services-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
              className="services-thq-slider-button-prev-elm swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="services-thq-slider-button-next-elm swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="services-thq-website-elm">
          <h1 className="services-text21">Our Services</h1>
          <span className="services-text22">
            A thoughtful range of services designed to help organizations build,
            communicate, and make informed digital decisions.
          </span>
        </div>
        <div className="services-thq-services-elm">
          <div className="services-container2">
            <Link href="/web">
              <a>
                <div className="services-thq-web-elm">
                  <span className="services-text23">Web Development ↻</span>
                  <div className="services-thq-dim-elm4"></div>
                </div>
              </a>
            </Link>
            <Link href="/mobile">
              <a>
                <div className="services-thq-apps-elm">
                  <span className="services-text24">
                    Mobile Apps Development ↻
                  </span>
                  <div className="services-thq-dim-elm5"></div>
                </div>
              </a>
            </Link>
            <Link href="/marketing">
              <a>
                <div className="services-thq-digital-elm">
                  <span className="services-text25">Digital Marketing ↻</span>
                  <div className="services-thq-dim-elm6"></div>
                </div>
              </a>
            </Link>
            <Link href="/software">
              <a>
                <div className="services-thq-software-elm">
                  <span className="services-text26">
                    Enterprise Software Development ↻
                  </span>
                  <div className="services-thq-dim-elm7"></div>
                </div>
              </a>
            </Link>
            <Link href="/consulting">
              <a>
                <div className="services-thq-consulting-elm">
                  <span className="services-text27">Digital Consulting ↻</span>
                  <div className="services-thq-dim-elm8"></div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="services-thq-form-elm1">
          <div className="services-thq-form-elm2">
            <h1 className="services-text28">Need Any of Our Services?</h1>
            <span className="services-text29">
              Complete this form and we will get back to you in 24 hours.
            </span>
            <span className="services-thq-text-elm">FULL NAME</span>
            <input
              type="text"
              placeholder="Full Name"
              className="services-textinput1 TextSM input"
            />
            <span className="services-text30">EMAIL</span>
            <input
              type="text"
              placeholder="Email"
              className="services-textinput2 TextSM input"
            />
            <span className="services-text31">MESSAGE</span>
            <textarea
              cols="80"
              rows="4"
              placeholder="Type a message"
              className="services-textarea TextSM textarea"
            ></textarea>
            <div className="services-container3">
              <div className="services-container4">
                <button className="services-button button">Send message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="services-thq-client-succes-elm">
          <div className="services-thq-client-success-elm">
            <h1 className="services-text32">Exceptional Customer Service</h1>
            <span className="services-text33">Have Some Quick Question?</span>
            <a
              href="https://wa.me/message/DMXFMBF3HKXGE1"
              target="_blank"
              rel="noreferrer noopener"
              className="services-thq-button-elm button"
            >
              Whatsapp Us
            </a>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="services-text34">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="services-text35">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="services-text36">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="services-text37">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="services-text38">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="services-text39">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="services-text40">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="services-text41">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="services-text42">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="services-text43">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="services-text44">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="services-text45">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="services-text46">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="services-text47">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="services-text48">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="services-text49">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name29"
          text111111111={
            <Fragment>
              <span className="services-text50">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="services-text51">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .services-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .services-text10 {
            display: inline-block;
          }
          .services-text11 {
            display: inline-block;
          }
          .services-text12 {
            display: inline-block;
          }
          .services-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .services-thq-services-slider-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-fiveunits);
            flex-direction: column;
          }
          .services-thq-slider-elm {
            width: 100%;
            height: 100%;
            display: inline-block;
          }
          .services-thq-slider-slide-elm1 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            font-family: 'Inter';
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=1500');
          }
          .services-thq-dim-elm1 {
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
          .services-text15 {
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
          .services-thq-slider-slide-elm2 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1623715537863-7b1441e0e2e9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=1500');
          }
          .services-thq-dim-elm2 {
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
          .services-text16 {
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
          .services-text17 {
            display: flex;
            z-index: 10;
            align-self: center;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .services-text18 {
            font-size: 48px;
            text-align: center;
            font-family: 'Inter';
          }
          .services-thq-slider-slide-elm3 {
            width: 100%;
            height: 100vh;
            display: flex;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1704655295066-681e61ecca6b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fENlbyUyME9mZmljZXxlbnwwfHx8fDE3NzM0MzU0OTR8MA&ixlib=rb-4.1.0&w=1500');
          }
          .services-thq-dim-elm3 {
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
          .services-text20 {
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
          .services-thq-slider-pagination-elm {
            display: block;
          }
          .services-thq-slider-button-prev-elm {
            display: none;
          }
          .services-thq-slider-button-next-elm {
            display: none;
          }
          .services-thq-website-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-tripleunit);
            margin-bottom: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: #050505;
          }
          .services-text21 {
            font-size: 48px;
            font-family: 'Inter';
          }
          .services-text22 {
            text-align: left;
            font-family: 'Inter';
          }
          .services-thq-services-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-container2 {
            width: 100%;
            height: 100%;
            display: grid;
            align-self: center;
            justify-items: center;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
          }
          .services-thq-web-elm {
            flex: 0 0 auto;
            width: 515px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 0px;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('https://images.unsplash.com/photo-1655196601100-8bfb26cf99e9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fEJyb3dzZXJ8ZW58MHx8fHwxNzczNDI5ODI5fDA&ixlib=rb-4.1.0&w=600');
          }
          .services-text23 {
            z-index: 30;
            font-size: 27px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
          }
          .services-thq-dim-elm4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 5;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.7);
          }
          .services-thq-apps-elm {
            flex: 0 0 auto;
            width: 515px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 0px;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('https://images.unsplash.com/photo-1689467909244-631e55404336?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=600');
          }
          .services-text24 {
            z-index: 12;
            font-size: 27px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
          }
          .services-thq-dim-elm5 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 5;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.7);
          }
          .services-thq-digital-elm {
            flex: 0 0 auto;
            width: 515px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 0px;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('https://images.unsplash.com/photo-1577428505573-30cc4b03fd3b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU2fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=600');
          }
          .services-text25 {
            z-index: 12;
            font-size: 27px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
          }
          .services-thq-dim-elm6 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 5;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.7);
          }
          .services-thq-software-elm {
            flex: 0 0 auto;
            width: 515px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 0px;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('https://images.unsplash.com/photo-1762341123207-534f965910df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
          }
          .services-text26 {
            z-index: 12;
            font-size: 27px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
          }
          .services-thq-dim-elm7 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 5;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.7);
          }
          .services-thq-consulting-elm {
            flex: 0 0 auto;
            width: 515px;
            height: 331px;
            display: flex;
            position: relative;
            align-items: center;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 0px;
            margin-right: var(--dl-layout-space-halfunit);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            text-decoration: none;
            background-image: url('https://images.unsplash.com/photo-1704440394018-29d78966a30e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
          }
          .services-text27 {
            z-index: 12;
            font-size: 27px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
          }
          .services-thq-dim-elm8 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 5;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: rgba(5, 5, 5, 0.7);
          }
          .services-thq-form-elm1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .services-thq-form-elm2 {
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
          .services-text28 {
            color: var(--dl-color-pimary-900);
            font-size: 1.5rem;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 2rem;
          }
          .services-text29 {
            color: var(--dl-color-pimary-900);
            font-family: 'Inter';
          }
          .services-thq-text-elm {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .services-textinput1 {
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
          .services-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .services-text30 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .services-textinput2 {
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
          .services-textinput2:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .services-text31 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .services-textarea {
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
          .services-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .services-container3 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .services-container4 {
            display: flex;
            position: relative;
          }
          .services-button {
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
          .services-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .services-button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .services-thq-client-succes-elm {
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
            background-image: url('https://images.pexels.com/photos/5467593/pexels-photo-5467593.jpeg?auto=compress&cs=tinysrgb&w=1500');
          }
          .services-thq-client-success-elm {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text32 {
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
          .services-text33 {
            color: rgb(5, 5, 5);
            font-size: 32px;
            align-self: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .services-thq-button-elm {
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
          .services-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text35 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text36 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .services-text37 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text38 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text39 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text40 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .services-text41 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .services-text42 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text43 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text44 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .services-text45 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text46 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text47 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text48 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text49 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text50 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .services-text51 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .services-container1 {
              background-color: #050505;
            }
            .services-thq-services-slider-elm {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .services-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .services-thq-slider-slide-elm1 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-text15 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .services-thq-slider-slide-elm2 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1623715537863-7b1441e0e2e9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-text16 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .services-text17 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .services-text19 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .services-thq-slider-slide-elm3 {
              width: 100%;
              height: 100vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1704655295066-681e61ecca6b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fENlbyUyME9mZmljZXxlbnwwfHx8fDE3NzM0MzU0OTR8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-text20 {
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .services-thq-services-elm {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .services-container2 {
              align-items: center;
              padding-left: 0px;
              justify-items: center;
              padding-right: 0px;
            }
            .services-thq-web-elm {
              width: 330px;
              height: 239px;
              margin-right: 0px;
            }
            .services-text23 {
              font-size: 24px;
              font-family: Inter;
            }
            .services-thq-apps-elm {
              width: 330px;
              height: 239px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1689467909244-631e55404336?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text24 {
              font-size: 24px;
              font-family: Inter;
            }
            .services-thq-dim-elm5 {
              flex: 0px;
              width: 330px;
              height: 239px;
            }
            .services-thq-digital-elm {
              width: 330px;
              height: 239px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1577428505573-30cc4b03fd3b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU2fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text25 {
              font-size: 24px;
              font-family: Inter;
            }
            .services-thq-software-elm {
              width: 330px;
              height: 239px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1762341123207-534f965910df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text26 {
              font-size: 24px;
              font-family: Inter;
            }
            .services-thq-consulting-elm {
              width: 330px;
              height: 239px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1704440394018-29d78966a30e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text27 {
              font-size: 24px;
              font-family: Inter;
            }
            .services-text28 {
              color: var(--dl-color-pimary-900);
              font-size: 1.5rem;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .services-text29 {
              color: var(--dl-color-pimary-900);
              font-family: Inter;
            }
            .services-thq-client-succes-elm {
              margin-bottom: 0px;
            }
            .services-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .services-thq-button-elm {
              width: 40%;
              height: 15%;
            }
            .services-text34 {
              color: #050505;
              font-family: Inter;
            }
            .services-text35 {
              color: #050505;
            }
            .services-text36 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .services-text37 {
              color: #050505;
              font-family: Inter;
            }
            .services-text38 {
              color: #050505;
              font-family: Inter;
            }
            .services-text39 {
              color: #050505;
              font-family: Inter;
            }
            .services-text40 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .services-text41 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .services-text42 {
              color: #050505;
              font-family: Inter;
            }
            .services-text43 {
              color: #050505;
              font-family: Inter;
            }
            .services-text44 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .services-text45 {
              color: #050505;
              font-family: Inter;
            }
            .services-text46 {
              color: #050505;
              font-family: Inter;
            }
            .services-text47 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .services-text48 {
              color: #050505;
              font-family: Inter;
            }
            .services-text49 {
              color: #050505;
              font-family: Inter;
            }
            .services-text50 {
              color: #050505;
              font-family: Inter;
            }
            .services-text51 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .services-container1 {
              background-color: #050505;
            }
            .services-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .services-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .services-thq-slider-slide-elm1 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              border-style: hidden;
              border-width: 0px;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .services-text15 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .services-thq-slider-slide-elm2 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1623715537863-7b1441e0e2e9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .services-text16 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .services-text17 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .services-text19 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .services-thq-slider-slide-elm3 {
              width: 100%;
              height: 70vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1704655295066-681e61ecca6b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fENlbyUyME9mZmljZXxlbnwwfHx8fDE3NzM0MzU0OTR8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .services-text20 {
              display: flex;
              font-size: 32px;
              align-self: center;
              text-align: center;
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .services-thq-website-elm {
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .services-text21 {
              font-size: 32px;
              font-family: Inter;
            }
            .services-text22 {
              font-family: Inter;
            }
            .services-container2 {
              justify-items: center;
            }
            .services-text23 {
              z-index: 30;
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm4 {
              border-style: hidden;
              border-width: 0px;
            }
            .services-thq-apps-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1689467909244-631e55404336?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text24 {
              z-index: 12;
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm5 {
              border-width: 0px;
            }
            .services-thq-digital-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1577428505573-30cc4b03fd3b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU2fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text25 {
              z-index: 12;
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm6 {
              border-style: hidden;
              border-width: 0px;
            }
            .services-thq-software-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1762341123207-534f965910df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text26 {
              z-index: 12;
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm7 {
              border-style: hidden;
              border-width: 0px;
            }
            .services-thq-consulting-elm {
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1704440394018-29d78966a30e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text27 {
              z-index: 12;
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm8 {
              border-style: hidden;
              border-width: 0px;
            }
            .services-thq-form-elm2 {
              width: 100%;
            }
            .services-button {
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
            .services-thq-client-succes-elm {
              align-self: center;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .services-thq-client-success-elm {
              width: 100%;
              height: auto;
            }
            .services-text32 {
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
            .services-text33 {
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .services-thq-button-elm {
              width: 40%;
              height: 15%;
              align-self: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              background-color: #050505;
            }
            .services-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text35 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text36 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .services-text37 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text38 {
              color: #050505;
              font-family: Inter;
            }
            .services-text39 {
              color: #050505;
              font-family: Inter;
            }
            .services-text40 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .services-text41 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .services-text42 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text43 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text44 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .services-text45 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text46 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text47 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text48 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text49 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text50 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .services-text51 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .services-container1 {
              background-color: #050505;
            }
            .services-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .services-thq-services-slider-elm {
              width: 100%;
              height: auto;
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .services-thq-slider-elm {
              width: 100%;
              height: 100%;
            }
            .services-thq-slider-slide-elm1 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-thq-dim-elm1 {
              width: 100%;
              height: 100%;
              border-style: hidden;
              border-width: 0px;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .services-text15 {
              color: var(--dl-color-theme-neutral-light);
              z-index: 12;
              font-size: 32px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .services-thq-slider-slide-elm2 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1623715537863-7b1441e0e2e9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYyfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-thq-dim-elm2 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .services-text16 {
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
            .services-text17 {
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
            .services-text19 {
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
            .services-thq-slider-slide-elm3 {
              width: 100%;
              height: 60vh;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1704655295066-681e61ecca6b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fENlbyUyME9mZmljZXxlbnwwfHx8fDE3NzM0MzU0OTR8MA&ixlib=rb-4.1.0&w=1500');
            }
            .services-thq-dim-elm3 {
              width: 100%;
              height: 100%;
              background-color: rgba(5, 5, 5, 0.5);
            }
            .services-text20 {
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
            .services-thq-slider-button-prev-elm {
              display: none;
            }
            .services-thq-slider-button-next-elm {
              display: none;
            }
            .services-thq-website-elm {
              margin-bottom: var(--dl-layout-space-tripleunit);
              background-color: #050505;
            }
            .services-text21 {
              font-size: 20px;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .services-text22 {
              text-align: left;
              font-family: Inter;
            }
            .services-thq-services-elm {
              width: 100%;
              height: 80%;
              background-color: #050505;
            }
            .services-container2 {
              width: 100%;
              height: 80%;
              display: grid;
              justify-items: center;
              grid-template-rows: repeat(2, 1fr);
              grid-template-columns: repeat(2, 1fr);
            }
            .services-thq-web-elm {
              width: 180px;
              height: 180px;
              display: flex;
              margin-right: 0px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1655196601100-8bfb26cf99e9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fEJyb3dzZXJ8ZW58MHx8fHwxNzczNDI5ODI5fDA&ixlib=rb-4.1.0&w=600');
            }
            .services-text23 {
              z-index: 30;
              font-size: 18px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm4 {
              border-style: hidden;
              border-width: 0px;
            }
            .services-thq-apps-elm {
              width: 180px;
              height: 180px;
              display: flex;
              margin-right: 0px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1689467909244-631e55404336?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNTJ8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text24 {
              z-index: 12;
              font-size: 18px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm5 {
              width: 180px;
              height: 180px;
              border-style: hidden;
              border-width: 0px;
            }
            .services-thq-digital-elm {
              width: 180px;
              height: 180px;
              display: flex;
              margin-right: 0px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1577428505573-30cc4b03fd3b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU2fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzQ4MDZ8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text25 {
              z-index: 12;
              font-size: 18px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm6 {
              border-style: hidden;
              border-width: 0px;
            }
            .services-thq-software-elm {
              width: 180px;
              height: 180px;
              display: flex;
              margin-right: 0px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1762341123207-534f965910df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text26 {
              z-index: 12;
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm7 {
              border-style: hidden;
              border-width: 0px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .services-thq-consulting-elm {
              width: 180px;
              height: 180px;
              display: flex;
              margin-right: 0px;
              background-size: cover;
              background-image: url('https://images.unsplash.com/photo-1704440394018-29d78966a30e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxEaWdpdGFsJTIwZmlybXxlbnwwfHx8fDE3NzM0MzAyNjh8MA&ixlib=rb-4.1.0&w=600');
            }
            .services-text27 {
              z-index: 12;
              font-size: 18px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .services-thq-dim-elm8 {
              border-width: 0px;
            }
            .services-thq-form-elm1 {
              width: 100%;
              height: auto;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-tripleunit);
              padding-right: var(--dl-layout-space-unit);
            }
            .services-thq-form-elm2 {
              background-color: #050505;
            }
            .services-text28 {
              color: var(--dl-color-pimary-900);
              font-size: 22px;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .services-text29 {
              color: var(--dl-color-pimary-900);
              font-size: 14px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .services-thq-text-elm {
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
            .services-text30 {
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
            .services-text31 {
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
            .services-textarea {
              z-index: 10;
            }
            .services-container4 {
              border-color: var(--dl-color-pimary-900);
              border-width: 1px;
              border-radius: 50px;
            }
            .services-button {
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
            .services-thq-client-succes-elm {
              width: 100%;
              height: auto;
              margin-bottom: 0px;
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/5467593/pexels-photo-5467593.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .services-thq-client-success-elm {
              width: 100%;
              height: auto;
              padding-bottom: var(--dl-layout-space-fiveunits);
              background-size: cover;
              background-image: url('https://images.pexels.com/photos/5467593/pexels-photo-5467593.jpeg?auto=compress&cs=tinysrgb&w=1500');
            }
            .services-text32 {
              color: #050505;
              display: flex;
              font-size: 25px;
              align-self: center;
              margin-top: 220px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              align-content: middle;
              flex-direction: column;
              justify-content: center;
            }
            .services-text33 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              align-self: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .services-thq-button-elm {
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
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .services-text34 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text35 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text36 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text37 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text38 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text39 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text40 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .services-text41 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .services-text42 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text43 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text44 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .services-text45 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text46 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text47 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text48 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text49 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text50 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .services-text51 {
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

export default Services
