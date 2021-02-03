import QuantityComponent from '@/components/QuantityComponent'
import { mount } from '@vue/test-utils'

describe('Key event tests', () => {
  it('Quantity is zero by default', () => {
    const wrapper = mount(QuantityComponent)
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Up arrow key increments quantity by 1', async () => {
    const wrapper = mount(QuantityComponent)
    await wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).toBe(1)
  })

  it('Down arrow key decrements quantity by 1', async () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 5
    await wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(4)
  })

  it('Escape sets quantity to 0', async () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 5
    await wrapper.trigger('keydown.esc')
    //error will be there if instead of above, we have
    // await wrapper.trigger('keydown', {
    //     key: 'esc'
    //   })
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Magic character "a" sets quantity to 13', async () => {
    const wrapper = mount(QuantityComponent)
    await wrapper.trigger('keydown', {
      key: 'a'
    })
    expect(wrapper.vm.quantity).toBe(13)
  })
})