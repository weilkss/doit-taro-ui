# Skeleton 骨架屏

基于 `taro` 的一个简单易用的骨架屏组件

## 引入

```js
import { Skeleton } from 'doit-taro-ui'
```

# 代码演示

## 基础用法

通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数

```js
<Skeleton title row={2} />
```

## 显示头像

通过 `avatar` 属性显示头像占位图

```js
<Skeleton title avatar row={3} />
```

## 不同排列方式

通过 `type` 属性来控制排列方式，默认值为 `row`，可选 `column`

```js
<Skeleton type='column' title titleWidth={'80%'} avatar />
```

## 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件

```js
<Skeleton title avatar row={3} loading={loading}>
  <Text>实际内容</Text>
</Skeleton>
```

```js
export default class Index extends Component {
  state = {
    loading: false
  }
  render() {
    return (
      <View className='index'>
        <Skeleton
          loading={this.state.loading}
          title
          avatar
          row={2}
          action
        ></Skeleton>
      </View>
    )
  }
}
```

# 属性

| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|
| type | 定义排列方式  | `row/column` | `row` | 
| row | 段落占位图行数 | `number` | `0` |
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | `number/string/number[]/string[]` | `100%` |
| rowHeight | 段落占位图高度，可传数组来设置每一行的高度 | `number/string/number[]/string[]` | `24` |
| rowProps | 用于定制 row 的宽跟高，可传数组来设置每一行的宽跟高，如果配置了该属性，则 row-height 配置无效 | `RowProps/RowProps[]` | - |
| title | 是否显示标题占位图 | `boolean` | `false` | 
| titleWidth | 标题占位图宽度 | `number/string` | `40%` |
| avatar | 是否显示头像占位图 | `boolean` | `false` | 
| avatarSize | 头像占位图大小 | `number/string` | `90` |
| avatarShape | 头像占位图形状，可选值为`square` | `string` | `round` | 
| action | 显示右边操作按钮占位图 | `boolean` | `false` |
| loading | 是否显示占位图，传`false`时会展示子组件内容 | `boolean` | `true` | 
| animate | 是否开启动画 | `boolean` | `true` |
| animateName | 动画类型，可选值为`elastic` | `string` | `blink` | 
| contentAlignStyle | 内部内容对齐方式，可选值为 | `left/center/right` | `center` | 
| skeleton-custom-class | 自定义类名，通过该类名可以影响内部样式 | `string` | `` |

### RowProps

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| width | 段落占位图宽数 | `number/string` | - | - |
| height | 段落占位图高度 | `number/string` | - | - |