import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery5 = (props) => {
  return (
    <>
      <div className="gallery5-thq-gallery3-elm thq-section-padding">
        <div className="gallery5-thq-max-width-elm thq-section-max-width">
          <div className="gallery5-thq-section-title-elm">
            <h2 className="gallery5-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery5-text2">Photo Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery5-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery5-text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery5-container1">
            <div className="gallery5-thq-content-elm">
              <div className="gallery5-container2">
                <div className="gallery5-container3">
                  <img
                    alt={props.image1Alt}
                    src={props.image1Src}
                    className="gallery5-thq-image1-elm thq-img-ratio-4-3"
                  />
                </div>
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="gallery5-thq-image2-elm thq-img-ratio-1-1"
                />
              </div>
              <div className="gallery5-container4">
                <img
                  alt={props.image3Alt}
                  src={props.image3Src}
                  className="gallery5-thq-image3-elm thq-img-ratio-1-1"
                />
                <img
                  alt={props.image4Alt}
                  src={props.image4Src}
                  className="gallery5-thq-image4-elm thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery5-thq-gallery3-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery5-thq-max-width-elm {
            gap: 48px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery5-thq-section-title-elm {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery5-thq-text-elm1 {
            text-align: center;
          }
          .gallery5-thq-text-elm2 {
            text-align: center;
          }
          .gallery5-container1 {
            gap: 24px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery5-thq-content-elm {
            gap: 24px;
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery5-container2 {
            gap: HalfUnits;
            flex: 1;
            width: 100%;
            height: 902px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery5-container3 {
            width: 100%;
            height: 40%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: 24px;
            justify-content: center;
          }
          .gallery5-thq-image1-elm {
            width: 100%;
            height: 100%;
            max-width: 100%;
            align-self: center;
            max-height: 700px;
          }
          .gallery5-thq-image2-elm {
            width: 100%;
            height: 60%;
            max-height: 700px;
            object-fit: cover;
          }
          .gallery5-container4 {
            gap: 24px;
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery5-thq-image3-elm {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .gallery5-thq-image4-elm {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .gallery5-text1 {
            display: inline-block;
          }
          .gallery5-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery5-thq-content-elm {
              align-items: center;
              flex-direction: column;
            }
            .gallery5-container2 {
              height: auto;
            }
            .gallery5-thq-image1-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 100%;
            }
            .gallery5-thq-image2-elm {
              height: 100%;
            }
            .gallery5-container4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .gallery5-thq-section-title-elm {
              gap: 24px;
            }
          }
          @media (max-width: 479px) {
            .gallery5-thq-image2-elm {
              max-height: 400px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery5.defaultProps = {
  image2Src:
    'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  content1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image4Alt: 'image',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image3Alt: 'image',
  image1Alt: 'PlaceholderImage1302',
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'image',
  heading1: undefined,
}

Gallery5.propTypes = {
  image2Src: PropTypes.string,
  content1: PropTypes.element,
  image3Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery5
