import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classnames from 'classnames'
import { HeaderProps, HeaderState } from '../../types/header'
import { interceptStr, getSystemInfo, historyLength } from '../../common/utils'
import { headIcon } from '../../common/icon'

/**
 *
 * @description 小程序头部导航
 * @interface Header
 * @param {HeaderProps} props
 */

export default class Header extends React.Component<HeaderProps, HeaderState> {
  declare static defaultProps: HeaderProps
  declare static options: { addGlobalClass: boolean }
  declare static externalClasses: string[]

  constructor(props: HeaderProps, state: HeaderState) {
    super(props, state)
  }

  webNavigateBack() {
    window.history.go(-1)
  }

  weappNavigateBack() {
    Taro.navigateBack({
      delta: 1
    })
  }

  weappHome() {
    Taro.reLaunch({
      url: '/pages/index/index'
    })
  }

  render() {
    const TARO_ENV = Taro.getEnv()
    const {
      backgroundColor,
      backIcon,
      homeIcon,
      color,
      hasTabbar,
      children
    } = this.props

    const title: string = interceptStr(String(children))

    if (TARO_ENV == 'WEB') {
      const isHistory: boolean = historyLength()
      return (
        <View className='doit-header' style={{ backgroundColor }}>
          <View className='doit-header-nav doit-header-nav-web'>
            {isHistory ? (
              <Image
                className='doit-header-icon'
                src={backIcon}
                onClick={this.webNavigateBack}
              />
            ) : null}
            <View className='doit-header-title'>
              <Text className='doit-header-title-text' style={{ color }}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      )
    }

    const pages = Taro.getCurrentPages()
    const systemInfo = {
      ...getSystemInfo(),
      isNavBack: pages.length >= 2
    }

    const navBack = (): JSX.Element | null => {
      if (systemInfo.isNavBack) {
        return (
          <Image
            className='doit-header-icon'
            src={backIcon}
            onClick={this.weappNavigateBack}
          />
        )
      } else {
        if (hasTabbar) {
          return (
            <Image
              className='doit-header-icon'
              onClick={this.weappHome}
              src={homeIcon}
            />
          )
        }
      }
      return null
    }

    return (
      <View className='doit-header' style={{ backgroundColor }}>
        <View style={{ height: `${systemInfo.statusBarHeight}px` }}></View>
        <View
          className='doit-header-nav'
          style={{
            height: `${systemInfo.navHeight}px`
          }}
        >
          {navBack()}
          <View
            className={classnames('doit-header-title', {
              'doit-header-title-padding': hasTabbar || systemInfo.isNavBack
            })}
          >
            <Text className='doit-header-title-text' style={{ color }}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

Header.options = {
  addGlobalClass: true
}

Header.defaultProps = {
  color: '#333',
  backgroundColor: '#fff',
  backIcon: headIcon.backBase64,
  homeIcon: headIcon.homeBase64,
  hasTabbar: false
}

Header.externalClasses = ['doit-header']
