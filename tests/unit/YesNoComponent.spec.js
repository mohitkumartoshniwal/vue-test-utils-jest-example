import YesNoComponent from '@/components/YesNoComponent'
import { mount } from '@vue/test-utils'
import sinon, { assert } from 'sinon'

it('Click on yes id button calls our method with argument "yes"', async () => {
  const spy = jest.fn()
  const wrapper = mount(YesNoComponent, {
    propsData: {
      callMe: spy
    }
  })
  await wrapper.find('button#yes').trigger('click')
  //this test should fail but it is passing, something is wrong
  expect(spy).toBeCalledWith("yes");
})

it('Click on no class button calls our method with argument "no"', async () => {
  const spy = jest.fn()
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy
      }
    })
    await wrapper.find('button.no').trigger('click')
    expect(spy).toBeCalledWith("no");
  })