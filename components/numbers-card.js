import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NumbersCard = (props) => {
  return (
    <>
      <div className="numbers-card-thq-thq-numbers-card-elm-elm">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="numbers-card-image"
        />
        <span className="numbers-card-thq-thq-number-elm-elm">
          {props.number}
        </span>
        <span className="numbers-card-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .numbers-card-thq-thq-numbers-card-elm-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .numbers-card-image {
            width: 45px;
            height: 45px;
            object-fit: cover;
          }
          .numbers-card-thq-thq-number-elm-elm {
            color: var(--dl-color-scheme-white);
            font-size: 48px;
            text-align: center;
            line-height: 1.1;
          }
          .numbers-card-text {
            color: rgba(255, 255, 255, 0.8);
            font-style: normal;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

NumbersCard.defaultProps = {
  imageAlt: 'image',
  number: '2,148',
  text: 'sessions',
  imageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f4203abe-8370-4fff-964c-6868c3525b4a/5741a364-f95d-43f1-9f95-473e9b37a2c1?org_if_sml=1&force_format=original',
}

NumbersCard.propTypes = {
  imageAlt: PropTypes.string,
  number: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default NumbersCard
