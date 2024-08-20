import { App } from 'vue';
import { default as MyComponent } from './component-a/index.vue';

declare const install: (app: App<Element>) => void;
export { MyComponent, install };
declare const _default: {
    install: (app: App<Element>) => void;
};
export default _default;
