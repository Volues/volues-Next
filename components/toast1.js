import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Toast1 = (props) => {
  return (
    <>
      <div className="toast1-container">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="toast1-thq-logo-elm"
        />
        <div className="toast1-thq-header-elm">
          <div className="toast1-thq-content-elm">
            <h2 className="thq-heading-2">
              {props.bannerTitle ?? (
                <Fragment>
                  <span className="toast1-text3">Banner Heading</span>
                </Fragment>
              )}
            </h2>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.button ?? (
                <Fragment>
                  <span className="toast1-text2">Button</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <button
          type="button"
          aria-label="Close"
          className="toast1-thq-close-button-elm"
        >
          <svg viewBox="0 0 804.5714285714286 1024" className="toast1-icon1">
            <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
          </svg>
        </button>
      </div>
      <style jsx>
        {`
          .toast1-container {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .toast1-thq-logo-elm {
            height: 60px;
            object-fit: cover;
          }
          .toast1-thq-header-elm {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .toast1-thq-content-elm {
            gap: var(--dl-layout-space-halfunit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .toast1-thq-close-button-elm {
            display: flex;
            flex-direction: row;
          }
          .toast1-icon1 {
            width: 24px;
            height: 24px;
          }
          .toast1-text2 {
            display: inline-block;
          }
          .toast1-text3 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .toast1-thq-logo-elm {
              display: none;
            }
            .toast1-thq-header-elm {
              gap: var(--dl-layout-space-unit);
              align-items: flex-start;
              flex-direction: column;
            }
            .toast1-thq-close-button-elm {
              align-self: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Toast1.defaultProps = {
  button: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  bannerTitle: undefined,
  logoAlt: 'image',
}

Toast1.propTypes = {
  button: PropTypes.element,
  logoSrc: PropTypes.string,
  bannerTitle: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default Toast1
