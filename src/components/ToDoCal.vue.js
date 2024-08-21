import ToDo from "./todocal/ToDo.vue";
import Calendar from "./todocal/Calendar.vue";
import TimeLine from "./todocal/TimeLine.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
        .VRow;
    ({}.VRow);
    ({}.VRow);
    __VLS_components.VRow;
    __VLS_components.vRow;
    __VLS_components.VRow;
    __VLS_components.vRow;
    // @ts-ignore
    [VRow, VRow,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ span: ((8)), }));
    const __VLS_8 = __VLS_7({ span: ((8)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ span: ((8)), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("grid-content ep-bg-purple") }, });
    // @ts-ignore
    [ToDo,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(ToDo, new ToDo({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({}));
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ToDo, __VLS_13));
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_17 = {}
        .VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ span: ((12)), }));
    const __VLS_19 = __VLS_18({ span: ((12)), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    ({}({ span: ((12)), }));
    const __VLS_22 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("grid-content ep-bg-purple-light") }, });
    // @ts-ignore
    [Calendar,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(Calendar, new Calendar({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({}));
    const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Calendar, __VLS_24));
    // @ts-ignore
    [TimeLine,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(TimeLine, new TimeLine({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({}));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(TimeLine, __VLS_29));
    __VLS_nonNullable(__VLS_22.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid-content'];
        __VLS_styleScopedClasses['ep-bg-purple'];
        __VLS_styleScopedClasses['grid-content'];
        __VLS_styleScopedClasses['ep-bg-purple-light'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ToDo: ToDo,
                Calendar: Calendar,
                TimeLine: TimeLine,
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
