import { FC, ReactChildren } from 'react'

declare const backBase64: string
declare const homeBase64: string

export type BackType = backBase64
export type HomeType = homeBase64

export interface HeaderProps {
  /**
   * @description 标题颜色 只能传十六进制
   * @type {string}
   */
  color?: string
  /**
   * @description 背景颜色 只能传十六进制
   * @type {string}
   */
  backgroundColor?: string
  /**
   * @description 返回的icon图标地址
   * @type {string}
   */
  backIcon?: BackType
  /**
   * @description 主页的icon图标地址
   * @type {string}
   */
  homeIcon?: HomeType
  /**
   * @description 是否是tab页面，如果是tabbar页面请传参hasTabbar
   * @type {string}
   */
  hasTabbar?: boolean
  /**
   * @description 默认标题文案
   * @type {string}
   */
  children?: ReactChildren
}

export interface HeaderState {}

declare const Header: FC<HeaderProps>

export default Header
