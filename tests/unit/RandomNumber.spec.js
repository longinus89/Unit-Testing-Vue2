import { mount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber'

describe('RandomNumber', () => {
  let wrapper = null; 

  beforeEach(() => {
    wrapper = mount(RandomNumber) // mounting the component 
  });
  test('By default, randomNumber data value should be 0', () => {
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('If button is clicked, randomNumber should be between 1 and 10', async() => {
    wrapper.find('button').trigger('click');
    // Wait for any reactivity changes to appear in the DOM
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)


    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, randomNumber should be between 200 and 300', async() => {

    wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300
      }
    })

    wrapper.find('button').trigger('click');
    // Wait for any reactivity changes to appear in the DOM
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent)


    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})