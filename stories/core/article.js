// Module imports
import '../../scss/app.scss'
import '../../.storybook/app.scss'
import faker from 'faker'
import React from 'react'





export default {
  title: 'Article',
}

export const normal = () => {
  const data = []

  while (data.length < 5) {
    data.push(faker.lorem.sentences())
  }

  return (
    <article>
      {data.map(item => (
        <p>{item}</p>
      ))}
    </article>
  )
}
