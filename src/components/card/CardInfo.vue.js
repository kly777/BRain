import { ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
import Card from "./Card.vue";
import { useCardStore } from "./store/card";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const cardStore = useCardStore();
const route = useRoute();
cardStore.getCard(route.params.card_id);
watchEffect(() => {
    cardStore.getCard(route.params.card_id);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [Header,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Header, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-container") }, });
    // @ts-ignore
    [SideBar,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(SideBar, new SideBar({ ...{ class: ("card") }, }));
    const __VLS_6 = __VLS_5({ ...{ class: ("card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ ...{ class: ("card") }, }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SideBar, __VLS_6));
    // @ts-ignore
    [Card,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Card, new Card({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Card, __VLS_11));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['card-container'];
        __VLS_styleScopedClasses['card'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Header: Header,
                SideBar: SideBar,
                Card: Card,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
