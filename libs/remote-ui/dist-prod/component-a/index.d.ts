import { default as ComponentA } from './index.vue';

export default ComponentA;
declare module 'vue' {
    interface GlobalComponents {
        ComponentA: typeof ComponentA;
    }
}
