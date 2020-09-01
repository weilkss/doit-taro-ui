import Taro from '@tarojs/taro'
/**
 * @description 获取微信系统信息
 * @returns {any}
 */
export function getSystemInfo(): any {
  const systemInfo: any = Taro.getSystemInfoSync()
  const menuButtonObject: any = Taro.getMenuButtonBoundingClientRect() || {}
  const ios: boolean = !!(systemInfo.system.toLowerCase().search('ios') + 1)
  if (!menuButtonObject.top) {
    menuButtonObject.top = systemInfo.statusBarHeight + (ios ? 4 : 8)
    menuButtonObject.height = 32
  }
  systemInfo.hasHome = false
  systemInfo.navHeight =
    menuButtonObject.height +
    (menuButtonObject.top - systemInfo.statusBarHeight) * 2
  return systemInfo
}
/**
 * @description 处理文字长度
 * @param {string} str  要处理的字符串
 */
export function interceptStr(str: string): string {
  if (!str) return ''
  let len = 0
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i)
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++
      if (len > 16) {
        str = str.slice(0, i + 1) + '...'
        break
      }
    } else {
      len += 2
      if (len > 16) {
        str = str.slice(0, i + 1) + '...'
        break
      }
    }
  }
  return str
}
/**
 * @description 判断web是否有页面路由栈
 * @returns {boolean} true-有
 */
export function historyLength(): boolean {
  if (history.length > 1 || window.history.length > 1) {
    return true
  }
  return false
}
