import { useCardStore } from "../store/card"; // 导入cardStore
import { useRouter } from "vue-router"; // 导入router
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter(); // 初始化router
// 定义props，包括relation对象和edit布尔值
const props = defineProps({
    relation: Object,
    edit: Boolean,
});
const cardStore = useCardStore(); // 初始化cardStore
// 定义routeToCard方法，使用router的push方法导航到Card页面，传入card_id参数
function routeToCard(id) {
    router.push({ name: "Card", params: { card_id: id } });
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        relation: Object,
        edit: Boolean,
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.cardStore.browseCard(__VLS_ctx.relation.id);
                // @ts-ignore
                [cardStore, relation,];
            } }, });
    (__VLS_ctx.relation.id);
    (__VLS_ctx.relation.title);
    // @ts-ignore
    [relation, relation,];
    // @ts-ignore
    const __VLS_0 = {}
        .VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    // @ts-ignore
    [VBtn, VBtn,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, icon: ("mdi-arrow-down"), size: ("x-small"), variant: ("text"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, icon: ("mdi-arrow-down"), size: ("x-small"), variant: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, icon: ("mdi-arrow-down"), size: ("x-small"), variant: ("text"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.routeToCard(__VLS_ctx.relation.id);
            // @ts-ignore
            [relation, routeToCard,];
        }
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    if (props.edit) {
        // @ts-ignore
        const __VLS_8 = {}
            .VBtn;
        ({}.VBtn);
        ({}.VBtn);
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        // @ts-ignore
        [VBtn, VBtn,];
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, icon: ("mdi-delete"), size: ("x-small"), ...{ class: ("delete") }, }));
        const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, icon: ("mdi-delete"), size: ("x-small"), ...{ class: ("delete") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ ...{ 'onClick': {} }, icon: ("mdi-delete"), size: ("x-small"), ...{ class: ("delete") }, }));
        let __VLS_14;
        const __VLS_15 = {
            onClick: (...[$event]) => {
                if (!((props.edit)))
                    return;
                __VLS_ctx.cardStore.deleteRelation(__VLS_ctx.relation.relation_id);
                // @ts-ignore
                [cardStore, relation,];
            }
        };
        const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
        let __VLS_11;
        let __VLS_12;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['delete'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional(props),
                ...props,
                cardStore: cardStore,
                routeToCard: routeToCard,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
;
