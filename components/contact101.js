import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact101 = (props) => {
  return (
    <>
      <div className="contact101-container1 thq-section-padding">
        <div className="contact101-thq-max-width-elm thq-section-max-width">
          <div className="contact101-thq-content-elm1 thq-flex-row">
            <div className="contact101-thq-content-elm2"></div>
          </div>
          <div className="contact101-thq-content-elm3 thq-flex-row">
            <div className="contact101-container2">
              <h3 className="contact101-text1 thq-heading-3">
                {props.location1 ?? (
                  <Fragment>
                    <span className="contact101-text5">AMAC</span>
                  </Fragment>
                )}
              </h3>
              <p className="contact101-text2 thq-body-large">
                {props.location1Description ?? (
                  <Fragment>
                    <span className="contact101-text4">
                      Aminu Kano Crescent, Wuse, Abuja 904101, Federal Capital
                      Territory, Nigeria
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="contact101-container3">
              <h3 className="contact101-text3 thq-heading-3">
                {props.location2 ?? (
                  <Fragment>
                    <span className="contact101-text6">
                      Federal Capital Territory, Abuja
                    </span>
                  </Fragment>
                )}
              </h3>
              <div className="contact101-container4">
                <a
                  href="https://share.google/bsQHB0Ixd1YdAMgh8"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact101-link thq-body-small thq-button-flat"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact101-container1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact101-thq-max-width-elm {
            align-self: center;
          }
          .contact101-thq-content-elm1 {
            width: 100%;
            margin-bottom: 48px;
            justify-content: flex-start;
          }
          .contact101-thq-content-elm2 {
            gap: var(--dl-layout-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact101-thq-content-elm3 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact101-container2 {
            gap: 24px;
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact101-text1 {
            text-align: center;
          }
          .contact101-text2 {
            align-self: center;
            text-align: center;
          }
          .contact101-container3 {
            gap: 24px;
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact101-text3 {
            text-align: center;
          }
          .contact101-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact101-link {
            text-decoration: none;
          }
          .contact101-text4 {
            display: inline-block;
          }
          .contact101-text5 {
            display: inline-block;
          }
          .contact101-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact101-thq-content-elm1 {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact101-thq-content-elm3 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact101-thq-content-elm1 {
              gap: 24px;
            }
          }
          @media (max-width: 479px) {
            .contact101-text2 {
              align-self: center;
            }
            .contact101-link {
              color: var(--dl-color-theme-accent1);
            }
            .contact101-text4 {
              text-align: center;
              font-family: Inter;
            }
            .contact101-text6 {
              font-size: 20px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

Contact101.defaultProps = {
  location1Description: undefined,
  location1: undefined,
  location2: undefined,
}

Contact101.propTypes = {
  location1Description: PropTypes.element,
  location1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact101
