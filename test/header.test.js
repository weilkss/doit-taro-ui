import React from 'react'
import { renderToString } from 'nerv-server'
import { Header } from '../lib'

describe('Header', () => {
  it('render Header -- props backgroundColor(#333)', () => {
    const component = renderToString(
      <Header backgroundColor='#333'>头部</Header>
    )
    expect(component).toMatchSnapshot()
  })
})
describe('Header', () => {
  it('render Header -- props color(#fff)', () => {
    const component = renderToString(<Header color='#fff'>头部</Header>)
    expect(component).toMatchSnapshot()
  })
})
