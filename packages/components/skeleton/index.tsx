import React from 'react'
import Taro from '@tarojs/taro'
import { View, Block } from '@tarojs/components'
import classnames from 'classnames'
import { SkeletonProps } from '../../types/skeleton'
/**
 * @description 基于 Taro 的 React 版本骨架屏
 * @interface   Skeleton
 */
const DEFAULT_ROW_WIDTH = '100%'
export default function Skeleton(props: SkeletonProps) {
  if (!props.loading) {
    return <Block>{props.children}</Block>
  }

  const getRowWidth = (index: number) => {
    if (props.rowProps) {
      if (Array.isArray(props.rowProps)) {
        return props.rowProps[index].width
      }
      return props.rowProps.width
    }

    if (props.rowWidth === DEFAULT_ROW_WIDTH) {
      return DEFAULT_ROW_WIDTH
    }
    if (Array.isArray(props.rowWidth)) {
      return props.rowWidth[index]
    }
    return props.rowWidth
  }

  const getRowHeight = (index: number) => {
    if (props.rowProps) {
      if (Array.isArray(props.rowProps)) {
        return props.rowProps[index].height
      }
      return props.rowProps.height
    }

    if (Array.isArray(props.rowHeight)) {
      return props.rowHeight[index]
    }
    return props.rowHeight
  }

  const addUnit = (value?: string | number) => {
    return typeof value === 'number' ? Taro.pxTransform(value) : value
  }

  const renderAvatar = (): JSX.Element | null => {
    if (props.avatar) {
      const avatarClass = classnames('skeleton-avatar', {
        'skeleton-avatar-round': props.avatarShape === 'round'
      })
      return (
        <View
          className={avatarClass}
          style={` width: ${addUnit(props.avatarSize)};
        height: ${addUnit(props.avatarSize)} `}
        />
      )
    }
    return null
  }

  const renderTitle = (): JSX.Element | null => {
    if (props.title) {
      return (
        <View
          className='doit-skeleton-title'
          style={`width: ${addUnit(props.titleWidth)};`}
        ></View>
      )
    }
    return null
  }
  const renderAction = (): JSX.Element | null => {
    if (props.action && props.type !== 'column') {
      return <View className='doit-skeleton-action' />
    }
    return null
  }
  const renderRows = (): JSX.Element | null => {
    if (props.row) {
      const rowArray = Array.apply(null, Array(props.row)).map(
        (_item, index) => index
      )
      const Rows = rowArray.map((item, index) => {
        return (
          <View
            key={item}
            className='doit-skeleton-row'
            style={`width: ${addUnit(getRowWidth(index))};height: ${addUnit(
              getRowHeight(index)
            )}`}
          />
        )
      })
      return <View className='doit-skeleton-rows'>{Rows}</View>
    }
    return null
  }

  const rootClass = classnames('doit-skeleton', 'doit-skeleton-custom-class', {
    [`doit-skeleton-type-${props.type}`]: true,
    'doit-skeleton-animate-blink': props.animate && props.animateName === 'blink',
    'doit-skeleton-animate-elastic': props.animate && props.animateName === 'elastic'
  })
  return (
    <View className={rootClass}>
      {renderAvatar()}
      <View
        className='doit-skeleton-content'
        style={{ textAlign: props.contentAlignStyle }}
      >
        {renderTitle()}
        {renderRows()}
      </View>
      {renderAction()}
    </View>
  )
}

Skeleton.options = {
  addGlobalClass: true
}

Skeleton.defaultProps = {
  avatarSize: 90,
  type: 'row',
  row: 0,
  loading: true,
  animate: true,
  rowWidth: '100%',
  rowHeight: 24,
  titleWidth: '40%',
  avatarShape: 'round',
  animateName: 'blink',
  contentAlignStyle: 'center'
}

Skeleton.externalClasses = ['doit-skeleton']
