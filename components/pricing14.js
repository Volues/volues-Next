import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div className="pricing14-thq-pricing23-elm thq-section-padding">
        <div className="pricing14-thq-max-width-elm thq-section-max-width">
          <div className="pricing14-thq-section-title-elm">
            <span className="pricing14-thq-text-elm10 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="pricing14-text35">
                    Choose the perfect plan for you
                  </span>
                </Fragment>
              )}
            </span>
            <div className="pricing14-thq-content-elm">
              <h2 className="pricing14-thq-text-elm11 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="pricing14-text51">Pricing plan</span>
                  </Fragment>
                )}
              </h2>
              <p className="pricing14-thq-text-elm12 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="pricing14-text56">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="pricing14-thq-tabs-elm">
            {isMonthly === true && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button1 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing14-button2 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {isMonthly === false && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button3 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
            {isMonthly === true && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing14-button4 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
          </div>
          {isMonthly === true && (
            <div className="pricing14-container1">
              <div className="pricing14-thq-column-elm1 thq-card">
                <div className="pricing14-thq-price-elm10">
                  <div className="pricing14-thq-price-elm11">
                    <p className="pricing14-thq-text-elm17 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="pricing14-text54">Basic plan</span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-thq-text-elm18 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="pricing14-text47">$20/mo</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text19">
                            or $200 yearly
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-thq-list-elm1">
                    <div className="pricing14-thq-list-item-elm10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text43">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text11">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text10">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-thq-button-elm1 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="pricing14-text26">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-thq-column-elm2 thq-card">
                <div className="pricing14-thq-price-elm12">
                  <div className="pricing14-thq-price-elm13">
                    <p className="pricing14-thq-text-elm24 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="pricing14-text27">
                            Business plan
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-thq-text-elm25 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="pricing14-text58">$29/mo</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text13">
                            or $299 yearly
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-thq-list-elm2">
                    <div className="pricing14-thq-list-item-elm13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text12">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text15">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text52">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text37">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-thq-button-elm2 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="pricing14-text14">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-thq-column-elm3 thq-card">
                <div className="pricing14-thq-price-elm14">
                  <div className="pricing14-thq-price-elm15">
                    <p className="pricing14-thq-text-elm32 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="pricing14-text55">
                            Enterprise plan
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="pricing14-thq-text-elm33 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="pricing14-text17">$49/mo</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="pricing14-text48">
                            or $499 yearly
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing14-thq-list-elm3">
                    <div className="pricing14-thq-list-item-elm17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing14-text28">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing14-text36">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="pricing14-text38">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="pricing14-text20">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature5 ?? (
                          <Fragment>
                            <span className="pricing14-text45">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-thq-button-elm3 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="pricing14-text18">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {isMonthly === false && (
            <div className="pricing14-container2">
              <div className="pricing14-thq-column-elm4 thq-card">
                <div className="pricing14-thq-price-elm16">
                  <div className="pricing14-thq-price-elm17">
                    <span className="pricing14-thq-text-elm41 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing14-text39">Basic plan</span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-thq-text-elm42 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text57">$200/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text31">
                            or $20 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-elm4">
                    <div className="pricing14-thq-list-item-elm22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text32">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text44">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text49">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-thq-button-elm4 thq-button-outline thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text34">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-thq-column-elm5 thq-card">
                <div className="pricing14-thq-price-elm18">
                  <div className="pricing14-thq-price-elm19">
                    <span className="pricing14-thq-text-elm48 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing14-text21">
                            Business plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-thq-text-elm49 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text50">$299/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text42">
                            or $29 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-elm5">
                    <div className="pricing14-thq-list-item-elm25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text40">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text46">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text41">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text16">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-thq-button-elm5 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text60">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing14-thq-column-elm6 thq-card">
                <div className="pricing14-thq-price-elm20">
                  <div className="pricing14-thq-price-elm21">
                    <span className="pricing14-thq-text-elm56 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing14-text24">
                            Enterprise plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="pricing14-thq-text-elm57 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="pricing14-text30">$499/yr</span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing14-text53">
                            or $49 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing14-thq-list-elm6">
                    <div className="pricing14-thq-list-item-elm29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing14-text33">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm30">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing14-text22">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing14-text29">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing14-text59">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing14-thq-list-item-elm33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature51 ?? (
                          <Fragment>
                            <span className="pricing14-text23">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing14-thq-button-elm6 thq-button-filled thq-button-animated">
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="pricing14-text25">Get started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing14-thq-pricing23-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-thq-max-width-elm {
            gap: 48px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-section-title-elm {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing14-thq-text-elm10 {
            text-align: center;
          }
          .pricing14-thq-content-elm {
            gap: 24px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-text-elm11 {
            text-align: center;
          }
          .pricing14-thq-text-elm12 {
            text-align: center;
          }
          .pricing14-thq-tabs-elm {
            display: flex;
            align-items: flex-start;
          }
          .pricing14-button1 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button2 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: var(--dl-layout-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing14-button3 {
            gap: var(--dl-layout-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing14-button4 {
            gap: var(--dl-layout-space-halfunit);
            width: 120px;
            height: 60px;
            border-style: solid;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-layout-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-layout-radius-buttonradius);
          }
          .pricing14-container1 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-thq-column-elm1 {
            gap: 32px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-thq-price-elm10 {
            gap: 32px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-price-elm11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-text-elm17 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-thq-text-elm18 {
            font-size: 48px;
          }
          .pricing14-thq-list-elm1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-thq-list-item-elm10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-button-elm1 {
            width: 100%;
          }
          .pricing14-thq-column-elm2 {
            gap: 32px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-thq-price-elm12 {
            gap: 32px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-price-elm13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-text-elm24 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-thq-text-elm25 {
            font-size: 48px;
          }
          .pricing14-thq-list-elm2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-thq-list-item-elm13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-button-elm2 {
            width: 100%;
          }
          .pricing14-thq-column-elm3 {
            gap: 32px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-thq-price-elm14 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-price-elm15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-text-elm32 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-thq-text-elm33 {
            font-size: 48px;
          }
          .pricing14-thq-list-elm3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-thq-list-item-elm17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-button-elm3 {
            width: 100%;
          }
          .pricing14-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing14-thq-column-elm4 {
            gap: 32px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing14-thq-price-elm16 {
            gap: 32px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-price-elm17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-text-elm41 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-thq-text-elm42 {
            font-size: 48px;
          }
          .pricing14-thq-list-elm4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-thq-list-item-elm22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-button-elm4 {
            width: 100%;
          }
          .pricing14-thq-column-elm5 {
            gap: 32px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing14-thq-price-elm18 {
            gap: 32px;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-price-elm19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-text-elm48 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-thq-text-elm49 {
            font-size: 48px;
          }
          .pricing14-thq-list-elm5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-thq-list-item-elm25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm27 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm28 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-button-elm5 {
            width: 100%;
          }
          .pricing14-thq-column-elm6 {
            gap: 32px;
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing14-thq-price-elm20 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-price-elm21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing14-thq-text-elm56 {
            font-style: normal;
            font-weight: 600;
          }
          .pricing14-thq-text-elm57 {
            font-size: 48px;
          }
          .pricing14-thq-list-elm6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing14-thq-list-item-elm29 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm30 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm31 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm32 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-list-item-elm33 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing14-thq-button-elm6 {
            width: 100%;
          }
          .pricing14-text10 {
            display: inline-block;
          }
          .pricing14-text11 {
            display: inline-block;
          }
          .pricing14-text12 {
            display: inline-block;
          }
          .pricing14-text13 {
            display: inline-block;
          }
          .pricing14-text14 {
            display: inline-block;
          }
          .pricing14-text15 {
            display: inline-block;
          }
          .pricing14-text16 {
            display: inline-block;
          }
          .pricing14-text17 {
            display: inline-block;
          }
          .pricing14-text18 {
            display: inline-block;
          }
          .pricing14-text19 {
            display: inline-block;
          }
          .pricing14-text20 {
            display: inline-block;
          }
          .pricing14-text21 {
            display: inline-block;
          }
          .pricing14-text22 {
            display: inline-block;
          }
          .pricing14-text23 {
            display: inline-block;
          }
          .pricing14-text24 {
            display: inline-block;
          }
          .pricing14-text25 {
            display: inline-block;
          }
          .pricing14-text26 {
            display: inline-block;
          }
          .pricing14-text27 {
            display: inline-block;
          }
          .pricing14-text28 {
            display: inline-block;
          }
          .pricing14-text29 {
            display: inline-block;
          }
          .pricing14-text30 {
            display: inline-block;
          }
          .pricing14-text31 {
            display: inline-block;
          }
          .pricing14-text32 {
            display: inline-block;
          }
          .pricing14-text33 {
            display: inline-block;
          }
          .pricing14-text34 {
            display: inline-block;
          }
          .pricing14-text35 {
            display: inline-block;
          }
          .pricing14-text36 {
            display: inline-block;
          }
          .pricing14-text37 {
            display: inline-block;
          }
          .pricing14-text38 {
            display: inline-block;
          }
          .pricing14-text39 {
            display: inline-block;
          }
          .pricing14-text40 {
            display: inline-block;
          }
          .pricing14-text41 {
            display: inline-block;
          }
          .pricing14-text42 {
            display: inline-block;
          }
          .pricing14-text43 {
            display: inline-block;
          }
          .pricing14-text44 {
            display: inline-block;
          }
          .pricing14-text45 {
            display: inline-block;
          }
          .pricing14-text46 {
            display: inline-block;
          }
          .pricing14-text47 {
            display: inline-block;
          }
          .pricing14-text48 {
            display: inline-block;
          }
          .pricing14-text49 {
            display: inline-block;
          }
          .pricing14-text50 {
            display: inline-block;
          }
          .pricing14-text51 {
            display: inline-block;
          }
          .pricing14-text52 {
            display: inline-block;
          }
          .pricing14-text53 {
            display: inline-block;
          }
          .pricing14-text54 {
            display: inline-block;
          }
          .pricing14-text55 {
            display: inline-block;
          }
          .pricing14-text56 {
            display: inline-block;
          }
          .pricing14-text57 {
            display: inline-block;
          }
          .pricing14-text58 {
            display: inline-block;
          }
          .pricing14-text59 {
            display: inline-block;
          }
          .pricing14-text60 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .pricing14-container1 {
              flex-direction: column;
            }
            .pricing14-thq-column-elm3 {
              width: 100%;
            }
            .pricing14-container2 {
              flex-direction: column;
            }
            .pricing14-thq-column-elm6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing14-thq-max-width-elm {
              gap: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Pricing14.defaultProps = {
  plan1Feature3: undefined,
  plan1Feature2: undefined,
  plan2Feature1: undefined,
  plan2Yearly: undefined,
  plan2Action: undefined,
  plan2Feature2: undefined,
  plan2Feature41: undefined,
  plan3Price: undefined,
  plan3Action: undefined,
  plan1Yearly: undefined,
  plan3Feature4: undefined,
  plan21: undefined,
  plan3Feature21: undefined,
  plan3Feature51: undefined,
  plan31: undefined,
  plan3Action1: undefined,
  plan1Action: undefined,
  plan2: undefined,
  plan3Feature1: undefined,
  plan3Feature31: undefined,
  plan3Price1: undefined,
  plan1Yearly1: undefined,
  plan1Feature11: undefined,
  plan3Feature11: undefined,
  plan1Action1: undefined,
  content1: undefined,
  plan3Feature2: undefined,
  plan2Feature4: undefined,
  plan3Feature3: undefined,
  plan11: undefined,
  plan2Feature11: undefined,
  plan2Feature31: undefined,
  plan2Yearly1: undefined,
  plan1Feature1: undefined,
  plan1Feature21: undefined,
  plan3Feature5: undefined,
  plan2Feature21: undefined,
  plan1Price: undefined,
  plan3Yearly: undefined,
  plan1Feature31: undefined,
  plan2Price1: undefined,
  heading1: undefined,
  plan2Feature3: undefined,
  plan3Yearly1: undefined,
  plan1: undefined,
  plan3: undefined,
  content2: undefined,
  plan1Price1: undefined,
  plan2Price: undefined,
  plan3Feature41: undefined,
  plan2Action1: undefined,
}

Pricing14.propTypes = {
  plan1Feature3: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan2Action: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Action: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan21: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan31: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan1Action: PropTypes.element,
  plan2: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan1Action1: PropTypes.element,
  content1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan11: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan2Price1: PropTypes.element,
  heading1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1: PropTypes.element,
  plan3: PropTypes.element,
  content2: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan2Action1: PropTypes.element,
}

export default Pricing14
