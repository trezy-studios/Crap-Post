// Module imports
import '../../scss/app.scss'
import '../../.storybook/app.scss'
import React from 'react'





export default {
  title: 'Button',
}

export const normal = () => (
  <button type="button">Button</button>
)

export const primary = () => (
  <div>
    <div>
      <button
        className="primary"
        type="button">
        Primary Button
      </button>

      <button
        className="primary"
        disabled
        type="button">
        Primary Button (Disabled)
      </button>
    </div>

    <div>
      <button
        className="primary outline"
        type="button">
        Primary Button
      </button>

      <button
        className="primary outline"
        disabled
        type="button">
        Primary Button (Disabled)
      </button>
    </div>
  </div>
)
