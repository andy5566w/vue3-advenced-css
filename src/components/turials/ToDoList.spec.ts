import ToDoList from './ToDoList.vue'
import { defineComponent, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('test ToDoList render', () => {
  it('renders correctly', async () => {
    const testText = 'this is default'
    const parent = defineComponent({
      components: {
        ToDoList,
      },
      setup(props, ctx) {
        const defaultValue = ref(testText)
        return {
          defaultValue,
        }
      },
      template: `
        <template>
          <to-do-list :default-input-value="defaultValue" />
        </template>
      `,
    })

    const wrapper = mount(parent, {})

    const inputEle = wrapper.find('input')

    const vitestText = 'this is test from vitest'
    await inputEle.setValue(vitestText)

    // add params { key: Enter } for event
    await inputEle.trigger('keyup', { key: 'Enter' })

    expect(wrapper.find('li').exists()).toBe(true)
    expect(wrapper.find('li').text()).toBe(vitestText)

    // check event is existing
    expect(wrapper.emitted()).toHaveProperty('keyup')
  })
})
