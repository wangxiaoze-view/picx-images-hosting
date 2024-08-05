import { App } from 'vue';
import { default as ComponentA } from './index.vue';

export { ComponentA };
declare const _default: {
    name: string;
    version: string;
    publishTime: string;
    description: string;
    install: (app: App<Element>) => void;
};
export default _default;
declare module 'vue' {
    interface GlobalComponents {
        ComponentA: (typeof import('./index.vue'))['default'];
    }
}
