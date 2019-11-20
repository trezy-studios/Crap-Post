// Style imports
/* eslint-disable import/no-unassigned-import */
import '../scss/reset.scss'
import '../scss/lib.scss'
import '../scss/app.scss'
/* eslint-enable */





// Module imports
import {
  config as faConfig,
  library as faLibrary,
} from '@fortawesome/fontawesome-svg-core'
import NextApp from 'next/app'
import React from 'react'





// Component imports
import * as fasIcons from '../helpers/fasIconLibrary'
import * as fabIcons from '../helpers/fabIconLibrary'
import * as farIcons from '../helpers/farIconLibrary'
import ApplicationLayout from '../components/ApplicationLayout'





// Configure and populate FontAwesome library
faConfig.autoAddCss = false
faLibrary.add(fasIcons)
faLibrary.add(fabIcons)
faLibrary.add(farIcons)





class App extends NextApp {
  static getInitialProps (appProps) {
    return ApplicationLayout.getInitialProps(appProps)
  }

  render () {
    const {
      store,
      ...layoutProps
    } = this.props

    return (
      <ApplicationLayout {...layoutProps} />
    )
  }
}





export default App
