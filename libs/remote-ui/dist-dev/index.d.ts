declare const components: {
    ComponentA: import('vue').DefineComponent<{
        text: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
    }, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        text: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
    }>>, {
        text: string;
    }, {}>;
    ComponentB: import('vue').DefineComponent<{
        message: StringConstructor;
    }, {
        message: string | undefined;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        message: StringConstructor;
    }>>, {}, {}>;
};
export default components;
