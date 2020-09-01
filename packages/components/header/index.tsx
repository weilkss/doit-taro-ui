import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classnames from 'classnames'
import { HeaderProps, HeaderState } from '../../types/header'
import { interceptStr, getSystemInfo, historyLength } from '../../common/utils'

const backBase64: string =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEYklEQVR4Xu2bXWtdRRSG1/ob/gXv9pobwQsFEcT7kBoT0sbU0lAbakNtaKEqoSW2xJa0JVpTakpr6X28ED9AvFvv9M6/4L/IkoEJxOqZVc6Z/eFp13XOZN6H9117z8dmesmLX3L99ArA0B0gIneJ6FSeJ5j5sqr+WGveg3aAiDwhopmjYpn5Z1V9Z+oBNE3zmJlnRwh9DcBfNSAM0gEi8oiIjhUETi8AEXlIRHOjxE91BEIIe2b2oWPtGQBPa9g/jTGYCIjIAyJaKAkzs9kYY2qM1WoQAETkPhEtllQx8weq+ria8jxQ7wBCCLtmdtwRNgcgNcbq1SsAEblHREuO7edjjKkxtlK9ARCRb4ho2bH9gqrutaK8zwiEEHbM7KQjbBFAaoytVucOeO7d/j/FmdmJGGNqjK1XpwBE5DYRnXZsv6Squ60r7zoCIYRtM1txhC0DSI2xs+rEASJyi4jOON3+4xhjaoydVusARORrIjrr2P6Uqu50qryLCIQQtsxs1RF2GkDa9OilWnOAiNwgonOOqhUAd3pR3qYDROQrIjrv2P6Mqm73KT797+oOCCFsmtmaI+wsgNQYe6+qAETkGhFdcFStArjZu/LaERCRq0T0mWP7c6q6NRTx1SIQQtgws3VH2HkAqTEOqiaOgIh8SUSXHFVrAK4PSnmNCIhIEvWpY/sLqro5RPETRSCEsG9m7znCLgJIjXGwNVYERORNIvrdUbUOIDXGQde4AH4lordGKWPmS6q6MWjlk/SApml+YuaR53NmthFj9BrjIPiM64C3iegXR8FVAN6jsXcIYwFIs26aZp+ZvSZ4DcDF3lUWJjA2gDSmiFwmoi9KAs1sM8bovR73xmgiABlCynp6GSrVdQDeAqkXCBMDyHFYZ2av698AUFwi90GgCoDshLQQKj73zWwrxuhtknTKoRqADCFl3XvzuwnA2ybrDEJVADkOa8zsvfvfAlDcKO2KQHUA2QlpgVRc/ZnZdoyxuFXeBYRWAGQIKeve+v8OAO+wpFUOrQHIcVhlZm8H6C6A4nFZmwRaBZCd8AkRFfcAzWwnxnh4GbJNvf8au3UAGULKurcL/C0A78i8OpxOAOQ4rDCzdw5wD0Dx0kRtAp0ByE5IWU9H5CPLzHZjjMVrMzUhdAogQ0hZL54FMvN9VT1RU+iosToHkONwkpm90+AHAIpX52oA6gVAhrDMzMX7AGa2F2MsXp6cFEJvANLEQwhLZla8EcLMD1V1flKhg4rA0ck0TXOcmb07QY8AjLxAPQmcXh1wOPGmaRZT43OeDj/EGEtX6MfiMAgAOQ4LZla8F8jMT1R11EcU/28AGcK8mX3vKHkK4B+f0YylPP9oMA44Eoe51PicOHweY7wyifDD3w4OQHbCMTMr3Q7fB/D+1ALIEGbNbNT3Ad8B+GiqAeSXpZnU+J4XenBw8PqzZ8/+nHoAee3wLjNfMbM3iOiPfPD6Ww3xaYxB9oBa4l5knFcAXoTSNP/N36cJeFDBuKe8AAAAAElFTkSuQmCC'

