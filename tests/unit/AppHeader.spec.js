import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'

let wrapper = null; 

describe('AppHeader', () => {
  beforeEach(() => {
    wrapper = mount(AppHeader) // mounting the component 
  });
  test('if user is not logged in, do not show logout button', async() => {
    wrapper.setData({ loggedIn: false });

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('if user is logged in, show logout button', async() => {
    wrapper.setData({ loggedIn: true });

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})