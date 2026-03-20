import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps21 = (props) => {
  return (
    <>
      <div className="steps21-container1 thq-section-padding">
        <div className="steps21-thq-max-width-elm thq-section-max-width">
          <div className="steps21-container2 thq-grid-2">
            <div className="steps21-thq-section-header-elm">
              <h2 className="thq-heading-2 steps21-thq-text-elm1">
                Built to Impress. Engineered to Convert.
              </h2>
              <p className="thq-body-large steps21-thq-text-elm2">
                <span>Your website isn’t just seen, it’s experienced. </span>
                <span>
                  We design every detail to earn trust, hold attention, and
                  drive action.
                </span>
              </p>
            </div>
            <div className="steps21-container3">
              <div className="steps21-container4 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps21-text24">Responsive</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps21-text13 thq-body-small">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps21-text30">
                        Your website adapts beautifully to phones, tablets, and
                        desktops — creating comfort, credibility, and confidence
                        wherever your customers are.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="steps21-container5 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title1 ?? (
                    <Fragment>
                      <span className="steps21-text25">Fast Speed</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps21-text15 thq-body-small">
                  {props.step2Description1 ?? (
                    <Fragment>
                      <span className="steps21-text21">
                        We deliver ultra-fast loading experiences powered by CDN
                        technology — reducing bounce rates and keeping users
                        engaged from the first second.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="steps21-container6 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title11 ?? (
                    <Fragment>
                      <span className="steps21-text35">Intuitive</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps21-text17 thq-body-small">
                  {props.step2Description11 ?? (
                    <Fragment>
                      <span className="steps21-text26">
                        <span>Effortless user journeys.</span>
                        <br></br>
                        <span>
                          Visitors don’t think about where to click — they
                          naturally move toward action. Clear structure. Smart
                          flow. Higher conversions.
                        </span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="steps21-container7 thq-card">
                <h2 className="thq-heading-2">
                  {props.step2Title111 ?? (
                    <Fragment>
                      <span className="steps21-text23">Intuitive</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps21-text19 thq-body-small">
                  {props.step2Description111 ?? (
                    <Fragment>
                      <span className="steps21-text31">
                        <span>Effortless user journeys.</span>
                        <br></br>
                        <span>
                          Visitors don’t think about where to click — they
                          naturally move toward action. Clear structure. Smart
                          flow. Higher conversions.
                        </span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="steps21-container8 thq-card">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="steps21-image"
                />
                <h2 className="thq-heading-2">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps21-text22">
                        Your Digital Supremacy Delivered
                      </span>
                    </Fragment>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps21-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps21-thq-max-width-elm {
            gap: 64px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps21-container2 {
            align-items: start;
          }
          .steps21-thq-section-header-elm {
            gap: 24px;
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps21-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps21-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: 32px;
            background-color: var(--dl-color-theme-accent2);
          }
          .steps21-text13 {
            text-align: center;
          }
          .steps21-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: 32px;
            background-color: var(--dl-color-theme-accent2);
          }
          .steps21-text15 {
            text-align: center;
          }
          .steps21-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: 32px;
            background-color: var(--dl-color-theme-accent2);
          }
          .steps21-text17 {
            text-align: center;
          }
          .steps21-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: 32px;
            background-color: var(--dl-color-theme-accent2);
          }
          .steps21-text19 {
            text-align: center;
          }
          .steps21-container8 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: 32px;
            background-color: var(--dl-color-theme-accent1);
          }
          .steps21-image {
            width: 200px;
            object-fit: cover;
          }
          .steps21-text21 {
            display: inline-block;
          }
          .steps21-text22 {
            display: inline-block;
          }
          .steps21-text23 {
            display: inline-block;
          }
          .steps21-text24 {
            display: inline-block;
          }
          .steps21-text25 {
            display: inline-block;
          }
          .steps21-text26 {
            display: inline-block;
          }
          .steps21-text30 {
            display: inline-block;
          }
          .steps21-text31 {
            display: inline-block;
          }
          .steps21-text35 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps21-thq-max-width-elm {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps21-thq-section-header-elm {
              position: static;
              margin-bottom: 32px;
            }
            .steps21-container4 {
              width: 100%;
            }
            .steps21-container5 {
              width: 100%;
            }
            .steps21-container6 {
              width: 100%;
            }
            .steps21-container7 {
              width: 100%;
            }
            .steps21-container8 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps21-thq-max-width-elm {
              width: 100%;
            }
            .steps21-container2 {
              width: 100%;
            }
            .steps21-thq-text-elm1 {
              font-size: 24px;
              text-align: center;
              font-family: Inter;
            }
            .steps21-thq-text-elm2 {
              text-align: justify;
              font-family: Inter;
            }
            .steps21-container3 {
              width: 100%;
            }
            .steps21-container4 {
              background-color: var(--dl-color-secondary-700);
            }
            .steps21-container6 {
              background-color: #4fc47c;
            }
            .steps21-container7 {
              background-color: #7882e6;
            }
            .steps21-container8 {
              transform: rotate(0deg);
              background-color: var(--dl-color-pimary-300);
            }
            .steps21-image {
              width: 234px;
            }
            .steps21-text22 {
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 600;
            }
            .steps21-text23 {
              text-align: center;
            }
            .steps21-text25 {
              text-align: center;
            }
            .steps21-text35 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Steps21.defaultProps = {
  step2Description1: undefined,
  step3Title: undefined,
  step2Title111: undefined,
  step2Title: undefined,
  step2Title1: undefined,
  step2Description11: undefined,
  imageSrc: '/volues%20ash%20logo-200h.webp',
  imageAlt: 'image',
  step2Description: undefined,
  step2Description111: undefined,
  step2Title11: undefined,
}

Steps21.propTypes = {
  step2Description1: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title111: PropTypes.element,
  step2Title: PropTypes.element,
  step2Title1: PropTypes.element,
  step2Description11: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  step2Description: PropTypes.element,
  step2Description111: PropTypes.element,
  step2Title11: PropTypes.element,
}

export default Steps21
