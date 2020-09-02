# Rate 头部导航

基于 `taro` 的一个简单易用的评分组件

## 引入

```js
import { Rate } from 'doit-taro-ui'
```

# 代码演示

## 基础用法

`onChange` 事件是改变后调用，返回当前第几个

```js
  // value 是当前第几个
  onChange(value) {
    console.log(value);
  }

  render(){
    return <Rate onChange={this.onChange} />
  }
```

可以通过 `max` 自定义 ✨ 个数和 `count` 自定义当前选择数

```js
  render(){
    return <Rate max={6} count={2} />
  }
```

`readonly` 可以控制评分组件是否只读

```js
  render(){
    return <Rate readonly />
  }
```

还可以自定义 🌟🌟 的图片

```js
// 默认星星图标
import starIcon from 'image/star.png'
// 选中的星星图标
import selectStarIcon from 'image/selectStar.png'
//
<Rate icon={starIcon} selectIcon={selectStarIcon}>
  首页
</Rate>
```
# 属性

| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|
| max | 最大星星数  | `number` | `5` | 
| count | 当前选择的星星数量  | `number` | `0` | 
| size | 组件的大小  | `'large' | 'middle' | 'small'` | `middle` | 
| readonly | 是否只读，不可点击只能显示状态  | `boolean` | `false` | 
| icon | 自定义默认Star图标  | `string base64` | `-` | 
| selectIcon | 自定义选中Star图标  | `string base64` | `-` | 
| onChange | 选择时的回调  | `function(value:number)` | `-` | 
