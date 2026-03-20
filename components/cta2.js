import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CTA2 = (props) => {
  return (
    <>
      <div className="cta2-container1 thq-section-padding">
        <div className="cta2-thq-max-width-elm thq-section-max-width">
          <div className="cta2-thq-content-elm">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta2-text3">
                    Call to action that excites the visitor to try your product
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta2-text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta2-thq-container-elm">
              <div className="cta2-thq-row-elm thq-flex-column">
                <div className="cta2-container2">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="thq-input"
                  />
                </div>
              </div>
              <span className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="cta2-text4">
                      By clicking Sign Up you&apos;re confirming that you agree
                      with our Terms and Conditions
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta2-container1 {
            gap: 48px;
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .cta2-thq-max-width-elm {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .cta2-thq-content-elm {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta2-thq-container-elm {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-direction: column;
          }
          .cta2-thq-row-elm {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .cta2-container2 {
            gap: 24px;
            display: flex;
            align-self: center;
            justify-content: center;
          }
          .cta2-text2 {
            display: inline-block;
          }
          .cta2-text3 {
            display: inline-block;
          }
          .cta2-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .cta2-thq-container-elm {
              width: auto;
              align-items: flex-start;
            }
            .cta2-thq-row-elm {
              width: 100%;
              position: relative;
              flex-direction: row;
              justify-content: flex-start;
            }
            .cta2-container2 {
              align-self: flex-end;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .cta2-thq-container-elm {
              gap: var(--dl-layout-space-unit);
            }
            .cta2-thq-row-elm {
              align-self: flex-start;
            }
            .cta2-container2 {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

CTA2.defaultProps = {
  content1: undefined,
  heading1: undefined,
  content2: undefined,
}

CTA2.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
}

export default CTA2
