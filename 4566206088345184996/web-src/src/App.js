/*  */
import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from 'react-error-boundary'

import actions from './config.json'

/* Here is your entry point React Component, this class has access to the Adobe Experience Cloud Shell runtime object */

export default class App extends React.Component {
  constructor (props) {
    super(props)

    // error handler on UI rendering failure
    this.onError = (e, componentStack) => {}

    // component to show if UI fails rendering
    this.fallbackComponent = ({ componentStack, error }) => (
      <React.Fragment>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Something went wrong :(</h1>
        <pre>{ componentStack + '\n' + error.message }</pre>
      </React.Fragment>
    )

    console.log('runtime object:', this.props.runtime)
  }

  static get propTypes () {
    return {
      runtime: PropTypes.any
    }
  }

render () {
  return (
    // ErrorBoundary wraps child components to handle eventual rendering errors
    <ErrorBoundary onError={this.onError} FallbackComponent={this.fallbackComponent} >
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to 4566206088345184996!</h1>
      <div id="action-list">
        <h3>backend actions</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>{ Object.entries(actions).map(([name, url]) => <li key={name}>{name}: <a href={url}>{url}</a></li>) }</ul>
        <script>window.showActionsList()</script>
      </div>
      <h3>next steps</h3>
      <div id="doc-list">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li key='doc-readme'>check <code>README.md</code> for more docs</li>
          <li key='doc-runtime'><a href="https://adobedocs.github.io/adobeio-runtime/">Adobe I/O Runtime Documentation</a></li>
          <li key='doc-target'><a href="http://developers.adobetarget.com/api/">Adobe Target API</a></li>
          <li key='doc-analytics'><a href="https://www.adobe.io/apis/experiencecloud/analytics/docs.html">Adobe Analytics API</a></li>
          <li key='doc-campaign'><a href="https://final-docs.campaign.adobe.com/doc/standard/en/api/ACS_API.html">Adobe Campaign Standard API</a></li>
        </ul>
      </div>
    </div>
    </ErrorBoundary>
  )
  }
}
