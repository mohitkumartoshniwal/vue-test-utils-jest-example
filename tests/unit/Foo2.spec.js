
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Foo2 from '@/components/Foo2'
import axios from 'axios'


jest.mock('axios', () => ({
  get: jest.fn().mockReturnValue(Promise.resolve({data:"value"}))
}))

// this one also works for all tests below
// for third test to work , uncomment "axios.get.mockResolvedValue({data:"value"})" in it
// jest.mock('axios', () => ({
//   get: jest.fn()
// }))


// the below one is going to work for nextTick and setTimeout test case 
//but will fail for flushpromises one
// jest.mock('axios', () => ({
//   get: Promise.resolve({data:"value"})
// }))


it('fetches async when a button is clicked using nextTick', () => {
  const wrapper = shallowMount(Foo2)
  wrapper.find('button').trigger('click')
//   expect(wrapper.text()).toBe('value')
// error will be thrwon if above is used
wrapper.vm.$nextTick(() => {
    //setTimeout could also have been used instead of $nextTick
    // The reason setTimeout allows the test to pass is because the microtask queue where promise 
    // callbacks are processed runs before the task queue, where setTimeout callbacks are processed.
    //  This means by the time the setTimeout callback runs, any promise callbacks on the microtask
    //   queue will have been executed. $nextTick on the other hand schedules a microtask, but since
    //    the microtask queue is processed first-in-first-out that also guarantees the promise callback has
    //     been executed by the time the assertion is made. See here for a more detailed explanation.
    expect(wrapper.text()).toBe('value')
    done()
  })
})

it('fetches async when a button is clicked using setTimeout', async () => {
    const wrapper = shallowMount(Foo2)
    await wrapper.find('button').trigger('click')
    
    setTimeout(()=>{
        expect(wrapper.text()).toBe('value')
         done()
    })
  })



it('fetches async when a button is clicked using flushPromises', async () => {
    const wrapper = shallowMount(Foo2)
    // axios.get.mockResolvedValue({data:"value"})
    await wrapper.find('button').trigger('click')
    await flushPromises()
    // console.log("abcexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",wrapper.text());
    expect(wrapper.text()).toBe('value')

  })

