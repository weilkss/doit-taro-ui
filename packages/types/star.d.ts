import { FC, ReactChildren } from 'react'

declare const iconBase64: string
declare const selectIconBase64: string

export type IconType = iconBase64
export type SelectIconType = selectIconBase64
/**
 * @param {string} large    大
 * @param {string} middle   中
 * @param {string} small    小
 */
export type Size = 'large' | 'middle' | 'small'

export type StarArray = string[]

export interface StarProps {
  /**
   * @description 最大星星数目
   * @type {number}
   * @default 5
   */
  max?: number
  /**
   * @description 当前选中数
   * @type {number}
   * @default 0
   */
  count?: number
  /**
   * @description 星星的大小
   * @type {Size}
   * @default middle | 20
   */
  size?: Size
  /**
   * @description 是否只读
   * @type {boolean}
   * @default false
   */
  readonly?: boolean
  /**
   * @description 自定义默认Star图标
   * @type {IconType}
   */
  icon?: IconType
  /**
   * @description 自定义选中Star图标
   * @type {SelectIconType}
   */
  selectIcon?: SelectIconType
  /**
   * @description 改变事件回调
   * @type {void}
   */
  onChange?: () => void
}

export interface StarState {
  count: number
}

declare const Star: FC<StarProps>

export default Star
