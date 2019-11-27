import {
  addDecorator,
  addParameters,
  configure,
} from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

addDecorator(withA11y)

configure(require.context('../stories', true, /.js$/), module)
