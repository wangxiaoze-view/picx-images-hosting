import { default as ComponentB } from './index.vue';

export default ComponentB;
declare module 'vue' {
    interface GlobalComponents {
        ComponentB: typeof ComponentB;
    }
}
