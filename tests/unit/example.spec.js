import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('increments counter value on click', async () => {
    const wrapper = shallowMount(HelloWorld)
    wrapper.vm.$emit('foo')
    wrapper.vm.$emit('foo', 123)

        // assert event has been emitted
    expect(wrapper.emitted().foo).toBeTruthy()

    // assert event count
    expect(wrapper.emitted().foo.length).toBe(2)

    // assert event payload
    expect(wrapper.emitted().foo[1]).toEqual([123])
  })

  it('manipulates state', async () => {
    const wrapper =  mount(HelloWorld, {
      propsData: {
        msg: "Hello"
      }
    })
   
    await wrapper.setData({ count: 10 })
    expect(wrapper.text()).toContain("Hello")
    expect(wrapper.text()).toContain('Total clicks: 10')
  
    await wrapper.setProps({ foo: 'bar' })
  })
})
