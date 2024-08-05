import type { App } from 'vue'
import './index.scss'
import { default as ComponentA } from './index.vue'
import { getTime } from '../utils/time'

const name = ComponentA.name || 'ComponentA'

const install = (app: App<Element>) => {
  app.component(name, ComponentA)
}

// 如果使用按需引入
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export { ComponentA }
export default {
  name,
  version: '1.0.0',
  publishTime: getTime(),
  description: '测试组件',
  install
}

declare module 'vue' {
  export interface GlobalComponents {
    ComponentA: (typeof import('./index.vue'))['default']
  }
}
