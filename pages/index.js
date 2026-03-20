import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Label from '../components/label'
import Counter1 from '../components/counter1'
import Label1 from '../components/label1'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container10 reveal-group">
        <Head>
          <title>
            Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/" />
          <meta property="og:url" content="https://mgnt.teleporthq.site/" />
        </Head>
        <div className="home-thq-hero-elm">
          <div className="home-thq-mobile-menu-elm">
            <ThqHeaderElm
              text={
                <Fragment>
                  <span className="home-text100">Homes</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="home-text101">Our Services</span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="home-text102">About Us</span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <Link href="/contact">
                    <a className="home-link10">
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
            ></ThqHeaderElm>
          </div>
          <div className="home-thq-bg-elm"></div>
          <div className="home-thq-hero-text-and-button-elm">
            <animate-on-reveal animation="fadeInUp" delay="0ms">
              <div
                data-thq-animate-on-reveal="true"
                className="home-thq-hero-text-elm"
              >
                <h1 className="home-text105">
                  Building High-Performance Digital Products That Scale.
                </h1>
                <animate-on-reveal
                  animation="zoomIn"
                  duration="600ms"
                  delay="0s"
                  direction="normal"
                  easing="ease-in-out"
                  iteration="1"
                >
                  <span
                    data-thq-animate-on-reveal="true"
                    className="home-text106"
                  >
                    Volues is a digital product and growth partner that designs,
                    builds, and scales high-performance web, mobile, and
                    digital  marketing systems for ambitious businesses.
                  </span>
                </animate-on-reveal>
              </div>
            </animate-on-reveal>
            <img alt="image" src="/white-vector.svg" className="home-image10" />
            <div className="home-thq-buttons-container-elm">
              <Link href="/proposal">
                <a className="home-link11 button">
                  Get a Personalized Proposal
                </a>
              </Link>
              <Link href="/quote">
                <a className="home-link12 button">Get a quote</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-thq-sub-hero-section-elm">
          <video
            src="/subhero_vid%5B1%5D.mp4"
            loop="true"
            muted="true"
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            preload="auto"
            autoPlay="true"
            playsInline="true"
            className="home-thq-video-elm"
          ></video>
          <div className="home-thq-dim-container-elm1"></div>
          <animate-on-reveal
            animation="slideInUp"
            duration="600ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <h1
              data-thq-animate-on-reveal="true"
              className="home-thq-heading-elm1"
            >
              Strategy in Motion, Execution in Control
            </h1>
          </animate-on-reveal>
        </div>
        <div className="home-thq-client-slider-elm">
          <animate-on-reveal
            animation="fadeIn"
            duration="600ms"
            delay="0ms"
            easing="ease-out"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="home-thq-texts-elm1"
            >
              <animate-on-reveal
                animation="fadeInUp"
                duration="600ms"
                delay="0ms"
                direction="normal"
                easing="ease-out"
                iteration="1"
              >
                <h1
                  data-thq-animate-on-reveal="true"
                  className="home-thq-heading-elm2"
                >
                  Precision in Practice.
                </h1>
              </animate-on-reveal>
              <animate-on-reveal
                animation="fadeInLeft"
                duration="600ms"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <span
                  data-thq-animate-on-reveal="true"
                  className="home-thq-text-elm"
                >
                  A testament to our commitment to performance and long-term
                  partnership
                </span>
              </animate-on-reveal>
            </div>
          </animate-on-reveal>
          <div id="clogo-top" className="home-thq-logos-container-elm1">
            <img
              alt="image"
              src="/icons8-zebra-danio-fish-64-200h.webp"
              className="home-image11"
            />
            <img
              alt="image"
              src="/icons8-construction-50-200h.webp"
              className="home-image12"
            />
            <img
              alt="image"
              src="/icons8-spoon-logo-60-200h.webp"
              className="home-image13"
            />
            <img
              alt="image"
              src="/icons8-accusoft-64-200h.webp"
              className="home-image14"
            />
            <img
              alt="image"
              src="/icons8-fiverr-50-200h.webp"
              className="home-image15"
            />
            <img
              alt="image"
              src="/super_wolves%5B1%5D-200w.webp"
              className="home-image16"
            />
            <img
              alt="image"
              src="/icons8-arduino-50-200h.webp"
              className="home-image17"
            />
            <img
              alt="image"
              src="/icons8-samsung-48-200h.webp"
              className="home-image18"
            />
            <img
              alt="image"
              src="/wolfstance%5B1%5D-200h.webp"
              className="home-image19"
            />
            <img
              alt="image"
              src="/icons8-vnv-64-200h.webp"
              className="home-image20"
            />
          </div>
          <div id="clogo-bottom" className="home-thq-logos-container-elm2">
            <img
              alt="image"
              src="/icons8-logo-64-200h.webp"
              className="home-image21"
            />
            <img
              alt="image"
              src="/icons8-shopee-40-200h.webp"
              className="home-image22"
            />
            <img
              alt="image"
              src="/icons8-bandcamp-button-50-200h.webp"
              className="home-image23"
            />
            <img
              alt="image"
              src="/icons8-payconiq-50-200h.webp"
              className="home-image24"
            />
            <img
              alt="image"
              src="/icons8-nederlandse-spoorwegen-48-200h.webp"
              className="home-image25"
            />
            <img
              alt="image"
              src="/icons8-ikea-50-200h.webp"
              className="home-image26"
            />
            <img
              alt="image"
              src="/icons8-mack-logo-50-200h.webp"
              className="home-image27"
            />
            <img
              alt="image"
              src="/icons8-nutella-48-200h.webp"
              className="home-image28"
            />
            <img
              alt="image"
              src="/icons8-speaker-deck-64-200h.webp"
              className="home-image29"
            />
            <img
              alt="image"
              src="/icons8-aorus-64-200h.webp"
              className="home-image30"
            />
          </div>
          <div>
            <div className="home-container12">
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n  /* Base style for both tracks */\n  #clogo-top,\n  #clogo-bottom {\n    display: flex;\n    width: max-content;\n    white-space: nowrap;\n    gap: 40px;\n    /* Adjust spacing between logos */\n    margin-bottom: 20px;\n    /* Space between the two rows */\n  }\n\n  /* Keyframe for the scroll */\n  @keyframes scroll {\n    0% {\n      transform: translateX(0);\n    }\n\n    100% {\n      transform: translateX(-50%);\n    }\n  }\n\n  /* Row 1: Left to Right */\n  #clogo-top {\n    animation: scroll 40s linear infinite;\n  }\n\n  /* Row 2: Right to Left (Opposite Direction) */\n  #clogo-bottom {\n    /* 'reverse' makes it go the other way automatically */\n    animation: scroll 40s linear infinite reverse;\n  }\n\n  /* Optional: Pause both when you hover over the section */\n  #clogo-top:hover,\n  #clogo-bottom:hover {\n    animation-play-state: paused;\n  }\n",
                  }}
                />
              </React.Fragment>
            </div>
          </div>
        </div>
        <animate-on-reveal
          animation="fadeIn"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease-out"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-thq-services-carousels-elm"
          >
            <Label text="Precision, Performance, Partnership"></Label>
            <animate-on-reveal
              animation="fadeInUp"
              duration="600ms"
              delay="0ms"
              easing="ease-out"
            >
              <h1 data-thq-animate-on-reveal="true" className="home-text107">
                Engineered for scale, Build for impact
              </h1>
            </animate-on-reveal>
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="true"
              data-pagination="true"
              data-autoplay-delay="1000"
              className="home-thq-slider-elm1 swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="home-thq-web-dev-slider-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm10">
                    <h1 className="home-text108">Web Development</h1>
                    <span className="home-text109">
                      <span className="home-text110">
                        Every layout, color, and flow is psychologically
                        engineered to guide user behavior
                      </span>
                      <br className="home-text111"></br>
                      <span className="home-text112">
                        We build experiences that convert curiosity into
                        commitment.
                      </span>
                    </span>
                    <Link href="/web">
                      <a className="home-link13">learn more...</a>
                    </Link>
                  </div>
                  <div className="home-thq-dim-container-elm2"></div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-mobile-dev-slider-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm11">
                    <h1 className="home-text113">Mobile Development</h1>
                    <span className="home-text114">
                      <span className="home-text115">
                        We study user psychology and behavioral triggers.
                      </span>
                      <br className="home-text116"></br>
                      <span className="home-text117">
                        Then we build systems that turn first-time users into
                        loyal advocates.
                      </span>
                      <br className="home-text118"></br>
                      <br className="home-text119"></br>
                      <span className="home-text120">
                        Your app runs smoothly under pressure, even at scale.
                      </span>
                    </span>
                    <Link href="/mobile">
                      <a className="home-link14">learn more...</a>
                    </Link>
                  </div>
                  <div className="home-thq-dim-container-elm3"></div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-digital-marketing-slider-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm12">
                    <h1 className="home-text121">Digital Marketing</h1>
                    <span className="home-text122">
                      <span className="home-text123">
                        No random boosting. No wasted budget.
                      </span>
                      <br className="home-text124"></br>
                      <span className="home-text125">
                        We design intelligent acquisition systems that maximize
                        ROI.
                      </span>
                      <br className="home-text126"></br>
                      <br className="home-text127"></br>
                      <span className="home-text128">
                        Your business becomes the obvious choice in competitive
                        markets..
                      </span>
                    </span>
                    <Link href="/marketing">
                      <a className="home-link15">learn more...</a>
                    </Link>
                  </div>
                  <div className="home-thq-dim-container-elm4"></div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-enterprise-software-slider-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm13">
                    <h1 className="home-text129">Enterprise Software</h1>
                    <span className="home-text130">
                      <span className="home-text131">
                        ERP, CRM, legacy systems, APIs, unified seamlessly.
                      </span>
                      <br className="home-text132"></br>
                      <span className="home-text133">
                        Your digital ecosystem functions as one intelligent
                        unit.
                      </span>
                      <br className="home-text134"></br>
                      <br className="home-text135"></br>
                      <span className="home-text136">
                        We design enterprise foundations that evolve with
                        policy, growth, and market shifts.
                      </span>
                    </span>
                    <Link href="/software">
                      <a className="home-link16">learn more...</a>
                    </Link>
                  </div>
                  <div className="home-thq-dim-container-elm5"></div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-digital-consulting-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm14">
                    <h1 className="home-text137">Digital Consulting</h1>
                    <span className="home-text138">
                      We analyze your current systems, workflows, and digital
                      presence to design a technology roadmap that aligns with
                      your long-term business goals.
                    </span>
                    <Link href="/consulting">
                      <a className="home-link17">learn more...</a>
                    </Link>
                  </div>
                  <div className="home-thq-dim-container-elm6"></div>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="home-thq-slider-pagination-elm1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="home-thq-slider-button-prev-elm1 swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="home-thq-slider-button-next-elm1 swiper-button-next"
              ></div>
            </div>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="pulse"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease-out"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-thq-metrics-elm"
          >
            <Label text="Beyond Conventional Software."></Label>
            <animate-on-reveal
              animation="fadeInUp"
              duration="600ms"
              delay="0s"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <h1 data-thq-animate-on-reveal="true" className="home-text139">
                Proven by Data. Trusted by Ecosystem Leaders.
              </h1>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeInRight"
              duration="600ms"
              delay="200ms"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <span data-thq-animate-on-reveal="true" className="home-text140">
                Translating complex engineering into quantifiable business
                impact
              </span>
            </animate-on-reveal>
            <Counter1
              text={
                <Fragment>
                  <span className="home-text141">
                    <span className="home-text142">
                      Engineering
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Hours</span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="home-text144">
                    <span>
                      Enterprise
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Ecosystems</span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="home-text147">
                    <span>
                      Net
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text149">
                      Promoter
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Score</span>
                  </span>
                </Fragment>
              }
              heading={
                <Fragment>
                  <span className="home-text151">87,000+</span>
                </Fragment>
              }
              heading1={
                <Fragment>
                  <span className="home-text152">12</span>
                </Fragment>
              }
              heading2={
                <Fragment>
                  <span className="home-text153">78</span>
                </Fragment>
              }
              rootClassName="counter1root-class-name"
            ></Counter1>
            <div className="home-thq-vid-card-elm">
              <video
                src="/the_metrics%5B1%5D.mp4"
                loop="true"
                muted="true"
                poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                autoPlay="true"
                playsInline="true"
                className="home-video1"
              ></video>
            </div>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="pulse"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease-out"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-thq-stack-container-elm"
          >
            <Label1
              text="Built on Proven Frameworks."
              rootClassName="label1root-class-name2"
            ></Label1>
            <animate-on-reveal
              animation="fadeIn"
              duration="600ms"
              delay="0ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-thq-headline-elm"
              >
                <h1 className="home-text154">
                  Moving in Sync with Your Business
                </h1>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="flipInX"
              duration="600ms"
              delay="50ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                id="card1"
                data-thq-animate-on-reveal="true"
                className="home-thq-card1-elm"
              >
                <div className="home-container13">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M8.48 15.98v-1h1.695q-.067.25-.105.491q-.037.24-.045.51zM8.347 21q-1.805 0-3.076-1.241T4 16.73V7.654q-.69 0-1.172-.472q-.482-.473-.482-1.163V4.654q0-.69.482-1.172T4 3h8.673q.69 0 1.182.482q.491.481.491 1.172v1.365q0 .69-.491 1.163q-.492.472-1.182.472v3.737q-.235.163-.437.346t-.384.398H8.481v-1h3.192V7.654H5v9.077q0 1.384.98 2.327T8.347 20q.654 0 1.219-.229q.564-.229 1.008-.63q.104.25.229.459t.283.423q-.56.458-1.252.717q-.692.26-1.487.26M4 6.654h8.673q.27 0 .471-.183q.202-.183.202-.452V4.654q0-.27-.202-.462T12.673 4H4q-.27 0-.461.192t-.193.462v1.365q0 .27.192.452q.193.183.462.183m12.173 12.654q1.166 0 1.987-.821q.82-.821.82-1.987t-.82-1.986q-.821-.822-1.987-.822q-1.165 0-1.986.822q-.821.82-.821 1.986t.82 1.987t1.987.82m5.1 2.982l-2.777-2.777q-.511.388-1.102.592q-.59.204-1.221.204q-1.586 0-2.697-1.111t-1.11-2.697t1.11-2.697t2.697-1.11t2.697 1.11t1.11 2.697q0 .63-.203 1.221q-.204.59-.592 1.102l2.777 2.777zM3.346 6.654V4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h6 className="home-text155">
                  Contextual Research &amp; Problem Definition
                </h6>
                <span className="home-text156">
                  We don&apos;t start building until we fully grasp the problem
                  you are solving. We analyze your requirements through the lens
                  of industry best practices to ensure we are building the right
                  solution, the first time.
                </span>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="flipInY"
              duration="600ms"
              delay="100ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                id="card2"
                data-thq-animate-on-reveal="true"
                className="home-thq-card2-elm"
              >
                <div className="home-container14">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon12"
                  >
                    <path
                      d="M15 22.007H5v-2h10ZM22 4l-4.735 5.955l-.22.27l-5.63 7.19a2.001 2.001 0 1 1-2.83-2.83ZM2.645 7.234A10.84 10.84 0 0 0 1.19 15H2v-1a9.7 9.7 0 0 1 1.69-5.52ZM12 2a10.96 10.96 0 0 0-8.119 3.597L5.025 6.96A7.43 7.43 0 0 1 10 5a7.43 7.43 0 0 1 4.997 1.978l3.55-2.802A10.94 10.94 0 0 0 12 2m6.83 9.2l-.233.287l-.728.93A10 10 0 0 1 18 14v1h4.81a10.88 10.88 0 0 0-1.183-7.318Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h6 className="home-text157">Execution with Intent</h6>
                <span className="home-text158">
                  Our development process is disciplined and focused. We
                  transform complex needs into functional, high-performing
                  software, prioritizing reliability and user experience at
                  every stage of the build.
                </span>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="rubberBand"
              duration="600ms"
              delay="200ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                id="card3"
                data-thq-animate-on-reveal="true"
                className="home-thq-card3-elm"
              >
                <div className="home-container15">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      color="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.253 19.917A9.5 9.5 0 0 0 9.89 2.736m7.364 17.18V17m0 2.917H20.5M6.722 4.1a9.5 9.5 0 0 0 7.389 17.165M6.722 4.1V7m0-2.9H3.5"></path>
                      <path d="M12.5 7L9 12h6l-3.5 5"></path>
                    </g>
                  </svg>
                </div>
                <h6 className="home-text159">Sustainable Evolution</h6>
                <span className="home-text160">
                  A project is never truly &quot;finished&quot; in a growing
                  business. We provide the ongoing expertise required to
                  navigate the complexities of scaling, ensuring your technology
                  remains an asset rather than a constraint.
                </span>
              </div>
            </animate-on-reveal>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="pulse"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease-out"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-thq-evolution-elm"
          >
            <animate-on-reveal
              animation="fadeIn"
              duration="600ms"
              delay="0ms"
              easing="ease-out"
            >
              <h6 data-thq-animate-on-reveal="true" className="home-text161">
                Constant Evolution. Consistent Delivery.
              </h6>
            </animate-on-reveal>
            <animate-on-reveal
              animation="pulse"
              duration="600s"
              delay="0ms"
              easing="ease-out"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-thq-texts-elm2"
              >
                <div className="home-thq-text1-elm">
                  <h3 className="home-text162">
                    Predictable Delivery &amp; Fiscal Discipline
                  </h3>
                  <span className="home-text163">
                    We integrate continuous, rigorous testing, automated and
                    manual, into every phase. This ensures flawless deployment
                    and guarantees peak performance from day one. Post-launch,
                    we maintain stability and security through proactive
                    optimization and continuous monitoring, ensuring reliable
                    scalability.
                  </span>
                </div>
                <animate-on-reveal
                  animation="zoomIn"
                  duration="600ms"
                  delay="200ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="home-thq-text2-elm"
                  >
                    <h3 className="home-text164">
                      Agile Velocity &amp; Streamlined Operations
                    </h3>
                    <span className="home-text165">
                      Speed to market is the ultimate currency. Our methodology
                      prioritizes lean development cycles and rapid iteration,
                      stripping away organizational friction to deliver
                      high-quality digital products that keep you ahead of the
                      curve and responsive to user feedback.
                    </span>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="zoomIn"
                  duration="600ms"
                  delay="300ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="home-thq-text3-elm"
                  >
                    <h3 className="home-text166">
                      Scalable Architecture Future Proof Growth
                    </h3>
                    <span className="home-text167">
                      Developing flexible software and digital assets that
                      evolve with your business and grow seamlessly as your
                      needs change.
                    </span>
                  </div>
                </animate-on-reveal>
              </div>
            </animate-on-reveal>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="pulse"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease-out"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-thq-section1-elm"
          >
            <animate-on-reveal
              animation="pulse"
              duration="600ms"
              delay="0ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-container16"
              >
                <Label
                  text="Operational Excellence, Everytime."
                  rootClassName="labelroot-class-name2"
                ></Label>
                <animate-on-reveal
                  animation="pulse"
                  duration="600ms"
                  delay="0ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="home-thq-work-with-us-elm"
                  >
                    <animate-on-reveal
                      animation="fadeInUp"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="home-container17"
                      >
                        <div className="home-container18">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            className="home-icon18"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                d="M20 6H6v14h14zm0 22H6v14h14zM42 6H28v14h14z"
                                fill="currentColor"
                              ></path>
                              <path d="m28 28l14 14M28 28h14zm0 0v14z"></path>
                            </g>
                          </svg>
                        </div>
                        <animate-on-reveal
                          animation="pulse"
                          duration="600ms"
                          delay="0ms"
                          direction="normal"
                          easing="ease-out"
                          iteration="1"
                        >
                          <h3
                            data-thq-animate-on-reveal="true"
                            className="home-text168"
                          >
                            From Strategic Business Goals to Working Systems
                          </h3>
                        </animate-on-reveal>
                        <animate-on-reveal
                          animation="pulse"
                          duration="600ms"
                          delay="0ms"
                          direction="normal"
                          easing="ease-out"
                          iteration="1"
                        >
                          <span
                            data-thq-animate-on-reveal="true"
                            className="home-text169"
                          >
                            We believe technology should never be built for its
                            own sake. Every project we undertake begins with a
                            deep immersion into your commercial goals. By
                            bridging the gap between high-level strategy and
                            granular engineering, we ensure that the software we
                            deliver doesn&apos;t just function, it performs as a
                            growth engine for your organization.
                          </span>
                        </animate-on-reveal>
                        <animate-on-reveal
                          animation="wobble"
                          duration="600ms"
                          delay="50ms"
                          direction="normal"
                          easing="ease-out"
                          iteration="1"
                        >
                          <Link href="/discuss">
                            <a
                              data-thq-animate-on-reveal="true"
                              className="home-link18"
                            >
                              <span>Let’s Discuss Your Strategy </span>
                              <span>📞</span>
                            </a>
                          </Link>
                        </animate-on-reveal>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="zoomIn"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="home-container19"
                      >
                        <animate-on-reveal
                          animation="slideInUp"
                          duration="600ms"
                          delay="0ms"
                          direction="normal"
                          easing="ease-out"
                          iteration="1"
                        >
                          <div
                            data-thq-animate-on-reveal="true"
                            className="home-thq-team-vid-elm"
                          >
                            <animate-on-reveal
                              animation="pulse"
                              duration="600ms"
                              delay="100ms"
                              direction="normal"
                              easing="ease"
                              iteration="1"
                            >
                              <video
                                src="/volues%20team.mp4"
                                loop="true"
                                muted="true"
                                poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                                autoPlay="true"
                                playsInline="true"
                                data-thq-animate-on-reveal="true"
                                className="home-video2"
                              ></video>
                            </animate-on-reveal>
                          </div>
                        </animate-on-reveal>
                        <animate-on-reveal
                          animation="zoomIn"
                          duration="600ms"
                          delay="0ms"
                          direction="normal"
                          easing="ease-out"
                          iteration="1"
                        >
                          <div
                            data-thq-animate-on-reveal="true"
                            className="home-container20"
                          >
                            <animate-on-reveal
                              animation="zoomIn"
                              duration="600ms"
                              delay="nullms"
                              direction="normal"
                              easing="ease-out"
                              iteration="1"
                            >
                              <h4
                                data-thq-animate-on-reveal="true"
                                className="home-text172"
                              >
                                Unlock Your Business Potential with Proven
                                Digital Strategies
                              </h4>
                            </animate-on-reveal>
                            <animate-on-reveal
                              animation="zoomIn"
                              duration="600ms"
                              direction="normal"
                              easing="ease-out"
                              iteration="1"
                            >
                              <span
                                data-thq-animate-on-reveal="true"
                                className="home-text173"
                              >
                                Whether you’re a founder, visionary
                                entrepreneur, or business leader, Volues
                                provides the digital solutions you need to
                                achieve your goals. From innovative apps and
                                websites to strategic marketing, we turn your
                                vision into measurable success.
                              </span>
                            </animate-on-reveal>
                            <Link href="/quote">
                              <a className="home-link19 button">
                                Get Your Custom Solution
                              </a>
                            </Link>
                          </div>
                        </animate-on-reveal>
                      </div>
                    </animate-on-reveal>
                  </div>
                </animate-on-reveal>
              </div>
            </animate-on-reveal>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="fadeIn"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease-out"
          iteration="1"
        >
          <div data-thq-animate-on-reveal="true" className="home-thq-faqs-elm">
            <animate-on-reveal
              animation="fadeIn"
              duration="600ms"
              delay="0ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <h1
                data-thq-animate-on-reveal="true"
                className="home-thq-heading-elm3"
              >
                Frequently Asked Questions
              </h1>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeIn"
              duration="600ms"
              delay="0ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-thq-faqs-content-elm"
              >
                <animate-on-reveal
                  animation="fadeIn"
                  duration="600ms"
                  delay="0ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq="accordion"
                    data-thq-animate-on-reveal="true"
                    className="home-thq-faqs-element-elm"
                  >
                    <details
                      data-thq="accordion-trigger"
                      className="home-thq-trigger-elm1"
                    >
                      <summary
                        data-thq="accordion-summary"
                        className="home-thq-summary-elm1"
                      >
                        <span className="home-text174">
                          <span>
                            How does
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="home-text176">Volues</span>
                          <span> &quot;</span>
                          <span>engineer</span>
                          <span>
                            &quot; an abstract vision into a profitable reality?
                          </span>
                        </span>
                        <div
                          data-thq="accordion-icon"
                          className="home-thq-icon-container-elm1"
                        >
                          <svg width="32" height="32" viewBox="0 0 24 24">
                            <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </summary>
                    </details>
                    <div data-thq="accordion-content">
                      <div className="home-container21">
                        <p className="home-text180">
                          Our process bridges the gap between creative ambition
                          and bottom-line performance. It starts with High-Value
                          Strategy, where we take your abstract vision and map
                          it against market demand, competitive threats, and
                          resource availability. We then move into Relentless
                          Execution, deploying strategies that are validated by
                          thousands of hours of experience and refined to
                          deliver rapid, measurable results. We don&apos;t
                          guess, we guarantee that every action is a calculated
                          step toward accelerated, profitable reality
                        </p>
                      </div>
                    </div>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="600ms"
                  delay="100ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq="accordion"
                    data-thq-animate-on-reveal="true"
                    className="home-thq-faqs-element1-elm"
                  >
                    <details
                      data-thq="accordion-trigger"
                      className="home-thq-trigger-elm2"
                    >
                      <summary
                        data-thq="accordion-summary"
                        className="home-thq-summary-elm2"
                      >
                        <span className="home-text181">
                          We already have internal teams. Are you a strategy
                          firm or an execution partner?
                        </span>
                        <div
                          data-thq="accordion-icon"
                          className="home-thq-icon-container-elm2"
                        >
                          <svg width="32" height="32" viewBox="0 0 24 24">
                            <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </summary>
                    </details>
                    <div data-thq="accordion-content">
                      <div className="home-container22">
                        <p className="home-text182">
                          We are both, designed to be the strategic accelerator
                          your existing teams need. Our value comes from
                          providing 10,000+ Hours of Strategy &amp; Development
                          expertise to create the roadmap, then acting as an
                          execution partner to ensure flawless delivery. We
                          identify and dismantle performance bottlenecks, giving
                          your internal teams the clarity and leverage they need
                          to hit ambitious targets without getting bogged down
                          in complexity.
                        </p>
                      </div>
                    </div>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="600ms"
                  delay="200s"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq="accordion"
                    data-thq-animate-on-reveal="true"
                    className="home-thq-faqs-element2-elm"
                  >
                    <details
                      data-thq="accordion-trigger"
                      className="home-thq-trigger-elm3"
                    >
                      <summary
                        data-thq="accordion-summary"
                        className="home-thq-summary-elm3"
                      >
                        <span className="home-text183">
                          What kind of measurable return can we expect from
                          working with Volues?
                        </span>
                        <div
                          data-thq="accordion-icon"
                          className="home-thq-icon-container-elm3"
                        >
                          <svg width="32" height="32" viewBox="0 0 24 24">
                            <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </summary>
                    </details>
                    <div data-thq="accordion-content">
                      <div className="home-container23">
                        <p className="home-text184">
                          Our clients seek us out to solve complex efficiency
                          and growth problems. A key metric we pride ourselves
                          on is a 28% Reduction in Operational Costs for our
                          partners. This means we are highly effective at
                          optimizing workflows, eliminating waste, and
                          streamlining technology, freeing up significant
                          capital that can be reinvested directly into
                          high-growth areas. Our solutions are designed to make
                          you instantly more profitable and competitive.
                        </p>
                      </div>
                    </div>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="600ms"
                  delay="300ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq="accordion"
                    data-thq-animate-on-reveal="true"
                    className="home-thq-faqs-element3-elm"
                  >
                    <details
                      data-thq="accordion-trigger"
                      className="home-thq-trigger-elm4"
                    >
                      <summary
                        data-thq="accordion-summary"
                        className="home-thq-summary-elm4"
                      >
                        <span className="home-text185">
                          How can we be sure that Volues will deliver quality
                          results?
                        </span>
                        <div
                          data-thq="accordion-icon"
                          className="home-thq-icon-container-elm4"
                        >
                          <svg width="32" height="32" viewBox="0 0 24 24">
                            <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </summary>
                    </details>
                    <div data-thq="accordion-content">
                      <div className="home-container24">
                        <p className="home-text186">
                          We measure our success by your satisfaction and the
                          tangible quality of our output. Our commitment is
                          quantified by our 4.9/5.0 Average Client Quality
                          Score, judged directly by our partners. This score is
                          not just a rating; it represents our commitment to
                          superior deliverables, transparent communication, and
                          a partnership model built on integrity. We believe
                          that true growth is only achieved when the quality of
                          the work is exceptional.
                        </p>
                      </div>
                    </div>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="600ms"
                  delay="400ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq="accordion"
                    data-thq-animate-on-reveal="true"
                    className="home-thq-faqs-element5-elm"
                  >
                    <details
                      data-thq="accordion-trigger"
                      className="home-thq-trigger-elm5"
                    >
                      <summary
                        data-thq="accordion-summary"
                        className="home-thq-summary-elm5"
                      >
                        <span className="home-text187">
                          Many firms promise &apos;transformation.&apos; What
                          makes Volues uniquely equipped to deliver this growth
                          where others might fail?
                        </span>
                        <div
                          data-thq="accordion-icon"
                          className="home-thq-icon-container-elm5"
                        >
                          <svg width="32" height="32" viewBox="0 0 24 24">
                            <path d="m12 14l-4-4h8z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </summary>
                    </details>
                    <div data-thq="accordion-content">
                      <div className="home-container25">
                        <p className="home-text188">
                          The difference lies in our precision and confidence.
                          We don&apos;t rely on generic blueprints. Our approach
                          is to first engineer the market-ready strategies that
                          convert your abstract vision into an accelerated,
                          profitable reality. This is only possible because we
                          integrate our strategic expertise with a commitment to
                          efficiency, as demonstrated by our 4.9/5.0 Average
                          Client Quality Score. We deliver superior quality and
                          focused execution that immediately addresses and
                          overcomes the specific, high-stakes challenges where
                          other firms often stall. We focus on concrete,
                          profitable outcomes, not just theoretical
                          possibilities
                        </p>
                      </div>
                    </div>
                  </div>
                </animate-on-reveal>
              </div>
            </animate-on-reveal>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="fadeIn"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease-out"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-thq-reviews-elm"
          >
            <animate-on-reveal
              animation="fadeInUp"
              duration="600ms"
              delay="0s"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <h1 data-thq-animate-on-reveal="true" className="home-text189">
                <span className="home-text190">
                  Trusted by Visionary Brands.  Proven by 
                </span>
                <span className="home-text191">100+ Five-Star</span>
                <span className="home-text192"> Outcomes.</span>
              </h1>
            </animate-on-reveal>
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="true"
              data-pagination="true"
              data-autoplay-delay="1000"
              className="home-thq-slider-elm2 swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="home-thq-sophia-thomas-reviiew-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm15">
                    <h1 className="home-text193">⭐⭐⭐⭐⭐</h1>
                    <span className="home-text194">
                      Volues, are the best, delivered our tele-health site,
                      secure patient records, AI triage, and 24/7 access. 
                    </span>
                    <div className="home-container26">
                      <img
                        alt="image"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/timothy-barlin-dsd0fsqmogi-unsplash_1-1500h.webp"
                        srcSet="/timothy-barlin-dsd0fsqmogi-unsplash_1-1500h.webp 1200w, /timothy-barlin-dsd0fsqmogi-unsplash_1-tablet.webp 800w, /timothy-barlin-dsd0fsqmogi-unsplash_1-mobile.webp 480w"
                        className="home-image31"
                      />
                      <h1 className="home-text195">Sophia Thomas</h1>
                      <span className="home-text196">
                        Chief Technology Officer
                      </span>
                      <span className="home-text197">
                        Meet Doctor Tele-Health
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-max-miller-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm16">
                    <h1 className="home-text198">⭐⭐⭐⭐⭐</h1>
                    <span className="home-text199">
                      Finally, a technical partner that understands the
                      high-stakes nature of real estate. The site performance is
                      elite.
                    </span>
                    <div className="home-container27">
                      <img
                        alt="image"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/blake-wisz-njse08ipz7a-unsplash_1-1500h.webp"
                        srcSet="/blake-wisz-njse08ipz7a-unsplash_1-1500h.webp 1200w, /blake-wisz-njse08ipz7a-unsplash_1-tablet.webp 800w, /blake-wisz-njse08ipz7a-unsplash_1-mobile.webp 480w"
                        className="home-image32"
                      />
                      <h1 className="home-text200">Max Miller</h1>
                      <span className="home-text201">CMO</span>
                      <span className="home-text202">
                        Homescape Constructions
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-aaron-vance-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm17">
                    <h1 className="home-text203">⭐⭐⭐⭐⭐</h1>
                    <span className="home-text204">
                      Intuitive PM tools, API syncs, and secure file sharing.
                      Delivered value beyond expectations
                    </span>
                    <div className="home-container28">
                      <img
                        alt="image"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/test%20boss%206-1500h.webp"
                        srcSet="/test%20boss%206-1500h.webp 1200w, /test%20boss%206-tablet.webp 800w, /test%20boss%206-mobile.webp 480w"
                        className="home-image33"
                      />
                      <h1 className="home-text205">Aaron Vance</h1>
                      <span className="home-text206">Project Manager</span>
                      <span className="home-text207">
                        Quantic Construction LTD
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-maleek-zaiyan-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm18">
                    <h1 className="home-text208">⭐⭐⭐⭐⭐</h1>
                    <span className="home-text209">
                      Volues&apos; e-commerce site boosted our sales, stunning
                      design, fast checkout,with SEO magic.
                    </span>
                    <div className="home-container29">
                      <img
                        alt="image"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/external/sabbir-ahmed-n3dhcywjcs8-unsplash_1-1500h.webp"
                        srcSet="/external/sabbir-ahmed-n3dhcywjcs8-unsplash_1-1500h.webp 1200w, /external/sabbir-ahmed-n3dhcywjcs8-unsplash_1-tablet.webp 800w, /external/sabbir-ahmed-n3dhcywjcs8-unsplash_1-mobile.webp 480w"
                        className="home-image34"
                      />
                      <h1 className="home-text210">Maleek Zaiyan</h1>
                      <span className="home-text211">CEO</span>
                      <span className="home-text212">Prestige Automobiles</span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-destiny-isaac-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm19">
                    <h1 className="home-text213">⭐⭐⭐⭐⭐</h1>
                    <span className="home-text214">
                      Their approach to business automation has saved our agency
                      dozens of hours in manual entry.
                    </span>
                    <div className="home-container30">
                      <img
                        alt="image"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/test%201-1500h.webp"
                        srcSet="/test%201-1500h.webp 1200w, /test%201-tablet.webp 800w, /test%201-mobile.webp 480w"
                        className="home-image35"
                      />
                      <h1 className="home-text215">Destiny Isaac</h1>
                      <span className="home-text216">HEAD OF GROWTH</span>
                      <span className="home-text217">
                        Westlink Consulting LLC 
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-thq-desta-bryson-elm swiper-slide"
                >
                  <div className="home-thq-text-container-elm20">
                    <h1 className="home-text218">⭐⭐⭐⭐⭐</h1>
                    <span className="home-text219">
                      Volues&apos; dev for our project was precise, OAuth,
                      Supabase sync, and mobile-ready. Highly recommended
                    </span>
                    <div className="home-container31">
                      <img
                        alt="image"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/test%203-1500h.webp"
                        srcSet="/test%203-1500h.webp 1200w, /test%203-tablet.webp 800w, /test%203-mobile.webp 480w"
                        className="home-image36"
                      />
                      <h1 className="home-text220">Desta Bryson</h1>
                      <span className="home-text221">CTO</span>
                      <span className="home-text222">
                        Cyon Logistics and Co
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="home-thq-slider-pagination-elm2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="home-thq-slider-button-prev-elm2 swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="home-thq-slider-button-next-elm2 swiper-button-next"
              ></div>
            </div>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="pulse"
          duration="600ms"
          delay="0ms"
          direction="normal"
          easing="ease"
          iteration="1"
        >
          <div
            data-thq-animate-on-reveal="true"
            className="home-thq-system-elm"
          >
            <Label
              text="We care about your business growth"
              rootClassName="labelroot-class-name"
            ></Label>
            <div className="home-container32">
              <h2 className="home-text223">Clarity Before Commitment</h2>
              <span className="home-text224">
                We understand that the right path forward isn&apos;t always
                obvious. We are here to help you find your footing,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <animate-on-reveal
              animation="pulse"
              duration="600ms"
              delay="0ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-thq-growing-company-section-elm"
              >
                <animate-on-reveal
                  animation="zoomIn"
                  duration="600ms"
                  delay="0ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <video
                    src="/volues_digital_consultation%5B1%5D.mp4"
                    loop="true"
                    muted="true"
                    poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                    autoPlay="true"
                    playsInline="true"
                    data-thq-animate-on-reveal="true"
                    className="home-video3"
                  ></video>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="pulse"
                  duration="600ms"
                  delay="0ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <div
                    data-thq-animate-on-reveal="true"
                    className="home-container33"
                  >
                    <animate-on-reveal
                      animation="pulse"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="home-container34"
                      >
                        <svg
                          viewBox="0 0 967.4605714285714 1024"
                          className="home-icon32"
                        >
                          <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
                        </svg>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease"
                      iteration="1"
                    >
                      <h3
                        data-thq-animate-on-reveal="true"
                        className="home-text225"
                      >
                        Engineering Systems That Withstand Complexity
                      </h3>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="zoomIn"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <span
                        data-thq-animate-on-reveal="true"
                        className="home-text226"
                      >
                        <span className="home-text227">Volues</span>
                        <span className="home-text228">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>
                          designs and delivers production-grade digital systems
                          for organizations operating at scale.
                        </span>
                        <br className="home-text230"></br>
                        <span>
                          We architect secure software platforms,
                          high-availability web infrastructure, intelligent
                          automation layers, and measurable digital performance
                          systems.
                        </span>
                        <br className="home-text232"></br>
                        <span>
                          Our work is structured for long-term stability,
                          regulatory alignment, and operational resilience, not
                          short-term launches.
                        </span>
                      </span>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeInUp"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="home-container35"
                      >
                        <animate-on-reveal
                          animation="fadeInUp"
                          duration="600ms"
                          delay="200ms"
                          easing="ease-out"
                        >
                          <div
                            data-thq-animate-on-reveal="true"
                            className="home-container36"
                          >
                            <svg width="32" height="32" viewBox="0 0 32 32">
                              <path
                                d="M24 21c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C11.2 9 11 8.5 11 8s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm0 24c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C3.2 17 3 16.5 3 16s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </animate-on-reveal>
                        <animate-on-reveal
                          animation="fadeInUp"
                          duration="600ms"
                          delay="200s"
                          easing="ease-out"
                        >
                          <span
                            data-thq-animate-on-reveal="true"
                            className="home-text234"
                          >
                            Enterprise Software Architecture &amp; System
                            Modernization
                          </span>
                        </animate-on-reveal>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeInUp"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="home-container37"
                      >
                        <animate-on-reveal
                          animation="fadeInUp"
                          duration="600ms"
                          delay="0ms"
                          easing="ease-out"
                        >
                          <div
                            data-thq-animate-on-reveal="true"
                            className="home-container38"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </animate-on-reveal>
                        <animate-on-reveal
                          animation="fadeInUp"
                          duration="0ms"
                          easing="ease-out"
                        >
                          <span
                            data-thq-animate-on-reveal="true"
                            className="home-text235"
                          >
                            Digital Growth Infrastructure &amp; Revenue
                            Optimization Systems
                          </span>
                        </animate-on-reveal>
                      </div>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeInUp"
                      duration="600ms"
                      delay="0ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <div
                        data-thq-animate-on-reveal="true"
                        className="home-container39"
                      >
                        <div className="home-container40">
                          <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                              d="m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-8L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <animate-on-reveal
                          animation="fadeInUp"
                          duration="1500ms"
                          delay="0ms"
                        >
                          <span
                            data-thq-animate-on-reveal="true"
                            className="home-text236"
                          >
                            Secure API &amp; Distributed System Engineering
                          </span>
                        </animate-on-reveal>
                      </div>
                    </animate-on-reveal>
                  </div>
                </animate-on-reveal>
              </div>
            </animate-on-reveal>
            <animate-on-reveal>
              <Link href="/quote">
                <a
                  data-thq-animate-on-reveal="true"
                  className="home-link20 magnetic button"
                >
                  Request a quote
                </a>
              </Link>
            </animate-on-reveal>
            <animate-on-reveal
              animation="zoomIn"
              duration="600ms"
              delay="0ms"
              direction="normal"
              easing="ease-out"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-container41"
              >
                <Label text="Operational Capabilities"></Label>
                <animate-on-reveal
                  animation="zoomIn"
                  duration="600ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <h3
                    data-thq-animate-on-reveal="true"
                    className="home-text237"
                  >
                    Volues undertakes technically demanding and operationally
                    sensitive projects.
                  </h3>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="zoomIn"
                  duration="600ms"
                  direction="normal"
                  easing="ease-out"
                  iteration="1"
                >
                  <span
                    data-thq-animate-on-reveal="true"
                    className="home-text238"
                  >
                    <span>
                      We engage where systems must perform under scale,
                      scrutiny, and sustained usage.
                    </span>
                    <br></br>
                    <span>
                      Our engagement model supports full-cycle execution, from
                      system architecture and technical documentation to
                      deployment, monitoring, and lifecycle optimization.
                    </span>
                  </span>
                </animate-on-reveal>
              </div>
            </animate-on-reveal>
          </div>
        </animate-on-reveal>
        <section className="home-thq-ecosystem-elm">
          <div className="home-thq-thq-content-elm-elm">
            <h2 className="home-text242">Our Technology Ecosystem</h2>
            <p className="home-text243">
              We build on trusted global infrastructure to ensure every solution
              we deliver is secure, scalable, and future-ready.
            </p>
          </div>
          <div className="home-thq-thq-partners-desktop-elm-elm">
            <div className="home-thq-thq-column-elm-elm1">
              <div>
                <img
                  alt="image"
                  src="/aws%5B1%5D-200w.webp"
                  className="home-image37"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/microsoft%5B1%5D-200h.webp"
                  className="home-image38"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/cloudflare%5B1%5D-200h.webp"
                  className="home-image39"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/supabase%5B1%5D-200h.webp"
                  className="home-image40"
                />
              </div>
            </div>
            <div className="home-thq-thq-column-elm-elm2">
              <div>
                <img
                  alt="image"
                  src="/google_ads%5B1%5D-200h.webp"
                  className="home-image41"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/meta%5B1%5D-200h.webp"
                  className="home-image42"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/woocommerce%5B1%5D-200h.webp"
                  className="home-image43"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/firebase%5B1%5D-200h.webp"
                  className="home-image44"
                />
              </div>
              <div className="home-thq-thq-partner-elm-elm9"></div>
            </div>
          </div>
          <div className="home-thq-thq-partners-mobile-elm-elm">
            <div className="home-thq-thq-row-elm-elm">
              <div>
                <img
                  alt="image"
                  src="/google_ads%5B1%5D-200h.webp"
                  className="home-image45"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/meta%5B1%5D-200h.webp"
                  className="home-image46"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/woocommerce%5B1%5D-200h.webp"
                  className="home-image47"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/firebase%5B1%5D-200h.webp"
                  className="home-image48"
                />
              </div>
            </div>
            <div className="home-thq-thq-column-elm-elm3">
              <div>
                <img
                  alt="image"
                  src="/aws%5B1%5D-200w.webp"
                  className="home-image49"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/microsoft%5B1%5D-200h.webp"
                  className="home-image50"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/cloudflare%5B1%5D-200h.webp"
                  className="home-image51"
                />
              </div>
              <div>
                <img
                  alt="image"
                  src="/supabase%5B1%5D-200h.webp"
                  className="home-image52"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="home-thq-penultimate-elm">
          <animate-on-reveal
            animation="fadeIn"
            duration="600ms"
            delay="nullms"
            easing="ease-out"
          >
            <h6 data-thq-animate-on-reveal="true" className="home-text244">
              The Lean Logic
            </h6>
          </animate-on-reveal>
          <animate-on-reveal
            animation="pulse"
            duration="600ms"
            easing="ease-out"
          >
            <div
              id="contact-form"
              data-thq-animate-on-reveal="true"
              className="home-container42"
            >
              <animate-on-reveal
                animation="fadeIn"
                duration="600ms"
                delay="0ms"
                direction="normal"
                easing="ease-out"
                iteration="1"
              >
                <h3 data-thq-animate-on-reveal="true" className="home-text245">
                  Software that grows as fast as your ambition.
                </h3>
              </animate-on-reveal>
              <animate-on-reveal
                animation="fadeIn"
                duration="600ms"
                direction="normal"
                easing="ease-out"
                iteration="1"
              >
                <span
                  data-thq-animate-on-reveal="true"
                  className="home-text246"
                >
                  We utilize a battle-tested Lean Stack to move from concept to
                  enterprise-grade deployment in record time
                </span>
              </animate-on-reveal>
              <animate-on-reveal
                animation="pulse"
                duration="600ms"
                delay="0ms"
                easing="ease-out"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="home-thq-services-elm"
                >
                  <animate-on-reveal
                    animation="pulse"
                    duration="600ms"
                    delay="0s"
                    direction="normal"
                    easing="ease-out"
                    iteration="1"
                  >
                    <div
                      data-thq-animate-on-reveal="true"
                      className="home-container43"
                    >
                      <div className="home-container44">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          className="home-icon40"
                        >
                          <path
                            d="M30.8 2.29a.49.49 0 0 0-.45-.29H16.42a.5.5 0 0 0-.42.23l-10.71 17a.49.49 0 0 0 .41.77h7.67L6.6 33.25a.52.52 0 0 0 .46.75h3a.5.5 0 0 0 .37-.16L28 14.85a.5.5 0 0 0-.37-.85h-6.74l9.83-11.18a.49.49 0 0 0 .08-.53"
                            fill="currentColor"
                            className="clr-i-solid clr-i-solid-path-1"
                          ></path>
                          <path d="M0 0h36v36H0z" fill="none"></path>
                        </svg>
                      </div>
                      <h1 className="home-text247">Rapid Prototyping</h1>
                      <span className="home-text248">
                        We use the Lean Stack to build interactive models in
                        days, not months. Identify flaws before they cost you a
                        fortune in development.
                      </span>
                    </div>
                  </animate-on-reveal>
                  <animate-on-reveal
                    animation="pulse"
                    duration="600ms"
                    delay="0ms"
                    direction="normal"
                    easing="ease-out"
                    iteration="1"
                  >
                    <div
                      data-thq-animate-on-reveal="true"
                      className="home-thq-container-elm"
                    >
                      <div className="home-container45">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="home-icon43"
                        >
                          <g
                            fill="currentColor"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          >
                            <path d="M13.47 18.47a.75.75 0 0 1 1.06 0L17 20.94l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06"></path>
                            <path d="M15.591 17.409a2.25 2.25 0 1 0-3.182 3.182l1.021 1.02c-.713.09-1.519.139-2.43.139c-3.59 0-5.547-.767-6.613-1.68c-.536-.46-.825-.939-.977-1.33a2.5 2.5 0 0 1-.156-.648l-.003-.055v-.02l-.001-.01v-.005S3.25 18 4 18h-.75v-2.25A.75.75 0 0 1 4 15c.414-.001.954.266 1.237.568a1 1 0 0 0 .074.072c.69.493 2.256 1.11 5.689 1.11s4.999-.617 5.69-1.11q.045-.033.087-.067c.36-.288.761-.574 1.223-.573a.75.75 0 0 1 .75.75v1.318L17 18.818z"></path>
                            <path d="M4 9a.75.75 0 0 0-.75.75V12H4c-.75 0-.75.002-.75.002v.035a1.4 1.4 0 0 0 .024.215c.021.128.061.296.136.489c.152.39.441.87.977 1.329c1.066.913 3.023 1.68 6.613 1.68s5.547-.767 6.613-1.68c.536-.46.825-.938.977-1.33a2.5 2.5 0 0 0 .156-.648l.003-.055v-.02l.001-.01v-.005S18.75 12 18 12h.75V9.75A.75.75 0 0 0 18 9c-.462-.001-.863.285-1.223.573l-.088.067c-.69.493-2.256 1.11-5.689 1.11s-4.999-.617-5.69-1.11a1 1 0 0 1-.073-.071C4.954 9.266 4.414 8.999 4 9"></path>
                            <path d="M4.387 3.93C5.453 3.018 7.41 2.25 11 2.25s5.547.767 6.613 1.68c.536.46.825.939.977 1.33a2.5 2.5 0 0 1 .156.648a1.2 1.2 0 0 1-.02.344a2.5 2.5 0 0 1-.136.489c-.152.39-.441.87-.977 1.328C16.547 8.983 14.59 9.75 11 9.75s-5.547-.767-6.613-1.68c-.536-.46-.825-.939-.977-1.33a2.5 2.5 0 0 1-.136-.488a1.4 1.4 0 0 1-.024-.256q.002-.125.024-.248c.021-.128.061-.295.136-.489c.152-.39.441-.87.977-1.328"></path>
                          </g>
                        </svg>
                      </div>
                      <h1 className="home-text249">Elastic Scalability</h1>
                      <span className="home-text250">
                        Our NoSQL and PostgreSQL foundation ensures your data
                        architecture evolves with your user base. Whether it’s
                        1,000 or 1,000,000 concurrent requests, the Volues
                        infrastructure scales horizontally without downtime.
                      </span>
                    </div>
                  </animate-on-reveal>
                  <animate-on-reveal
                    animation="pulse"
                    duration="600ms"
                    delay="0ms"
                    direction="normal"
                    easing="ease-out"
                    iteration="1"
                  >
                    <div
                      data-thq-animate-on-reveal="true"
                      className="home-container46"
                    >
                      <div className="home-container47">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          className="home-icon49"
                        >
                          <path
                            d="M23 23c-5.656 0-7.858-6.41-7.949-6.684C15.034 16.265 13.208 11 9 11c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.588 0 3.013-.732 4.237-2.176l1.526 1.293C13.164 22.003 11.172 23 9 23c-3.86 0-7-3.14-7-7s3.14-7 7-7c5.656 0 7.858 6.41 7.949 6.684C16.966 15.735 18.792 21 23 21c2.757 0 5-2.243 5-5s-2.243-5-5-5c-1.588 0-3.013.732-4.237 2.176l-1.526-1.293C18.836 9.997 20.828 9 23 9c3.86 0 7 3.14 7 7s-3.14 7-7 7"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <h1 className="home-text251">Data-Driven Iteration</h1>
                      <span className="home-text252">
                        Our MongoDB-driven insights allow us to predict traffic
                        surges before they happen, scaling your infrastructure
                        automatically to prevent downtime.
                      </span>
                    </div>
                  </animate-on-reveal>
                </div>
              </animate-on-reveal>
              <animate-on-reveal animation="pulse">
                <div
                  id="contact-form"
                  data-thq-animate-on-reveal="true"
                  className="home-thq-contact-form-elm"
                >
                  <Label text="One Message. Infinite Possibilities"></Label>
                  <animate-on-reveal
                    animation="fadeIn"
                    duration="600ms"
                    delay="0ms"
                    direction="normal"
                    easing="ease-out"
                    iteration="1"
                  >
                    <h2
                      data-thq-animate-on-reveal="true"
                      className="home-text253"
                    >
                      Start a Strategic Conversation.
                    </h2>
                  </animate-on-reveal>
                  <animate-on-reveal
                    animation="fadeIn"
                    duration="600ms"
                    delay="0ms"
                    direction="normal"
                    easing="ease-out"
                    iteration="1"
                  >
                    <span
                      data-thq-animate-on-reveal="true"
                      className="home-text254"
                    >
                      Share your goals. Our team will respond with structured
                      clarity and a defined execution path.
                    </span>
                  </animate-on-reveal>
                  <div id="Form" className="home-thq-form-elm">
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="600ms"
                      delay="200ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <h1
                        data-thq-animate-on-reveal="true"
                        className="home-text255"
                      >
                        Want to work with us?
                      </h1>
                    </animate-on-reveal>
                    <animate-on-reveal
                      animation="fadeIn"
                      duration="600ms"
                      direction="normal"
                      easing="ease-out"
                      iteration="1"
                    >
                      <span
                        data-thq-animate-on-reveal="true"
                        className="home-text256"
                      >
                        Complete this form and we will get back to you in 24
                        hours.
                      </span>
                    </animate-on-reveal>
                    <span className="home-text257">FULL NAME</span>
                    <input
                      type="text"
                      id="FULL NAME"
                      placeholder="Full Name"
                      autoComplete="name"
                      className="home-textinput1 TextSM input"
                    />
                    <span className="home-text258">EMAIL</span>
                    <input
                      type="text"
                      id="EMAIL"
                      placeholder="Email"
                      autoComplete="email"
                      className="home-textinput2 TextSM input"
                    />
                    <span className="home-text259">PHONE NUMBER</span>
                    <input
                      type="text"
                      id="PHONE NUMBER"
                      placeholder="PHONE NUMBER"
                      autoComplete="tel"
                      className="home-textinput3 TextSM input"
                    />
                    <span className="home-text260">MESSAGE</span>
                    <textarea
                      id="MESSAGE"
                      cols="80"
                      rows="4"
                      placeholder="Type a message"
                      className="home-textarea TextSM textarea"
                    ></textarea>
                    <div className="home-container48">
                      <div className="home-container49">
                        <button
                          id="submit-btn"
                          type="button"
                          className="home-button button"
                        >
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </animate-on-reveal>
              <div>
                <div className="home-container51">
                  <React.Fragment>
                    <Script>{`
  document.addEventListener("DOMContentLoaded", function () {

  const supabaseClient = supabase.createClient(
    "https://drfbjxkqoahwywnrwcig.supabase.co",
    "sb_publishable_m1waRWmYTNHUZ135sUdTOg_6t5aBTU7"
  );

  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const { error } = await supabaseClient
      .from("contacts") // 👈 change this
      .insert([formData]);

    if (error) {
      console.error(error);
      alert("Something went wrong");
    } else {
      alert("Message sent successfully!");
      form.reset();
    }
  });

});
`}</Script>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </animate-on-reveal>
          <img alt="image" src="/gray-vector.svg" className="home-image53" />
        </div>
        <div className="home-thq-map-elm">
          <iframe
            src="https://www.google.com/maps?q=Aminu Kano Crescent, Wuse, Abuja 904101, Federal Capital Territory, Nigeria&amp;output=embed"
            address="Aminu Kano Crescent, Wuse, Abuja 904101, Federal Capital Territory, Nigeria"
            className="home-google-maps"
          ></iframe>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="home-text261">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text262">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text263">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text264">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text265">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="home-text266">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text267">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="home-text268">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="home-text269">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="home-text270">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="home-text271">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="home-text272">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="home-text273">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="home-text274">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="home-text275">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="home-text276">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name31"
          text111111111={
            <Fragment>
              <span className="home-text277">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="home-text278">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container10 {
            background-color: var(--dl-color-theme-neutral-light);
          }
          .home-thq-hero-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
          }
          .home-thq-mobile-menu-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 12%;
            display: flex;
            z-index: 3200;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-link10 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .home-thq-bg-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 0.7;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 0px;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-thq-hero-text-and-button-elm {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            display: flex;
            overflow: visible;
            position: absolute;
            align-items: center;
            border-color: var(--dl-color-pimary-900);
            border-style: hidden;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-hero-text-elm {
            display: flex;
            overflow: visible;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-text105 {
            color: var(--dl-color-gray-white);
            font-size: 40px;
            text-align: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .home-text106 {
            color: var(--dl-color-gray-900);
            display: flex;
            font-size: 24px;
            max-width: 600px;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            padding-left: var(--dl-layout-space-halfunit);
            align-content: center;
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeInLeft;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in-out;
          }
          .home-image10 {
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            display: none;
            position: absolute;
            object-fit: cover;
          }
          .home-thq-buttons-container-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-tripleunit);
            border-color: rgba(120, 120, 120, 0.4);
            border-style: hidden;
            border-width: 2px;
            flex-direction: column;
          }
          .home-link11 {
            color: #050505;
            width: 50%;
            align-self: center;
            margin-top: 0px;
            text-align: center;
            font-family: 'Inter';
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-link12 {
            color: var(--dl-color-theme-neutral-light);
            width: 50%;
            z-index: 2000;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-unit);
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0);
          }
          .home-thq-sub-hero-section-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 150vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: var(--dl-color-pimary-900);
            border-style: hidden;
            border-width: 1px;
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .home-thq-video-elm {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 150vh;
            z-index: 1;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-color: var(--dl-color-pimary-900);
            border-style: hidden;
            border-width: 1px;
          }
          .home-thq-dim-container-elm1 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            margin: auto;
            display: flex;
            z-index: 9;
            position: absolute;
            align-items: center;
            justify-content: center;
            background-color: rgba(25, 24, 24, 0.5);
          }
          .home-thq-heading-elm1 {
            color: var(--dl-color-pimary-900);
            display: flex;
            z-index: 10;
            font-size: 40px;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            font-family: 'Inter';
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }

          .home-thq-client-slider-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 100;
            overflow: visible;
            position: relative;
            flex-wrap: wrap;
            max-width: 2000px;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            padding-top: var(--dl-layout-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-doubleunit);
            pointer-events: none;
          }
          .home-thq-texts-elm1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-heading-elm2 {
            color: rgb(5, 5, 5);
            font-size: 48px;
            text-align: center;
            font-family: 'Inter';
          }
          .home-thq-text-elm {
            color: rgb(5, 5, 5);
            text-align: center;
            font-family: 'Inter';
          }
          .home-thq-logos-container-elm1 {
            flex: 0 0 auto;
            width: 100%;
            height: 20%;
            display: flex;
            overflow: hidden;
            max-width: 2500px;
            align-items: flex-start;
          }
          .home-image11 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image12 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image13 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image14 {
            width: 35px;
            height: 35px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image15 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image16 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image17 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image18 {
            width: 100px;
            height: 65px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image19 {
            width: 100px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image20 {
            width: 60px;
            height: 60px;
            margin-top: 0px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
            margin-bottom: 0px;
          }
          .home-thq-logos-container-elm2 {
            flex: 0 0 auto;
            width: 100%;
            height: 20%;
            display: flex;
            overflow: hidden;
            max-width: 2500px;
            align-items: flex-start;
          }
          .home-image21 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image22 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image23 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image24 {
            width: 35px;
            height: 35px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image25 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image26 {
            width: 70px;
            height: 70px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image27 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image28 {
            width: 100px;
            height: 65px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image29 {
            width: 100px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
          }
          .home-image30 {
            width: 60px;
            height: 60px;
            margin-top: 0px;
            object-fit: cover;
            margin-left: 40px;
            margin-right: 40px;
            margin-bottom: 0px;
          }
          .home-container12 {
            display: contents;
          }
          .home-thq-services-carousels-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            overflow: visible;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: 80px;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            padding-bottom: 80px;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .home-text107 {
            color: rgb(5, 5, 5);
            width: 100%;
            display: flex;
            font-size: 32px;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
          }
          .home-thq-slider-elm1 {
            width: 100%;
            height: 100vh;
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-thq-web-dev-slider-elm {
            width: 100%;
            display: flex;
            background-size: cover;
            background-image: url('/web_development_volues%5B1%5D-1500h.webp');
          }
          .home-thq-text-container-elm10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 2;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text108 {
            text-align: center;
            font-family: 'Inter';
          }
          .home-text109 {
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            flex-direction: column;
            justify-content: center;
          }
          .home-link13 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
            text-decoration: none;
          }
          .home-thq-dim-container-elm2 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            margin: auto;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(25, 24, 24, 0.5);
          }
          .home-thq-mobile-dev-slider-elm {
            display: flex;
            background-size: cover;
            background-image: url('/mobile_development_volues%5B1%5D-1500h.webp');
          }
          .home-thq-text-container-elm11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 2;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text113 {
            font-family: 'Inter';
          }
          .home-text114 {
            text-align: center;
            font-family: 'Inter';
          }
          .home-link14 {
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            text-decoration: none;
          }
          .home-thq-dim-container-elm3 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            margin: auto;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: center;
            border-color: #787878;
            border-style: dashed;
            border-width: 2px;
            flex-direction: column;
            background-color: rgba(25, 24, 24, 0.5);
          }
          .home-thq-digital-marketing-slider-elm {
            display: flex;
            background-size: cover;
            background-image: url('/digital_marketing_volues%5B1%5D-1500h.webp');
          }
          .home-thq-text-container-elm12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 2;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text121 {
            font-family: 'Inter';
          }
          .home-text122 {
            text-align: center;
            font-family: 'Inter';
          }
          .home-link15 {
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            text-decoration: none;
          }
          .home-thq-dim-container-elm4 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(25, 24, 24, 0.5);
          }
          .home-thq-enterprise-software-slider-elm {
            display: flex;
            align-self: center;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxCdXNpbmVzc3xlbnwwfHx8fDE3NzMwODc2MTJ8MA&ixlib=rb-4.1.0&h=1500');
          }
          .home-thq-text-container-elm13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 2;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text129 {
            font-family: 'Inter';
          }
          .home-text130 {
            text-align: center;
            font-family: 'Inter';
          }
          .home-link16 {
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            text-decoration: none;
          }
          .home-thq-dim-container-elm5 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100vh;
            margin: auto;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(25, 24, 24, 0.5);
          }
          .home-thq-digital-consulting-elm {
            display: flex;
            align-self: center;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1726056652635-7db7a936e7be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3OXx8RGlnaXRhbHxlbnwwfHx8fDE3NzMwODcyMzl8MA&ixlib=rb-4.1.0&h=1500');
          }
          .home-thq-text-container-elm14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 2;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text137 {
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .home-text138 {
            width: 70%;
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
            justify-content: center;
          }
          .home-link17 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .home-thq-dim-container-elm6 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100vh;
            margin: auto;
            display: flex;
            z-index: 1;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(25, 24, 24, 0.5);
          }
          .home-thq-slider-pagination-elm1 {
            display: block;
          }
          .home-thq-slider-button-prev-elm1 {
            display: none;
          }
          .home-thq-slider-button-next-elm1 {
            display: none;
          }
          .home-thq-metrics-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: visible;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-tripleunit);
            animation-name: pulse;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            animation-delay: 0ms;
            background-color: var(--dl-color-pimary-900);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-text139 {
            color: #050505;
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
          }
          .home-text140 {
            color: #050505;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
            animation-name: fadeInRight;
            animation-delay: 0ms;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text141 {
            color: var(--dl-color-theme-neutral-light);
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .home-text142 {
            color: #050505;
          }
          .home-text144 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text147 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text149 {
            color: #050505;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-thq-vid-card-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius50);
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 0ms;
            background-color: var(--dl-color-gray-white);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-video1 {
            width: 100%;
            height: auto;
          }
          .home-thq-stack-container-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: visible;
            position: relative;
            align-self: center;
            align-items: center;
            padding-left: var(--dl-layout-space-halfunit);
            margin-bottom: 0px;
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeInUp;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-tripleunit);
            animation-delay: 0ms;
            justify-content: center;
            background-color: #050505;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-thq-headline-elm {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            align-items: center;
            justify-content: center;
          }
          .home-text154 {
            color: var(--dl-color-pimary-700);
            display: flex;
            overflow: visible;
            font-size: 25px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .home-thq-card1-elm {
            top: 100px;
            flex: 0 0 auto;
            width: 50%;
            height: 400px;
            display: flex;
            z-index: 10;
            overflow: visible;
            position: sticky;
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-twounits);
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 100ms;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(180deg, #f87171, #dc2626);
          }
          .home-text155 {
            color: #050505;
            font-size: 24px;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text156 {
            color: rgb(5, 5, 5);
            font-size: 18px;
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
          }
          .home-thq-card2-elm {
            top: 120px;
            flex: 0 0 auto;
            width: 50%;
            height: 400px;
            display: flex;
            z-index: 20;
            overflow: visible;
            position: sticky;
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-twounits);
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 200ms;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
            animation-duration: 700ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-container14 {
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
            background-image: linear-gradient(180deg, #38bdf8, #0284c7);
          }
          .home-text157 {
            color: #050505;
            font-size: 20px;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text158 {
            color: rgb(5, 5, 5);
            font-size: 18px;
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
          }
          .home-thq-card3-elm {
            top: 140px;
            flex: 0 0 auto;
            width: 50%;
            height: 400px;
            display: flex;
            z-index: 30;
            overflow: visible;
            position: sticky;
            align-self: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 300ms;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
            animation-duration: 800ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-container15 {
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
            background-image: linear-gradient(180deg, #34d399, #059669);
          }
          .home-text159 {
            color: #050505;
            font-size: 20px;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text160 {
            color: rgb(5, 5, 5);
            font-size: 18px;
            text-align: center;
            font-family: 'Inter';
            line-height: 1.625rem;
          }
          .home-thq-evolution-elm {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            margin-top: 0px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0ms;
            background-color: #050505;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-text161 {
            color: var(--dl-color-pimary-700);
            overflow: visible;
            font-size: 30px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
            text-transform: uppercase;
          }
          .home-thq-texts-elm2 {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: #050505;
          }
          .home-thq-text1-elm {
            width: 66%;
            display: flex;
            overflow: visible;
            position: sticky;
            align-items: center;
            border-color: var(--dl-color-pimary-700);
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-text162 {
            color: var(--dl-color-pimary-700);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text163 {
            color: var(--dl-color-pimary-700);
            font-size: 18px;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
            background-color: rgb(5, 5, 5);
          }
          .home-thq-text2-elm {
            width: 66%;
            display: flex;
            overflow: visible;
            position: sticky;
            align-items: center;
            border-color: #c52741;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: var(--dl-layout-space-tripleunit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-text164 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text165 {
            color: var(--dl-color-secondary-700);
            font-size: 18px;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-doubleunit);
            background-color: rgb(5, 5, 5);
          }
          .home-thq-text3-elm {
            width: 66%;
            display: flex;
            position: sticky;
            align-items: center;
            border-color: var(--dl-color-pimary-700);
            border-style: solid;
            border-width: 5px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-text166 {
            color: var(--dl-color-pimary-700);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text167 {
            color: var(--dl-color-pimary-700);
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            white-space: normal;
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 1px;
            margin-bottom: 0.25rem;
            text-transform: none;
            text-decoration: none;
            background-color: rgb(5, 5, 5);
          }
          .home-thq-section1-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: visible;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            animation-name: fadeInUp;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            animation-delay: 0ms;
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-container16 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-self: center;
            align-items: center;
            border-color: rgba(195, 197, 201, 0);
            border-style: hidden;
            border-width: 1px;
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 0ms;
            justify-content: center;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-thq-work-with-us-elm {
            display: flex;
            margin-top: var(--dl-layout-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-tripleunit);
            flex-direction: row;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 0ms;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 3rem;
            height: 3rem;
            display: flex;
            padding: 0px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            padding-top: 0px;
            border-radius: var(--dl-layout-radius-round);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .home-icon18 {
            width: 2rem;
          }
          .home-text168 {
            color: var(--dl-color-secondary-400);
            font-family: 'Inter';
            font-weight: 600;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-text169 {
            color: #050505;
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-link18 {
            color: var(--dl-color-pimary-500);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
            animation-name: fadeInUp;
            animation-delay: 500ms;
            text-decoration: none;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 33%;
            display: flex;
            position: relative;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            border-radius: var(--dl-layout-radius-radius50);
            flex-direction: column;
            background-color: #09a6e9;
          }
          .home-thq-team-vid-elm {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #050505;
            border-style: solid;
            border-width: 1px;
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('https://videos.pexels.com/video-files/8170602/8170602-hd_1920_1080_25fps.mp4');
            background-position: center;
            border-top-left-radius: var(--dl-layout-radius-radius50);
            border-top-right-radius: var(--dl-layout-radius-radius50);
          }
          .home-video2 {
            width: 100%;
            height: 100%;
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 0px;
            animation-name: fadeInLeft;
            animation-delay: 100ms;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-container20 {
            display: flex;
            padding: var(--dl-layout-space-doubleunit);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: #050505;
          }
          .home-text172 {
            font-size: 1.25rem;
            font-family: 'Inter';
          }
          .home-text173 {
            color: rgb(242, 245, 249);
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-link19 {
            fill: #050505;
            color: #050505;
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            justify-content: center;
            text-decoration: none;
          }
          .home-thq-faqs-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: visible;
            position: relative;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            padding-top: var(--dl-layout-space-fiveunits);
            margin-right: var(--dl-layout-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .home-thq-heading-elm3 {
            color: #050505;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
          }
          .home-thq-faqs-content-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-faqs-element-elm {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .home-thq-trigger-elm1 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeIn;
            padding-bottom: var(--dl-layout-space-halfunit);
            animation-delay: 0ms;
            background-color: var(--dl-color-pimary-900);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-thq-summary-elm1 {
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            justify-content: space-between;
          }
          .home-text174 {
            color: #050505;
            font-family: 'Inter';
            border-color: rgba(195, 197, 201, 0);
            border-style: hidden;
            border-width: 1px;
          }
          .home-thq-icon-container-elm1 {
            transition: transform 0.3s ease-in-out;
          }
          .home-container21 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #c3e5fa;
          }
          .home-text180 {
            font-family: 'Inter';
          }
          .home-thq-faqs-element1-elm {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 1px;
            flex-direction: column;
          }
          .home-thq-trigger-elm2 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeIn;
            padding-bottom: var(--dl-layout-space-halfunit);
            animation-delay: 100ms;
            background-color: var(--dl-color-pimary-900);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-thq-summary-elm2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text181 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-thq-icon-container-elm2 {
            transition: transform 0.3s ease-in-out;
          }
          .home-container22 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #c3e5fa;
          }
          .home-text182 {
            font-family: 'Inter';
          }
          .home-thq-faqs-element2-elm {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .home-thq-trigger-elm3 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeIn;
            padding-bottom: var(--dl-layout-space-halfunit);
            animation-delay: 200ms;
            background-color: var(--dl-color-pimary-900);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-thq-summary-elm3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text183 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-thq-icon-container-elm3 {
            transition: transform 0.3s ease-in-out;
          }
          .home-container23 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #c3e5fa;
          }
          .home-text184 {
            font-family: 'Inter';
          }
          .home-thq-faqs-element3-elm {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .home-thq-trigger-elm4 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeIn;
            padding-bottom: var(--dl-layout-space-halfunit);
            animation-delay: 300ms;
            background-color: var(--dl-color-pimary-900);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-thq-summary-elm4 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text185 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-thq-icon-container-elm4 {
            transition: transform 0.3s ease-in-out;
          }
          .home-container24 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #c3e5fa;
          }
          .home-text186 {
            font-family: 'Inter';
          }
          .home-thq-faqs-element5-elm {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .home-thq-trigger-elm5 {
            width: 100%;
            cursor: pointer;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeIn;
            padding-bottom: var(--dl-layout-space-halfunit);
            animation-delay: 0ms;
            background-color: var(--dl-color-pimary-900);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-thq-summary-elm5 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text187 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-thq-icon-container-elm5 {
            transition: transform 0.3s ease-in-out;
          }
          .home-container25 {
            display: flex;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #c3e5fa;
          }
          .home-text188 {
            font-family: 'Inter';
          }
          .home-thq-reviews-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 72vh;
            display: flex;
            overflow: visible;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            animation-name: fadeIn;
            flex-direction: column;
            padding-bottom: 0px;
            animation-delay: 100ms;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-text189 {
            color: rgb(5, 5, 5);
            font-size: 48px;
            font-style: normal;
            text-align: center;
            font-family: 'Inter';
            font-weight: 600;
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .home-thq-slider-elm2 {
            width: 70%;
            height: 60vh;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-thq-sophia-thomas-reviiew-elm {
            width: 100%;
            height: 45vh;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-secondary-500);
            border-width: 10px;
            border-radius: var(--dl-layout-radius-radius75);
            flex-direction: column;
            background-size: 100%;
            justify-content: center;
          }
          .home-thq-text-container-elm15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text193 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
          }
          .home-text194 {
            color: #050505;
            width: 80%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container26 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image31 {
            width: 25%;
            display: flex;
            align-self: center;
            object-fit: cover;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-text195 {
            color: #050505;
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
          }
          .home-text196 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-text197 {
            color: var(--dl-color-pimary-500);
            font-family: 'Inter';
          }
          .home-thq-max-miller-elm {
            width: 100%;
            height: 45vh;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-secondary-500);
            border-width: 10px;
            border-radius: var(--dl-layout-radius-radius75);
            flex-direction: column;
            background-size: 100%;
            justify-content: center;
          }
          .home-thq-text-container-elm16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text198 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-text199 {
            color: #050505;
            width: 80%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container27 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image32 {
            width: 25%;
            display: flex;
            align-self: center;
            object-fit: cover;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-text200 {
            color: #050505;
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
          }
          .home-text201 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-text202 {
            color: var(--dl-color-pimary-500);
            font-family: 'Inter';
          }
          .home-thq-aaron-vance-elm {
            width: 100%;
            height: 45vh;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-secondary-500);
            border-width: 10px;
            border-radius: var(--dl-layout-radius-radius75);
            flex-direction: column;
            background-size: 100%;
            justify-content: center;
          }
          .home-thq-text-container-elm17 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text203 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-text204 {
            color: #050505;
            width: 90%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container28 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image33 {
            width: 25%;
            display: flex;
            align-self: center;
            object-fit: cover;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-text205 {
            color: #050505;
            font-size: 24px;
            font-family: 'Inter';
          }
          .home-text206 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-text207 {
            color: var(--dl-color-pimary-500);
            font-family: 'Inter';
          }
          .home-thq-maleek-zaiyan-elm {
            width: 100%;
            height: 45vh;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-secondary-500);
            border-width: 10px;
            border-radius: var(--dl-layout-radius-radius75);
            flex-direction: column;
            background-size: 100%;
            justify-content: center;
          }
          .home-thq-text-container-elm18 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text208 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-text209 {
            color: #050505;
            width: 80%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container29 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image34 {
            width: 25%;
            display: flex;
            align-self: center;
            object-fit: cover;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-text210 {
            color: #050505;
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
          }
          .home-text211 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-text212 {
            color: var(--dl-color-pimary-500);
            font-family: 'Inter';
          }
          .home-thq-destiny-isaac-elm {
            width: 100%;
            height: 45vh;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-secondary-500);
            border-width: 10px;
            border-radius: var(--dl-layout-radius-radius75);
            flex-direction: column;
            background-size: 100%;
            justify-content: center;
          }
          .home-thq-text-container-elm19 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text213 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-text214 {
            color: #050505;
            width: 80%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container30 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image35 {
            width: 25%;
            display: flex;
            align-self: center;
            object-fit: cover;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-text215 {
            color: rgb(5, 5, 5);
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
          }
          .home-text216 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-text217 {
            color: var(--dl-color-pimary-500);
            font-family: 'Inter';
          }
          .home-thq-desta-bryson-elm {
            width: 100%;
            height: 45vh;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-secondary-500);
            border-width: 10px;
            border-radius: var(--dl-layout-radius-radius75);
            flex-direction: column;
            background-size: 100%;
            justify-content: center;
          }
          .home-thq-text-container-elm20 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text218 {
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-text219 {
            color: #050505;
            width: 80%;
            font-size: 20px;
            align-self: center;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container31 {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image36 {
            width: 25%;
            display: flex;
            align-self: center;
            object-fit: cover;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-text220 {
            color: #050505;
            font-size: 24px;
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
          }
          .home-text221 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-text222 {
            color: var(--dl-color-pimary-500);
            font-family: 'Inter';
          }
          .home-thq-slider-pagination-elm2 {
            display: block;
          }
          .home-thq-slider-button-prev-elm2 {
            display: none;
          }
          .home-thq-slider-button-next-elm2 {
            display: none;
          }
          .home-thq-system-elm {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            padding-top: var(--dl-layout-space-twounits);
            margin-right: var(--dl-layout-space-unit);
            animation-name: none;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-container32 {
            width: 75%;
            display: flex;
            overflow: hidden;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-color: var(--dl-color-pimary-500);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            margin-bottom: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            border-top-left-radius: 50%;
            border-top-right-radius: 0%;
            border-bottom-left-radius: 0%;
            border-bottom-right-radius: 50%;
          }
          .home-text223 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-layout-space-halfunit);
            text-align: center;
            font-family: 'Inter';
            line-height: 2.5rem;
          }
          .home-text224 {
            color: #050505;
            font-size: 16px;
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unitandhalf);
          }
          .home-thq-growing-company-section-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: visible;
            max-width: 1320px;
            align-items: center;
            animation-name: fadeInUp;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-video3 {
            width: 100%;
            height: 100vh;
            border-radius: var(--dl-layout-radius-radius4);
            border-top-left-radius: 80px;
            border-top-right-radius: 0px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 80px;
          }
          .home-container33 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            overflow: visible;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-halfunit);
            margin-right: var(--dl-layout-space-halfunit);
            padding-left: 0px;
            padding-right: 0px;
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 0ms;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-container34 {
            flex: 0 0 auto;
            width: 4rem;
            height: 4rem;
            display: flex;
            overflow: visible;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .home-icon32 {
            fill: var(--dl-color-gray-900);
            width: 24px;
            height: 24px;
          }
          .home-text225 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-layout-space-unitandhalf);
            font-family: 'Inter';
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text226 {
            color: #050505;
            margin-top: var(--dl-layout-space-unit);
            text-align: left;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unitandhalf);
            animation-name: fadeInUp;
            animation-delay: 100ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-text227 {
            font-style: normal;
            font-weight: 700;
          }
          .home-container35 {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container36 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .home-text234 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-container37 {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container38 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .home-text235 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-container39 {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .home-container40 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .home-text236 {
            color: #050505;
            font-family: 'Inter';
          }
          .home-link20 {
            overflow: hidden;
            margin-top: var(--dl-layout-space-oneandhalfunits);
            text-align: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            text-decoration: none;
            background-color: rgb(5, 5, 5);
          }
          .home-container41 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            overflow: hidden;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .home-text237 {
            fill: #050505;
            color: #050505;
            font-size: 32px;
            margin-top: var(--dl-layout-space-unit);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text238 {
            color: rgb(5, 5, 5);
            text-align: center;
            font-family: 'Inter';
            margin-bottom: 0.25rem;
          }
          .home-thq-ecosystem-elm {
            width: 100%;
            display: flex;
            max-width: 100%;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: 130px;
            background-color: var(--dl-color-pimary-700);
            border-bottom-width: 1px;
          }
          .home-thq-thq-content-elm-elm {
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text242 {
            color: rgb(18, 40, 33);
            font-size: 24px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 500;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text243 {
            color: rgb(18, 40, 33);
            font-size: 20px;
            max-width: 300px;
            font-family: 'Inter';
            line-height: 30px;
          }
          .home-thq-thq-partners-desktop-elm-elm {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-thq-column-elm-elm1 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image37 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image37:hover {
            filter: revert;
          }
          .home-image38 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image38:hover {
            filter: revert;
          }
          .home-image39 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image39:hover {
            filter: revert;
          }
          .home-image40 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image40:hover {
            filter: revert;
          }
          .home-thq-thq-column-elm-elm2 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image41 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image41:hover {
            filter: revert;
          }
          .home-image42 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image42:hover {
            filter: revert;
          }
          .home-image43 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image43:hover {
            filter: revert;
          }
          .home-image44 {
            width: 70px;
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image44:hover {
            filter: revert;
          }
          .home-thq-thq-partner-elm-elm9 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .home-thq-thq-partners-mobile-elm-elm {
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-thq-thq-row-elm-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image45 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image45:hover {
            filter: revert;
          }
          .home-image46 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image46:hover {
            filter: revert;
          }
          .home-image47 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image47:hover {
            filter: revert;
          }
          .home-image48 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image48:hover {
            filter: revert;
          }
          .home-thq-thq-column-elm-elm3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image49 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image49:hover {
            filter: revert;
          }
          .home-image50 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image50:hover {
            filter: revert;
          }
          .home-image51 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image51:hover {
            filter: revert;
          }
          .home-image52 {
            filter: grayscale();
            transition: 0.3s;
          }
          .home-image52:hover {
            filter: revert;
          }
          .home-thq-penultimate-elm {
            flex: 0 0 auto;
            display: flex;
            overflow: visible;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-tripleunit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-tripleunit);
            background-color: #000000;
          }
          .home-text244 {
            color: var(--dl-color-pimary-300);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 600;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-cardradius);
            margin-bottom: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-halfunit);
            background-color: var(--dl-color-pimary-700);
          }
          .home-container42 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 1320px;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-text245 {
            color: var(--dl-color-secondary-500);
            font-size: 25px;
            font-family: 'Inter';
            animation-name: fadeIn;
            animation-delay: 0ms;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text246 {
            color: var(--dl-color-secondary-500);
            width: 80%;
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            font-weight: 300;
            margin-bottom: 0.25rem;
            animation-name: fadeIn;
            justify-content: center;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-out;
          }
          .home-thq-services-elm {
            flex: 0 0 auto;
            display: flex;
            overflow: hidden;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container43 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            animation-name: fadeInUp;
            flex-direction: column;
            animation-delay: 100ms;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-container44 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .home-icon40 {
            color: gold;
          }
          .home-text247 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 18px;
            font-style: normal;
            margin-top: var(--dl-layout-space-unitandhalf);
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
          }
          .home-text248 {
            color: var(--dl-color-secondary-500);
            font-size: 1.25rem;
            text-align: center;
            font-family: 'Inter';
          }
          .home-thq-container-elm {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-container45 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .home-icon43 {
            color: seagreen;
          }
          .home-text249 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 18px;
            margin-top: var(--dl-layout-space-unitandhalf);
            text-align: center;
            font-family: 'Inter';
            font-weight: 600;
          }
          .home-text250 {
            color: rgb(100, 116, 139);
            font-size: 1.25rem;
            text-align: center;
            font-family: 'Inter';
          }
          .home-container46 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
          }
          .home-container47 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .home-icon49 {
            color: darkred;
          }
          .home-text251 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 20px;
            margin-top: var(--dl-layout-space-unitandhalf);
            text-align: center;
            font-family: 'Inter';
            font-weight: 600;
          }
          .home-text252 {
            color: rgb(100, 116, 139);
            font-size: 1.25rem;
            text-align: center;
            font-family: 'Inter';
          }
          .home-thq-contact-form-elm {
            display: flex;
            overflow: visible;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-style: hidden;
            border-width: 0px;
            border-radius: var(--dl-layout-radius-cardradius);
            margin-bottom: var(--dl-layout-space-doubleunit);
            flex-direction: column;
          }
          .home-text253 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
          }
          .home-text254 {
            color: rgba(255, 255, 255, 0.75);
            width: 80%;
            text-align: center;
            font-family: 'Inter';
            font-weight: 300;
          }
          .home-thq-form-elm {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            padding: var(--dl-layout-space-twoandhalf);
            max-width: 700px;
            margin-top: var(--dl-layout-space-doubleunit);
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius50);
            flex-direction: column;
            justify-content: center;
            background-color: #050505;
          }
          .home-text255 {
            color: var(--dl-color-pimary-900);
            font-size: 1.5rem;
            font-family: 'Inter';
            font-weight: 600;
            line-height: 2rem;
          }
          .home-text256 {
            color: var(--dl-color-pimary-900);
            font-family: 'Inter';
          }
          .home-text257 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-textinput1 {
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
          .home-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .home-text258 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-textinput2 {
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
          .home-textinput2:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .home-text259 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-textinput3 {
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
          .home-textinput3:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .home-text260 {
            color: var(--dl-color-theme-neutral-dark);
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-left: 0.25rem;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .home-textarea {
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
          .home-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .home-container48 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container49 {
            display: flex;
            position: relative;
          }
          .home-button {
            fill: var(--dl-color-pimary-500);
            color: var(--dl-color-gray-white);
            width: 100%;
            z-index: 50;
            position: relative;
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
          .home-button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .home-button:active {
            background-color: 050505;
          }
          .home-container51 {
            display: contents;
          }
          .home-image53 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .home-thq-map-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: rgba(0, 0, 0, 0);
          }
          .home-google-maps {
            width: 1152px;
            height: 600px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-text261 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text262 {
            color: #050505;
            display: inline-block;
          }
          .home-text263 {
            color: #050505;
            display: inline-block;
          }
          .home-text264 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text265 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text266 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text267 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .home-text268 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .home-text269 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text270 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text271 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .home-text272 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text273 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text274 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text275 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text276 {
            color: #050505;
            display: inline-block;
          }
          .home-text277 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .home-text278 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .home-thq-mobile-menu-elm {
              width: 100%;
              height: 12%;
            }
            .home-thq-hero-text-elm {
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-text105 {
              color: var(--dl-color-gray-white);
              font-size: 32px;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .home-text106 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .home-link12 {
              width: 50%;
              border-radius: var(--dl-layout-radius-buttonradius);
            }
            .home-thq-sub-hero-section-elm {
              width: 100%;
              align-self: center;
              border-color: var(--dl-color-pimary-900);
              border-width: 1px;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              background-color: var(--dl-color-pimary-900);
            }
            .home-thq-client-slider-elm {
              width: 100%;
              overflow: visible;
              max-width: 2000px;
              padding-top: var(--dl-layout-space-doubleunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .home-thq-logos-container-elm1 {
              width: 100%;
              overflow: hidden;
              max-width: 2500px;
            }
            .home-thq-logos-container-elm2 {
              width: 100%;
              overflow: hidden;
              max-width: 2500px;
            }
            .home-thq-services-carousels-elm {
              width: 100%;
              overflow: visible;
              background-color: var(--dl-color-scheme-white);
            }
            .home-thq-slider-elm1 {
              width: 100%;
            }
            .home-thq-text-container-elm10 {
              align-items: center;
              justify-content: center;
            }
            .home-thq-metrics-elm {
              width: 100%;
              overflow: visible;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              justify-content: center;
            }
            .home-text139 {
              color: #050505;
              margin-top: var(--dl-layout-space-doubleunit);
              font-family: Inter;
              margin-bottom: 0px;
            }
            .home-text140 {
              color: rgb(5, 5, 5);
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text141 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              align-self: center;
              align-items: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              justify-content: center;
              text-decoration: none;
            }
            .home-text144 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .home-text147 {
              color: rgb(5, 5, 5);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .home-thq-vid-card-elm {
              width: 90%;
              margin-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-thq-stack-container-elm {
              width: 100%;
              overflow: visible;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              flex-direction: column;
              justify-content: flex-start;
              background-color: #050505;
            }
            .home-thq-headline-elm {
              overflow: visible;
            }
            .home-text154 {
              fill: #050505;
              color: var(--dl-color-pimary-700);
              display: flex;
              overflow: visible;
              font-size: 25px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-thq-card1-elm {
              width: 90%;
              height: 400px;
              overflow: visible;
              border-radius: var(--dl-layout-radius-cardradius);
            }
            .home-thq-card2-elm {
              width: 90%;
              height: 400px;
              overflow: visible;
              border-radius: var(--dl-layout-radius-cardradius);
            }
            .home-thq-card3-elm {
              width: 90%;
              height: 400px;
              overflow: visible;
              border-radius: var(--dl-layout-radius-cardradius);
            }
            .home-thq-evolution-elm {
              overflow: visible;
            }
            .home-text161 {
              color: var(--dl-color-pimary-700);
              overflow: visible;
              font-size: 30px;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 700;
              margin-bottom: var(--dl-layout-space-unit);
              text-transform: uppercase;
            }
            .home-thq-texts-elm2 {
              overflow: visible;
            }
            .home-thq-text1-elm {
              overflow: visible;
              border-radius: var(--dl-layout-radius-cardradius);
            }
            .home-thq-text2-elm {
              overflow: visible;
              border-radius: var(--dl-layout-radius-cardradius);
            }
            .home-thq-text3-elm {
              border-radius: var(--dl-layout-radius-cardradius);
            }
            .home-text167 {
              fill: #050505;
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              white-space: normal;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 1px;
              margin-bottom: 0.25rem;
              text-transform: none;
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .home-thq-section1-elm {
              overflow: visible;
            }
            .home-link18 {
              animation-name: fadeInUp;
              animation-delay: 500ms;
              animation-duration: 600ms;
            }
            .home-thq-team-vid-elm {
              width: 100%;
              height: 100%;
              border-color: #050505;
              background-size: cover;
              background-image: url('https://videos.pexels.com/video-files/8170602/8170602-hd_1920_1080_25fps.mp4');
            }
            .home-video2 {
              width: 100%;
              height: 100%;
            }
            .home-text172 {
              text-align: left;
            }
            .home-thq-faqs-elm {
              width: 100%;
              overflow: visible;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text174 {
              color: #050505;
              font-family: Inter;
              border-color: rgba(195, 197, 201, 0);
              border-style: hidden;
              border-width: 1px;
            }
            .home-thq-faqs-element1-elm {
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 1px;
            }
            .home-text181 {
              color: #050505;
              font-family: Inter;
            }
            .home-text183 {
              color: #050505;
              font-family: Inter;
            }
            .home-container23 {
              background-color: var(--dl-color-pimary-700);
            }
            .home-text185 {
              color: #050505;
              font-family: Inter;
            }
            .home-text187 {
              color: #050505;
              font-family: Inter;
            }
            .home-text194 {
              color: #050505;
              width: 80%;
              font-size: 20px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .home-thq-system-elm {
              overflow: visible;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
            }
            .home-text223 {
              text-align: center;
            }
            .home-thq-growing-company-section-elm {
              overflow: visible;
            }
            .home-container33 {
              overflow: visible;
            }
            .home-container34 {
              overflow: visible;
              background-color: #050505;
            }
            .home-text225 {
              color: #050505;
              margin-top: var(--dl-layout-space-unitandhalf);
              font-family: Inter;
            }
            .home-text226 {
              color: rgb(5, 5, 5);
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unitandhalf);
            }
            .home-text227 {
              font-style: normal;
              font-weight: 700;
            }
            .home-text230 {
              font-family: Inter;
            }
            .home-text232 {
              font-family: Inter;
            }
            .home-container35 {
              overflow: visible;
            }
            .home-container37 {
              overflow: visible;
            }
            .home-container39 {
              overflow: visible;
            }
            .home-container41 {
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-text238 {
              color: rgb(5, 5, 5);
              text-align: left;
              font-family: Inter;
              animation-timing-function: ease-out;
            }
            .home-thq-ecosystem-elm {
              margin-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: 60px;
              background-color: var(--dl-color-pimary-700);
            }
            .home-thq-thq-content-elm-elm {
              align-items: center;
              justify-content: center;
            }
            .home-text242 {
              text-align: center;
            }
            .home-text243 {
              text-align: center;
            }
            .home-thq-thq-partners-desktop-elm-elm {
              display: none;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-thq-thq-column-elm-elm1 {
              flex-direction: row;
            }
            .home-thq-thq-column-elm-elm2 {
              flex-direction: row;
            }
            .home-thq-thq-partners-mobile-elm-elm {
              gap: 10px;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-thq-thq-row-elm-elm {
              gap: 10px;
              flex-direction: row;
            }
            .home-image45 {
              width: 70px;
            }
            .home-image46 {
              width: 70px;
            }
            .home-image47 {
              width: 70px;
            }
            .home-image48 {
              width: 70px;
            }
            .home-thq-thq-column-elm-elm3 {
              gap: 10px;
              flex-direction: row;
            }
            .home-image49 {
              width: 70px;
            }
            .home-image50 {
              width: 70px;
            }
            .home-image51 {
              width: 70px;
            }
            .home-image52 {
              width: 70px;
            }
            .home-thq-penultimate-elm {
              overflow: visible;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
            }
            .home-text244 {
              color: var(--dl-color-pimary-300);
              font-size: 20px;
              align-self: center;
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container42 {
              width: 100%;
            }
            .home-thq-services-elm {
              align-items: center;
              flex-direction: column;
            }
            .home-container43 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .home-text247 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-thq-container-elm {
              width: 100%;
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .home-container46 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-doubleunit);
            }
            .home-thq-contact-form-elm {
              overflow: visible;
              align-self: center;
              justify-content: center;
            }
            .home-text255 {
              color: var(--dl-color-pimary-900);
              font-size: 1.5rem;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .home-text256 {
              color: var(--dl-color-pimary-900);
              font-family: Inter;
            }
            .home-button {
              width: 100%;
              border-style: solid;
              border-width: 1px;
            }
            .home-thq-map-elm {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text261 {
              color: #050505;
              font-family: Inter;
            }
            .home-text262 {
              color: #050505;
            }
            .home-text263 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .home-text264 {
              color: #050505;
              font-family: Inter;
            }
            .home-text265 {
              color: #050505;
              font-family: Inter;
            }
            .home-text266 {
              color: #050505;
              font-family: Inter;
            }
            .home-text267 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .home-text268 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .home-text269 {
              color: #050505;
              font-family: Inter;
            }
            .home-text270 {
              color: #050505;
              font-family: Inter;
            }
            .home-text271 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .home-text272 {
              color: #050505;
              font-family: Inter;
            }
            .home-text273 {
              color: #050505;
              font-family: Inter;
            }
            .home-text274 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .home-text275 {
              color: #050505;
              font-family: Inter;
            }
            .home-text276 {
              color: #050505;
              font-family: Inter;
            }
            .home-text277 {
              color: #050505;
              font-family: Inter;
            }
            .home-text278 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .home-container10 {
              background-color: var(--dl-color-theme-neutral-light);
            }
            .home-thq-mobile-menu-elm {
              width: 100%;
              height: 12%;
            }
            .home-link10 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .home-text105 {
              color: var(--dl-color-gray-900);
              font-size: 32px;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              animation-name: fadeInUp;
              animation-delay: 0s;
              background-clip: text;
              background-image: inherit;
              animation-duration: 0.6s;
              animation-direction: normal;
              webkit-background-clip: text;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text106 {
              color: var(--dl-color-gray-900);
              display: flex;
              max-width: 600px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-halfunit);
              align-content: center;
              padding-right: var(--dl-layout-space-halfunit);
              animation-name: fadeInLeft;
              justify-content: center;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-link12 {
              color: var(--dl-color-theme-neutral-light);
              width: 50%;
              z-index: 2000;
              font-size: 18px;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              font-family: Inter;
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
              animation-name: fadeIn;
              animation-delay: 0s;
              background-color: rgba(255, 255, 255, 0);
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-sub-hero-section-elm {
              align-self: center;
              border-color: var(--dl-color-pimary-900);
              border-style: hidden;
              border-width: 1px;
            }
            .home-thq-video-elm {
              width: 100%;
              border-color: var(--dl-color-pimary-900);
              border-style: hidden;
              border-width: 1px;
            }
            .home-thq-heading-elm1 {
              color: var(--dl-color-pimary-900);
              display: flex;
              z-index: 10;
              font-size: 40px;
              align-self: center;
              text-align: center;
              transition: 0.3s;
              align-items: center;
              font-family: Inter;
              padding-top: 0px;
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: center;
            }
            .home-thq-client-slider-elm {
              width: 100%;
              overflow: visible;
              max-width: 2000px;
              margin-top: 0px;
              padding-top: var(--dl-layout-space-doubleunit);
              padding-bottom: var(--dl-layout-space-doubleunit);
              justify-content: center;
            }
            .home-thq-heading-elm2 {
              font-size: 32px;
              animation-name: fadeInUp;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-text-elm {
              font-size: 18px;
              animation-name: fadeInLeft;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-logos-container-elm1 {
              width: 100%;
              overflow: hidden;
              max-width: 2500px;
            }
            .home-image11 {
              width: 50px;
            }
            .home-image12 {
              width: 50px;
            }
            .home-image13 {
              width: 50px;
            }
            .home-image14 {
              width: 50px;
            }
            .home-image15 {
              width: 50px;
            }
            .home-image16 {
              width: 50px;
            }
            .home-image17 {
              width: 50px;
            }
            .home-image18 {
              width: 50px;
            }
            .home-image19 {
              width: 50px;
            }
            .home-image20 {
              width: 50px;
            }
            .home-thq-logos-container-elm2 {
              width: 100%;
              overflow: hidden;
              max-width: 2500px;
            }
            .home-image21 {
              width: 50px;
            }
            .home-image22 {
              width: 50px;
            }
            .home-image23 {
              width: 50px;
            }
            .home-image24 {
              width: 50px;
            }
            .home-image25 {
              width: 50px;
            }
            .home-image26 {
              width: 50px;
            }
            .home-image27 {
              width: 50px;
            }
            .home-image28 {
              width: 50px;
            }
            .home-image29 {
              width: 50px;
            }
            .home-image30 {
              width: 50px;
            }
            .home-thq-services-carousels-elm {
              overflow: visible;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              animation-delay: 0ms;
              background-color: var(--dl-color-scheme-white);
            }
            .home-text108 {
              align-self: center;
            }
            .home-thq-text-container-elm13 {
              align-items: center;
              justify-content: center;
            }
            .home-thq-text-container-elm14 {
              align-items: center;
              justify-content: center;
            }
            .home-thq-metrics-elm {
              overflow: visible;
              animation-name: pulse;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text139 {
              color: rgb(5, 5, 5);
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              animation-name: fadeInUp;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text140 {
              animation-name: fadeInLeft;
              animation-delay: 100ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text141 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              align-self: center;
              align-items: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              justify-content: center;
              text-decoration: none;
            }
            .home-text144 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .home-text147 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .home-thq-vid-card-elm {
              animation-name: fadeInUp;
              animation-delay: 150ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-stack-container-elm {
              width: 100%;
              height: 100%;
              display: flex;
              overflow: visible;
              margin-bottom: 0px;
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-twounits);
              justify-content: center;
              background-color: #050505;
            }
            .home-thq-headline-elm {
              overflow: visible;
            }
            .home-text154 {
              color: var(--dl-color-pimary-700);
              display: flex;
              overflow: visible;
              font-size: 30px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-thq-card1-elm {
              width: 90%;
              height: 100%;
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-text155 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text156 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
            }
            .home-thq-card2-elm {
              width: 90%;
              height: 100%;
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-text157 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text158 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
            }
            .home-thq-card3-elm {
              width: 90%;
              height: 100%;
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-text159 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text160 {
              color: #050505;
              font-size: 1rem;
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
            }
            .home-thq-evolution-elm {
              padding: var(--dl-layout-space-twounits);
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              animation-name: fadeIn;
              padding-bottom: var(--dl-layout-space-unit);
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text161 {
              color: var(--dl-color-pimary-700);
              overflow: visible;
              font-size: 30px;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 1.2;
              margin-bottom: var(--dl-layout-space-doubleunit);
              text-transform: capitalize;
            }
            .home-thq-texts-elm2 {
              width: 97%;
              overflow: visible;
              align-self: center;
              border-color: var(--dl-color-gray-900);
              border-width: 0px;
              animation-name: fadeInUp;
              animation-delay: 50ms;
              animation-duration: 650ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-text1-elm {
              width: 90%;
              overflow: visible;
              align-self: center;
              align-items: center;
              border-color: var(--dl-color-pimary-700);
              border-width: 5px;
              margin-bottom: var(--dl-layout-space-unit);
              animation-name: fadeInUp;
              animation-delay: 100ms;
              justify-content: center;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text162 {
              color: var(--dl-color-pimary-700);
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text163 {
              color: var(--dl-color-pimary-700);
              display: flex;
              font-size: 18px;
              align-self: flex-start;
              text-align: center;
              align-items: flex-start;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
              justify-content: flex-start;
              background-color: rgb(5, 5, 5);
            }
            .home-thq-text2-elm {
              width: 90%;
              overflow: visible;
              align-self: center;
              border-color: #c52741;
              border-width: 5px;
              margin-bottom: var(--dl-layout-space-unit);
              animation-name: fadeInUp;
              animation-delay: 200ms;
              justify-content: center;
              animation-duration: 700ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text164 {
              color: var(--dl-color-secondary-700);
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text165 {
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-doubleunit);
              background-color: rgb(5, 5, 5);
            }
            .home-thq-text3-elm {
              width: 90%;
              overflow: visible;
              border-color: var(--dl-color-pimary-700);
              border-style: solid;
              border-width: 5px;
              background-color: #050505;
            }
            .home-text166 {
              color: var(--dl-color-pimary-700);
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text167 {
              fill: #050505;
              color: var(--dl-color-pimary-700);
              display: flex;
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 200;
              white-space: normal;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 1px;
              margin-bottom: 0.25rem;
              text-transform: none;
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .home-thq-section1-elm {
              overflow: visible;
              padding-left: var(--dl-layout-space-doubleunit);
              padding-right: var(--dl-layout-space-doubleunit);
              animation-name: fadeInUp;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-container16 {
              animation-name: fadeInUp;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-work-with-us-elm {
              margin-top: var(--dl-layout-space-tripleunit);
              flex-direction: column;
            }
            .home-container17 {
              width: 100%;
              margin-bottom: var(--dl-layout-space-tripleunit);
              animation-name: fadeInUp;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-container18 {
              border-style: solid;
              border-width: 1px;
              background-color: #050505;
            }
            .home-icon18 {
              width: 2rem;
            }
            .home-text168 {
              color: #050505;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-text169 {
              color: rgb(5, 5, 5);
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container19 {
              width: 100%;
            }
            .home-thq-team-vid-elm {
              height: 100%;
              border-color: #050505;
              border-width: 1px;
              background-size: cover;
              background-image: url('https://videos.pexels.com/video-files/3254013/3254013-hd_1280_720_25fps.mp4');
            }
            .home-video2 {
              width: 100%;
              height: 100%;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              animation-delay: 100ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text172 {
              font-size: 1.25rem;
              text-align: left;
              font-family: Inter;
            }
            .home-link19 {
              color: #050505;
              display: flex;
              align-self: center;
              align-items: center;
              border-radius: var(--dl-layout-radius-buttonradius);
              justify-content: center;
            }
            .home-thq-faqs-elm {
              width: 95%;
              overflow: visible;
              align-self: center;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              background-color: var(--dl-color-pimary-900);
            }
            .home-thq-heading-elm3 {
              color: rgb(5, 5, 5);
              font-size: 30px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-thq-faqs-content-elm {
              align-items: center;
              justify-content: center;
              background-color: var(--dl-color-pimary-900);
            }
            .home-thq-trigger-elm1 {
              background-color: var(--dl-color-pimary-900);
            }
            .home-thq-summary-elm1 {
              border-style: hidden;
              border-width: 0px;
            }
            .home-text174 {
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 500;
              border-color: rgba(195, 197, 201, 0);
              border-style: hidden;
              border-width: 1px;
            }
            .home-text176 {
              font-family: Comic Sans MS;
            }
            .home-thq-faqs-element1-elm {
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 1px;
              border-radius: var(--dl-layout-radius-radius4);
            }
            .home-thq-trigger-elm2 {
              background-color: var(--dl-color-pimary-900);
            }
            .home-text181 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .home-thq-trigger-elm3 {
              background-color: var(--dl-color-pimary-900);
            }
            .home-text183 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .home-thq-trigger-elm4 {
              background-color: var(--dl-color-pimary-900);
            }
            .home-thq-trigger-elm5 {
              background-color: var(--dl-color-pimary-900);
            }
            .home-text189 {
              color: rgb(5, 5, 5);
              font-size: 32px;
              font-style: inherit;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-text191 {
              color: #c52741;
            }
            .home-text194 {
              color: #050505;
              width: 85%;
              font-size: 18px;
              align-self: center;
              text-align: center;
              font-family: Inter;
            }
            .home-container26 {
              width: 80%;
            }
            .home-text195 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              font-family: Inter;
            }
            .home-text196 {
              color: #050505;
              font-family: Inter;
            }
            .home-text199 {
              color: #050505;
              width: 85%;
              font-size: 18px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container27 {
              width: 80%;
            }
            .home-text200 {
              color: #050505;
              font-size: 24px;
              font-family: Inter;
            }
            .home-text201 {
              color: #050505;
              font-family: Inter;
            }
            .home-text202 {
              color: var(--dl-color-pimary-500);
              font-size: 14px;
              font-family: Inter;
            }
            .home-text204 {
              color: #050505;
              width: 85%;
              font-size: 18px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container28 {
              width: 80%;
            }
            .home-text205 {
              color: #050505;
              font-size: 24px;
              font-family: Inter;
            }
            .home-text206 {
              color: #050505;
              font-family: Inter;
            }
            .home-text209 {
              color: #050505;
              width: 85%;
              font-size: 20px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container29 {
              width: 80%;
            }
            .home-text210 {
              color: #050505;
              font-size: 24px;
              font-family: Inter;
            }
            .home-text211 {
              color: #050505;
              font-family: Inter;
            }
            .home-text214 {
              color: #050505;
              width: 85%;
              font-size: 18px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container30 {
              width: 80%;
            }
            .home-text215 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              font-family: Inter;
            }
            .home-text216 {
              color: #050505;
              font-family: Inter;
            }
            .home-text219 {
              color: #050505;
              width: 85%;
              font-size: 18px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container31 {
              width: 80%;
            }
            .home-text220 {
              color: #050505;
              font-size: 24px;
              font-family: Inter;
            }
            .home-text221 {
              color: #050505;
              font-family: Inter;
            }
            .home-thq-system-elm {
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-container32 {
              width: 75%;
            }
            .home-thq-growing-company-section-elm {
              overflow: visible;
              flex-direction: column;
            }
            .home-container33 {
              width: 100%;
              overflow: visible;
              margin-top: 0px;
              padding-left: var(--dl-layout-space-unitandhalf);
              padding-right: var(--dl-layout-space-unitandhalf);
            }
            .home-container34 {
              overflow: visible;
              background-color: #050505;
            }
            .home-container35 {
              overflow: visible;
            }
            .home-container36 {
              background-color: #050505;
            }
            .home-container37 {
              overflow: visible;
            }
            .home-container38 {
              background-color: #050505;
            }
            .home-container39 {
              overflow: visible;
            }
            .home-container40 {
              background-color: #050505;
            }
            .home-link20 {
              margin-top: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-buttonradius);
              background-color: #050505;
            }
            .home-container41 {
              width: auto;
              margin-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-text237 {
              fill: #050505;
              color: #050505;
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text238 {
              color: #050505;
              font-family: Inter;
            }
            .home-thq-ecosystem-elm {
              margin-top: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-twounits);
              background-color: var(--dl-color-pimary-700);
            }
            .home-thq-thq-content-elm-elm {
              align-items: center;
            }
            .home-text242 {
              color: rgb(18, 40, 33);
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 500;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text243 {
              max-width: 100%;
              text-align: center;
            }
            .home-thq-penultimate-elm {
              overflow: visible;
              padding-top: var(--dl-layout-space-tripleunit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-tripleunit);
            }
            .home-text244 {
              color: var(--dl-color-pimary-300);
              font-size: 18px;
              align-self: center;
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text245 {
              color: var(--dl-color-secondary-500);
              font-size: 30px;
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
            }
            .home-text246 {
              color: var(--dl-color-secondary-500);
              width: 80%;
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              margin-bottom: 0.25rem;
              animation-name: fadeIn;
              justify-content: center;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text247 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-text248 {
              color: var(--dl-color-secondary-500);
              font-size: 1.25rem;
              text-align: center;
              font-family: Inter;
            }
            .home-text249 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              font-style: inherit;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-text251 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-thq-contact-form-elm {
              overflow: visible;
              border-radius: var(--dl-layout-radius-cardradius);
            }
            .home-text253 {
              color: var(--dl-color-gray-white);
              font-size: 30px;
              font-style: normal;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-thq-form-elm {
              width: 100%;
            }
            .home-button {
              fill: var(--dl-color-pimary-500);
              color: var(--dl-color-gray-white);
              width: 100%;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
                rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
              transition: 0.3s;
              font-family: Inter;
              line-height: 1;
              padding-top: var(--dl-layout-space-halfunit);
              border-color: var(--dl-color-theme-neutral-light);
              border-style: solid;
              border-width: 1px;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-buttonradius);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-halfunit);
              text-transform: uppercase;
              background-color: #050505;
            }
            .home-text261 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text262 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text263 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .home-text264 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text265 {
              color: #050505;
              font-family: Inter;
            }
            .home-text266 {
              color: #050505;
              font-family: Inter;
            }
            .home-text267 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .home-text268 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .home-text269 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text270 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text271 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .home-text272 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text273 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text274 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text275 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text276 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text277 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text278 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .home-container10 {
              background-color: var(--dl-color-theme-neutral-light);
            }
            .home-thq-hero-elm {
              height: 774px;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
            }
            .home-thq-mobile-menu-elm {
              height: 11%;
            }
            .home-link10 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .home-thq-bg-elm {
              height: 781px;
              border-style: hidden;
              border-width: 0px;
            }
            .home-thq-hero-text-and-button-elm {
              left: -2px;
              width: 100%;
              bottom: 117px;
              height: 70%;
              overflow: visible;
            }
            .home-thq-hero-text-elm {
              overflow: visible;
              align-self: center;
              animation-name: fadeInUp;
              animation-delay: 0s;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text105 {
              color: var(--dl-color-gray-900);
              font-size: 32px;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              animation-name: slideInUp;
              padding-bottom: var(--dl-layout-space-halfunit);
              animation-delay: 0s;
              background-clip: text;
              background-image: inherit;
              animation-duration: 0.6s;
              animation-direction: normal;
              webkit-background-clip: text;
              animation-iteration-count: 1;
              animation-timing-function: ease-in-out;
            }
            .home-text106 {
              color: var(--dl-color-gray-900);
              display: flex;
              font-size: 18px;
              max-width: 600px;
              text-align: center;
              align-items: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-halfunit);
              align-content: center;
              padding-right: var(--dl-layout-space-halfunit);
              justify-content: center;
            }
            .home-image10 {
              display: none;
            }
            .home-thq-buttons-container-elm {
              padding-top: var(--dl-layout-space-twounits);
            }
            .home-link11 {
              color: #050505;
              width: 80%;
              display: flex;
              align-self: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .home-link12 {
              color: var(--dl-color-theme-neutral-light);
              width: 80%;
              z-index: 2000;
              align-self: center;
              margin-top: var(--dl-layout-space-halfunit);
              border-radius: var(--dl-layout-radius-buttonradius);
              margin-bottom: var(--dl-layout-space-unit);
              animation-name: fadeIn;
              background-color: rgba(255, 255, 255, 0);
              animation-timing-function: ease-in-out;
            }
            .home-thq-sub-hero-section-elm {
              width: 100%;
              height: 70vh;
              max-width: 2000px;
              min-height: 50vh;
              border-color: var(--dl-color-pimary-800);
              border-style: hidden;
              border-width: 1px;
              margin-bottom: var(--dl-layout-space-tripleunit);
              background-color: #ada6a6;
            }
            .home-thq-video-elm {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 70vh;
              margin: auto;
              min-height: 70vh;
              border-color: var(--dl-color-pimary-900);
              border-style: hidden;
              border-width: 1px;
            }
            .home-thq-dim-container-elm1 {
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
              margin: auto;
              background-color: rgba(25, 24, 24, 0.5);
            }
            .home-thq-heading-elm1 {
              color: var(--dl-color-pimary-900);
              height: auto;
              display: flex;
              z-index: 10;
              font-size: 32px;
              align-self: center;
              text-align: center;
              transition: 0.3s;
              font-family: Inter;
              padding-top: 0px;
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: center;
            }
            .home-thq-client-slider-elm {
              width: 100%;
              overflow: visible;
              max-width: 2000px;
              margin-top: 0px;
              padding-top: var(--dl-layout-space-doubleunit);
              margin-bottom: 0px;
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-doubleunit);
              justify-content: center;
            }
            .home-thq-texts-elm1 {
              width: 90%;
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-layout-space-unitandhalf);
              animation-name: fadeInRight;
              animation-delay: 0s;
              justify-content: center;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-heading-elm2 {
              color: rgb(5, 5, 5);
              font-size: 30px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              animation-name: fadeInUp;
              animation-delay: 0s;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-text-elm {
              color: rgb(5, 5, 5);
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              animation-name: fadeInLeft;
              justify-content: center;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-thq-logos-container-elm1 {
              width: 100%;
              overflow: hidden;
              max-width: 2500px;
            }
            .home-image11 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image12 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image13 {
              width: 70px;
              margin-top: 0px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 0px;
            }
            .home-image14 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image15 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image16 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image17 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image18 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image19 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image20 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-thq-logos-container-elm2 {
              width: 100%;
              overflow: hidden;
              max-width: 2500px;
            }
            .home-image21 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image22 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image23 {
              width: 70px;
              margin-top: 0px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 0px;
            }
            .home-image24 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image25 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image26 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image27 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image28 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image29 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-image30 {
              width: 70px;
              margin-left: 5px;
              margin-right: 5px;
            }
            .home-thq-services-carousels-elm {
              width: 100%;
              height: auto;
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              animation-name: fadeIn;
              padding-bottom: var(--dl-layout-space-unit);
              animation-delay: 0ms;
              background-color: var(--dl-color-pimary-900);
              animation-duration: 0.6s;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text107 {
              color: rgb(5, 5, 5);
              width: 100%;
              display: flex;
              font-size: 30px;
              align-self: center;
              font-style: normal;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-halfunit);
              animation-name: fadeInUp;
              animation-delay: 0s;
              justify-content: center;
              text-decoration: inherit;
              animation-duration: 0.6s;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-slider-elm1 {
              width: 100%;
              height: 450px;
              max-width: 1200px;
              align-self: center;
            }
            .home-thq-web-dev-slider-elm {
              width: 100%;
              height: 100%;
              opacity: 1;
              font-size: 18px;
              align-items: center;
              font-family: Inter;
              border-color: var(--dl-color-gray-900);
              border-width: 1px;
              border-radius: var(--dl-layout-radius-radius75);
              flex-direction: column;
              background-size: cover;
              justify-content: center;
              background-image: url('/mobile_design_and_dev%5B1%5D-1500h.webp');
            }
            .home-thq-text-container-elm10 {
              width: 100%;
              flex-direction: column;
            }
            .home-text108 {
              fill: var(--dl-color-pimary-800);
              color: #e3e8ef;
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: 0px;
            }
            .home-text109 {
              display: block;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 0px;
            }
            .home-text110 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text111 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text112 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-link13 {
              fill: var(--dl-color-pimary-800);
              color: rgba(227, 232, 239, 0.73);
              align-self: center;
              font-family: Arial;
            }
            .home-thq-dim-container-elm2 {
              width: 100%;
              height: 100%;
              border-radius: var(--dl-layout-radius-radius75);
              background-color: rgba(0, 0, 0, 0.5);
            }
            .home-thq-mobile-dev-slider-elm {
              height: 100%;
              align-items: center;
              border-radius: var(--dl-layout-radius-radius75);
              backdrop-filter: contrast(50%);
              background-size: cover;
              justify-content: center;
              background-image: url('/mobile_development_volues%5B1%5D-1500h.webp');
            }
            .home-thq-text-container-elm11 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text113 {
              fill: var(--dl-color-pimary-800);
              color: rgb(227, 232, 239);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .home-text114 {
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 40px;
            }
            .home-text115 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text116 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text117 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text118 {
              text-align: center;
            }
            .home-text119 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text120 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-link14 {
              fill: var(--dl-color-pimary-800);
              color: rgba(227, 232, 239, 0.73);
              align-self: center;
              font-family: Arial;
            }
            .home-thq-dim-container-elm3 {
              width: 100%;
              height: 100%;
              align-items: center;
              border-radius: var(--dl-layout-radius-radius75);
              justify-content: center;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .home-thq-digital-marketing-slider-elm {
              width: 100%;
              height: 100%;
              align-items: center;
              border-radius: var(--dl-layout-radius-radius75);
              background-size: cover;
              justify-content: center;
              background-image: url('/digital_marketing_volues%5B1%5D-1500h.webp');
            }
            .home-thq-text-container-elm12 {
              width: 90%;
            }
            .home-text121 {
              fill: var(--dl-color-pimary-800);
              color: rgb(227, 232, 239);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .home-text122 {
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 30px;
            }
            .home-text123 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text124 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text125 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text126 {
              text-align: center;
            }
            .home-text127 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text128 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-link15 {
              fill: var(--dl-color-pimary-800);
              color: rgba(227, 232, 239, 0.73);
              align-self: center;
              font-family: Arial;
            }
            .home-thq-dim-container-elm4 {
              width: 100%;
              height: 100%;
              border-radius: var(--dl-layout-radius-radius75);
              background-color: rgba(0, 0, 0, 0.5);
            }
            .home-thq-enterprise-software-slider-elm {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              border-radius: var(--dl-layout-radius-radius75);
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxCdXNpbmVzc3xlbnwwfHx8fDE3NzMwODc2MTJ8MA&ixlib=rb-4.1.0&h=1500');
            }
            .home-thq-text-container-elm13 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text129 {
              fill: var(--dl-color-pimary-800);
              color: rgb(227, 232, 239);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .home-text130 {
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .home-text131 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text132 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text133 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text134 {
              text-align: center;
            }
            .home-text135 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-text136 {
              align-self: center;
              margin-top: 0px;
              margin-bottom: 200px;
            }
            .home-link16 {
              fill: var(--dl-color-pimary-800);
              color: rgba(227, 232, 239, 0.73);
              align-self: center;
              font-family: Arial;
            }
            .home-thq-dim-container-elm5 {
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
              margin: auto;
              border-radius: var(--dl-layout-radius-radius75);
              background-color: rgba(0, 0, 0, 0.5);
            }
            .home-thq-digital-consulting-elm {
              width: 100%;
              height: 100%;
              display: flex;
              align-self: center;
              text-align: center;
              align-items: center;
              border-radius: var(--dl-layout-radius-radius75);
              background-size: cover;
              justify-content: center;
              background-image: url('https://images.unsplash.com/photo-1726137569966-a7354383e2ae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2OHx8RGlnaXRhbHxlbnwwfHx8fDE3NzMwODcyMTB8MA&ixlib=rb-4.1.0&h=1500');
            }
            .home-thq-text-container-elm14 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text137 {
              fill: var(--dl-color-pimary-800);
              color: rgb(227, 232, 239);
              font-size: 24px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .home-text138 {
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 20px;
            }
            .home-link17 {
              fill: var(--dl-color-pimary-800);
              color: rgba(227, 232, 239, 0.73);
              align-self: center;
              font-family: Arial;
            }
            .home-thq-dim-container-elm6 {
              left: 0px;
              right: 0px;
              width: 100%;
              height: 100%;
              margin: auto;
              border-radius: var(--dl-layout-radius-radius75);
              background-color: rgba(0, 0, 0, 0.5);
            }
            .home-thq-slider-button-next-elm1 {
              display: none;
            }
            .home-thq-metrics-elm {
              width: 100%;
              overflow: visible;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: var(--dl-color-pimary-900);
            }
            .home-text139 {
              color: var(--dl-color-theme-neutral-dark);
              width: 95%;
              font-size: 30px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              animation-name: fadeInUp;
              animation-delay: 0s;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text140 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 1.12rem;
              text-align: center;
              font-family: Inter;
              padding-left: var(--dl-layout-space-halfunit);
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .home-text141 {
              color: #050505;
              align-self: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .home-text144 {
              color: #050505;
              font-family: Inter;
            }
            .home-text147 {
              color: #050505;
              font-family: Inter;
            }
            .home-thq-vid-card-elm {
              width: 100%;
              margin-top: var(--dl-layout-space-halfunit);
              padding-left: 0px;
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: 0px;
              animation-name: fadeInUp;
              animation-delay: 150ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-in;
            }
            .home-video1 {
              align-self: center;
            }
            .home-thq-stack-container-elm {
              width: 100%;
              height: 100%;
              padding: 0px;
              overflow: visible;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-halfunit);
              justify-content: flex-start;
              background-color: #050505;
            }
            .home-thq-headline-elm {
              overflow: visible;
              align-items: center;
              justify-content: center;
            }
            .home-text154 {
              color: var(--dl-color-pimary-700);
              width: 80%;
              display: flex;
              overflow: visible;
              font-size: 30px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-thq-card1-elm {
              width: 90%;
              height: 100%;
              overflow: visible;
              margin-top: 0px;
              margin-left: auto;
              padding-top: var(--dl-layout-space-unit);
              margin-right: auto;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              background-color: var(--dl-color-pimary-700);
            }
            .home-container13 {
              width: 2rem;
              height: 2rem;
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-text155 {
              color: var(--dl-color-secondary-100);
              font-size: 16px;
              align-self: center;
              font-style: inherit;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text156 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-thq-card2-elm {
              width: 90%;
              height: 100%;
              display: flex;
              overflow: visible;
              align-self: center;
              margin-top: 0px;
              margin-left: auto;
              padding-top: var(--dl-layout-space-unit);
              margin-right: auto;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: var(--dl-color-pimary-700);
            }
            .home-container14 {
              width: 2rem;
              height: 2rem;
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-icon12 {
              width: 2rem;
            }
            .home-text157 {
              color: var(--dl-color-secondary-100);
              font-size: 18px;
              font-style: inherit;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-text158 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .home-thq-card3-elm {
              width: 90%;
              height: 100%;
              overflow: visible;
              margin-top: 0px;
              align-items: center;
              margin-left: auto;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-width: 1px;
              margin-right: auto;
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-cardradius);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: var(--dl-color-pimary-700);
            }
            .home-container15 {
              width: 2rem;
              height: 2rem;
              border-radius: var(--dl-layout-radius-round);
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-text159 {
              color: var(--dl-color-secondary-100);
              display: flex;
              font-size: 16px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-unit);
              flex-direction: column;
              justify-content: center;
            }
            .home-text160 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              display: flex;
              font-size: 18px;
              text-align: center;
              font-family: Inter;
              line-height: 1.625rem;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .home-thq-evolution-elm {
              width: 100%;
              overflow: visible;
              margin-top: 0px;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              background-color: #050505;
            }
            .home-text161 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-pimary-700);
              overflow: visible;
              font-size: 24px;
              align-self: center;
              font-style: inherit;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 700;
              line-height: 1.2;
              margin-bottom: var(--dl-layout-space-unit);
              animation-name: fadeIn;
              text-transform: capitalize;
              animation-delay: 0s;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-texts-elm2 {
              width: 97%;
              overflow: visible;
              align-self: center;
              padding-top: 0px;
              background-color: #050505;
              animation-duration: nullms;
            }
            .home-thq-text1-elm {
              width: 90%;
              overflow: visible;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-pimary-700);
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              animation-name: zoomIn;
              padding-bottom: var(--dl-layout-space-unit);
              animation-delay: nullms;
              justify-content: center;
              background-color: #050505;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text162 {
              fill: var(--dl-color-theme-neutral-light);
              color: var(--dl-color-pimary-700);
              display: flex;
              font-size: 18px;
              align-self: center;
              font-style: normal;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 500;
              border-style: hidden;
              border-width: 1px;
              border-radius: var(--dl-layout-radius-radius75);
              margin-bottom: var(--dl-layout-space-unit);
              text-transform: none;
              justify-content: center;
              text-decoration: none;
            }
            .home-text163 {
              color: var(--dl-color-pimary-700);
              display: flex;
              font-size: 16px;
              align-self: center;
              font-style: normal;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 200;
              white-space: normal;
              border-color: rgba(195, 197, 201, 0);
              border-style: hidden;
              border-width: 1px;
              margin-bottom: var(--dl-layout-space-doubleunit);
              text-transform: none;
              backdrop-filter: blur(5px);
              justify-content: center;
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .home-thq-text2-elm {
              width: 90%;
              overflow: visible;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              border-color: #c52741;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              animation-name: fadeInUp;
              padding-bottom: var(--dl-layout-space-unit);
              animation-delay: 200ms;
              justify-content: center;
              background-color: #050505;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text164 {
              color: var(--dl-color-secondary-500);
              display: flex;
              font-size: 18px;
              align-self: center;
              font-style: normal;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 500;
              border-color: #000000;
              border-style: hidden;
              border-width: 1px;
              border-radius: var(--dl-layout-radius-radius75);
              margin-bottom: var(--dl-layout-space-unit);
              text-transform: none;
              justify-content: center;
              text-decoration: none;
            }
            .home-text165 {
              color: var(--dl-color-secondary-700);
              display: flex;
              font-size: 16px;
              align-self: center;
              font-style: normal;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 200;
              white-space: normal;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 1px;
              margin-bottom: var(--dl-layout-space-doubleunit);
              text-transform: none;
              justify-content: center;
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .home-thq-text3-elm {
              width: 90%;
              overflow: visible;
              align-self: center;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              border-color: var(--dl-color-pimary-700);
              border-style: solid;
              border-width: 5px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              animation-name: fadeInUp;
              padding-bottom: var(--dl-layout-space-unit);
              animation-delay: 300ms;
              justify-content: center;
              animation-duration: 800ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text166 {
              color: var(--dl-color-pimary-700);
              font-size: 18px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 500;
              border-color: #000000;
              border-style: hidden;
              border-width: 1px;
              border-radius: var(--dl-layout-radius-radius75);
              margin-bottom: var(--dl-layout-space-unit);
              text-transform: none;
              text-decoration: none;
            }
            .home-text167 {
              color: var(--dl-color-pimary-700);
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 200;
              white-space: normal;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 1px;
              margin-bottom: 0.25rem;
              text-transform: none;
              text-decoration: none;
              background-color: rgb(5, 5, 5);
            }
            .home-thq-section1-elm {
              width: 100%;
              overflow: visible;
              align-self: center;
              margin-left: var(--dl-layout-space-unit);
              padding-top: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: var(--dl-color-theme-neutral-light);
            }
            .home-container16 {
              max-width: auto;
              margin-left: var(--dl-layout-space-unit);
              border-color: var(--dl-color-gray-900);
              border-width: 1px;
              margin-right: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-radius4);
            }
            .home-thq-work-with-us-elm {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .home-container17 {
              width: 90%;
              margin-top: var(--dl-layout-space-halfunit);
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-container18 {
              width: 3rem;
              height: 3rem;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .home-text168 {
              color: rgb(5, 5, 5);
              font-size: 30px;
              font-family: Inter;
              font-weight: 600;
              margin-bottom: var(--dl-layout-space-halfunit);
              animation-name: fadeInUp;
              animation-duration: 0.6s;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text169 {
              color: rgb(5, 5, 5);
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              font-weight: 200;
              margin-bottom: var(--dl-layout-space-unit);
              animation-name: fadeInUp;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-link18 {
              color: var(--dl-color-pimary-300);
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
            }
            .home-container19 {
              width: 90%;
              margin-left: var(--dl-layout-space-halfunit);
              margin-right: var(--dl-layout-space-halfunit);
              animation-name: fadeInLeftBig;
              animation-delay: 100ms;
              background-color: #050505;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-thq-team-vid-elm {
              height: 100%;
              border-color: #050505;
              border-width: 1px;
              border-radius: var(--dl-layout-radius-radius50);
              animation-name: slideInUp;
              animation-delay: 100ms;
              background-size: cover;
              background-image: url('https://videos.pexels.com/video-files/3254013/3254013-hd_1280_720_25fps.mp4');
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-video2 {
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
            }
            .home-container20 {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-imageradius);
              padding-right: var(--dl-layout-space-unit);
              animation-name: none;
              animation-delay: 0s;
              background-color: #050505;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text172 {
              font-size: 1.25rem;
              align-self: stretch;
              text-align: left;
              font-family: Inter;
              animation-name: fadeInUp;
              animation-duration: 0.6s;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text173 {
              color: rgb(242, 245, 249);
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              font-weight: 300;
              margin-bottom: var(--dl-layout-space-unit);
              animation-name: fadeInUp;
              animation-duration: 0.6ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-link19 {
              width: 90%;
              align-self: center;
              margin-top: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-radius75);
            }
            .home-thq-faqs-elm {
              width: 95%;
              overflow: visible;
              padding-top: var(--dl-layout-space-tripleunit);
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              padding-left: 0px;
              padding-right: 0px;
              animation-name: fadeIn;
              padding-bottom: var(--dl-layout-space-tripleunit);
              animation-delay: 0ms;
              background-color: var(--dl-color-pimary-900);
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-heading-elm3 {
              color: rgb(5, 5, 5);
              width: 100%;
              font-size: 24px;
              align-self: center;
              font-style: inherit;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              animation-name: fadeIn;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-faqs-content-elm {
              width: 100%;
              align-self: center;
            }
            .home-thq-faqs-element-elm {
              align-self: center;
              animation-name: fadeIn;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-trigger-elm1 {
              width: 100%;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              background-color: var(--dl-color-pimary-900);
            }
            .home-thq-summary-elm1 {
              border-color: rgba(195, 197, 201, 0);
            }
            .home-text174 {
              color: rgb(5, 5, 5);
              width: 100%;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 500;
              border-style: hidden;
              border-width: 1px;
            }
            .home-text176 {
              font-family: Comic Sans MS;
            }
            .home-container21 {
              width: 100%;
              background-color: var(--dl-color-pimary-700);
            }
            .home-text180 {
              color: var(--dl-color-secondary-400);
              font-family: Inter;
            }
            .home-thq-faqs-element1-elm {
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 1px;
              animation-name: none;
              animation-delay: 100ms;
              background-color: #d9d9d9;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-trigger-elm2 {
              width: 100%;
              align-self: center;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
            }
            .home-text181 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 500;
            }
            .home-container22 {
              width: 100%;
              background-color: var(--dl-color-pimary-700);
            }
            .home-text182 {
              color: var(--dl-color-secondary-400);
              font-family: Inter;
            }
            .home-thq-faqs-element2-elm {
              animation-name: fadeIn;
              animation-delay: 200ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-trigger-elm3 {
              width: 100%;
              align-self: center;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
            }
            .home-text183 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 500;
            }
            .home-container23 {
              background-color: var(--dl-color-pimary-700);
            }
            .home-text184 {
              color: var(--dl-color-secondary-400);
              font-family: Inter;
            }
            .home-thq-faqs-element3-elm {
              animation-name: fadeIn;
              animation-delay: 300ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-trigger-elm4 {
              width: 100%;
              align-self: center;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
              background-color: var(--dl-color-pimary-900);
            }
            .home-text185 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 500;
            }
            .home-container24 {
              width: 100%;
              background-color: var(--dl-color-pimary-700);
            }
            .home-text186 {
              color: var(--dl-color-secondary-400);
              width: 100%;
              font-family: Inter;
            }
            .home-thq-faqs-element5-elm {
              animation-name: fadeIn;
              animation-delay: 400ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-trigger-elm5 {
              width: 100%;
              align-self: center;
              border-color: var(--dl-color-gray-900);
              border-style: hidden;
              border-width: 0px;
            }
            .home-text187 {
              color: rgb(5, 5, 5);
              width: 100%;
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 500;
            }
            .home-container25 {
              width: 100%;
              background-color: var(--dl-color-pimary-700);
            }
            .home-text188 {
              color: var(--dl-color-secondary-400);
              width: 100%;
              font-family: Inter;
            }
            .home-thq-reviews-elm {
              width: 100%;
              height: auto;
              padding: 0px;
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              background-color: var(--dl-color-pimary-900);
            }
            .home-text189 {
              color: rgb(5, 5, 5);
              font-size: 24px;
              font-style: inherit;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              animation-name: fadeInUp;
              padding-bottom: var(--dl-layout-space-twounits);
              animation-delay: 0s;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text190 {
              color: #050505;
            }
            .home-text191 {
              color: #c52741;
            }
            .home-text192 {
              color: #050505;
            }
            .home-thq-slider-elm2 {
              width: 100%;
              height: 450px;
              max-width: 1200px;
              align-self: center;
            }
            .home-thq-sophia-thomas-reviiew-elm {
              width: 100%;
              height: 100%;
              opacity: 1;
              font-size: 18px;
              align-items: center;
              font-family: Inter;
              border-color: var(--dl-color-secondary-500);
              border-width: 10px;
              border-radius: var(--dl-layout-radius-radius75);
              flex-direction: column;
              justify-content: center;
            }
            .home-thq-text-container-elm15 {
              width: 80%;
            }
            .home-text193 {
              fill: var(--dl-color-secondary-700);
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              align-self: center;
              text-align: center;
              margin-bottom: 20px;
            }
            .home-text194 {
              fill: var(--dl-color-secondary-700);
              color: rgb(5, 5, 5);
              width: 80%;
              font-size: 18px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container26 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image31 {
              width: 30%;
              border-radius: var(--dl-layout-radius-round);
            }
            .home-text195 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 20px;
              font-family: Inter;
            }
            .home-text196 {
              fill: var(--dl-color-theme-neutral-dark);
              color: #050505;
              font-size: 16px;
              font-family: Inter;
            }
            .home-text197 {
              fill: var(--dl-color-pimary-300);
              color: var(--dl-color-pimary-300);
              font-size: 16px;
              font-family: Inter;
            }
            .home-thq-max-miller-elm {
              width: 100%;
              height: 100%;
              opacity: 1;
              font-size: 18px;
              align-items: center;
              font-family: Inter;
              border-color: var(--dl-color-secondary-500);
              border-width: 10px;
              border-radius: var(--dl-layout-radius-radius75);
              flex-direction: column;
              justify-content: center;
            }
            .home-thq-text-container-elm16 {
              width: 80%;
            }
            .home-text198 {
              fill: var(--dl-color-secondary-700);
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              align-self: center;
              text-align: center;
              margin-bottom: 20px;
            }
            .home-text199 {
              fill: var(--dl-color-secondary-700);
              color: rgb(5, 5, 5);
              width: 80%;
              font-size: 18px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container27 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image32 {
              width: 30%;
              border-radius: var(--dl-layout-radius-round);
            }
            .home-text200 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 20px;
              font-family: Inter;
            }
            .home-text201 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text202 {
              fill: var(--dl-color-pimary-300);
              color: var(--dl-color-pimary-300);
              width: 100%;
              font-size: 14px;
              text-align: center;
              font-family: Inter;
            }
            .home-thq-aaron-vance-elm {
              width: 100%;
              height: 100%;
              opacity: 1;
              font-size: 18px;
              align-items: center;
              font-family: Inter;
              border-color: var(--dl-color-secondary-500);
              border-width: 10px;
              border-radius: var(--dl-layout-radius-radius75);
              flex-direction: column;
              justify-content: center;
            }
            .home-thq-text-container-elm17 {
              width: 80%;
            }
            .home-text203 {
              fill: var(--dl-color-secondary-700);
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              align-self: center;
              text-align: center;
              margin-bottom: 20px;
            }
            .home-text204 {
              fill: var(--dl-color-secondary-700);
              color: rgb(5, 5, 5);
              width: 90%;
              font-size: 18px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container28 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image33 {
              width: 30%;
              border-radius: var(--dl-layout-radius-round);
            }
            .home-text205 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 20px;
              font-family: Inter;
            }
            .home-text206 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text207 {
              fill: var(--dl-color-pimary-300);
              color: var(--dl-color-pimary-300);
              font-size: 16px;
              font-family: Inter;
            }
            .home-thq-maleek-zaiyan-elm {
              width: 100%;
              height: 100%;
              opacity: 1;
              font-size: 18px;
              align-items: center;
              font-family: Inter;
              border-color: var(--dl-color-secondary-500);
              border-width: 10px;
              border-radius: var(--dl-layout-radius-radius75);
              flex-direction: column;
              justify-content: center;
            }
            .home-thq-text-container-elm18 {
              width: 80%;
            }
            .home-text208 {
              fill: var(--dl-color-secondary-700);
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              align-self: center;
              text-align: center;
              margin-bottom: 20px;
            }
            .home-text209 {
              fill: var(--dl-color-secondary-700);
              color: #050505;
              width: 85%;
              font-size: 18px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .home-container29 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image34 {
              width: 30%;
              border-radius: var(--dl-layout-radius-round);
            }
            .home-text210 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 20px;
              font-family: Inter;
            }
            .home-text211 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text212 {
              fill: var(--dl-color-pimary-300);
              color: var(--dl-color-pimary-300);
              font-size: 16px;
              font-family: Inter;
            }
            .home-thq-destiny-isaac-elm {
              width: 100%;
              height: 100%;
              opacity: 1;
              font-size: 18px;
              align-items: center;
              font-family: Inter;
              border-color: var(--dl-color-secondary-500);
              border-width: 10px;
              border-radius: var(--dl-layout-radius-radius75);
              flex-direction: column;
              justify-content: center;
            }
            .home-thq-text-container-elm19 {
              width: 80%;
            }
            .home-text213 {
              fill: var(--dl-color-secondary-700);
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              align-self: center;
              text-align: center;
              margin-bottom: 20px;
            }
            .home-text214 {
              fill: var(--dl-color-secondary-700);
              color: rgb(5, 5, 5);
              width: 80%;
              font-size: 18px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-container30 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image35 {
              width: 30%;
              border-radius: var(--dl-layout-radius-round);
            }
            .home-text215 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 20px;
              margin-top: var(--dl-layout-space-halfunit);
              font-family: Inter;
            }
            .home-text216 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text217 {
              fill: var(--dl-color-pimary-300);
              color: var(--dl-color-pimary-300);
              font-size: 16px;
              font-family: Inter;
            }
            .home-thq-desta-bryson-elm {
              width: 100%;
              height: 100%;
              opacity: 1;
              font-size: 18px;
              align-items: center;
              font-family: Inter;
              border-color: var(--dl-color-secondary-500);
              border-width: 10px;
              border-radius: var(--dl-layout-radius-radius75);
              flex-direction: column;
              justify-content: center;
            }
            .home-thq-text-container-elm20 {
              width: 80%;
            }
            .home-text218 {
              fill: var(--dl-color-secondary-700);
              color: var(--dl-color-secondary-700);
              font-size: 18px;
              align-self: center;
              text-align: center;
              margin-bottom: 20px;
            }
            .home-text219 {
              fill: var(--dl-color-secondary-700);
              color: #050505;
              width: 85%;
              font-size: 18px;
              align-self: center;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              margin-bottom: 10px;
            }
            .home-container31 {
              width: 80%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image36 {
              width: 30%;
              border-radius: var(--dl-layout-radius-round);
            }
            .home-text220 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 20px;
              margin-top: var(--dl-layout-space-halfunit);
              font-family: Inter;
            }
            .home-text221 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              font-size: 16px;
              font-family: Inter;
            }
            .home-text222 {
              fill: var(--dl-color-pimary-300);
              color: var(--dl-color-pimary-300);
              font-size: 16px;
              font-family: Inter;
            }
            .home-thq-slider-pagination-elm2 {
              display: none;
            }
            .home-thq-slider-button-prev-elm2 {
              display: none;
            }
            .home-thq-slider-button-next-elm2 {
              display: none;
            }
            .home-thq-system-elm {
              width: 100%;
              height: 100%;
              overflow: visible;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              background-color: var(--dl-color-theme-neutral-light);
            }
            .home-container32 {
              width: 100%;
              box-shadow: 5px 5px 10px 0px #483d3d;
            }
            .home-text223 {
              color: #050505;
              font-size: 16px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 2.5rem;
              margin-left: var(--dl-layout-space-halfunit);
            }
            .home-text224 {
              color: #050505;
              width: 80%;
              font-size: 16px;
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unitandhalf);
            }
            .home-thq-growing-company-section-elm {
              width: 100%;
              height: 100%;
              overflow: visible;
              align-self: center;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .home-video3 {
              width: 100%;
              height: 100%;
              align-self: center;
            }
            .home-container33 {
              overflow: visible;
              margin-top: 0px;
              align-items: flex-start;
              margin-left: var(--dl-layout-space-halfunit);
              padding-top: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-container34 {
              width: 3rem;
              height: 3rem;
              overflow: visible;
              animation-name: none;
              animation-delay: 0s;
              background-color: #050505;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text225 {
              color: #050505;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
            }
            .home-text226 {
              fill: #050505;
              color: rgb(5, 5, 5);
              margin-top: var(--dl-layout-space-unit);
              text-align: left;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unitandhalf);
            }
            .home-text227 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text228 {
              font-size: 16px;
            }
            .home-text230 {
              font-family: Inter;
            }
            .home-text232 {
              font-family: Inter;
            }
            .home-container35 {
              overflow: visible;
            }
            .home-container36 {
              animation-name: fadeInUp;
              animation-delay: 200s;
              background-color: #050505;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text234 {
              color: rgb(5, 5, 5);
              font-family: Inter;
              border-radius: var(--dl-layout-radius-radius4);
              animation-name: fadeInUp;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-container37 {
              overflow: visible;
            }
            .home-container38 {
              animation-name: none;
              animation-delay: 0s;
              background-color: #050505;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text235 {
              color: #050505;
              font-family: Inter;
              animation-name: fadeInUp;
              animation-delay: 300s;
              animation-duration: 1500ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-container39 {
              overflow: visible;
            }
            .home-container40 {
              background-color: #050505;
            }
            .home-text236 {
              color: #050505;
              font-family: Inter;
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-link20 {
              border-radius: var(--dl-layout-radius-buttonradius);
              animation-name: none;
              animation-delay: 0s;
              background-color: rgb(5, 5, 5);
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-container41 {
              overflow: visible;
              margin-top: var(--dl-layout-space-unit);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .home-text237 {
              color: #050505;
              font-size: 30px;
              margin-top: var(--dl-layout-space-unit);
              text-align: left;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
              animation-name: fadeInUp;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-in;
            }
            .home-text238 {
              color: rgb(5, 5, 5);
              text-align: left;
              font-family: Inter;
              margin-bottom: 0.25rem;
              animation-name: fadeInLeft;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-thq-ecosystem-elm {
              margin-top: var(--dl-layout-space-twounits);
              background-color: var(--dl-color-pimary-700);
            }
            .home-text242 {
              color: rgb(18, 40, 33);
              width: 100%;
              font-size: 20px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 500;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .home-text243 {
              color: rgb(5, 5, 5);
              width: 100%;
              font-size: 18px;
              max-width: 300px;
              text-align: center;
              font-family: Inter;
              line-height: 30px;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-thq-thq-partners-mobile-elm-elm {
              backdrop-filter: blur(5px);
            }
            .home-thq-thq-row-elm-elm {
              width: 100%;
              align-self: center;
              justify-content: center;
            }
            .home-image45 {
              width: 70px;
            }
            .home-image46 {
              width: 70px;
            }
            .home-image47 {
              width: 70px;
            }
            .home-image48 {
              width: 70px;
            }
            .home-thq-thq-column-elm-elm3 {
              width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image49 {
              width: 70px;
            }
            .home-image50 {
              width: 70px;
            }
            .home-image51 {
              width: 70px;
            }
            .home-image52 {
              width: 70px;
            }
            .home-thq-penultimate-elm {
              overflow: visible;
              padding-top: var(--dl-layout-space-tripleunit);
              padding-left: 0px;
              padding-right: 0px;
              animation-name: fadeInUp;
              padding-bottom: var(--dl-layout-space-tripleunit);
              animation-delay: 0ms;
              background-color: #050505;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text244 {
              fill: var(--dl-color-pimary-300);
              color: var(--dl-color-pimary-300);
              font-size: 16px;
              align-self: center;
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              padding-left: var(--dl-layout-space-halfunit);
              border-radius: var(--dl-layout-radius-cardradius);
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-halfunit);
              animation-name: none;
              animation-delay: 0s;
              background-color: var(--dl-color-pimary-700);
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-container42 {
              animation-name: fadeInUp;
              animation-delay: 0ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text245 {
              color: var(--dl-color-secondary-500);
              font-size: 30px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .home-text246 {
              color: var(--dl-color-secondary-500);
              width: 80%;
              display: flex;
              font-size: 18px;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Inter;
              font-weight: 300;
              margin-bottom: 0.25rem;
              justify-content: center;
            }
            .home-thq-services-elm {
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-icon40 {
              animation-name: none;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-text247 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text248 {
              color: var(--dl-color-secondary-500);
              font-size: 16px;
              text-align: center;
              font-family: Inter;
            }
            .home-thq-container-elm {
              animation-name: fadeInUp;
              animation-delay: 200ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text249 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text250 {
              color: rgb(100, 116, 139);
              font-size: 16px;
              text-align: center;
              font-family: Inter;
            }
            .home-container46 {
              animation-name: fadeInUp;
              animation-delay: 300ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text251 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 18px;
              font-style: inherit;
              margin-top: var(--dl-layout-space-unitandhalf);
              text-align: center;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text252 {
              color: rgb(100, 116, 139);
              font-size: 16px;
              text-align: center;
              font-family: Inter;
            }
            .home-thq-contact-form-elm {
              overflow: visible;
              border-color: var(--dl-color-gray-900);
              border-width: 0px;
              border-radius: var(--dl-layout-radius-cardradius);
              animation-name: pulse;
              animation-delay: 400ms;
              animation-duration: 600ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text253 {
              color: var(--dl-color-gray-white);
              font-size: 30px;
              font-style: normal;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              animation-name: fadeInUp;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease-out;
            }
            .home-text254 {
              color: rgba(255, 255, 255, 0.75);
              width: 80%;
              font-size: 18px;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              animation-name: fadeInUp;
              animation-delay: 100ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-thq-form-elm {
              border-color: var(--dl-color-gray-900);
              border-width: 1px;
              background-color: #050505;
            }
            .home-text255 {
              color: var(--dl-color-pimary-900);
              font-size: 22px;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
              line-height: 2rem;
            }
            .home-text256 {
              color: var(--dl-color-pimary-900);
              font-size: 14px;
              text-align: center;
              font-family: Inter;
              font-weight: 400;
              margin-bottom: var(--dl-layout-space-halfunit);
              text-transform: none;
              text-decoration: none;
            }
            .home-text257 {
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
            .home-text258 {
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
            .home-text259 {
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
            .home-text260 {
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
            .home-textarea {
              z-index: 10;
            }
            .home-container49 {
              border-color: var(--dl-color-pimary-900);
              border-style: hidden;
              border-width: 0px;
              border-radius: 50px;
            }
            .home-button {
              color: var(--dl-layout-space-sixunits);
              width: 100%;
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
            .home-thq-map-elm {
              width: 100%;
              height: 100%;
              padding: var(--dl-layout-space-halfunit);
              align-self: center;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              justify-content: center;
              background-color: rgba(0, 0, 0, 0);
            }
            .home-google-maps {
              align-self: stretch;
            }
            .home-text261 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text262 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text263 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text264 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text265 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text266 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text267 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .home-text268 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .home-text269 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text270 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text271 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .home-text272 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text273 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text274 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text275 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text276 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text277 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .home-text278 {
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

export default Home

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
