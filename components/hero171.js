import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero171 = (props) => {
  return (
    <>
      <div className="hero171-thq-header78-elm">
        <div className="hero171-thq-column-elm thq-section-padding thq-section-max-width">
          <div className="hero171-thq-content-elm1">
            <h1 className="hero171-thq-text-elm1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero171-text4">
                    Medium length hero headline goes here
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero171-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero171-text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero171-thq-actions-elm">
            <button className="thq-button-filled hero171-thq-button-elm1">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero171-text3">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero171-thq-button-elm2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero171-text1">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero171-thq-content-elm2">
          <div className="hero171-thq-row-container-elm1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero171-thq-placeholder-image-elm10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero171-thq-placeholder-image-elm11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero171-thq-placeholder-image-elm12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero171-thq-placeholder-image-elm13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero171-thq-placeholder-image-elm14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero171-thq-placeholder-image-elm15 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero171-thq-placeholder-image-elm16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero171-thq-placeholder-image-elm17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero171-thq-placeholder-image-elm18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero171-thq-placeholder-image-elm19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero171-thq-placeholder-image-elm20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero171-thq-placeholder-image-elm21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero171-thq-row-container-elm2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero171-thq-placeholder-image-elm22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero171-thq-placeholder-image-elm23 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero171-thq-placeholder-image-elm24 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero171-thq-placeholder-image-elm25 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero171-thq-placeholder-image-elm26 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero171-thq-placeholder-image-elm27 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero171-thq-placeholder-image-elm28 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero171-thq-placeholder-image-elm29 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero171-thq-placeholder-image-elm30 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero171-thq-placeholder-image-elm31 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero171-thq-placeholder-image-elm32 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero171-thq-placeholder-image-elm33 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero171-container2">
            <React.Fragment>
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n  @keyframes scroll-x {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(calc(-100% - 16px));\n    }\n  }\n\n  @keyframes scroll-y {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(calc(-100% - 16px));\n    }\n  }\n',
                  }}
                />
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero171-thq-header78-elm {
            gap: 48px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero171-thq-column-elm {
            gap: 24px;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero171-thq-content-elm1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero171-thq-text-elm1 {
            text-align: center;
          }
          .hero171-thq-text-elm2 {
            text-align: center;
          }
          .hero171-thq-actions-elm {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero171-thq-content-elm2 {
            gap: 24px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero171-thq-row-container-elm1 {
            width: 100%;
          }
          .hero171-thq-placeholder-image-elm10 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm11 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm12 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm13 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm14 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm15 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm16 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm17 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm18 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm19 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm20 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm21 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-row-container-elm2 {
            width: 100%;
          }
          .hero171-thq-placeholder-image-elm22 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm23 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm24 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm25 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm26 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm27 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm28 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm29 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm30 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm31 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm32 {
            width: 400px;
            height: 400px;
          }
          .hero171-thq-placeholder-image-elm33 {
            width: 400px;
            height: 400px;
          }
          .hero171-container2 {
            display: contents;
          }
          .hero171-text1 {
            display: inline-block;
          }
          .hero171-text2 {
            display: inline-block;
          }
          .hero171-text3 {
            display: inline-block;
          }
          .hero171-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero171-thq-content-elm2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero171-thq-actions-elm {
              width: 100%;
              flex-direction: column;
            }
            .hero171-thq-button-elm1 {
              width: 100%;
            }
            .hero171-thq-button-elm2 {
              width: 100%;
            }
            .hero171-thq-placeholder-image-elm10 {
              width: 100%;
              height: 350px;
            }
            .hero171-thq-placeholder-image-elm11 {
              width: 100%;
              height: 350px;
            }
            .hero171-thq-placeholder-image-elm12 {
              width: 100%;
              height: 350px;
            }
            .hero171-thq-placeholder-image-elm13 {
              width: 100%;
              height: 350px;
            }
            .hero171-thq-placeholder-image-elm14 {
              width: 100%;
              height: 350px;
            }
            .hero171-thq-placeholder-image-elm15 {
              width: 100%;
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero171.defaultProps = {
  image5Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image9Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image11Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image1Alt: 'Hero Image',
  action2: undefined,
  image8Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image9Src:
    'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image12Alt: 'Hero Image',
  content1: undefined,
  action1: undefined,
  heading1: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'Hero Image',
  image12Src:
    'https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&ixlib=rb-4.0.3&w=1500',
  image4Src:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image8Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
}

Hero171.propTypes = {
  image5Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image3Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  image8Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image9Src: PropTypes.string,
  image12Alt: PropTypes.string,
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image2Src: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image4Src: PropTypes.string,
  image1Src: PropTypes.string,
  image8Src: PropTypes.string,
}

export default Hero171
