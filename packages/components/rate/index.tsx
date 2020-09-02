import React, { useState } from 'react'
import { RateProps, StarArray } from '../../types/rate'
import { View, Image } from '@tarojs/components'
import classnames from 'classnames'
import { starIcon } from '../../common/icon'
/**
 * @description 基于 Taro 的 React 版本评分
 * @interface   Rate
 */
export default function Rate(props: RateProps) {
  const { max, count, icon, selectIcon, size, readonly } = props

  if (!max || !icon || count === undefined || !selectIcon) {
    return null
  }

  const [counts, setCounts] = useState(count)
  const starArray: StarArray = []

  for (let i = 0; i < max; i++) {
    let item: string = icon
    if (counts <= i) {
      item = selectIcon
    }
    starArray.push(item)
  }

  return (
    <View className='doit-rate'>
      {starArray.map((item: string, index: number) => (
        <Image
          key={index}
          mode='aspectFit'
          onClick={() => {
            if (readonly) {
              return
            }
            setCounts(index + 1)
            props.onChange && props.onChange(index + 1)
          }}
          className={classnames('doit-rate-icon', `doit-rate-${size}`)}
          src={item}
        ></Image>
      ))}
    </View>
  )
}

Rate.options = {
  addGlobalClass: true
}

Rate.defaultProps = {
  max: 5,
  count: 0,
  size: 'middle',
  readonly: false,
  icon: starIcon.iconBase64,
  selectIcon: starIcon.selectIconBase64
}

Rate.externalClasses = ['doit-rate']
