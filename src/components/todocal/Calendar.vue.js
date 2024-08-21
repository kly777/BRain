import DayContainer from "./cal/DayContainer.vue";
import FocusSwitcher from "./cal/FocusSwitcher.vue";
import { useFocusStore } from "../../stores/focus";
import { ref, computed } from "vue";
import moment from "moment";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const focusStore = useFocusStore();
// 定义当前日期
const currentDate = new Date();
// 定义星期几
const daysOfWeek = ["一", "二", "三", "四", "五", "六", "日"];
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
    [FocusSwitcher,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(FocusSwitcher, new FocusSwitcher({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(FocusSwitcher, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("calendar-table") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    for (const [day] of __VLS_getVForSourceType((__VLS_ctx.daysOfWeek))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), key: ((day)), });
        (day);
        // @ts-ignore
        [daysOfWeek,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [row] of __VLS_getVForSourceType((5))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((row)), });
        for (const [cell] of __VLS_getVForSourceType((7))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ key: ((cell)), ...{ class: ("day-cell") }, });
            // @ts-ignore
            [DayContainer,];
            // @ts-ignore
            const __VLS_5 = __VLS_asFunctionalComponent(DayContainer, new DayContainer({ cell: ((cell)), row: ((row)), ...{ class: ("day-container") }, }));
            const __VLS_6 = __VLS_5({ cell: ((cell)), row: ((row)), ...{ class: ("day-container") }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
            ({}({ cell: ((cell)), row: ((row)), ...{ class: ("day-container") }, }));
            const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(DayContainer, __VLS_6));
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['calendar-table'];
        __VLS_styleScopedClasses['day-cell'];
        __VLS_styleScopedClasses['day-container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DayContainer: DayContainer,
                FocusSwitcher: FocusSwitcher,
                daysOfWeek: daysOfWeek,
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
