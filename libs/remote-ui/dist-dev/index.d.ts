import { default as ComponentA } from './component-a/index.vue';
import { default as ComponentB } from './component-b/index.vue';

export { ComponentA, ComponentB };
declare module 'vue' {
    interface GlobalComponents {
        ComponentA: typeof ComponentA;
        ComponentB: typeof ComponentB;
    }
}
