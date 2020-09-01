import React, { useState } from 'react'
import { StarProps, StarArray } from '../../types/star'
import { View, Image } from '@tarojs/components'
import classnames from 'classnames'
import { starIcon } from '../../common/icon'

export default function Star(props: StarProps) {
  const { max, count, icon, selectIcon, size } = props
  const [counts, setCounts] = useState(count)

  let starArray: StarArray = []

  for (let i = 0; i < (max || 5); i++) {
    let item: string = icon
    if ((counts || 0) <= i) {
      item = selectIcon
    }
    starArray.push(item)
  }

  return (
    <View className={classnames('doit-star', `doit-star${size}`)}>
      {starArray.map((item: string, index: number) => (
        <Image
          mode='aspectFit'
          onClick={() => setCounts(index)}
          className='doit-star-icon'
          src={item}
        ></Image>
      ))}
    </View>
  )
}

Star.options = {
  addGlobalClass: true
}

Star.defaultProps = {
  max: 5,
  count: 0,
  size: 'middle',
  readonly: true,
  icon: starIcon.iconBase64,
  selectIcon: starIcon.selectIconBase64
}

Star.externalClasses = ['doit-star']
