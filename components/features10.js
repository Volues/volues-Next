import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features10 = (props) => {
  return (
    <>
      <div
        className={`features10-thq-layout300-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="features10-thq-max-width-elm thq-flex-column thq-section-max-width">
          <div className="features10-thq-section-title-elm thq-flex-column">
            <span className="thq-body-small features10-thq-text-elm1">
              {props.slogan ?? (
                <Fragment>
                  <span className="features10-text29">
                    Your Digital Supremacy, Delivered
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features10-thq-text-elm2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features10-text10">
                    Technology With Purpose
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features10-thq-text-elm3 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features10-text12">
                    <span className="features10-text13">
                      At Volues, we believe technology is not decoration ,  it
                      is infrastructure. i
                    </span>
                    <span className="features10-text14">
                      t should create leverage, reduce friction, and multiply
                      opportunity. 
                    </span>
                    <span className="features10-text15">
                      We exist to help businesses transition from fragile
                      digital presence to structured digital systems. 
                    </span>
                    <span className="features10-text16">
                      From guesswork to strategy. 
                    </span>
                    <span className="features10-text17">
                      From ordinary to competitive.
                    </span>
                    <br></br>
                    <br className="features10-text19"></br>
                    <span className="features10-text20">
                      We build with intention. 
                    </span>
                    <span className="features10-text21">
                      We design with foresight. 
                    </span>
                    <span className="features10-text22">
                      We execute with discipline.
                    </span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features10-thq-content-elm thq-grid-auto-300">
            <div className="features10-thq-feature1-elm thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="features10-thq-feature1-title-elm thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features10-text23">
                      Explore our key features
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features10-text11">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-thq-feature2-elm thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features10-text28">
                      Explore our key features
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features10-text30">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-thq-feature3-elm thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features10-text27">
                      Explore our key features
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features10-text25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features10-thq-actions-elm thq-flex-row">
            <button className="features10-thq-button-elm1 thq-button-filled">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features10-text26">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="features10-thq-button-elm2 thq-button-outline">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features10-text24">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features10-thq-layout300-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features10-thq-max-width-elm {
            gap: 48px;
            align-items: center;
          }
          .features10-thq-section-title-elm {
            align-items: center;
          }
          .features10-thq-text-elm3 {
            text-align: center;
          }
          .features10-thq-content-elm {
            align-self: stretch;
            align-items: center;
          }
          .features10-thq-feature1-elm {
            align-items: flex-start;
          }
          .features10-thq-feature1-title-elm {
            text-align: center;
          }
          .features10-thq-feature2-elm {
            align-items: flex-start;
          }
          .features10-thq-feature3-elm {
            align-items: flex-start;
          }
          .features10-thq-actions-elm {
            align-items: flex-start;
          }
          .features10-thq-button-elm1 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features10-thq-button-elm2 {
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .features10-text10 {
            display: inline-block;
          }
          .features10-text11 {
            display: inline-block;
          }
          .features10-text12 {
            display: inline-block;
          }
          .features10-text23 {
            display: inline-block;
          }
          .features10-text24 {
            display: inline-block;
          }
          .features10-text25 {
            display: inline-block;
          }
          .features10-text26 {
            display: inline-block;
          }
          .features10-text27 {
            display: inline-block;
          }
          .features10-text28 {
            display: inline-block;
          }
          .features10-text29 {
            display: inline-block;
          }
          .features10-text30 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features10-thq-section-title-elm {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features10-thq-section-title-elm {
              width: auto;
            }
            .features10-thq-text-elm2 {
              text-align: center;
            }
            .features10-thq-feature2-elm {
              width: auto;
            }
            .features10-thq-feature3-elm {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features10-thq-layout300-elm {
              background-color: #902828;
            }
            .features10-thq-max-width-elm {
              gap: 24px;
            }
            .features10-thq-text-elm1 {
              width: 100%;
              display: flex;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .features10-thq-actions-elm {
              width: 100%;
              flex-direction: column;
            }
            .features10-thq-button-elm1 {
              width: 100%;
            }
            .features10-thq-button-elm2 {
              width: 100%;
            }
            .features10-text10 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 18px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
            }
            .features10-text11 {
              color: var(--dl-color-theme-neutral-dark);
            }
            .features10-text12 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 16px;
              text-align: left;
              font-family: Inter;
              line-height: 1;
            }
            .features10-text13 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text14 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text15 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text16 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text17 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text19 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text20 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text21 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text22 {
              font-family: Inter;
              line-height: 1;
            }
            .features10-text23 {
              color: var(--dl-color-theme-neutral-dark);
            }
            .features10-text29 {
              color: var(--dl-color-theme-neutral-dark);
              font-size: 9px;
              text-align: center;
              font-family: Inter;
            }
          }
        `}
      </style>
    </>
  )
}

Features10.defaultProps = {
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  sectionTitle: undefined,
  feature1Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  sectionDescription: undefined,
  feature2ImageAlt: 'PlaceholderImage1314',
  rootClassName: '',
  feature1Title: undefined,
  secondaryAction: undefined,
  feature1ImageAlt: 'PlaceholderImage1314',
  feature3Description: undefined,
  mainAction: undefined,
  feature3Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=200',
  feature2Title: undefined,
  slogan: undefined,
  feature2Description: undefined,
}

Features10.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  slogan: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features10
