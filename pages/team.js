import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const Team = (props) => {
  return (
    <>
      <div className="team-container10">
        <Head>
          <title>
            Team - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Team - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/team" />
          <meta property="og:url" content="https://mgnt.teleporthq.site/team" />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="team-text10">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="team-text11">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="team-text12">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="team-link1">
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
          rootClassName="thq-header-elmroot-class-name19"
        ></ThqHeaderElm>
        <div className="team-container11">
          <h1 className="team-text15">Our Team</h1>
          <span className="team-text16">
            The people responsible for the systems we build
          </span>
          <span className="team-text17">
            Behind every reliable digital system is a group of individuals
            committed to thoughtful engineering and responsible execution. Our
            team brings together expertise in technology, design, and digital
            strategy to deliver solutions that organizations can depend on.
          </span>
        </div>
        <div className="team-container12">
          <div className="team-thq-team-elm">
            <div className="team-container13">
              <Link href="/nuradeen">
                <a className="team-link2">
                  <div className="team-thq-nuradeen-elm">
                    <div className="team-container14">
                      <img
                        alt="image"
                        src="/nuradeenprofile%5B1%5D-200w.webp"
                        className="team-image1"
                      />
                      <h1 className="team-text18">Chief technology Officer</h1>
                    </div>
                    <h1 className="team-text19">Nuradeen Zakariyya</h1>
                    <div className="team-container15">
                      <div className="team-container16">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4m8-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/princess">
                <a className="team-link3">
                  <div className="team-container17">
                    <div className="team-container18">
                      <img
                        alt="image"
                        src="/princess-200h.webp"
                        className="team-image2"
                      />
                      <h1 className="team-text20">
                        Product &amp; Strategy Lead
                      </h1>
                    </div>
                    <h1 className="team-text21">Princess Olayinka Folarin </h1>
                    <div className="team-container19">
                      <div className="team-container20">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4m8-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/trisha">
                <a className="team-link4">
                  <div className="team-container21">
                    <div className="team-container22">
                      <img
                        alt="image"
                        src="/zero-pamungkas-vvlyrnabmng-unsplash_1-200h.webp"
                        className="team-image3"
                      />
                      <h1 className="team-text22">
                        Design &amp; User EXPERIENCE LEAD
                      </h1>
                      <h1 className="team-text23">Trisha Vihaan</h1>
                    </div>
                    <div className="team-container23">
                      <div className="team-container24">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4m8-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/leo">
                <a className="team-link5">
                  <div className="team-container25">
                    <div className="team-container26">
                      <img
                        alt="image"
                        src="/external/evaristo-villegas-hkhxx_vbb7e-unsplash_1-200h.webp"
                        className="team-image4"
                      />
                      <h1 className="team-text24">
                        Engineering &amp; SYSTEMS LEAD
                      </h1>
                    </div>
                    <h1 className="team-text25">Leo Cooper</h1>
                    <div className="team-container27">
                      <div className="team-container28">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4m8-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="team-text26">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="team-text27">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="team-text28">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="team-text29">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="team-text30">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="team-text31">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="team-text32">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="team-text33">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="team-text34">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="team-text35">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="team-text36">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="team-text37">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="team-text38">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="team-text39">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="team-text40">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="team-text41">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name5"
          text111111111={
            <Fragment>
              <span className="team-text42">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="team-text43">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .team-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .team-text10 {
            display: inline-block;
          }
          .team-text11 {
            display: inline-block;
          }
          .team-text12 {
            display: inline-block;
          }
          .team-link1 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .team-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .team-text15 {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .team-text16 {
            display: flex;
            font-size: 12px;
            align-self: center;
            font-style: normal;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            font-weight: 100;
            justify-content: center;
          }
          .team-text17 {
            width: 70%;
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-tripleunit);
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            animation-name: none;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .team-container12 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .team-thq-team-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .team-container13 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-doubleunit);
            padding-right: var(--dl-layout-space-doubleunit);
            flex-direction: row;
          }
          .team-link2 {
            display: contents;
          }
          .team-thq-nuradeen-elm {
            width: 70%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .team-container14 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-image1 {
            width: 100px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .team-text18 {
            color: var(--dl-color-secondary-700);
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            text-transform: uppercase;
          }
          .team-text19 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .team-container15 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-container16 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .team-link3 {
            display: contents;
          }
          .team-container17 {
            width: 70%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .team-container18 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-image2 {
            width: 100px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .team-text20 {
            color: var(--dl-color-secondary-700);
            font-size: 12px;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            text-transform: uppercase;
          }
          .team-text21 {
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .team-container19 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-container20 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .team-link4 {
            display: contents;
          }
          .team-container21 {
            width: 70%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .team-container22 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-image3 {
            width: 100px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .team-text22 {
            color: var(--dl-color-secondary-700);
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
            text-transform: uppercase;
          }
          .team-text23 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .team-container23 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-container24 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .team-link5 {
            display: contents;
          }
          .team-container25 {
            width: 70%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .team-container26 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-image4 {
            width: 100px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .team-text24 {
            color: var(--dl-color-secondary-700);
            font-size: 12px;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            text-transform: uppercase;
          }
          .team-text25 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .team-container27 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-layout-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .team-container28 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .team-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text27 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text28 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .team-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text31 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text32 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .team-text33 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .team-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text35 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text36 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .team-text37 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text38 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text39 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text40 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text41 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text42 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .team-text43 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .team-container10 {
              background-color: #050505;
            }
            .team-text18 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text19 {
              color: var(--dl-color-pimary-700);
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text20 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              text-transform: uppercase;
            }
            .team-text21 {
              color: var(--dl-color-pimary-700);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text22 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text23 {
              color: var(--dl-color-pimary-700);
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text24 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              text-transform: uppercase;
            }
            .team-text25 {
              color: var(--dl-color-pimary-700);
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text26 {
              color: #050505;
              font-family: Inter;
            }
            .team-text27 {
              color: #050505;
            }
            .team-text28 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .team-text29 {
              color: #050505;
              font-family: Inter;
            }
            .team-text30 {
              color: #050505;
              font-family: Inter;
            }
            .team-text31 {
              color: #050505;
              font-family: Inter;
            }
            .team-text32 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .team-text33 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .team-text34 {
              color: #050505;
              font-family: Inter;
            }
            .team-text35 {
              color: #050505;
              font-family: Inter;
            }
            .team-text36 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .team-text37 {
              color: #050505;
              font-family: Inter;
            }
            .team-text38 {
              color: #050505;
              font-family: Inter;
            }
            .team-text39 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .team-text40 {
              color: #050505;
              font-family: Inter;
            }
            .team-text41 {
              color: #050505;
              font-family: Inter;
            }
            .team-text42 {
              color: #050505;
              font-family: Inter;
            }
            .team-text43 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .team-container10 {
              align-items: center;
              justify-content: center;
            }
            .team-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .team-container11 {
              margin-top: var(--dl-layout-space-fiveunits);
            }
            .team-thq-team-elm {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .team-container13 {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .team-thq-nuradeen-elm {
              width: 50%;
              margin-bottom: var(--dl-layout-space-tripleunit);
            }
            .team-text18 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text19 {
              color: var(--dl-color-pimary-700);
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-container17 {
              width: 50%;
              padding-bottom: var(--dl-layout-space-tripleunit);
            }
            .team-text20 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text21 {
              color: var(--dl-color-pimary-700);
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-container21 {
              width: 50%;
              margin-bottom: var(--dl-layout-space-tripleunit);
            }
            .team-text22 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-container25 {
              width: 50%;
            }
            .team-text24 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              text-transform: uppercase;
            }
            .team-text25 {
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text27 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text28 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .team-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text30 {
              color: #050505;
              font-family: Inter;
            }
            .team-text31 {
              color: #050505;
              font-family: Inter;
            }
            .team-text32 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .team-text33 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .team-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text35 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text36 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .team-text37 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text38 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text39 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text40 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text41 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text42 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .team-text43 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .team-container10 {
              background-color: #050505;
            }
            .team-link1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .team-container11 {
              width: 100%;
              height: auto;
            }
            .team-text16 {
              display: flex;
              font-size: 12px;
              align-self: center;
              font-style: inherit;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 100;
              justify-content: center;
            }
            .team-text17 {
              width: 70%;
              display: flex;
              font-size: 16px;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-layout-space-tripleunit);
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              animation-name: none;
              animation-delay: 0s;
              justify-content: center;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .team-container12 {
              width: 90%;
              margin-top: var(--dl-layout-space-fiveunits);
              margin-bottom: var(--dl-layout-space-tripleunit);
              background-color: var(--dl-color-theme-neutral-dark);
            }
            .team-container13 {
              align-items: center;
              padding-left: 0px;
              flex-direction: column;
              justify-content: center;
              background-color: #050505;
            }
            .team-thq-nuradeen-elm {
              width: 70%;
            }
            .team-text18 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text19 {
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-container15 {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .team-text20 {
              color: var(--dl-color-secondary-700);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text21 {
              width: 100%;
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text22 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text23 {
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text24 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 12px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
            .team-text25 {
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text26 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text27 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text28 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text29 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text30 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text31 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text32 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .team-text33 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .team-text34 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text35 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text36 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .team-text37 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text38 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text39 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text40 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text41 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text42 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .team-text43 {
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

export default Team

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
