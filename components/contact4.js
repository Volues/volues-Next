import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact4 = (props) => {
  return (
    <>
      <div className="contact4-thq-contact20-elm thq-section-padding">
        <div className="contact4-thq-max-width-elm thq-section-max-width">
          <div className="contact4-thq-section-title-elm">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact4-text4">
                    Get in touch with us today!
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact4-thq-content-elm1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact4-text2">Contact us</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact4-text3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact4-thq-row-elm">
            <div className="contact4-thq-content-elm2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact4-thq-contact-info-elm1">
                <div className="contact4-thq-content-elm3">
                  <h3 className="contact4-thq-text-elm4 thq-heading-3">
                    Email
                  </h3>
                  <p className="contact4-thq-text-elm5 thq-body-large">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="contact4-text9">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in ero.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact4-thq-email-elm thq-body-small">
                  {props.email1 ?? (
                    <Fragment>
                      <span className="contact4-text8">
                        hello@teleporthq.io
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact4-thq-content-elm4">
              <svg
                viewBox="0 0 1024 1024"
                className="contact4-icon3 thq-icon-medium"
              >
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact4-thq-contact-info-elm2">
                <div className="contact4-thq-content-elm5">
                  <h3 className="contact4-thq-text-elm6 thq-heading-3">
                    Phone
                  </h3>
                  <p className="contact4-thq-text-elm7 thq-body-large">
                    {props.content4 ?? (
                      <Fragment>
                        <span className="contact4-text6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in ero.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact4-thq-phone-elm thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact4-text5">+1 (555) 000-0000</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact4-thq-content-elm6">
              <svg
                viewBox="0 0 1024 1024"
                className="contact4-icon5 thq-icon-medium"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact4-thq-contact-info-elm3">
                <div className="contact4-thq-content-elm7">
                  <h3 className="contact4-thq-text-elm8 thq-heading-3">
                    Office
                  </h3>
                  <p className="contact4-thq-text-elm9 thq-body-large">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="contact4-text1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in ero.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <span className="contact4-thq-address-elm thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact4-text7">
                        456 Test Ave, Bucharest
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact4-thq-contact20-elm {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact4-thq-max-width-elm {
            gap: 32px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact4-thq-section-title-elm {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-self: flex-start;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-thq-content-elm1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-thq-row-elm {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact4-thq-content-elm2 {
            gap: 24px;
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-thq-contact-info-elm1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-thq-content-elm3 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-thq-text-elm4 {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-thq-text-elm5 {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-thq-email-elm {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-thq-content-elm4 {
            gap: 24px;
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-icon3 {
            align-self: flex-start;
          }
          .contact4-thq-contact-info-elm2 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-thq-content-elm5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-thq-text-elm6 {
            align-self: stretch;
            text-align: left;
          }
          .contact4-thq-text-elm7 {
            text-align: left;
          }
          .contact4-thq-phone-elm {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-thq-content-elm6 {
            gap: 24px;
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-icon5 {
            align-self: flex-start;
          }
          .contact4-thq-contact-info-elm3 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-thq-content-elm7 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-thq-text-elm8 {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-thq-text-elm9 {
            text-align: left;
          }
          .contact4-thq-address-elm {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-text1 {
            display: inline-block;
          }
          .contact4-text2 {
            display: inline-block;
          }
          .contact4-text3 {
            display: inline-block;
          }
          .contact4-text4 {
            display: inline-block;
          }
          .contact4-text5 {
            display: inline-block;
          }
          .contact4-text6 {
            display: inline-block;
          }
          .contact4-text7 {
            display: inline-block;
          }
          .contact4-text8 {
            display: inline-block;
          }
          .contact4-text9 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .contact4-thq-row-elm {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact4.defaultProps = {
  content5: undefined,
  heading1: undefined,
  content1: undefined,
  content2: undefined,
  phone1: undefined,
  content4: undefined,
  address1: undefined,
  email1: undefined,
  content3: undefined,
}

Contact4.propTypes = {
  content5: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  phone1: PropTypes.element,
  content4: PropTypes.element,
  address1: PropTypes.element,
  email1: PropTypes.element,
  content3: PropTypes.element,
}

export default Contact4
