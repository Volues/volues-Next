import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features1 = (props) => {
  return (
    <>
      <div className="features1-thq-layout251-elm thq-section-padding">
        <div className="features1-thq-max-width-elm thq-section-max-width">
          <div className="thq-flex-row features1-thq-section-title-elm">
            <div className="features1-thq-column-elm thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="features1-text19">Slogan</span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 features1-thq-text-elm2">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features1-text12">
                      Discover the Key Features
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
            <span className="thq-body-small">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features1-text11">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features1-thq-content-elm1">
            <div className="features1-thq-row-elm thq-flex-row">
              <div className="features1-thq-feature1-elm thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features1-thq-feature1-image-elm"
                />
                <div className="features1-thq-content-elm2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features1-text17">
                          Explore our key features
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features1-text13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-thq-feature2-elm thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features1-thq-feature2-image-elm"
                />
                <div className="features1-thq-content-elm3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features1-text18">
                          Explore our key features
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features1-text10">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-thq-feature3-elm thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features1-thq-feature3-image-elm"
                />
                <div className="features1-thq-content-elm4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features1-text20">
                          Explore our key features
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features1-text16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features1-thq-actions-elm">
            <button className="thq-button-filled features1-thq-button-elm1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features1-text15">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features1-thq-button-elm2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features1-text14">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-thq-layout251-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-thq-max-width-elm {
            gap: 48px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-thq-column-elm {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-thq-content-elm1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-thq-row-elm {
            align-items: flex-start;
          }
          .features1-thq-feature1-elm {
            flex: 1;
          }
          .features1-thq-content-elm2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-thq-feature2-elm {
            flex: 1;
          }
          .features1-thq-content-elm3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-thq-feature3-elm {
            flex: 1;
          }
          .features1-thq-content-elm4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-thq-actions-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features1-text10 {
            display: inline-block;
          }
          .features1-text11 {
            display: inline-block;
          }
          .features1-text12 {
            display: inline-block;
          }
          .features1-text13 {
            display: inline-block;
          }
          .features1-text14 {
            display: inline-block;
          }
          .features1-text15 {
            display: inline-block;
          }
          .features1-text16 {
            display: inline-block;
          }
          .features1-text17 {
            display: inline-block;
          }
          .features1-text18 {
            display: inline-block;
          }
          .features1-text19 {
            display: inline-block;
          }
          .features1-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features1-thq-section-title-elm {
              align-items: flex-start;
              flex-direction: column;
            }
            .features1-thq-feature1-image-elm {
              height: 260px;
            }
            .features1-thq-feature2-image-elm {
              height: 260px;
            }
            .features1-thq-feature3-image-elm {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-thq-column-elm {
              width: 100%;
            }
            .features1-thq-text-elm2 {
              text-align: center;
            }
            .features1-thq-row-elm {
              flex-direction: column;
            }
            .features1-thq-feature1-image-elm {
              width: 100%;
            }
            .features1-thq-feature2-elm {
              width: auto;
            }
            .features1-thq-feature2-image-elm {
              width: 100%;
            }
            .features1-thq-feature3-elm {
              width: auto;
            }
            .features1-thq-actions-elm {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features1-thq-actions-elm {
              width: 100%;
              flex-direction: column;
            }
            .features1-thq-button-elm1 {
              width: 100%;
            }
            .features1-thq-button-elm2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  feature2Description: undefined,
  sectionDescription: undefined,
  sectionTitle: undefined,
  feature1Description: undefined,
  secondaryAction: undefined,
  mainAction: undefined,
  feature1ImageAlt: 'PlaceholderImage1314',
  feature3Description: undefined,
  feature1Title: undefined,
  feature2Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature3ImageAlt: 'PlaceholderImage1314',
  slogan: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  feature2ImageAlt: 'PlaceholderImage1314',
  feature3Title: undefined,
}

Features1.propTypes = {
  feature2Description: PropTypes.element,
  sectionDescription: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  mainAction: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  slogan: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
}

export default Features1
