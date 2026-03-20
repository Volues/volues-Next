import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Label = (props) => {
  return (
    <>
      <div className={`label-container ${props.rootClassName} `}>
        <h6 className="label-text">{props.text}</h6>
      </div>
      <style jsx>
        {`
          .label-container {
            display: flex;
            position: relative;
          }
          .label-text {
            color: var(--dl-color-pimary-500);
            font-size: 20px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 700;
            line-height: 1;
            padding-top: 0.25rem;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-radius25);
            padding-right: var(--dl-layout-space-halfunit);
            padding-bottom: 0.25rem;
            background-color: var(--dl-color-pimary-700);
          }
          .labelroot-class-name {
            margin-bottom: var(--dl-layout-space-unit);
          }

          @media (max-width: 991px) {
            .label-text {
              font-size: 16px;
            }
          }
          @media (max-width: 767px) {
            .label-text {
              font-size: 0.67rem;
            }
          }
          @media (max-width: 479px) {
            .label-text {
              fill: #e34a4a;
              color: var(--dl-color-pimary-500);
              font-size: 0.67rem;
              font-style: normal;
              font-family: Inter;
              font-weight: 600;
              line-height: 1;
              padding-top: 0.25rem;
              padding-left: var(--dl-layout-space-halfunit);
              border-radius: var(--dl-layout-radius-radius25);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: 0.25rem;
              text-transform: capitalize;
              background-color: var(--dl-color-pimary-700);
            }
            .labelroot-class-name1 {
              align-self: center;
            }
            .labelroot-class-name2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Label.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

Label.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Label
