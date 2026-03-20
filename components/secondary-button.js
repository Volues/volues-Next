import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const SecondaryButton = (props) => {
  return (
    <>
      <div
        className={`secondary-button-container ${props.rootClassName} `}
      ></div>
      <style jsx>
        {`
          .secondary-button-container {
            display: flex;
            position: relative;
          }
          .secondary-buttonroot-class-name1 {
            margin-top: var(--dl-layout-space-unitandhalf);
          }
        `}
      </style>
    </>
  )
}

SecondaryButton.defaultProps = {
  rootClassName: '',
}

SecondaryButton.propTypes = {
  rootClassName: PropTypes.string,
}

export default SecondaryButton
