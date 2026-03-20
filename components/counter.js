import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Counter = (props) => {
  return (
    <>
      <div className={`counter-container ${props.rootClassName} `}>
        <h1 className="counter-text1">{props.number}</h1>
        <span className="counter-text2">{props.type}</span>
      </div>
      <style jsx>
        {`
          .counter-container {
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: center;
            flex-direction: column;
          }
          .counter-text1 {
            color: var(--dl-color-theme-neutral-light);
            font-size: 32px;
            font-family: 'Inter';
            font-weight: 600;
          }
          .counter-text2 {
            color: var(--dl-color-theme-neutral-light);
            font-family: 'Inter';
          }
          .counterroot-class-name {
            background-color: var(--dl-color-pimary-900);
          }
          .counterroot-class-name1 {
            background-color: var(--dl-color-pimary-900);
          }
          .counterroot-class-name2 {
            background-color: var(--dl-color-pimary-900);
          }
          .counterroot-class-name6 {
            background-color: var(--dl-color-pimary-900);
          }
          .counterroot-class-name7 {
            background-color: var(--dl-color-pimary-900);
          }
          .counterroot-class-name8 {
            background-color: var(--dl-color-pimary-900);
          }
          .counterroot-class-name9 {
            margin-top: var(--dl-layout-space-unit);
          }
          .counterroot-class-name10 {
            margin-top: var(--dl-layout-space-unit);
          }
          .counterroot-class-name11 {
            margin-top: var(--dl-layout-space-unit);
          }
          .counterroot-class-name12 {
            margin-top: var(--dl-layout-space-unit);
          }
          .counterroot-class-name13 {
            margin-top: var(--dl-layout-space-unit);
          }
          @media (max-width: 991px) {
            .counter-text1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 32px;
              font-family: Inter;
              font-weight: 600;
            }
            .counter-text2 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .counter-text1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 600;
            }
            .counter-text2 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 0.87rem;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              text-decoration: none;
            }
          }
          @media (max-width: 479px) {
            .counter-text1 {
              color: var(--dl-color-theme-neutral-light);
              font-size: 1.25rem;
              font-style: normal;
              text-align: center;
              font-family: Inter;
              font-weight: 700;
              text-transform: none;
              text-decoration: none;
            }
            .counter-text2 {
              color: var(--dl-color-theme-neutral-light);
              font-family: Inter;
            }
            .counterroot-class-name {
              align-self: center;
              margin-bottom: var(--dl-layout-space-unit);
              background-color: var(--dl-color-pimary-900);
            }
            .counterroot-class-name1 {
              align-self: center;
              background-color: var(--dl-color-pimary-900);
            }
            .counterroot-class-name2 {
              align-self: center;
              padding-left: 0px;
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: 0px;
              background-color: var(--dl-color-pimary-900);
            }
            .counterroot-class-name6 {
              align-self: center;
              padding-left: 0px;
              margin-bottom: var(--dl-layout-space-unit);
              padding-right: 0px;
              background-color: var(--dl-color-pimary-900);
            }
            .counterroot-class-name7 {
              align-self: center;
              margin-bottom: var(--dl-layout-space-unit);
              background-color: var(--dl-color-pimary-900);
            }
            .counterroot-class-name8 {
              align-self: center;
              background-color: var(--dl-color-pimary-900);
            }
          }
        `}
      </style>
    </>
  )
}

Counter.defaultProps = {
  rootClassName: '',
  type: 'Chief Technology Officer',
  number: 'Nuradeen Zakariyya',
}

Counter.propTypes = {
  rootClassName: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
}

export default Counter
