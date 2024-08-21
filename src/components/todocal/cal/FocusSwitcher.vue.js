import moment from "moment";
import { useFocusStore } from "../../../stores/focus";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const focusStore = useFocusStore();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.moment(__VLS_ctx.focusStore.focus).format("YYYY年M月D日"));
    // @ts-ignore
    [moment, focusStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("navigation-buttons") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.focusStore.prevWeek) }, ...{ class: ("nav-button") }, });
    // @ts-ignore
    [focusStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.focusStore.nextWeek) }, ...{ class: ("nav-button") }, });
    // @ts-ignore
    [focusStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.focusStore.prevDay) }, ...{ class: ("nav-button") }, });
    // @ts-ignore
    [focusStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.focusStore.nextDay) }, ...{ class: ("nav-button") }, });
    // @ts-ignore
    [focusStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.focusStore.backToday) }, ...{ class: ("nav-button") }, });
    // @ts-ignore
    [focusStore,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['navigation-buttons'];
        __VLS_styleScopedClasses['nav-button'];
        __VLS_styleScopedClasses['nav-button'];
        __VLS_styleScopedClasses['nav-button'];
        __VLS_styleScopedClasses['nav-button'];
        __VLS_styleScopedClasses['nav-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                moment: moment,
                focusStore: focusStore,
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
