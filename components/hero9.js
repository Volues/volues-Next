import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero9 = (props) => {
  return (
    <>
      <div className="hero9-thq-header30-elm thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero9-image"
        />
        <div className="hero9-container"></div>
        <div className="hero9-thq-max-width-elm thq-section-max-width">
          <div className="hero9-thq-content-elm">
            <h1 className="hero9-thq-text-elm1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero9-text3">
                    Accelerate Your Business Growth with Volues
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero9-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero9-text4">
                    We design, build, and scale high-performance web, mobile,
                    and digital marketing systems for ambitious businesses.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero9-thq-actions-elm">
              <button className="thq-button-filled hero9-thq-button-elm1">
                <span className="hero9-thq-text-elm3 thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero9-text2">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero9-thq-button-elm2">
                <span className="hero9-thq-text-elm4 thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero9-text1">Get in touch</span>
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
          .hero9-thq-header30-elm {
            gap: 32px;
          }
          .hero9-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero9-container {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.7);
          }
          .hero9-thq-max-width-elm {
            gap: 24px;
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .hero9-thq-content-elm {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero9-thq-text-elm1 {
            text-align: center;
          }
          .hero9-thq-text-elm2 {
            text-align: center;
          }
          .hero9-thq-actions-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero9-thq-text-elm3 {
            text-align: center;
          }
          .hero9-thq-text-elm4 {
            text-align: center;
          }
          .hero9-text1 {
            display: inline-block;
          }
          .hero9-text2 {
            display: inline-block;
          }
          .hero9-text3 {
            display: inline-block;
          }
          .hero9-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .hero9-thq-text-elm1 {
              text-align: center;
            }
            .hero9-thq-text-elm2 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .hero9-thq-actions-elm {
              width: 100%;
              flex-direction: column;
            }
            .hero9-thq-button-elm1 {
              width: 100%;
            }
            .hero9-thq-button-elm2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero9.defaultProps = {
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1632435499182-e436787ce107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTY3OTA3Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  action1: undefined,
  heading1: undefined,
  image1Alt: 'High-performance digital solutions',
  content1: undefined,
}

Hero9.propTypes = {
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero9
