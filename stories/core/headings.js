// Module imports
import '../../scss/app.scss'
import '../../.storybook/app.scss'
import React from 'react'





// Local imports
import Brand from '../../components/Brand'





export default {
  title: 'Headings',
}

export const h1 = () => (
  <h1>
    <Brand />
  </h1>
)

export const h2 = () => (
  <h2>Heading 2</h2>
)

export const h3 = () => (
  <h3>Heading 3</h3>
)

export const h4 = () => (
  <h4>Heading 4</h4>
)

export const h5 = () => (
  <h5>Heading 5</h5>
)

export const h6 = () => (
  <h6>Heading 6</h6>
)
