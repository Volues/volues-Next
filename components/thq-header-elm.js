import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ThqHeaderElm = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`thq-header-elm-thq-thq-header-elm-elm ${props.rootClassName} `}
      >
        <div className="thq-header-elm-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="thq-header-elm-image1"
          />
        </div>
        <div
          data-role="BurgerMenu"
          className="thq-header-elm-thq-thq-burger-menu-elm-elm"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="thq-header-elm-icon10"
          >
            <path
              d="M10 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 42a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="thq-header-elm-container2">
          <Link href={props.iconUrl?.['url']}>
            <a
              target={props.iconUrl?.['newTab'] ? '_blank' : undefined}
              rel={
                props.iconUrl?.['newTab'] ? 'noreferrer noopener' : undefined
              }
              className="thq-header-elm-link1"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="thq-header-elm-icon12"
              >
                <path
                  d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0"
                  fill="currentColor"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
          <Link href={props.iconUrl1?.['url']}>
            <a
              target={props.iconUrl1?.['newTab'] ? '_blank' : undefined}
              rel={
                props.iconUrl1?.['newTab'] ? 'noreferrer noopener' : undefined
              }
              className="thq-header-elm-link2"
            >
              <svg
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className="thq-header-elm-icon14"
              >
                <path
                  d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
        <div
          data-role="MobileMenu"
          className="thq-header-elm-thq-thq-mobile-menu-elm-elm"
        >
          <div className="thq-header-elm-thq-thq-top-elm-elm">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="thq-header-elm-image2"
            />
            <div
              data-role="CloseMobileMenu"
              className="thq-header-elm-thq-thq-close-menu-elm-elm"
            >
              <svg viewBox="0 0 1024 1024" className="thq-header-elm-icon16">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="thq-header-elm-thq-thq-mid-elm-elm">
            <div className="thq-header-elm-container3">
              <svg viewBox="0 0 1024 1024" className="thq-header-elm-icon18">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
              <Link href="/">
                <a className="thq-header-elm-link3">
                  {props.text ?? (
                    <Fragment>
                      <span className="thq-header-elm-text1">Homes</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
            <div className="thq-header-elm-container4">
              <svg viewBox="0 0 1024 1024" className="thq-header-elm-icon20">
                <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
                <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              </svg>
              <Link href="/services">
                <a className="thq-header-elm-link4">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="thq-header-elm-text5">Our Services</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
            <div className="thq-header-elm-container5">
              <svg viewBox="0 0 1024 1024" className="thq-header-elm-icon25">
                <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
                <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              </svg>
              <Link href="/about">
                <a className="thq-header-elm-link5">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="thq-header-elm-text6">About Us</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
            <div className="thq-header-elm-container6">
              <svg viewBox="0 0 1024 1024" className="thq-header-elm-icon30">
                <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
                <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              </svg>
              <Link href="/contact">
                <a className="thq-header-elm-link6">
                  {props.text3 ?? (
                    <Fragment>
                      <Link href="/contact">
                        <a>
                          <span className="thq-header-elm-text2">
                            <span>
                              Contact
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span>Us</span>
                          </span>
                        </a>
                      </Link>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div className="thq-header-elm-thq-thq-bot-elm-elm">
            <Link href={props.iconUrl2?.['url']}>
              <a
                target={props.iconUrl2?.['newTab'] ? '_blank' : undefined}
                rel={
                  props.iconUrl2?.['newTab'] ? 'noreferrer noopener' : undefined
                }
                className="thq-header-elm-link7"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="thq-header-elm-icon35"
                >
                  <path
                    d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0"
                    fill="currentColor"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link href={props.iconUrl3?.['url']}>
              <a
                target={props.iconUrl3?.['newTab'] ? '_blank' : undefined}
                rel={
                  props.iconUrl3?.['newTab'] ? 'noreferrer noopener' : undefined
                }
                className="thq-header-elm-link8"
              >
                <svg
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                  className="thq-header-elm-icon37"
                >
                  <path
                    d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .thq-header-elm-thq-thq-header-elm-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 75px;
            display: flex;
            z-index: 3200;
            position: relative;
            max-width: 1320px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            margin-bottom: 0.75rem;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .thq-header-elm-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .thq-header-elm-image1 {
            width: 57px;
            object-fit: cover;
          }
          .thq-header-elm-thq-thq-burger-menu-elm-elm {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .thq-header-elm-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .thq-header-elm-link1 {
            display: contents;
          }
          .thq-header-elm-icon12 {
            width: 2rem;
            height: 2rem;
            margin-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .thq-header-elm-link2 {
            display: contents;
          }
          .thq-header-elm-icon14 {
            width: 2rem;
            height: 2rem;
            margin-left: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .thq-header-elm-thq-thq-mobile-menu-elm-elm {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .thq-header-elm-thq-thq-top-elm-elm {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .thq-header-elm-image2 {
            width: 200px;
            object-fit: cover;
          }
          .thq-header-elm-thq-thq-close-menu-elm-elm {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .thq-header-elm-icon16 {
            width: 24px;
            height: 24px;
          }
          .thq-header-elm-thq-thq-mid-elm-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .thq-header-elm-container3 {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            flex-direction: row;
            text-decoration: none;
          }
          .thq-header-elm-icon18 {
            fill: var(--dl-color-secondary-400);
            width: 13px;
          }
          .thq-header-elm-link3 {
            color: var(--dl-color-secondary-400);
            text-decoration: none;
          }
          .thq-header-elm-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .thq-header-elm-icon20 {
            fill: var(--dl-color-secondary-400);
            width: 13px;
          }
          .thq-header-elm-link4 {
            color: var(--dl-color-secondary-400);
            text-decoration: none;
          }
          .thq-header-elm-container5 {
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .thq-header-elm-icon25 {
            fill: var(--dl-color-secondary-400);
            width: 13px;
          }
          .thq-header-elm-link5 {
            color: var(--dl-color-secondary-400);
            text-decoration: none;
          }
          .thq-header-elm-container6 {
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .thq-header-elm-icon30 {
            fill: var(--dl-color-secondary-400);
            width: 13px;
          }
          .thq-header-elm-link6 {
            color: var(--dl-color-secondary-400);
            text-decoration: none;
          }
          .thq-header-elm-thq-thq-bot-elm-elm {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: center;
            flex-direction: row;
          }
          .thq-header-elm-link7 {
            display: contents;
          }
          .thq-header-elm-icon35 {
            text-decoration: none;
          }
          .thq-header-elm-link8 {
            display: contents;
          }
          .thq-header-elm-icon37 {
            text-decoration: none;
          }
          .thq-header-elm-text1 {
            display: inline-block;
          }
          .thq-header-elm-text2 {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .thq-header-elm-text5 {
            display: inline-block;
          }
          .thq-header-elm-text6 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .thq-header-elm-thq-thq-header-elm-elm {
              max-width: 1320px;
            }
          }
          @media (max-width: 767px) {
            .thq-header-elm-thq-thq-header-elm-elm {
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              background-color: rgba(255, 255, 255, 0);
            }
            .thq-header-elm-image1 {
              width: 57px;
            }
            .thq-header-elm-thq-thq-burger-menu-elm-elm {
              display: flex;
            }
            .thq-header-elm-icon10 {
              width: 35px;
              height: 35px;
            }
            .thq-header-elm-container2 {
              display: none;
            }
            .thq-header-elm-thq-thq-mobile-menu-elm-elm {
              display: none;
              background-color: #050505;
            }
            .thq-header-elm-thq-thq-top-elm-elm {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .thq-header-elm-image2 {
              width: 70px;
            }
            .thq-header-elm-icon16 {
              width: 45px;
              height: 45px;
            }
            .thq-header-elm-thq-thq-mid-elm-elm {
              margin-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
            }
            .thq-header-elm-container3 {
              margin-bottom: 0px;
            }
            .thq-header-elm-link3 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .thq-header-elm-link4 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .thq-header-elm-link5 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              margin-bottom: var(--dl-layout-space-unit);
            }
            .thq-header-elm-link6 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .thq-header-elm-thq-thq-bot-elm-elm {
              align-self: center;
              margin-bottom: 150px;
              justify-content: center;
            }
            .thq-header-elm-icon35 {
              width: 2rem;
              height: 2rem;
              margin-right: var(--dl-layout-space-halfunit);
            }
            .thq-header-elm-icon37 {
              width: 2rem;
              height: 2rem;
              margin-left: var(--dl-layout-space-halfunit);
            }
            .thq-header-elm-text2 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .thq-header-elm-thq-thq-header-elm-elm {
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              background-color: rgba(255, 255, 255, 0);
            }
            .thq-header-elm-image1 {
              width: 57px;
            }
            .thq-header-elm-icon10 {
              width: 35px;
              height: 35px;
            }
            .thq-header-elm-thq-thq-mobile-menu-elm-elm {
              display: none;
              background-color: #050505;
            }
            .thq-header-elm-thq-thq-top-elm-elm {
              margin-left: 0px;
              padding-top: var(--dl-layout-space-triplequarter);
              margin-right: 0px;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .thq-header-elm-image2 {
              width: 65px;
            }
            .thq-header-elm-icon16 {
              width: 45px;
              height: 45px;
            }
            .thq-header-elm-thq-thq-mid-elm-elm {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-unit);
            }
            .thq-header-elm-container3 {
              margin-bottom: 0px;
            }
            .thq-header-elm-link3 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              margin-top: var(--dl-layout-space-unit);
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .thq-header-elm-link4 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .thq-header-elm-link5 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .thq-header-elm-link6 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .thq-header-elm-thq-thq-bot-elm-elm {
              margin-bottom: 150px;
            }
            .thq-header-elm-icon35 {
              width: 2rem;
              height: 2rem;
              margin-right: var(--dl-layout-space-halfunit);
            }
            .thq-header-elm-icon37 {
              width: 2rem;
              height: 2rem;
              margin-left: var(--dl-layout-space-halfunit);
            }
            .thq-header-elm-text2 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .thq-header-elmroot-class-name1 {
              background-color: rgba(255, 255, 255, 0);
            }
            .thq-header-elmroot-class-name29 {
              align-self: center;
              padding-bottom: var(--dl-layout-space-sixunits);
            }
          }
        `}
      </style>
    </>
  )
}

ThqHeaderElm.defaultProps = {
  rootClassName: '',
  text: undefined,
  iconUrl1: {
    url: 'https://youtube.com/@teamvolues?si=8uOe0n3PBnsu9C_X',
    newTab: true,
  },
  text3: undefined,
  imageAlt: 'image',
  text1: undefined,
  imageSrc1: '/volues%20white%20logo-1500h.webp',
  iconUrl2: {
    url: 'https://www.linkedin.com/company/volues/',
    newTab: true,
  },
  iconUrl: {
    url: 'https://www.linkedin.com/company/volues/',
    newTab: true,
  },
  text2: undefined,
  imageSrc: '/volues%20white%20logo-1500h.webp',
  imageAlt1: 'image',
  iconUrl3: {
    url: 'https://youtube.com/@teamvolues?si=8uOe0n3PBnsu9C_X',
    newTab: true,
  },
}

ThqHeaderElm.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  iconUrl1: PropTypes.object,
  text3: PropTypes.element,
  imageAlt: PropTypes.string,
  text1: PropTypes.element,
  imageSrc1: PropTypes.string,
  iconUrl2: PropTypes.object,
  iconUrl: PropTypes.object,
  text2: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  iconUrl3: PropTypes.object,
}

export default ThqHeaderElm
