import { useFocusStore } from "../../../stores/focus";
import moment from 'moment';
import { defineProps } from 'vue';
import { ref } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps(['cell', 'row']);
const id = props.cell + (props.row - 1) * 7;
const currentDate = ref(new Date());
const focusStore = useFocusStore();
// 根据id获取日期
function getDateOfId(id) {
    const date = new Date(focusStore.firstDayOfTable);
    date.setDate(date.getDate() + id - 1);
    return date;
}
// 判断是否是本月的第一天
function isFirstOfMonth(id) {
    return getDateOfId(id).getDate() === 1;
}
// 判断是否是今天
function isToday(id) {
    return (getDateOfId(id).toLocaleDateString() ===
        currentDate.value.toLocaleDateString());
}
function isFocusDay(id) {
    return (focusStore.focus.getDate() === getDateOfId(id).getDate());
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['cell', 'row'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("day-container") }, });
    if (__VLS_ctx.isFirstOfMonth(__VLS_ctx.id)) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("month-label") }, });
        (__VLS_ctx.moment(__VLS_ctx.getDateOfId(__VLS_ctx.id)).format("M"));
        // @ts-ignore
        [isFirstOfMonth, id, id, moment, getDateOfId,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("day-number") }, });
    (__VLS_ctx.moment(__VLS_ctx.getDateOfId(__VLS_ctx.id)).format("D"));
    // @ts-ignore
    [id, moment, getDateOfId,];
    if (__VLS_ctx.isToday(__VLS_ctx.id)) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("today-indicator") }, });
        // @ts-ignore
        [id, isToday,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("background-color") }, ...{ class: (({ 'today-bg': __VLS_ctx.isToday(__VLS_ctx.id), 'focus-bg': __VLS_ctx.isFocusDay(__VLS_ctx.id) })) }, });
    __VLS_styleScopedClasses = ({ 'today-bg': isToday(id), 'focus-bg': isFocusDay(id) });
    // @ts-ignore
    [id, id, isToday, isFocusDay,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['day-container'];
        __VLS_styleScopedClasses['month-label'];
        __VLS_styleScopedClasses['day-number'];
        __VLS_styleScopedClasses['today-indicator'];
        __VLS_styleScopedClasses['background-color'];
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
                moment: moment,
                id: id,
                getDateOfId: getDateOfId,
                isFirstOfMonth: isFirstOfMonth,
                isToday: isToday,
                isFocusDay: isFocusDay,
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
