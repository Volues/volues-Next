import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery9 = (props) => {
  return (
    <>
      <div className="gallery9-thq-gallery3-elm thq-section-padding">
        <div className="gallery9-thq-max-width-elm thq-section-max-width">
          <div className="gallery9-thq-section-title-elm">
            <h2 className="gallery9-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery9-text2">Photo Gallery</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery9-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery9-text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery9-container1">
            <div className="gallery9-thq-content-elm">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="gallery9-thq-slider-elm swiper"
              >
                <div
                  data-thq="slider-wrapper"
                  className="gallery9-thq-slider-wrapper-elm swiper-wrapper"
                >
                  <div
                    data-thq="slider-slide"
                    className="gallery9-thq-slider-slide-elm1 swiper-slide"
                  >
                    <div className="gallery9-container2">
                      <img
                        alt={props.image1Alt}
                        src={props.image1Src}
                        className="gallery9-thq-image1-elm thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container3">
                      <img
                        alt={props.image2Alt}
                        src={props.image2Src}
                        className="gallery9-thq-image2-elm thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery9-thq-slider-slide-elm2 swiper-slide"
                  >
                    <div className="gallery9-container4">
                      <img
                        alt={props.image3Alt}
                        src={props.image3Src}
                        className="gallery9-thq-image3-elm thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container5">
                      <img
                        alt={props.image4Alt}
                        src={props.image4Src}
                        className="gallery9-thq-image4-elm thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery9-thq-slider-slide-elm3 swiper-slide"
                  >
                    <div className="gallery9-container6">
                      <img
                        alt={props.image5Alt}
                        src={props.image5Src}
                        className="gallery9-thq-image5-elm thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container7">
                      <img
                        alt={props.image6Alt}
                        src={props.image6Src}
                        className="gallery9-thq-image6-elm thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-button-prev"
                  className="swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="swiper-button-next"
                ></div>
                <div
                  data-thq="slider-pagination"
                  className="gallery9-thq-slider-pagination-elm swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery9-thq-gallery3-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .gallery9-thq-max-width-elm {
            gap: 48px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery9-thq-section-title-elm {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery9-thq-text-elm1 {
            text-align: center;
          }
          .gallery9-thq-text-elm2 {
            text-align: center;
          }
          .gallery9-container1 {
            gap: 24px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery9-thq-content-elm {
            gap: 24px;
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery9-thq-slider-elm {
            width: 100%;
            height: 600px;
            display: inline-block;
          }
          .gallery9-thq-slider-wrapper-elm {
            width: 100%;
          }
          .gallery9-thq-slider-slide-elm1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image1-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image2-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-thq-slider-slide-elm2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container4 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image3-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image4-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-thq-slider-slide-elm3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container6 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image5-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container7 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-thq-image6-elm {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-thq-slider-pagination-elm {
            display: block;
          }
          .gallery9-text1 {
            display: inline-block;
          }
          .gallery9-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery9-thq-content-elm {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .gallery9-thq-section-title-elm {
              gap: 24px;
            }
            .gallery9-thq-slider-slide-elm1 {
              flex-direction: column;
            }
            .gallery9-container2 {
              height: calc(50% - 8px);
            }
            .gallery9-container3 {
              height: calc(50% - 8px);
            }
            .gallery9-thq-slider-slide-elm2 {
              flex-direction: column;
            }
            .gallery9-container4 {
              height: calc(50% - 8px);
            }
            .gallery9-container5 {
              height: calc(50% - 8px);
            }
            .gallery9-thq-slider-slide-elm3 {
              flex-direction: column;
            }
            .gallery9-container6 {
              height: calc(50% - 8px);
            }
            .gallery9-container7 {
              height: calc(50% - 8px);
            }
          }
          @media (max-width: 479px) {
            .gallery9-thq-slider-elm {
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery9.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image3Alt: 'image',
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image4Alt: 'image',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'image',
  image6Src:
    'https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  heading1: undefined,
  image1Alt: 'image',
  image5Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1400',
  image2Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1400',
  image6Alt: 'image',
  image5Alt: 'image',
}

Gallery9.propTypes = {
  image3Src: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Alt: PropTypes.string,
}

export default Gallery9
