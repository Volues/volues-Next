import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features2 = (props) => {
  return (
    <>
      <div className="features2-thq-layout302-elm thq-section-padding">
        <div className="features2-thq-max-width-elm thq-section-max-width">
          <div className="features2-thq-section-title-elm thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features2-text12">Slogan</span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features2-text19">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features2-text23">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features2-thq-content-elm1">
            <div className="thq-grid-5">
              <div className="features2-thq-feature1-elm thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features2-text10">
                          Engaging Content for Various Topics
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features2-text21">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-thq-feature2-elm thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features2-text14">
                          Engaging Content for Various Topics
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features2-text24">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-thq-feature3-elm thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features2-text15">
                          Engaging Content for Various Topics
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features2-text13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-thq-feature4-elm thq-flex-column">
                <img
                  alt={props.feature4ImageAlt}
                  src={props.feature4ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature4Title ?? (
                      <Fragment>
                        <span className="features2-text20">
                          Engaging Content for Various Topics
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature4Description ?? (
                      <Fragment>
                        <span className="features2-text11">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features2-thq-feature5-elm thq-flex-column">
                <img
                  alt={props.feature5ImageAlt}
                  src={props.feature5ImageSrc}
                  className="thq-team-image-round"
                />
                <div className="thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature5Title ?? (
                      <Fragment>
                        <span className="features2-text22">
                          Engaging Content for Various Topics
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature5Description ?? (
                      <Fragment>
                        <span className="features2-text16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="features2-thq-actions-elm">
              <button className="thq-button-filled features2-thq-button-elm1">
                <span className="thq-body-small">
                  {props.mainAction ?? (
                    <Fragment>
                      <span className="features2-text17">Main action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline features2-thq-button-elm2">
                <span className="thq-body-small">
                  {props.secondaryAction ?? (
                    <Fragment>
                      <span className="features2-text18">Secondary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features2-thq-layout302-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features2-thq-max-width-elm {
            gap: 48px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features2-thq-section-title-elm {
            align-items: flex-start;
          }
          .features2-thq-content-elm1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features2-thq-feature1-elm {
            align-items: flex-start;
          }
          .features2-thq-feature2-elm {
            align-items: flex-start;
          }
          .features2-thq-feature3-elm {
            align-items: flex-start;
          }
          .features2-thq-feature4-elm {
            align-items: flex-start;
          }
          .features2-thq-feature5-elm {
            align-items: flex-start;
          }
          .features2-thq-actions-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .features2-text10 {
            display: inline-block;
          }
          .features2-text11 {
            display: inline-block;
          }
          .features2-text12 {
            display: inline-block;
          }
          .features2-text13 {
            display: inline-block;
          }
          .features2-text14 {
            display: inline-block;
          }
          .features2-text15 {
            display: inline-block;
          }
          .features2-text16 {
            display: inline-block;
          }
          .features2-text17 {
            display: inline-block;
          }
          .features2-text18 {
            display: inline-block;
          }
          .features2-text19 {
            display: inline-block;
          }
          .features2-text20 {
            display: inline-block;
          }
          .features2-text21 {
            display: inline-block;
          }
          .features2-text22 {
            display: inline-block;
          }
          .features2-text23 {
            display: inline-block;
          }
          .features2-text24 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .features2-thq-max-width-elm {
              gap: 24px;
            }
            .features2-thq-actions-elm {
              width: 100%;
              flex-direction: column;
            }
            .features2-thq-button-elm1 {
              width: 100%;
            }
            .features2-thq-button-elm2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features2.defaultProps = {
  feature1Title: undefined,
  feature4Description: undefined,
  slogan: undefined,
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3Description: undefined,
  feature3ImageAlt: 'image',
  feature2Title: undefined,
  feature5ImageAlt: 'image',
  feature2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2ImageAlt: 'image',
  feature3Title: undefined,
  feature5Description: undefined,
  feature1ImageAlt: 'image',
  mainAction: undefined,
  secondaryAction: undefined,
  sectionTitle: undefined,
  feature4Title: undefined,
  feature5ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1Description: undefined,
  feature5Title: undefined,
  feature4ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  sectionDescription: undefined,
  feature4ImageAlt: 'image',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Description: undefined,
}

Features2.propTypes = {
  feature1Title: PropTypes.element,
  feature4Description: PropTypes.element,
  slogan: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature5ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature5Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  secondaryAction: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature4Title: PropTypes.element,
  feature5ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature5Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
}

export default Features2
