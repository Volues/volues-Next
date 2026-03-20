import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery4 = (props) => {
  return (
    <>
      <div className="gallery4-thq-gallery3-elm thq-section-padding">
        <div className="gallery4-thq-max-width-elm thq-section-max-width">
          <div className="gallery4-thq-section-title-elm">
            <h2 className="gallery4-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery4-text2">Photo Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery4-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery4-text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery4-container1">
            <div className="gallery4-thq-content-elm">
              <div className="gallery4-container2">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="gallery4-thq-image1-elm thq-img-ratio-16-9"
                />
              </div>
              <div className="gallery4-container3">
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="gallery4-thq-image2-elm thq-img-ratio-1-1"
                />
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="gallery4-thq-image3-elm thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery4-thq-gallery3-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery4-thq-max-width-elm {
            gap: 48px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery4-thq-section-title-elm {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery4-thq-text-elm1 {
            text-align: center;
          }
          .gallery4-thq-text-elm2 {
            text-align: center;
          }
          .gallery4-container1 {
            gap: 24px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery4-thq-content-elm {
            gap: 24px;
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery4-container2 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery4-thq-image1-elm {
            width: 100%;
            height: 904px;
            max-width: 100%;
            align-self: center;
          }
          .gallery4-container3 {
            gap: 24px;
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery4-thq-image2-elm {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery4-thq-image3-elm {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .gallery4-text1 {
            display: inline-block;
          }
          .gallery4-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery4-thq-content-elm {
              align-items: center;
              flex-direction: column;
            }
            .gallery4-thq-image1-elm {
              width: 100%;
              height: 100%;
              aspect-ratio: 1/1;
            }
            .gallery4-container3 {
              width: 100%;
            }
            .gallery4-thq-image2-elm {
              height: 100%;
            }
            .gallery4-thq-image3-elm {
              height: 100%;
            }
          }
          @media (max-width: 767px) {
            .gallery4-thq-section-title-elm {
              gap: 24px;
            }
          }
          @media (max-width: 479px) {
            .gallery4-thq-gallery3-elm {
              padding: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery4.defaultProps = {
  image2Alt: 'image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image3Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image1Alt: 'PlaceholderImage1302',
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image3Alt: 'image',
  heading1: undefined,
}

Gallery4.propTypes = {
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery4
