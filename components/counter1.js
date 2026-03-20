import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Counter1 = (props) => {
  return (
    <>
      <div className={`counter1-thq-counter-elm ${props.rootClassName} `}>
        <div className="counter1-container1">
          <h1 className="counter1-text10">
            {props.heading ?? (
              <Fragment>
                <span className="counter1-text16">87,000+</span>
              </Fragment>
            )}
          </h1>
          <span className="counter1-text11">
            {props.text ?? (
              <Fragment>
                <span className="counter1-text19">
                  <span className="counter1-text20">
                    Engineering
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Hours</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="counter1-container2">
          <h1 className="counter1-text12">
            {props.heading1 ?? (
              <Fragment>
                <span className="counter1-text18">12</span>
              </Fragment>
            )}
          </h1>
          <span className="counter1-text13">
            {props.text1 ?? (
              <Fragment>
                <span className="counter1-text22">
                  <span>
                    Enterprise
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Ecosystems</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="counter1-container3">
          <h1 className="counter1-text14">
            {props.heading2 ?? (
              <Fragment>
                <span className="counter1-text17">78</span>
              </Fragment>
            )}
          </h1>
          <span className="counter1-text15">
            {props.text2 ?? (
              <Fragment>
                <span className="counter1-text25">
                  <span>
                    Net
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="counter1-text27">
                    Promoter
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Score</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .counter1-thq-counter-elm {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .counter1-container1 {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .counter1-text10 {
            color: #050505;
            font-family: 'Inter';
            font-weight: 600;
          }
          .counter1-text11 {
            color: var(--dl-color-theme-neutral-light);
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .counter1-container2 {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .counter1-text12 {
            color: #050505;
            font-family: 'Inter';
            font-weight: 600;
          }
          .counter1-text13 {
            color: #050505;
            font-family: 'Inter';
          }
          .counter1-container3 {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .counter1-text14 {
            color: #050505;
            font-family: 'Inter';
            font-weight: 600;
          }
          .counter1-text15 {
            color: var(--dl-color-theme-neutral-light);
            font-family: 'Inter';
          }
          .counter1-text16 {
            display: inline-block;
          }
          .counter1-text17 {
            display: inline-block;
          }
          .counter1-text18 {
            display: inline-block;
          }
          .counter1-text19 {
            color: var(--dl-color-theme-neutral-light);
            display: flex;
            align-self: center;
            text-align: center;
            align-items: center;
            font-family: 'Inter';
            justify-content: center;
          }
          .counter1-text20 {
            color: #050505;
          }
          .counter1-text22 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .counter1-text25 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            font-family: 'Inter';
          }
          .counter1-text27 {
            color: #050505;
          }

          @media (max-width: 991px) {
            .counter1-text10 {
              color: var(--dl-color-theme-neutral-light);
              font-family: Inter;
              font-weight: 600;
            }
            .counter1-text11 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              align-self: center;
              align-items: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              justify-content: center;
              text-decoration: none;
            }
            .counter1-text12 {
              color: var(--dl-color-theme-neutral-light);
              font-family: Inter;
              font-weight: 600;
            }
            .counter1-text13 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .counter1-text14 {
              color: var(--dl-color-theme-neutral-light);
              font-family: Inter;
              font-weight: 600;
            }
            .counter1-text15 {
              color: rgb(5, 5, 5);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .counter1-text19 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              align-self: center;
              align-items: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              justify-content: center;
              text-decoration: none;
            }
            .counter1-text22 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .counter1-text25 {
              color: rgb(5, 5, 5);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .counter1-text10 {
              color: #050505;
              font-family: Inter;
              font-weight: 600;
            }
            .counter1-text11 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              align-self: center;
              align-items: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              justify-content: center;
              text-decoration: none;
            }
            .counter1-text12 {
              color: #050505;
              font-family: Inter;
              font-weight: 600;
            }
            .counter1-text13 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .counter1-text14 {
              color: #050505;
              font-family: Inter;
              font-weight: 600;
            }
            .counter1-text15 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .counter1-text19 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              align-self: center;
              align-items: center;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              justify-content: center;
              text-decoration: none;
            }
            .counter1-text22 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
            .counter1-text25 {
              fill: #050505;
              color: #050505;
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
          }
          @media (max-width: 479px) {
            .counter1-thq-counter-elm {
              width: 100%;
              align-self: center;
              margin-top: var(--dl-layout-space-doubleunit);
              align-items: center;
              justify-content: center;
            }
            .counter1-text10 {
              color: rgb(5, 5, 5);
              font-size: 1.25rem;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
              text-transform: none;
              text-decoration: none;
            }
            .counter1-text11 {
              color: #050505;
              align-self: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .counter1-text12 {
              color: #050505;
              font-size: 1.25rem;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
              text-transform: none;
              text-decoration: none;
            }
            .counter1-text13 {
              color: #050505;
              font-family: Inter;
            }
            .counter1-text14 {
              color: #050505;
              font-size: 1.25rem;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
              text-transform: none;
              text-decoration: none;
            }
            .counter1-text15 {
              color: #050505;
              font-family: Inter;
            }
            .counter1-text19 {
              color: #050505;
              align-self: center;
              align-items: center;
              font-family: Inter;
              justify-content: center;
            }
            .counter1-text22 {
              color: #050505;
              font-family: Inter;
            }
            .counter1-text25 {
              color: #050505;
              font-family: Inter;
            }
            .counter1root-class-name {
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Counter1.defaultProps = {
  heading: undefined,
  rootClassName: '',
  heading2: undefined,
  heading1: undefined,
  text: undefined,
  text1: undefined,
  text2: undefined,
}

Counter1.propTypes = {
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
}

export default Counter1
