import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Label1 = (props) => {
  return (
    <>
      <div className={`label1-container ${props.rootClassName} `}>
        <h6 className="label1-text">{props.text}</h6>
      </div>
      <style jsx>
        {`
          .label1-container {
            display: flex;
            position: relative;
          }
          .label1-text {
            color: var(--dl-color-pimary-500);
            font-style: normal;
            font-weight: 700;
            line-height: 1;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            background-color: var(--dl-color-pimary-700);
          }

          .label1root-class-name2 {
            align-self: center;
            align-content: center;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          @media (max-width: 479px) {
            .label1-text {
              fill: #e34a4a;
              color: var(--dl-color-pimary-500);
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 1;
              padding-top: 0.25rem;
              padding-bottom: 0.25rem;
              text-transform: capitalize;
              background-color: var(--dl-color-pimary-700);
            }
            .label1root-class-name2 {
              margin-bottom: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Label1.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

Label1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Label1
