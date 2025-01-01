import AtomicLink from './AtomicLink.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('AtomicLink', () => {
  it('renders correctly', () => {
    const wrapper = mount(AtomicLink, {
      props: { to: 'https://googl', className: 'test-45' },
    })
    console.log(wrapper.html())

    expect(wrapper.find('a[href]').exists()).toBe(true)
  })
})