const homeBase64: string =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJXUlEQVR4XtVba2wcVxU+ZzYxtRSTqBUND4m+0gAuBHvurCM3EnXVllKgIm0gP2ipWoGA9AUBJIqAEihPCQi0hRSkiKo0QipNAVHSUBrhIiAinnOdBJIUMK/+oKQRKMYWDnb2HnSWe5fZ8czO7OxsvFxpJXvn7nl89zHnnvNdhCVqo6OjZ58+ffrlon7ZsmXP7t+//x9LYQp2W2kQBBcCwBuZeRAAzrMfcXwgpnsGAJ4FgL/IBxGPAsCeMAz/2E0bSwdgzZo1L1i1atXrjDGXIeKbAeC1HTpwiJkf9zzv6ZMnT/5samrq3x3Ka/p5aQAopS4CgA8AwHUA8JIyjYzIeg4AvgcAXyaiP5Sho2MAZMRXrly51Tr/ohSjNDP/EBH/xszHK5XKcWPM8bm5uePSv7+/f7XneatrtdpqRFzNzC9GxGsBwE+Rd0JAmJ6e3t7pjOgIAN/3b0REcX6RoYi4l5n3MPMTWuupIqPl+/4aRLwGEWUPeUOCDAF2u9b64SLy5TeFAFi3bt25fX19O5j5+pjivwPA15n5oaJOpzliwbgJAG4FgHOi/RDxsfn5+S2HDx9+vl0g2gZgeHg48DzvIQB4VUTZKXFcPmWtzTRH7F4jIMjnrEi/Y8aYmyYnJ8N2QGgLAN/3r0fE3TEFD1jHf92O4k77KqVeY0F4b1QWM2/SWj+WV35uAHzffz8ibo8JvouIvpBXWTf6KaU+DACfj4GwVWv9lTz6cgHg+/7NiPitmMDbiEim/ZI3pZQsh6/FQLhFa/1glnGZAARBMMLMv4oK8jxvZGJiYiJL+Jl8Xq1Wq8aYA7HNcX0Yhk3fxW1qCYCEsczcFHAQUSZoZ9LxuC6lFMdAuKhVOJ3qjFJqJQB8HwDGnEBEbClsKR13uhMGbRwANhLRdJJ9qQD4vv8oIm6KOH9VGIZP9YKTWTYEQXAlM//E9WPm3Vrrt+YGwEZ4344IeI/W+ptZitt5Pjw8POh5nmxcJ4wx2yYnJ+X0V1rzff/diPiNiA/vSIoYF80AG9v/MhLePkBEW0qzDACs848AwCVW7hFjzOayQVBK7QAAFyfo6enpS+Nnh0UAKKXuAoDPWcMkwhshotKCnATnHbalg2CDJXkLuIjxI0TUFDM0AWDDzP0A4E51cuz8YFmj38L5boLwJXtSFR1yihyNhutxAGRNSlAhTQ4268uK7VOc32x1yXLoCgh2UCWOcQcoOa/c1tjc3R9jY2NnzczMSDrqXPvdPUR0dxmjn+Y8EX1X5Cul3gYA3QThUwDwcevL8wMDA+eNj4/L8v7fcTgIgrcws7z3661SqbziwIEDv+sUgCznnfxugjAyMrK2Vqv9tjHqiBvDMPxBEwC+79+HiLfLl8z8tNa6EQAVBSGv82cCBN/3xxHxMuvf/VrrO5oAUErJe9id8e8monuKOi6/a9f5boOglJIlIEtB2jEikiz1f5dAfIoYYy7p5J1c1PlugmBtOhJf4nUAlFJ3AsBX7cMjRPTqoqPfqfPdBEEp9ZtI8PU+IrrXASDn+nq0x8yf1FpvKwJAWc53CwTf97ch4ies/B1EdKsD4EdSvbEPthCRpLnaamU73w0QlFISFkt4LG0PEb3JAdCYGpLp1VpL8SF365bzZYPg+/51kkGOLnUHwD9drc7zvA0TExNyGMrVuu18mSBUq9VLjTG/sDJniOiFKFXa+fl5CXtdW5M3/D1TzpcFgg2LG0Wavr6+c7BarQ4ZYyadkrm5uYGjR4/OZg1/ivOSfTnJzIeKbqRZejuJGAcHB1f09/dLFbrePM8bLgxAUiY2ZvyDRHRLlkN5nw8NDZ1/8ODBP0v/BBA+RERy6mvZEgEougRiG0qi4lqtdoEzOsu4Vs9dopOZr9VaPx4BQbJUqxDx7WEYfidLR+ISsMIKbYKjo6P9CwsL651iY8xaRPyi21AR8fIwDGVZFG5BEIwx80+tgHEiutwJ27Bhw8CpU6dqRPSvPAoSN0ELQEevwahypZScutbKd90GII/T0T6tXoMdB0JOkVJKRqt+kuw1AFoFQqWEwnY2pQJgp6BknF6WMnrPMPPPtda73PNWS6DADEgOhYMguJ2Z77MCNRGpdoVnzQDf929AxFxEhmgwViYASily2W5EvCMMw/vrkWC8msLMFxclOKQtgViKOgvfnUT0Lmtb6iaYJSS2/oVt8nv3natyNZKiSqmDEUbXnUTkZkQ7euQdnbgEot/LiZOZH3E5BwmqEHFz5KTW2O3LmgFKKckA3WudOUREQ/V9ynnn+/6nEfGjdvPaG4bhNW15bjvnAQAAXkpEwvhqtDRHywIgCIInHM+ImT+jtf5YEwBBEFzFzE86i4ougzwApFWYI5XdUmeA5RdFp//rwzCs1w4bM8CWxP4U4fgVSouXBAARUWDfKhstN1D+bQqE8s5QpVQ0Lf7c9PT0Ba5EVnphpAUAjQApxwz4KxHVX5Wxtds2ALkLI1aZsD07Ko1FAQCAJ40xWxHxQkSUIki9RpcDAOm2ua+vb9/8/Lyk5+op7CIzQCmVvzRmQeioOKqUEi7RzS2m5xQRXZz0XCklS/D8Fr/dRUQ3tjH1hUmWvzgqgjstjyccVZvsbZV0VUpJoHRDioOznudd3U62qlB5XJTHCRIA0BYdzoIg2VdX/xexJxBxVxiGQq1NbTZzK1P+7EgniVE+62qJeWZAnD7HzPkIEk54EAS7Y1TYnqHFZQEQT9ZIIjQMwwbdJ/r7VI6Q8IGXL18uZ/kGJbYX6XFxMBLocscWFhbG0njELSlvlhfcxAf8f6PJGWOqrfjDmZy/JH5wL9LlkjiNeXjDmQDYTXERTxgRe4Y2F6fFic3MnIsvnAsAC8IivjAzl06fy9rg4s/jdDjrfC6esPTNDYB0TuINA0BP0eURMZMfnOstkDYSdq3tjFJoAaAXLkwIA+Sd7V6za2sGOFCER8zMO6NUWvusfmWmUqk8XAa/KDoIlsQhYfCiKzNChRXn0/jArZZVIQCcwFaXpoRnhIj7jDG7i7JNbPltEzNf4fg9MWeW5tJU1Iic1+aOMLOQr9u5Nifk5mgoHVXbG9fmohZFLk6K4Y5r2O6mntVfboU92lMXJ+MWC+Fydnb2amPMlYh4Rex2WZaDSc+PMfM+z/OeWrFixY8dwbGIoKTfdLQH5DHCbl5y6fGV7VyeBoBnKpXK3rI307jNXQcgDaReuT7/H3MrtKSAVQgxAAAAAElFTkSuQmCC'
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
  backIcon: backBase64,
  homeIcon: homeBase64,
  hasTabbar: false
}

Header.externalClasses = ['doit-header']
