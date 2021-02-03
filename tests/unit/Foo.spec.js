import { shallowMount, mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

test('should render Foo, then hide it', async () => {
    const wrapper = mount(Foo)
    expect(wrapper.text()).toMatch(/Foo/)
  
    await wrapper.setData({
      show: false
    })
  
    expect(wrapper.text()).not.toMatch(/Foo/)
  })

