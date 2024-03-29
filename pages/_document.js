// Module imports
import buildCSP from 'content-security-policy-builder'
import React from 'react'
import uuid from 'uuid/v4'





// Module imports
import NextDocument, {
  Head,
  Main,
  NextScript,
} from 'next/document'





// Local constants
const additionalHeaders = {
  'Feature-Policy': {
    'ambient-light-sensor': "'none'",
    autoplay: "'none'",
    accelerometer: "'none'",
    camera: "'none'",
    'display-capture': "'none'",
    'document-domain': "'none'",
    'encrypted-media': "'none'",
    fullscreen: "'none'",
    geolocation: "'none'",
    gyroscope: "'none'",
    magnetometer: "'none'",
    microphone: "'none'",
    midi: "'none'",
    payment: "'none'",
    'picture-in-picture': "'none'",
    speaker: "'none'",
    'sync-xhr': "'none'",
    usb: "'none'",
    'wake-lock': "'none'",
    webauthn: "'none'",
    vr: "'none'",
    xr: "'none'",
  },
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': [
    '1',
    'mode=block',
  ],
  'X-Frame-Options': 'DENY',
}
const cspHeaderKeys = [
  'Content-Security-Policy',
  'X-Content-Security-Policy',
  'X-WebKit-CSP',
]





class Document extends NextDocument {
  static async getInitialProps (ctx) {
    const allowances = {
      'data:': ['font'],
      "'unsafe-eval'": false,
      "'unsafe-inline'": ['style'],
      "'self'": true,
      "'strict-dynamic'": ['script'],
    }
    const initialProps = await NextDocument.getInitialProps(ctx)
    const isDev = ctx.isServer
    const nonce = uuid()
    const whitelist = {
      connect: ["'self'"],
      default: [],
      font: ['https://fonts.gstatic.com'],
      img: ["'self'"],
      style: [
        "'self'",
        'https://fonts.googleapis.com',
      ],
      media: [],
      object: [],
      script: ["'self'"],
    }

    let baseUri = null

    if (!baseUri) {
      baseUri = ["'none'"]
    }

    if (!Array.isArray(baseUri)) {
      baseUri = [baseUri]
    }

    const cspDirectives = {
      baseUri,
      connectSrc: [
        ...(isDev ? ['webpack://*'] : []),
      ],
      scriptSrc: [
        `'nonce-${nonce}'`,
        ...(isDev ? ["'unsafe-eval'"] : []),
      ],
    }

    Object.entries(whitelist).forEach(([srcType, sources]) => {
      const initialSources = cspDirectives[`${srcType}Src`] || []
      const normalizedSources = Array.isArray(sources) ? sources : [sources]

      cspDirectives[`${srcType}Src`] = [
        ...initialSources,
        ...normalizedSources,
      ]
    })

    Object.entries(allowances).forEach(([allowance, value]) => {
      if ((typeof value === 'boolean') && value) {
        cspDirectives.defaultSrc.unshift(allowance)
      } else if (Array.isArray(value)) {
        value.forEach(srcType => {
          if (!cspDirectives[`${srcType}Src`]) {
            cspDirectives[`${srcType}Src`] = []
          }

          cspDirectives[`${srcType}Src`].unshift(allowance)
        })
      }
    })

    const policyString = buildCSP({ directives: cspDirectives })
    cspHeaderKeys.forEach(key => ctx.res.setHeader(key, policyString))

    Object.entries(additionalHeaders).forEach(([header, value]) => {
      let valueString = value

      if (typeof value === 'object') {
        const arrayifiedObject = Object.entries(valueString)
        const mapper = ([entry, list]) => `${entry} ${Array.isArray(list) ? list.join(' ') : list}`

        valueString = arrayifiedObject.map(mapper)
      }

      if (Array.isArray(valueString)) {
        valueString = valueString.join('; ')
      }

      ctx.res.setHeader(header, valueString)
    })

    return { ...initialProps, nonce }
  }

  render () {
    const { nonce } = this.props

    return (
      <html lang="en">
        <Head nonce={nonce}>
          <meta name="viewport" content="initial-scale=1.0, viewport-fit=cover, width=device-width" />

          <meta name="application-name" content="Trezy.com" />
          <meta name="theme-color" content="#d65050" />

          <meta name="apple-mobile-web-app-title" content="Trezy.com" />

          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#d65050" />
          <meta name="msapplication-TileImage" content="/static/favicon/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="/static/favicon/mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/static/favicon/mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="/static/favicon/mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="/static/favicon/mstile-310x310.png" />

          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/favicon/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/static/favicon/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/favicon/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/static/favicon/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/favicon/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/favicon/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/favicon/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/favicon/apple-touch-icon-152x152.png" />

          <link rel="icon" type="image/png" href="/static/favicon/favicon-16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon-96.png" sizes="96x96" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />

          <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Main className="next-wrapper" />

          <NextScript nonce={nonce} />
        </body>
      </html>
    )
  }
}





export default Document
