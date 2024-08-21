import { ref, watch } from "vue";
import moment from "moment";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const time = ref(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));
function clock() {
    time.value = moment(time.value)
        .add(1, "seconds")
        .format("YYYY-MM-DD HH:mm:ss");
}
setInterval(clock, 1000);
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
    // @ts-ignore
    const __VLS_0 = {}
        .VLayout;
    ({}.VLayout);
    ({}.VLayout);
    __VLS_components.VLayout;
    __VLS_components.vLayout;
    __VLS_components.VLayout;
    __VLS_components.vLayout;
    // @ts-ignore
    [VLayout, VLayout,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("nav") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/"), ...{ class: ("router-link") }, }));
    const __VLS_8 = __VLS_7({ to: ("/"), ...{ class: ("router-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("/"), ...{ class: ("router-link") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_12 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/todo-cal"), ...{ class: ("router-link") }, }));
    const __VLS_14 = __VLS_13({ to: ("/todo-cal"), ...{ class: ("router-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: ("/todo-cal"), ...{ class: ("router-link") }, }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    __VLS_nonNullable(__VLS_17.slots).default;
    // @ts-ignore
    const __VLS_18 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/card"), ...{ class: ("router-link") }, }));
    const __VLS_20 = __VLS_19({ to: ("/card"), ...{ class: ("router-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ to: ("/card"), ...{ class: ("router-link") }, }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_nonNullable(__VLS_23.slots).default;
    // @ts-ignore
    const __VLS_24 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/logout"), ...{ class: ("router-link") }, }));
    const __VLS_26 = __VLS_25({ to: ("/logout"), ...{ class: ("router-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ to: ("/logout"), ...{ class: ("router-link") }, }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    __VLS_nonNullable(__VLS_29.slots).default;
    // @ts-ignore
    const __VLS_30 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ to: ("/login"), ...{ class: ("router-link") }, }));
    const __VLS_32 = __VLS_31({ to: ("/login"), ...{ class: ("router-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ to: ("/login"), ...{ class: ("router-link") }, }));
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    __VLS_nonNullable(__VLS_35.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("time") }, });
    (__VLS_ctx.time);
    // @ts-ignore
    [time,];
    // @ts-ignore
    const __VLS_36 = {}
        .VMain;
    ({}.VMain);
    ({}.VMain);
    __VLS_components.VMain;
    __VLS_components.vMain;
    __VLS_components.VMain;
    __VLS_components.vMain;
    // @ts-ignore
    [VMain, VMain,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("main") }, }));
    const __VLS_38 = __VLS_37({ ...{ class: ("main") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ ...{ class: ("main") }, }));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
    // @ts-ignore
    const __VLS_42 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({}));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
    __VLS_nonNullable(__VLS_41.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['nav'];
        __VLS_styleScopedClasses['router-link'];
        __VLS_styleScopedClasses['router-link'];
        __VLS_styleScopedClasses['router-link'];
        __VLS_styleScopedClasses['router-link'];
        __VLS_styleScopedClasses['router-link'];
        __VLS_styleScopedClasses['time'];
        __VLS_styleScopedClasses['main'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                time: time,
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
