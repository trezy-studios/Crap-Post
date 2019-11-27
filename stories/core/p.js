// Module imports
import '../../scss/app.scss'
import '../../.storybook/app.scss'
import faker from 'faker'
import React from 'react'





export default {
  title: 'Paragraph',
}

export const normal = () => (
  <p>{faker.lorem.sentences()}</p>
)
