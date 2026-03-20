import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FAQ1 = (props) => {
  return (
    <>
      <div className="faq1-thq-faq7-elm thq-section-padding">
        <div className="faq1-thq-max-width-elm thq-section-max-width">
          <div className="thq-flex-column">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="faq1-text18">FAQs</span>
                </Fragment>
              )}
            </h2>
            <p className="faq1-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="faq1-text12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="thq-flex-column faq1-thq-list-elm">
            <div className="faq1-thq-list-item1-elm">
              <p className="faq1-thq-faq1-question-elm thq-body-large">
                {props.faq1Question ?? (
                  <Fragment>
                    <span className="faq1-text19">
                      Frequently Asked Questions
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq1Answer ?? (
                  <Fragment>
                    <span className="faq1-text13">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-thq-list-item2-elm">
              <p className="faq1-thq-faq2-question-elm thq-body-large">
                {props.faq2Question ?? (
                  <Fragment>
                    <span className="faq1-text10">
                      Frequently Asked Questions
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq2Answer ?? (
                  <Fragment>
                    <span className="faq1-text17">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-thq-list-item3-elm">
              <p className="faq1-thq-faq3-question-elm thq-body-large">
                {props.faq3Question ?? (
                  <Fragment>
                    <span className="faq1-text11">
                      Frequently Asked Questions
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq3Answer ?? (
                  <Fragment>
                    <span className="faq1-text21">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-thq-list-item4-elm">
              <p className="faq1-thq-faq4-question-elm thq-body-large">
                {props.faq4Question ?? (
                  <Fragment>
                    <span className="faq1-text16">
                      Frequently Asked Questions
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq4Answer ?? (
                  <Fragment>
                    <span className="faq1-text14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="faq1-thq-list-item5-elm">
              <p className="faq1-thq-faq5-question-elm thq-body-large">
                {props.faq5Question ?? (
                  <Fragment>
                    <span className="faq1-text23">
                      Frequently Asked Questions
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="thq-body-small">
                {props.faq5Answer ?? (
                  <Fragment>
                    <span className="faq1-text15">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq1-thq-content-elm2">
              <h2 className="thq-heading-2">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="faq1-text22">Still have a question?</span>
                  </Fragment>
                )}
              </h2>
              <p className="faq1-thq-text-elm4 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="faq1-text24">
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
            <div className="faq1-container">
              <button className="thq-button-outline faq1-thq-button-elm">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="faq1-text20">Contact</span>
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
          .faq1-thq-faq7-elm {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .faq1-thq-max-width-elm {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq1-thq-text-elm2 {
            text-align: center;
          }
          .faq1-thq-list-item1-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-thq-faq1-question-elm {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-thq-list-item2-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-thq-faq2-question-elm {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-thq-list-item3-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-thq-faq3-question-elm {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-thq-list-item4-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-thq-faq4-question-elm {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-thq-list-item5-elm {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-thq-faq5-question-elm {
            font-style: normal;
            font-weight: 600;
          }
          .faq1-thq-content-elm2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .faq1-thq-text-elm4 {
            text-align: center;
          }
          .faq1-container {
            display: flex;
            position: relative;
          }
          .faq1-text10 {
            display: inline-block;
          }
          .faq1-text11 {
            display: inline-block;
          }
          .faq1-text12 {
            display: inline-block;
          }
          .faq1-text13 {
            display: inline-block;
          }
          .faq1-text14 {
            display: inline-block;
          }
          .faq1-text15 {
            display: inline-block;
          }
          .faq1-text16 {
            display: inline-block;
          }
          .faq1-text17 {
            display: inline-block;
          }
          .faq1-text18 {
            display: inline-block;
          }
          .faq1-text19 {
            display: inline-block;
          }
          .faq1-text20 {
            display: inline-block;
          }
          .faq1-text21 {
            display: inline-block;
          }
          .faq1-text22 {
            display: inline-block;
          }
          .faq1-text23 {
            display: inline-block;
          }
          .faq1-text24 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .faq1-thq-max-width-elm {
              gap: 24px;
            }
          }
          @media (max-width: 767px) {
            .faq1-thq-text-elm2 {
              text-align: left;
            }
            .faq1-thq-list-elm {
              gap: 32px;
            }
            .faq1-thq-button-elm {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ1.defaultProps = {
  faq2Question: undefined,
  faq3Question: undefined,
  content1: undefined,
  faq1Answer: undefined,
  faq4Answer: undefined,
  faq5Answer: undefined,
  faq4Question: undefined,
  faq2Answer: undefined,
  heading1: undefined,
  faq1Question: undefined,
  action1: undefined,
  faq3Answer: undefined,
  heading2: undefined,
  faq5Question: undefined,
  content2: undefined,
}

FAQ1.propTypes = {
  faq2Question: PropTypes.element,
  faq3Question: PropTypes.element,
  content1: PropTypes.element,
  faq1Answer: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq5Answer: PropTypes.element,
  faq4Question: PropTypes.element,
  faq2Answer: PropTypes.element,
  heading1: PropTypes.element,
  faq1Question: PropTypes.element,
  action1: PropTypes.element,
  faq3Answer: PropTypes.element,
  heading2: PropTypes.element,
  faq5Question: PropTypes.element,
  content2: PropTypes.element,
}

export default FAQ1
