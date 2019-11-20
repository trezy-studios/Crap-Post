// Module imports
import NextHead from 'next/head'
import NextError from 'next/error'
import PropTypes from 'prop-types'
import React from 'react'





// Local imports
import Banner from './Banner'





class ApplicationLayout extends React.Component {
  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  static async getInitialProps ({ Component, ctx }) {
    const {
      res,
      asPath,
      query,
    } = ctx

    /* eslint-disable-next-line no-magic-numbers */
    let statusCode = 200
    let pageProps = {}
    let layoutProps = {
      renderLayout: true,
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ...ctx,
      }, state => {
        layoutProps = {
          ...layoutProps,
          ...state,
        }
      })
    }

    if (res) {
      ({ statusCode } = res)
    }

    return {
      ...layoutProps,
      statusCode,
      pageProps: {
        asPath,
        query,
        ...pageProps,
      },
    }
  }

  render () {
    const {
      Component,
      pageProps,
      renderLayout,
      statusCode,
    } = this.props

    return (
      <div role="application">
        <NextHead>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&amp;display=swap"
            rel="stylesheet" />
        </NextHead>

        {renderLayout && (
          <Banner />
        )}

        {/* eslint-disable-next-line no-magic-numbers */}
        {(statusCode === 200) && (
          <Component {...pageProps} />
        )}

        {/* eslint-disable-next-line no-magic-numbers */}
        {(statusCode !== 200) && (
          <main
            className="page error-page"
            data-animate
            data-animation="fade-in">
            <div className="page-content">
              <NextError statusCode={statusCode} />
            </div>
          </main>
        )}
      </div>
    )
  }





  /***************************************************************************\
    PropTypes
  \***************************************************************************/

  static propTypes = {
    Component: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]).isRequired,
    pageProps: PropTypes.object.isRequired,
    renderLayout: PropTypes.bool.isRequired,
    router: PropTypes.object.isRequired,
    statusCode: PropTypes.number.isRequired,
  }
}





export default ApplicationLayout
