import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CTA26 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta26-thq-accent2-bg-elm">
            <div className="cta26-thq-accent1-bg-elm">
              <div className="cta26-container2">
                <div className="cta26-thq-content-elm">
                  <span className="thq-heading-2">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="cta26-text5">
                          Medium length heading goes here
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <p className="thq-body-large">
                    {props.content1 ?? (
                      <Fragment>
                        <span className="cta26-text6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="cta26-thq-actions-elm">
                  <button
                    type="button"
                    className="thq-button-filled cta26-button"
                  >
                    <span>
                      {props.action1 ?? (
                        <Fragment>
                          <span className="cta26-text4">Main Action</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta26-thq-accent2-bg-elm {
            gap: 24px;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .cta26-thq-accent2-bg-elm:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .cta26-thq-accent1-bg-elm {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .cta26-container2 {
            gap: 48px;
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: center;
            padding-top: 96px;
            padding-left: 64px;
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: 64px;
            padding-bottom: 96px;
          }
          .cta26-container2:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .cta26-thq-content-elm {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta26-thq-actions-elm {
            gap: 24px;
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .cta26-text4 {
            display: inline-block;
          }
          .cta26-text5 {
            display: inline-block;
          }
          .cta26-text6 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .cta26-container2 {
              gap: 24px;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .cta26-thq-actions-elm {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .cta26-button {
              flex: 1;
            }
          }
        `}
      </style>
    </>
  )
}

CTA26.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
}

CTA26.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA26
