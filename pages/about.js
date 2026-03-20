import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Label from '../components/label'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>
            About - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="About - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/about" />
          <meta
            property="og:url"
            content="https://mgnt.teleporthq.site/about"
          />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="about-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="about-link1">
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
          rootClassName="thq-header-elmroot-class-name"
        ></ThqHeaderElm>
        <div className="about-thq-about-volues-elm">
          <h1 className="about-text15">About Volues</h1>
          <span className="about-text16">
            Volues (Legal name &quot;Volues Technologies LTD&quot; ) is a
            premier software and digital marketing agency based in Abuja,
            Nigeria. We bridge the gap between local business goals and global
            technological standards. We don&apos;t just build softwares; we
            engineer high-performance website and digital infrastructure,
            ranging from scalable enterprise software to data-driven marketing
            strategies, designed to ensure your business thrives in a
            competitive economy.
          </span>
        </div>
        <div className="about-thq-what-we-offer-elm">
          <Label text="Built on Proven Frameworks."></Label>
          <div className="about-container2">
            <h1 className="about-text17">Our Offerings</h1>
          </div>
          <div className="about-thq-card1-elm">
            <div className="about-container3">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9.5 8.5L11 10l-3 3l3 3l-1.5 1.5L5 13zm5 9L13 16l3-3l-3-3l1.5-1.5L19 13zM21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 18H3V6h18z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h6 className="about-text18">Web &amp; Mobile Development</h6>
            <span className="about-text19">
              We build fast, SEO-optimized React and Next.js applications that
              turn visitors into customers.
            </span>
          </div>
          <div className="about-thq-card2-elm">
            <div className="about-container4">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g
                  fill="none"
                  color="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="18" cy="10" rx="4" ry="8"></ellipse>
                  <path d="M18 2C14.897 2 8.465 4.378 4.771 5.854C3.079 6.53 2 8.178 2 10s1.08 3.47 2.771 4.146C8.465 15.622 14.897 18 18 18m-7 4l-1.943-1.07A5.93 5.93 0 0 1 6.045 15"></path>
                </g>
              </svg>
            </div>
            <h6 className="about-text20">Digital Marketing</h6>
            <span className="about-text21">
              Strategic, human-centered campaigns designed to increase brand
              authority and measurable ROI.
            </span>
          </div>
          <div className="about-thq-card3-elm">
            <div className="about-container5">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 15q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 12t-1.066.434q-.434.433-.434 1.066t.434 1.066T12 15m-9 5V7h6V4h6v3h6v13zm1-1h16V8H4zm6-12h4V5h-4zM4 19V8z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h6 className="about-text22">Enterprise Software</h6>
            <span className="about-text23">
              Custom ERP and CRM solutions built on lean stacks
              (Node.js/Supabase) for maximum scalability.
            </span>
          </div>
          <div className="about-thq-card4-elm">
            <div className="about-container6">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g
                  fill="none"
                  color="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14M7.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19"></path>
                  <path d="m12.308 12l-1.461-4.521A.72.72 0 0 0 10.154 7a.72.72 0 0 0-.693.479L8 12m7-5v5m-6.462-1.5h3.231"></path>
                </g>
              </svg>
            </div>
            <h6 className="about-text24">Technology Consulting</h6>
            <span className="about-text25">
              Expert guidance on digital transformation, cloud infrastructure,
              and operational automation.
            </span>
          </div>
        </div>
        <div className="about-thq-our-story-elm">
          <h1 className="about-thq-heading-elm1">Our Story</h1>
          <span className="about-text26">
            Volues was born out of a conviction that software should be more
            than a product, it should be infrastructure. We saw a market filled
            with &quot;beautiful but fragile&quot; systems. We chose a different
            path: engineering for longevity. Today, we are a multidisciplinary
            firm dedicated to precision, building systems that empower
            businesses to operate with total confidence.
          </span>
        </div>
        <div className="about-thq-our-mission-elm">
          <h1 className="about-thq-heading-elm2">Our Mission</h1>
          <span className="about-text27">
            To engineer high-fidelity digital infrastructure that grants
            businesses the autonomy to scale and the confidence to lead. We
            don&apos;t just write code; we build the foundational systems that
            eliminate operational anxiety and replace it with measurable,
            predictable growth.
          </span>
        </div>
        <div className="about-thq-our-vision-elm">
          <h1 className="about-thq-heading-elm3">Our Vision</h1>
          <span className="about-text28">
            To become the global benchmark for African engineering excellence.
            We envision a future where &quot;Built by Volues&quot; is synonymous
            with ethical innovation, architectural integrity, and transformative
            digital experiences that redefine how the world interacts with
            technology.
          </span>
        </div>
        <div className="about-thq-core-commitment-elm">
          <h1 className="about-thq-heading-elm4">Core Commitment</h1>
          <span className="about-text29">
            We build for longevity, not just the launch. Our commitment is to
            treat every line of code as a long-term asset. By prioritizing a
            &quot;Lean Stack&quot; philosophy, we ensure your technology remains
            an agile ally, never a legacy constraint, adapting as fast as the
            market demands.
          </span>
        </div>
        <div className="about-thq-cta-elm">
          <h6 className="about-text30">Ready to Productize Your Vision?</h6>
          <span className="about-text31">
            Let’s discuss how our lean stack approach can accelerate your
            business growth.
          </span>
          <Link href="/discuss">
            <a className="about-link2 button">Schedule a Strategy Session</a>
          </Link>
        </div>
        <div className="about-thq-why-volues-elm">
          <h1 className="about-text32">WHY CHOOSE US ?</h1>
          <span className="about-text33">
            <span className="about-text34">
              Choosing a technology partner is not a design decision.
            </span>
            <span className="about-text35">It is a strategic one.</span>
            <br className="about-text36"></br>
            <span className="about-text37">
              Here’s why clients trust Volues:
            </span>
            <span className="about-text38">1. Strategy Before Code</span>
            <span className="about-text39">
              We don’t jump into development.
            </span>
            <span className="about-text40">
              We analyze, architect, and align with your business objectives
              first.
            </span>
            <br className="about-text41"></br>
            <span className="about-text42">2. Engineering Discipline</span>
            <span className="about-text43">
              Clean architecture. Scalable infrastructure. Secure
              implementation.
            </span>
            <span className="about-text44">
              We build systems that can grow with you.
            </span>
            <br className="about-text45"></br>
            <span className="about-text46">3. Business-Centric Thinking</span>
            <span className="about-text47">
              We understand ROI, customer acquisition, operational efficiency,
              and digital positioning.
            </span>
            <span className="about-text48">
              We build technology that improves measurable outcomes.
            </span>
            <br className="about-text49"></br>
            <span className="about-text50">
              4. Transparency &amp; Communication
            </span>
            <span className="about-text51">
              Clear timelines. Clear milestones. Clear expectations.
            </span>
            <span className="about-text52">No ambiguity.</span>
            <br className="about-text53"></br>
            <span className="about-text54">5. Long-Term Partnership</span>
            <span className="about-text55">
              We are not interested in one-off transactions.
            </span>
            <span className="about-text56">
              We aim to become your technology backbone.
            </span>
            <span className="about-text57">
              When you work with Volues, you gain:
            </span>
            <br className="about-text58"></br>
            <span className="about-text59">A strategic advisor</span>
            <span className="about-text60">A disciplined engineering team</span>
            <span className="about-text61">
              A partner invested in your growth
            </span>
            <span className="about-text62">Not just developers.</span>
          </span>
        </div>
        <div className="about-thq-we-will-never-elm">
          <h1 className="about-text63">
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-text65">We Will Never</span>
          </h1>
          <span className="about-text66">
            <span>• Deliver fragile systems</span>
            <br></br>
            <span>• Ignore performance standards</span>
            <br></br>
            <span>• Compromise data privacy</span>
            <br></br>
            <span>• Overpromise and underdeliver</span>
          </span>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="about-text74">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-text75">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-text76">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-text77">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="about-text78">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="about-text79">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text80">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="about-text81">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="about-text82">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="about-text83">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="about-text84">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="about-text85">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="about-text86">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="about-text87">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="about-text88">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="about-text89">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name3"
          text111111111={
            <Fragment>
              <span className="about-text90">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="about-text91">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .about-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .about-text10 {
            display: inline-block;
          }
          .about-text11 {
            display: inline-block;
          }
          .about-text12 {
            display: inline-block;
          }
          .about-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .about-thq-about-volues-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: 11116d;
          }
          .about-text15 {
            font-family: 'Inter';
          }
          .about-text16 {
            font-family: 'Inter';
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-doubleunit);
            background-color: 11116d;
          }
          .about-thq-what-we-offer-elm {
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: center;
            padding-top: var(--dl-layout-space-tripleunit);
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-tripleunit);
            justify-content: center;
          }
          .about-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .about-text17 {
            font-family: 'Inter';
          }
          .about-thq-card1-elm {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius50);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .about-container3 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(157, 51, 148, 0.92) 100%
            );
          }
          .about-text18 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
          }
          .about-text19 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
          }
          .about-thq-card2-elm {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius50);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-pimary-700);
          }
          .about-container4 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(157, 51, 148, 0.92) 100%
            );
          }
          .about-text20 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-layout-space-triplequarter);
            text-align: center;
            font-family: 'Inter';
          }
          .about-text21 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
          }
          .about-thq-card3-elm {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-pimary-700);
          }
          .about-container5 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(157, 51, 148, 0.92) 100%
            );
          }
          .about-text22 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
          }
          .about-text23 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
          }
          .about-thq-card4-elm {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            background-color: var(--dl-color-pimary-700);
          }
          .about-container6 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgb(0, 0, 0) 0%,
              rgba(157, 51, 148, 0.92) 100%
            );
          }
          .about-text24 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
          }
          .about-text25 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
          }
          .about-thq-our-story-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-cardradius);
            margin-bottom: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            background-color: 00A8A8;
          }
          .about-thq-heading-elm1 {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .about-text26 {
            text-align: center;
            font-family: 'Inter';
          }
          .about-thq-our-mission-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: #11116d;
          }
          .about-thq-heading-elm2 {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .about-text27 {
            text-align: center;
            font-family: 'Inter';
          }
          .about-thq-our-vision-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: #11116d;
          }
          .about-thq-heading-elm3 {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .about-text28 {
            text-align: center;
            font-family: 'Inter';
          }
          .about-thq-core-commitment-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-cardradius);
            margin-bottom: var(--dl-layout-space-doubleunit);
            flex-direction: column;
            background-color: #11116d;
          }
          .about-thq-heading-elm4 {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .about-text29 {
            text-align: center;
            font-family: 'Inter';
          }
          .about-thq-cta-elm {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            background-color: #050505;
          }
          .about-text30 {
            color: var(--dl-color-secondary-700);
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
          }
          .about-text31 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .about-link2 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
          }
          .about-thq-why-volues-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unitandhalf);
            padding-right: var(--dl-layout-space-unitandhalf);
            flex-direction: column;
            justify-content: center;
            background-color: #8a76ff;
          }
          .about-text32 {
            font-family: 'Inter';
          }
          .about-text33 {
            text-align: left;
            font-family: 'Inter';
          }
          .about-thq-we-will-never-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            margin-top: opx;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-doubleunit);
            justify-content: center;
            background-color: #8a76ff;
          }
          .about-text65 {
            font-family: 'Inter';
          }
          .about-text66 {
            font-family: 'Inter';
          }
          .about-text74 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text75 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text76 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .about-text77 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text78 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text79 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text80 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .about-text81 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .about-text82 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text83 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text84 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .about-text85 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text86 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text87 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text88 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text89 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text90 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .about-text91 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .about-thq-what-we-offer-elm {
              align-items: center;
              flex-direction: column;
            }
            .about-thq-card1-elm {
              width: 90%;
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .about-thq-card2-elm {
              width: 90%;
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .about-thq-card3-elm {
              width: 90%;
            }
            .about-thq-card4-elm {
              width: 90%;
            }
            .about-thq-cta-elm {
              width: 90%;
              background-color: #050505;
            }
            .about-text74 {
              color: #050505;
              font-family: Inter;
            }
            .about-text75 {
              color: #050505;
            }
            .about-text76 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .about-text77 {
              color: #050505;
              font-family: Inter;
            }
            .about-text78 {
              color: #050505;
              font-family: Inter;
            }
            .about-text79 {
              color: #050505;
              font-family: Inter;
            }
            .about-text80 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .about-text81 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .about-text82 {
              color: #050505;
              font-family: Inter;
            }
            .about-text83 {
              color: #050505;
              font-family: Inter;
            }
            .about-text84 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .about-text85 {
              color: #050505;
              font-family: Inter;
            }
            .about-text86 {
              color: #050505;
              font-family: Inter;
            }
            .about-text87 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .about-text88 {
              color: #050505;
              font-family: Inter;
            }
            .about-text89 {
              color: #050505;
              font-family: Inter;
            }
            .about-text90 {
              color: #050505;
              font-family: Inter;
            }
            .about-text91 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .about-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .about-thq-cta-elm {
              background-color: #050505;
            }
            .about-link2 {
              padding-bottom: var(--dl-layout-space-unit);
            }
            .about-text74 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text75 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text76 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .about-text77 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text78 {
              color: #050505;
              font-family: Inter;
            }
            .about-text79 {
              color: #050505;
              font-family: Inter;
            }
            .about-text80 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .about-text81 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .about-text82 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text83 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text84 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .about-text85 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text86 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text87 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text88 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text89 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text90 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .about-text91 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .about-container1 {
              background-color: #050505;
            }
            .about-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .about-thq-about-volues-elm {
              width: 90%;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-halfunit);
              border-radius: var(--dl-layout-radius-imageradius);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              background-color: #11116d;
            }
            .about-text15 {
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .about-text16 {
              width: 80%;
              font-size: 18px;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-doubleunit);
              background-color: rgb(17, 17, 109);
            }
            .about-thq-what-we-offer-elm {
              margin-top: var(--dl-layout-space-doubleunit);
              padding-top: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-doubleunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
              background-color: #050505;
            }
            .about-container2 {
              align-items: center;
              justify-content: center;
            }
            .about-text17 {
              color: #c3c5c9;
              width: 289px;
              font-size: 25px;
              align-self: flex-end;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
            }
            .about-thq-card1-elm {
              width: 90%;
              border-color: var(--dl-color-secondary-700);
              border-width: 1px;
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-halfunit);
              background-color: var(--dl-color-pimary-700);
            }
            .about-container3 {
              width: 2rem;
              height: 2rem;
              background-image: linear-gradient(
                180deg,
                rgb(0, 0, 0) 0%,
                rgba(157, 51, 148, 0.92) 100%
              );
            }
            .about-text18 {
              color: var(--dl-color-secondary-100);
              font-size: 18px;
              font-style: inherit;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              font-weight: 500;
            }
            .about-text19 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
            }
            .about-thq-card2-elm {
              width: 90%;
              border-color: var(--dl-color-secondary-700);
              border-width: 1px;
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-halfunit);
              background-color: var(--dl-color-pimary-700);
            }
            .about-container4 {
              width: 2rem;
              height: 2rem;
              background-image: linear-gradient(
                180deg,
                rgb(0, 0, 0) 0%,
                rgba(157, 51, 148, 0.92) 100%
              );
            }
            .about-text20 {
              color: var(--dl-color-secondary-100);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-triplequarter);
              text-align: center;
              font-family: Inter;
              font-weight: 500;
            }
            .about-text21 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
            }
            .about-thq-card3-elm {
              width: 90%;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-secondary-700);
              border-width: 1px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-halfunit);
              background-color: var(--dl-color-pimary-700);
            }
            .about-container5 {
              width: 2rem;
              height: 2rem;
            }
            .about-text22 {
              color: var(--dl-color-secondary-100);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              font-weight: 500;
            }
            .about-text23 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
            }
            .about-thq-card4-elm {
              width: 90%;
              margin-top: var(--dl-layout-space-halfunit);
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-secondary-700);
              border-width: 1px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              background-color: var(--dl-color-pimary-700);
            }
            .about-container6 {
              width: 2rem;
              height: 2rem;
            }
            .about-text24 {
              color: var(--dl-color-secondary-100);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              font-weight: 500;
            }
            .about-text25 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
            }
            .about-thq-our-story-elm {
              width: 90%;
              display: block;
              margin-left: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-unit);
              background-color: #00a8a8;
            }
            .about-thq-heading-elm1 {
              color: var(--dl-color-pimary-900);
              width: 100%;
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .about-text26 {
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
            .about-thq-our-mission-elm {
              width: 90%;
              display: block;
              margin-left: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-unit);
              background-color: #11116d;
            }
            .about-thq-heading-elm2 {
              color: var(--dl-color-pimary-900);
              width: 100%;
              display: flex;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .about-text27 {
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
            .about-thq-our-vision-elm {
              width: 90%;
              display: block;
              margin-left: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-unit);
              background-color: #11116d;
            }
            .about-thq-heading-elm3 {
              color: var(--dl-color-pimary-900);
              width: 100%;
              display: flex;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .about-text28 {
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
            .about-thq-core-commitment-elm {
              width: 90%;
              display: block;
              margin-left: 0px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-unit);
              background-color: #11116d;
            }
            .about-thq-heading-elm4 {
              color: var(--dl-color-pimary-900);
              width: 100%;
              display: flex;
              font-size: 24px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .about-text29 {
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
            .about-thq-cta-elm {
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
            .about-text30 {
              fill: var(--dl-color-gray-900);
              color: var(--dl-color-gray-900);
              font-size: 18px;
              font-style: inherit;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .about-text31 {
              fill: var(--dl-color-gray-900);
              color: var(--dl-color-gray-900);
              font-size: 18px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .about-link2 {
              fill: var(--dl-color-secondary-700);
              color: var(--dl-color-secondary-700);
              padding-top: 0px;
              border-radius: var(--dl-layout-radius-buttonradius);
              padding-bottom: 0px;
            }
            .about-thq-why-volues-elm {
              width: 100%;
              align-self: center;
              margin-top: 0px;
              align-items: center;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: 0px;
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: #8a7cff;
            }
            .about-text32 {
              display: flex;
              font-size: 24px;
              align-self: center;
              margin-top: var(--dl-layout-space-unit);
              align-items: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .about-text33 {
              display: flex;
              font-size: 16px;
              align-self: flex-start;
              font-style: normal;
              text-align: center;
              align-items: flex-start;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.625;
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: flex-start;
            }
            .about-text34 {
              text-align: left;
            }
            .about-text35 {
              text-align: left;
            }
            .about-text36 {
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text37 {
              text-align: left;
              font-weight: 400;
            }
            .about-text38 {
              text-align: left;
            }
            .about-text39 {
              text-align: left;
            }
            .about-text40 {
              text-align: left;
            }
            .about-text41 {
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text42 {
              text-align: left;
            }
            .about-text43 {
              text-align: left;
            }
            .about-text44 {
              text-align: left;
            }
            .about-text45 {
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text46 {
              text-align: left;
            }
            .about-text47 {
              text-align: left;
            }
            .about-text48 {
              text-align: left;
            }
            .about-text49 {
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text50 {
              text-align: left;
            }
            .about-text51 {
              text-align: left;
            }
            .about-text52 {
              text-align: left;
            }
            .about-text53 {
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text54 {
              text-align: left;
            }
            .about-text55 {
              text-align: left;
            }
            .about-text56 {
              text-align: left;
            }
            .about-text57 {
              text-align: left;
            }
            .about-text58 {
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text59 {
              text-align: left;
            }
            .about-text60 {
              text-align: left;
            }
            .about-text61 {
              text-align: left;
            }
            .about-text62 {
              text-align: left;
            }
            .about-thq-we-will-never-elm {
              width: 100%;
              align-self: center;
              margin-top: 0px;
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
              background-color: #8a7cff;
            }
            .about-text63 {
              display: flex;
              font-size: 24px;
              align-self: center;
              margin-top: var(--dl-layout-space-unit);
              align-items: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .about-text66 {
              display: flex;
              font-size: 16px;
              align-self: flex-start;
              font-style: normal;
              text-align: center;
              align-items: flex-start;
              font-family: Inter;
              font-weight: 300;
              line-height: 1.2;
              margin-left: var(--dl-layout-space-doubleunit);
              margin-right: var(--dl-layout-space-doubleunit);
              margin-bottom: var(--dl-layout-space-doubleunit);
              flex-direction: column;
              justify-content: flex-start;
            }
            .about-text74 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text75 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text76 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text77 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text78 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text79 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text80 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .about-text81 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .about-text82 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text83 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text84 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .about-text85 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text86 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text87 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text88 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text89 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text90 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .about-text91 {
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

export default About

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
