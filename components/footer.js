import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container1 ${props.rootClassName} `}>
        <div className="footer-container2">
          <div className="footer-container3">
            <div className="footer-thq-volues-elm">
              <div className="footer-thq-logo-elm">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="footer-image"
                />
              </div>
              <h1 className="footer-text10">Volues Technologies LTD</h1>
            </div>
            <div className="footer-thq-address-container-elm">
              <span className="footer-thq-address-elm">
                Aminu Kano Crescent, Wuse II, Abuja, FCT
              </span>
            </div>
            <div className="footer-thq-email-container-elm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="footer-icon10"
              >
                <path
                  d="m20 8l-8 5l-8-5v10h16zm0-2H4l8 4.99z"
                  fill="currentColor"
                  opacity=".3"
                ></path>
                <path
                  d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5l8-5v10H4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="footer-thq-email-elm">Hello@volues.com</span>
            </div>
            <div className="footer-thq-phone-container-elm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="footer-icon13"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05l-.16-.03l-.336-.072l-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26s-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a12 12 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159m8.135 3.595l.116.013a3.5 3.5 0 0 1 2.858 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .232-1.983M15 3a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L19 9a4 4 0 0 0-3.738-3.991L15 5a1 1 0 1 1 0-2"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <span className="footer-thq-phone-number-elm">
                <span>+</span>
                <span className="footer-text12">2347079388502</span>
              </span>
            </div>
          </div>
          <div className="footer-container4">
            <h1 className="footer-text13">Let&apos;s keep in touch</h1>
            <span className="footer-text14">
              Find out on any of these platforms, we respond 1-2 business days.
            </span>
            <div className="footer-container5">
              <a
                href="https://x.com/TeamVolues"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link10"
              >
                <div className="footer-thq-twitter-container-elm">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="footer-icon17"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/volues/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link11"
              >
                <div className="footer-thq-linkedin-container-elm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon19"
                  >
                    <path
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com/teamvolues?igsh=Z2p5dWkxOHNuM3g4"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link12"
              >
                <div className="footer-thq-instagram-container-elm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon21"
                  >
                    <path
                      d="M11.95 1h.1c1.827 0 3.266 0 4.42.105c1.178.106 2.156.328 3.03.833A7 7 0 0 1 22.062 4.5c.505.874.727 1.852.833 3.03C23 8.684 23 10.123 23 11.95v.1c0 1.827 0 3.266-.105 4.42c-.106 1.178-.328 2.156-.833 3.03a7 7 0 0 1-2.562 2.562c-.874.505-1.852.727-3.03.833c-1.154.105-2.593.105-4.42.105h-.1c-1.827 0-3.266 0-4.42-.105c-1.178-.106-2.156-.328-3.03-.833A7 7 0 0 1 1.938 19.5c-.505-.874-.727-1.852-.833-3.03C1 15.316 1 13.877 1 12.05v-.1c0-1.827 0-3.266.105-4.42c.106-1.178.328-2.156.833-3.03A7 7 0 0 1 4.5 1.938c.874-.505 1.852-.727 3.03-.833C8.684 1 10.123 1 11.95 1M7.71 3.096c-1.039.095-1.691.274-2.21.574A5 5 0 0 0 3.67 5.5c-.3.519-.48 1.171-.574 2.21C3.001 8.764 3 10.112 3 12s.001 3.236.096 4.29c.095 1.039.274 1.691.574 2.21a5 5 0 0 0 1.83 1.83c.519.3 1.171.48 2.21.574c1.054.095 2.402.096 4.29.096s3.236-.001 4.29-.096c1.039-.095 1.691-.274 2.21-.574a5 5 0 0 0 1.83-1.83c.3-.519.48-1.171.574-2.21c.095-1.053.096-2.402.096-4.29s-.001-3.236-.096-4.29c-.095-1.039-.274-1.691-.574-2.21a5 5 0 0 0-1.83-1.83c-.519-.3-1.171-.48-2.21-.574C15.237 3.001 13.888 3 12 3s-3.236.001-4.29.096m9.04 3.156c0-.552.45-1.002 1.002-1.002s1.002.45 1.002 1.002s-.45 1.002-1.002 1.002s-1.002-.45-1.002-1.002M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 12a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com/@teamvolues?si=8uOe0n3PBnsu9C_X"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link13"
              >
                <div className="footer-thq-facebook-container-elm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon23"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                      <path
                        d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m0 2c-.825 0-1.674.022-2.5.056l-.978.047l-.939.055l-.882.06l-.808.063a1.8 1.8 0 0 0-1.666 1.623C4.11 9.113 4 10.618 4 12s.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062l.882.06l.939.056l.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047l.939-.055l.882-.06l.808-.063a1.8 1.8 0 0 0 1.666-1.623C19.89 14.887 20 13.382 20 12s-.11-2.887-.227-4.096a1.8 1.8 0 0 0-1.666-1.623l-.808-.062l-.882-.06l-.939-.056l-.978-.047A61 61 0 0 0 12 6m-2 3.575a.6.6 0 0 1 .819-.559l.081.04l4.2 2.424a.6.6 0 0 1 .085.98l-.085.06l-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
              <a
                href="https://wa.me/message/DMXFMBF3HKXGE1"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link14"
              >
                <div className="footer-thq-whatsapp-container-elm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon27"
                  >
                    <path
                      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-thq-footer-links-container-elm">
            <div className="footer-container6">
              <h1 className="footer-text15">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="footer-text25">Company</span>
                  </Fragment>
                )}
              </h1>
              <Link href="/about">
                <a className="footer-link15">
                  {props.text ?? (
                    <Fragment>
                      <span className="footer-text21">About Volues</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/pp">
                <a className="footer-link16">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="footer-text28">Our Process</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/careers">
                <a className="footer-link17">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="footer-text24">Careers</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/culture">
                <a className="footer-link18">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="footer-text33">Our Culture</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/services">
                <a className="footer-link19">
                  {props.text11 ?? (
                    <Fragment>
                      <span className="footer-text35">Our Services</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
            <div className="footer-container7">
              <h1 className="footer-text16">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="footer-text31">Resources</span>
                  </Fragment>
                )}
              </h1>
              <Link href="/blog">
                <a className="footer-link20">
                  {props.text111 ?? (
                    <Fragment>
                      <span className="footer-text27">Blog</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/wp">
                <a className="footer-link21">
                  {props.text1111 ?? (
                    <Fragment>
                      <span className="footer-text26">White Papers</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/insight">
                <a className="footer-link22">
                  {props.text11111 ?? (
                    <Fragment>
                      <span className="footer-text30">Tech Insight</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/team">
                <a className="footer-link23">
                  {props.text111111 ?? (
                    <Fragment>
                      <span className="footer-text34">Our Team</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/contact">
                <a className="footer-link24">
                  {props.text11111111 ?? (
                    <Fragment>
                      <span className="footer-text36">Contact Us</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
            <div className="footer-container8">
              <h1 className="footer-text17">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="footer-text19">Legal</span>
                  </Fragment>
                )}
              </h1>
              <Link href="/policy">
                <a className="footer-link25">
                  {props.text1112 ?? (
                    <Fragment>
                      <span className="footer-text32">Privacy Policy</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/tos">
                <a className="footer-link26">
                  {props.text11112 ?? (
                    <Fragment>
                      <span className="footer-text23">Terms of Service</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/cookies">
                <a className="footer-link27">
                  {props.text111112 ?? (
                    <Fragment>
                      <span className="footer-text22">Cookie Policy</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <a
                href="https://drfbjxkqoahwywnrwcig.supabase.co/storage/v1/object/public/Volues%20Flies/Volues%20Non%20Disclosure.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link28"
              >
                {props.text1111111111 ?? (
                  <Fragment>
                    <span className="footer-text20">NDA &amp; DPA</span>
                  </Fragment>
                )}
              </a>
              <Link href="/sp">
                <a className="footer-link29">
                  {props.text111111111 ?? (
                    <Fragment>
                      <span className="footer-text29">Security Policy</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <span className="footer-text18">
          © 2026 Volues Technologies LTD. All rights reserverd
        </span>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-twounits);
            max-width: 100%;
            align-items: center;
            margin-left: var(--dl-layout-space-unit);
            margin-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .footer-container2 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-thq-volues-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .footer-thq-logo-elm {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .footer-image {
            width: 70%;
            object-fit: cover;
          }
          .footer-text10 {
            color: rgb(5, 5, 5);
            display: flex;
            font-size: 32px;
            align-self: center;
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            font-weight: 600;
            margin-left: 0px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .footer-thq-address-container-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .footer-thq-address-elm {
            color: #050505;
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-thq-email-container-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .footer-icon10 {
            color: 050505;
          }
          .footer-thq-email-elm {
            color: #050505;
            margin-top: 0px;
            font-family: 'Inter';
            line-height: 1;
            margin-bottom: 0px;
          }
          .footer-thq-phone-container-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .footer-icon13 {
            color: 050505;
            margin-top: var(--dl-layout-space-unit);
          }
          .footer-thq-phone-number-elm {
            color: #050505;
            margin-top: var(--dl-layout-space-unit);
            margin-bottom: 0px;
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .footer-text13 {
            color: rgb(5, 5, 5);
            font-size: 32px;
            margin-top: var(--dl-layout-space-unit);
            font-family: 'Inter';
            font-weight: 600;
          }
          .footer-text14 {
            color: #050505;
            margin-top: var(--dl-layout-space-halfunit);
            font-family: 'Inter';
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-container5 {
            display: flex;
            margin-top: var(--dl-layout-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-thq-twitter-container-elm {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: none;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .footer-icon17 {
            fill: #37bcf8;
            width: 16px;
            height: 16px;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-thq-linkedin-container-elm {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #3b6180;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-pimary-700);
          }
          .footer-icon19 {
            color: blue;
          }
          .footer-link12 {
            display: contents;
          }
          .footer-thq-instagram-container-elm {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #3b6180;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-pimary-700);
          }
          .footer-icon21 {
            color: red;
          }
          .footer-link13 {
            display: contents;
          }
          .footer-thq-facebook-container-elm {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #3b6180;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-pimary-700);
          }
          .footer-icon23 {
            color: indianred;
          }
          .footer-link14 {
            display: contents;
          }
          .footer-thq-whatsapp-container-elm {
            flex: 0 0 auto;
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            box-shadow: 5px 5px 10px 0px #3b6180;
            align-items: center;
            margin-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-round);
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-pimary-700);
          }
          .footer-icon27 {
            color: green;
          }
          .footer-thq-footer-links-container-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .footer-container6 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text15 {
            text-align: left;
            padding-left: 0px;
            padding-right: var(--dl-layout-space-twounits);
          }
          .footer-link15 {
            text-decoration: none;
          }
          .footer-link16 {
            text-decoration: none;
          }
          .footer-link17 {
            font-family: 'Inter';
            text-decoration: none;
          }
          .footer-link18 {
            text-decoration: none;
          }
          .footer-link19 {
            text-decoration: none;
          }
          .footer-container7 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text16 {
            padding-right: var(--dl-layout-space-twounits);
          }
          .footer-link20 {
            text-decoration: none;
          }
          .footer-link21 {
            text-decoration: none;
          }
          .footer-link22 {
            text-decoration: none;
          }
          .footer-link23 {
            text-decoration: none;
          }
          .footer-link24 {
            text-decoration: none;
          }
          .footer-container8 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .footer-link25 {
            text-decoration: none;
          }
          .footer-link26 {
            text-decoration: none;
          }
          .footer-link27 {
            text-decoration: none;
          }
          .footer-link28 {
            text-decoration: none;
          }
          .footer-link29 {
            text-decoration: none;
          }
          .footer-text18 {
            color: #050505;
            font-size: 18px;
            align-self: center;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 200;
            line-height: 1.25;
            text-decoration: none;
          }
          .footer-text19 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .footer-text20 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text21 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text22 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text23 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text24 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .footer-text25 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .footer-text26 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text27 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text28 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text29 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text30 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text31 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .footer-text32 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text33 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text34 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text35 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .footer-text36 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }

          .footerroot-class-name31 {
            width: 100%;
            overflow: hidden;
            margin-left: 0px;
            margin-right: 0px;
          }
          .footerroot-class-name32 {
            margin-top: var(--dl-layout-space-fiveunits);
          }
          .footerroot-class-name33 {
            align-self: center;
          }
          .footerroot-class-name34 {
            align-self: center;
          }
          .footerroot-class-name35 {
            align-self: center;
          }
          .footerroot-class-name36 {
            align-self: center;
          }
          .footerroot-class-name37 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .footer-container1 {
              background-color: var(--dl-color-pimary-700);
            }
            .footer-container2 {
              align-items: center;
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-tripleunit);
              background-color: var(--dl-color-pimary-700);
            }
            .footer-container3 {
              align-items: center;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .footer-icon10 {
              color: 050505;
            }
            .footer-container4 {
              align-items: center;
              margin-bottom: var(--dl-layout-space-doubleunit);
            }
            .footer-thq-linkedin-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-icon19 {
              backdrop-filter: blur(5px);
            }
            .footer-thq-instagram-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-facebook-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-whatsapp-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-container6 {
              padding-right: var(--dl-layout-space-twounits);
            }
            .footer-text15 {
              align-self: flex-start;
              text-align: left;
              padding-left: 0px;
            }
            .footer-container7 {
              padding-right: var(--dl-layout-space-twounits);
            }
            .footer-text18 {
              color: rgb(5, 5, 5);
              font-size: 18px;
              align-self: center;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .footer-text19 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .footer-text20 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text21 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text22 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text23 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text24 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .footer-text25 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .footer-text26 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text27 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text28 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text29 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text30 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text31 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .footer-text32 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text33 {
              color: #050505;
            }
            .footer-text34 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .footer-text35 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text36 {
              color: #050505;
              font-family: Inter;
            }
            .footerroot-class-name31 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .footerroot-class-name33 {
              align-self: center;
            }
            .footerroot-class-name34 {
              align-self: center;
            }
            .footerroot-class-name35 {
              align-self: center;
            }
            .footerroot-class-name36 {
              align-self: center;
            }
            .footerroot-class-name37 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .footer-container1 {
              background-color: var(--dl-color-pimary-700);
            }
            .footer-container2 {
              padding-bottom: var(--dl-layout-space-twounits);
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-logo-elm {
              width: 150px;
            }
            .footer-text10 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 24px;
              align-self: center;
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              font-weight: 600;
              margin-left: 0px;
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: flex-start;
            }
            .footer-thq-address-elm {
              color: #050505;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .footer-icon10 {
              width: 1.5rem;
              height: 1.5rem;
              align-self: center;
            }
            .footer-thq-email-elm {
              color: #050505;
              margin-top: 0px;
              text-align: center;
              font-family: Inter;
              line-height: 1;
              padding-left: var(--dl-layout-space-halfunit);
              margin-bottom: 0px;
            }
            .footer-icon13 {
              margin-top: var(--dl-layout-space-unit);
            }
            .footer-thq-phone-number-elm {
              color: rgb(5, 5, 5);
              font-size: inherit;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              line-height: 1.625rem;
              padding-left: var(--dl-layout-space-halfunit);
              margin-bottom: 0px;
            }
            .footer-text12 {
              color: #050505;
            }
            .footer-container4 {
              background-color: var(--dl-color-pimary-700);
            }
            .footer-text13 {
              color: rgb(5, 5, 5);
              font-size: 1.25rem;
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              font-weight: 600;
              text-transform: none;
              text-decoration: none;
            }
            .footer-text14 {
              color: #050505;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .footer-thq-linkedin-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-instagram-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-facebook-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-whatsapp-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-container6 {
              padding-right: var(--dl-layout-space-twounits);
            }
            .footer-text15 {
              display: flex;
              align-self: flex-start;
              align-items: flex-start;
              padding-left: 0px;
            }
            .footer-container7 {
              padding-right: var(--dl-layout-space-twounits);
            }
            .footer-text17 {
              font-family: Inter;
            }
            .footer-link25 {
              font-family: Inter;
            }
            .footer-link26 {
              font-family: Inter;
            }
            .footer-link27 {
              font-family: Inter;
            }
            .footer-link28 {
              font-family: Inter;
            }
            .footer-link29 {
              font-family: Inter;
            }
            .footer-text18 {
              color: #050505;
              font-size: 10px;
              align-self: center;
              font-style: normal;
              font-family: Inter;
              font-weight: 200;
              line-height: 1.25;
              text-decoration: none;
            }
            .footer-text19 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .footer-text20 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text21 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text22 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text23 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text24 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .footer-text25 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .footer-text26 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text27 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text28 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text29 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text30 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text31 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .footer-text32 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text33 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text34 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footer-text35 {
              color: #050505;
              font-family: Inter;
            }
            .footer-text36 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .footerroot-class-name31 {
              overflow: hidden;
              margin-left: 0px;
              margin-right: 0px;
            }
            .footerroot-class-name33 {
              align-self: center;
            }
            .footerroot-class-name34 {
              align-self: center;
            }
            .footerroot-class-name35 {
              align-self: center;
            }
            .footerroot-class-name36 {
              align-self: center;
            }
            .footerroot-class-name37 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .footer-container1 {
              background-color: var(--dl-color-pimary-700);
            }
            .footer-container2 {
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-logo-elm {
              width: 70px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .footer-image {
              width: 76px;
              height: 41px;
            }
            .footer-text10 {
              color: rgb(5, 5, 5);
              display: flex;
              font-size: 15px;
              align-self: center;
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              font-weight: 600;
              line-height: 1;
              margin-left: 0px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: flex-start;
            }
            .footer-thq-address-elm {
              color: #050505;
              font-size: 14px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .footer-icon10 {
              width: 39px;
              height: 27px;
            }
            .footer-thq-email-elm {
              color: #050505;
              font-size: 14px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              line-height: 1;
              margin-bottom: 0px;
            }
            .footer-thq-phone-number-elm {
              fill: #050505;
              color: #050505;
              font-size: 14px;
              margin-top: var(--dl-layout-space-unit);
              text-align: center;
              font-family: Inter;
              line-height: 1;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .footer-container4 {
              background-color: var(--dl-color-pimary-700);
            }
            .footer-text13 {
              margin-top: var(--dl-layout-space-unit);
            }
            .footer-text14 {
              color: #050505;
              font-size: 16px;
              margin-top: var(--dl-layout-space-halfunit);
              text-align: center;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .footer-thq-twitter-container-elm {
              display: none;
            }
            .footer-thq-linkedin-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-instagram-container-elm {
              display: none;
            }
            .footer-thq-facebook-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-whatsapp-container-elm {
              box-shadow: 5px 5px 10px 0px #3b6180;
              background-color: var(--dl-color-pimary-700);
            }
            .footer-thq-footer-links-container-elm {
              width: 95%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .footer-container6 {
              width: 35%;
              margin-right: var(--dl-layout-space-triplequarter);
              padding-right: var(--dl-layout-space-unit);
            }
            .footer-text15 {
              display: flex;
              align-self: flex-start;
              align-items: flex-start;
              font-family: Inter;
              margin-right: var(--dl-layout-space-triplequarter);
              padding-left: 0px;
            }
            .footer-link15 {
              fill: var(--dl-color-secondary-500);
              color: var(--dl-color-secondary-500);
            }
            .footer-container7 {
              width: 35%;
              margin-left: var(--dl-layout-space-triplequarter);
              margin-right: 0px;
              padding-right: var(--dl-layout-space-unit);
            }
            .footer-text16 {
              margin-right: var(--dl-layout-space-halfunit);
            }
            .footer-container8 {
              width: 35%;
              margin-left: var(--dl-layout-space-triplequarter);
              margin-right: 0px;
              padding-right: var(--dl-layout-space-unit);
            }
            .footer-text17 {
              margin-right: var(--dl-layout-space-halfunit);
              margin-bottom: 0px;
            }
            .footer-text18 {
              color: rgb(5, 5, 5);
              width: 100%;
              font-size: 10px;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 200;
              line-height: 1.25;
              text-decoration: none;
            }
            .footer-text19 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .footer-text20 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text21 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text22 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text23 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text24 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text25 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .footer-text26 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text27 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text28 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text29 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text30 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text31 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .footer-text32 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text33 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text34 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text35 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-text36 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footerroot-class-name9 {
              display: none;
            }
            .footerroot-class-name25 {
              padding-top: var(--dl-layout-space-tripleunit);
            }
            .footerroot-class-name26 {
              padding-top: var(--dl-layout-space-tripleunit);
            }
            .footerroot-class-name27 {
              padding-top: var(--dl-layout-space-tripleunit);
            }
            .footerroot-class-name28 {
              padding-top: var(--dl-layout-space-tripleunit);
            }
            .footerroot-class-name29 {
              padding-top: var(--dl-layout-space-tripleunit);
            }
            .footerroot-class-name30 {
              padding-top: var(--dl-layout-space-tripleunit);
            }
            .footerroot-class-name31 {
              overflow: hidden;
              margin-left: 0px;
              margin-right: 0px;
              background-color: var(--dl-color-pimary-700);
            }
            .footerroot-class-name32 {
              padding-top: var(--dl-layout-space-sixunits);
            }
            .footerroot-class-name33 {
              align-self: center;
            }
            .footerroot-class-name34 {
              align-self: center;
            }
            .footerroot-class-name35 {
              align-self: center;
            }
            .footerroot-class-name36 {
              align-self: center;
            }
            .footerroot-class-name37 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  heading11: undefined,
  text1111111111: undefined,
  text: undefined,
  text111112: undefined,
  text11112: undefined,
  text2: undefined,
  heading3: undefined,
  text1111: undefined,
  text111: undefined,
  text4: undefined,
  text111111111: undefined,
  imageAlt: 'image',
  text11111: undefined,
  heading1: undefined,
  text1112: undefined,
  text1: undefined,
  text111111: undefined,
  text11: undefined,
  imageSrc: '/volues%20white%20logo-200h.webp',
  text11111111: undefined,
  rootClassName: '',
}

Footer.propTypes = {
  heading11: PropTypes.element,
  text1111111111: PropTypes.element,
  text: PropTypes.element,
  text111112: PropTypes.element,
  text11112: PropTypes.element,
  text2: PropTypes.element,
  heading3: PropTypes.element,
  text1111: PropTypes.element,
  text111: PropTypes.element,
  text4: PropTypes.element,
  text111111111: PropTypes.element,
  imageAlt: PropTypes.string,
  text11111: PropTypes.element,
  heading1: PropTypes.element,
  text1112: PropTypes.element,
  text1: PropTypes.element,
  text111111: PropTypes.element,
  text11: PropTypes.element,
  imageSrc: PropTypes.string,
  text11111111: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Footer
