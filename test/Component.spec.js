import { mount } from 'avoriaz'
import { expect } from 'chai'
import Component from '../Component.vue'

describe('Component.vue', () => {
  it('renders an h1', () => {
    const wrapper = mount(Component)
    expect(wrapper.find('h1').length).to.equal(1)
  })

  it('h1 renders data.msg as text', () => {
    const wrapper = mount(Component)
    const msg = wrapper.data().msg
    expect(wrapper.find('h1')[0].text()).to.equal(msg)
  })

  it('h1 text changes when button is clicked', () => {
    const expectedMessage = 'new message'

    const wrapper = mount(Component)
    const button = wrapper.find('#change-message')[0]
    button.dispatch('click')

    expect(wrapper.find('h1')[0].text()).to.equal(expectedMessage)
  })

  it('renders a message that equals prop msg2', () => {
    const msg2 = 'test message'
    const wrapper = mount(Component, { propsData: { msg2 } })
    const text = wrapper.find('p')[0].text()
    expect(text).to.equal(msg2)
  })
})
