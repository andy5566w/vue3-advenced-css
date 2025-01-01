import { mount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import BaseButton from '../BaseButton.vue'

// npx vitest -> for execute
describe('BaseButton', () => {
  it('render component', () => {
    const wrapper = mount(BaseButton)
    console.log(wrapper.html())
  })
})
