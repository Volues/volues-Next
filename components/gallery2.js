import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery2 = (props) => {
  return (
    <>
      <div className="gallery2-thq-gallery3-elm thq-section-padding">
        <div className="gallery2-thq-max-width-elm thq-section-max-width">
          <div className="gallery2-thq-section-title-elm">
            <h2 className="gallery2-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery2-text2">Photo Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery2-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery2-text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery2-thq-content-elm">
            <div className="gallery2-container1">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery2-thq-image1-elm thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container2">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery2-thq-image2-elm thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery2-thq-image3-elm1 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery2-container4">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery2-thq-image3-elm2 thq-img-ratio-4-3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery2-thq-gallery3-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery2-thq-max-width-elm {
            gap: 48px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery2-thq-section-title-elm {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery2-thq-text-elm1 {
            text-align: center;
          }
          .gallery2-thq-text-elm2 {
            text-align: center;
          }
          .gallery2-thq-content-elm {
            gap: 24px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery2-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-thq-image1-elm {
            width: 100%;
            max-width: 600px;
            align-self: center;
          }
          .gallery2-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-thq-image2-elm {
            width: 100%;
            max-width: 600px;
            align-self: center;
          }
          .gallery2-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-thq-image3-elm1 {
            width: 100%;
            max-width: 600px;
          }
          .gallery2-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery2-thq-image3-elm2 {
            width: 100%;
            max-width: 600px;
          }
          .gallery2-text1 {
            display: inline-block;
          }
          .gallery2-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery2-thq-content-elm {
              align-items: center;
              flex-direction: column;
            }
            .gallery2-thq-image1-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-thq-image2-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-thq-image3-elm1 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery2-thq-image3-elm2 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
          }
          @media (max-width: 479px) {
            .gallery2-thq-content-elm {
              gap: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery2.defaultProps = {
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image2Alt: 'PlaceholderImage1302',
  image3Alt: 'PlaceholderImage1302',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image4Alt: 'PlaceholderImage1302',
  content1: undefined,
  image1Alt: 'PlaceholderImage1302',
  heading1: undefined,
}

Gallery2.propTypes = {
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image4Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery2
