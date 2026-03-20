import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features11 = (props) => {
  return (
    <>
      <div className="features11-thq-layout251-elm thq-section-padding">
        <div className="features11-thq-max-width-elm thq-section-max-width">
          <div className="thq-flex-row features11-thq-section-title-elm">
            <div className="features11-thq-column-elm thq-flex-column">
              <h2 className="thq-heading-2 features11-thq-text-elm1">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features11-text25">
                      Engineered for Attention. Designed for Conversion. Built
                      for Growth.
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
            <span className="thq-body-small features11-thq-text-elm2">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features11-text13">
                    <span>Your website is not just a digital presence.</span>
                    <br></br>
                    <span>
                      It is your first impression, your silent salesperson, your
                      credibility proof, and your conversion engine — all at
                      once.
                    </span>
                    <br></br>
                    <br></br>
                    <span>We design every website with one goal in mind:</span>
                    <br></br>
                    <span>
                      Turn visitors into believers. Believers into customers.
                      Customers into loyal advocates.
                    </span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features11-thq-content-elm1">
            <div className="features11-thq-row-elm thq-flex-row">
              <div className="features11-thq-feature1-elm thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features11-thq-feature1-image-elm"
                />
                <div className="features11-thq-content-elm2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features11-text22">
                          Explore our key features
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features11-text27">
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
              <div className="features11-thq-feature2-elm thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features11-thq-feature2-image-elm"
                />
                <div className="features11-thq-content-elm3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features11-text11">
                          Explore our key features
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features11-text12">
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
              <div className="features11-thq-feature3-elm thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features11-thq-feature3-image-elm"
                />
                <div className="features11-thq-content-elm4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features11-text10">
                          Explore our key features
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features11-text24">
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
          <div className="features11-thq-actions-elm">
            <button className="thq-button-filled features11-thq-button-elm1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features11-text23">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features11-thq-button-elm2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features11-text26">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features11-thq-layout251-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features11-thq-max-width-elm {
            gap: 48px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-thq-column-elm {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features11-thq-content-elm1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-thq-row-elm {
            align-items: flex-start;
          }
          .features11-thq-feature1-elm {
            flex: 1;
          }
          .features11-thq-content-elm2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-thq-feature2-elm {
            flex: 1;
          }
          .features11-thq-content-elm3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-thq-feature3-elm {
            flex: 1;
          }
          .features11-thq-content-elm4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features11-thq-actions-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features11-text10 {
            display: inline-block;
          }
          .features11-text11 {
            display: inline-block;
          }
          .features11-text12 {
            display: inline-block;
          }
          .features11-text13 {
            display: inline-block;
          }
          .features11-text22 {
            display: inline-block;
          }
          .features11-text23 {
            display: inline-block;
          }
          .features11-text24 {
            display: inline-block;
          }
          .features11-text25 {
            display: inline-block;
          }
          .features11-text26 {
            display: inline-block;
          }
          .features11-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features11-thq-section-title-elm {
              align-items: flex-start;
              flex-direction: column;
            }
            .features11-thq-feature1-image-elm {
              height: 260px;
            }
            .features11-thq-feature2-image-elm {
              height: 260px;
            }
            .features11-thq-feature3-image-elm {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features11-thq-column-elm {
              width: 100%;
            }
            .features11-thq-text-elm1 {
              text-align: center;
            }
            .features11-thq-row-elm {
              flex-direction: column;
            }
            .features11-thq-feature1-image-elm {
              width: 100%;
            }
            .features11-thq-feature2-elm {
              width: auto;
            }
            .features11-thq-feature2-image-elm {
              width: 100%;
            }
            .features11-thq-feature3-elm {
              width: auto;
            }
            .features11-thq-actions-elm {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features11-thq-text-elm1 {
              width: 100%;
              height: 100%;
            }
            .features11-thq-text-elm2 {
              width: 100%;
              height: 100%;
            }
            .features11-thq-actions-elm {
              width: 100%;
              flex-direction: column;
            }
            .features11-thq-button-elm1 {
              width: 100%;
            }
            .features11-thq-button-elm2 {
              width: 100%;
            }
            .features11-text13 {
              font-family: Inter;
            }
            .features11-text25 {
              font-size: 32px;
              font-family: Inter;
            }
          }
        `}
      </style>
    </>
  )
}

Features11.defaultProps = {
  feature2ImageAlt: 'PlaceholderImage1314',
  feature3Title: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  sectionDescription: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'PlaceholderImage1314',
  feature3ImageAlt: 'PlaceholderImage1314',
  mainAction: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  feature3Description: undefined,
  sectionTitle: undefined,
  secondaryAction: undefined,
  feature1Description: undefined,
}

Features11.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Features11
