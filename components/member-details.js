import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MemberDetails = (props) => {
  return (
    <>
      <div className={`member-details-container ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="member-details-image"
        />
        <h1 className="member-details-text">{props.heading11}</h1>
      </div>
      <style jsx>
        {`
          .member-details-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .member-details-image {
            width: 100px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .member-details-text {
            color: var(--dl-color-secondary-700);
            font-size: 12px;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            text-transform: uppercase;
          }

          @media (max-width: 479px) {
            .member-details-text {
              color: var(--dl-color-secondary-700);
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 300;
              text-transform: uppercase;
            }
          }
        `}
      </style>
    </>
  )
}

MemberDetails.defaultProps = {
  rootClassName: '',
  heading11: 'PRODUCT & Strategy lead',
  imageAlt: 'image',
  imageSrc:
    'https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg',
}

MemberDetails.propTypes = {
  rootClassName: PropTypes.string,
  heading11: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default MemberDetails
