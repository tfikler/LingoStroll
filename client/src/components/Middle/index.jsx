import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features10.css'

const Middle = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-flex-column thq-section-max-width">
        <div className="features10-section-title thq-flex-column">
          <p>
            {props.sectionDescription ?? (
              <Fragment>
                <p className="features10-text13 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim in
                  eros elementum tristique. Duis cursus, mi quis viverra ornare,
                  eros dolor interdum nulla.
                </p>
              </Fragment>
            )}
          </p>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3>
              {props.feature1Title ?? (
                <Fragment>
                  <h3 className="features10-text21 thq-heading-3">
                    Explore our key features
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features10-text20 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3>
              {props.feature2Title ?? (
                <Fragment>
                  <h3 className="features10-text14 thq-heading-3">
                    Explore our key features
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features10-text15 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3>
              {props.feature3Title ?? (
                <Fragment>
                  <h3 className="features10-text19 thq-heading-3">
                    Explore our key features
                  </h3>
                </Fragment>
              )}
            </h3>
            <span>
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features10-text17 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row">
          <button className="features10-button1 thq-button-filled">
            <span>
              {props.mainAction ?? (
                <Fragment>
                  <span className="features10-text18 thq-body-small">
                    Main action
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="features10-button2 thq-button-outline">
            <span>
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features10-text23 thq-body-small">
                    Secondary action
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Middle.defaultProps = {
  sectionDescription: undefined,
  feature3ImageAlt: 'PlaceholderImage1314',
  feature2Title: undefined,
  feature2Description: undefined,
  sectionTitle: undefined,
  feature3Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=200',
  mainAction: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  feature2ImageAlt: 'PlaceholderImage1314',
  feature3Title: undefined,
  feature1Description: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'PlaceholderImage1314',
  slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  secondaryAction: undefined,
}

Middle.propTypes = {
  sectionDescription: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.element,
}

export default Middle
