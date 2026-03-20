import React from 'react'

import { useTranslations } from 'next-intl'

const PrimaryButton = (props) => {
  return (
    <>
      <div className="primary-button-container"></div>
      <style jsx>
        {`
          .primary-button-container {
            display: flex;
            position: relative;
          }
        `}
      </style>
    </>
  )
}

export default PrimaryButton
