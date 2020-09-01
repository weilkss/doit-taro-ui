import React from 'react'
import { renderToString } from 'nerv-server'
import { Skeleton } from '../lib'

describe('Skeleton', () => {
  it('render Skeleton -- props type(column)', () => {
    const component = renderToString(
      <Skeleton type='column'>
        <p>Skeleton</p>
      </Skeleton>
    )
    expect(component).toMatchSnapshot()
  })
})
describe('Skeleton', () => {
  it('render Skeleton -- props avatar(true)', () => {
    const component = renderToString(
      <Skeleton avatar={true}>
        <p>Skeleton</p>
      </Skeleton>
    )
    expect(component).toMatchSnapshot()
  })
})
describe('Skeleton', () => {
  it('render Skeleton -- props contentAlignStyle(left)', () => {
    const component = renderToString(
      <Skeleton contentAlignStyle='left'>
        <p>Skeleton</p>
      </Skeleton>
    )
    expect(component).toMatchSnapshot()
  })
})
