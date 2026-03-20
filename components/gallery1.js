import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery1 = (props) => {
  return (
    <>
      <div className="gallery1-thq-gallery3-elm thq-section-padding">
        <div className="gallery1-thq-max-width-elm thq-section-max-width">
          <div className="gallery1-thq-section-title-elm">
            <h2 className="gallery1-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery1-text1">
                    Photo Gallery of the Services you provide
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery1-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery1-text2">
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
          <div className="gallery1-thq-content-elm">
            <div className="gallery1-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery1-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery1-thq-gallery3-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-thq-max-width-elm {
            gap: 32px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery1-thq-section-title-elm {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery1-thq-text-elm1 {
            text-align: center;
          }
          .gallery1-thq-text-elm2 {
            text-align: center;
          }
          .gallery1-thq-content-elm {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery1-text1 {
            display: inline-block;
          }
          .gallery1-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery1-thq-content-elm {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery1.defaultProps = {
  image1Alt: 'PlaceholderImage1302',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  heading1: undefined,
  image3Alt: 'PlaceholderImage1302',
  image2Alt: 'PlaceholderImage1302',
  content1: undefined,
}

Gallery1.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Gallery1
