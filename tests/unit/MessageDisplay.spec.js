import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')


describe('MessageDisplay', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('Calls getMessage once and displays message', async () => {
    const mockMessage = 'Hello from the db'
    getMessage.mockResolvedValueOnce(mockMessage)
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1) // check that call happened once
    // check that component displays message
    expect(wrapper.find('p[data-testid="message"]').element.textContent).toMatchSnapshot();
  })

  it('Calls getMessage once, fails and and displays message', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1) // check that call happened once
    // check that component displays message
    expect(wrapper.find('p[data-testid="message-error"]').element.textContent).toMatchSnapshot();
  })
})