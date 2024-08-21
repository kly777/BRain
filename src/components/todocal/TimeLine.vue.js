import { ref, computed, watch } from "vue";
import moment from "moment";
import { useToDoStore } from "../../stores/todo";
import { useFocusStore } from "../../stores/focus";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const todoStore = useToDoStore();
const focusStore = useFocusStore();
const days = ref([]);
function getRange() {
    days.value = [];
    for (let i = -2; i < 7; i++) {
        days.value.push(moment(focusStore.focus).add(i, 'days').format('DD'));
    }
}
getRange();
function createOffsetDate(offsetDays) {
    const date = new Date(focusStore.focus);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + offsetDays);
    return date;
}
// 使用上面定义的函数来创建 left 和 right
const left = ref(createOffsetDate(-2));
const right = ref(createOffsetDate(7));
watch(() => focusStore.focus, () => {
    getRange();
    left.value = createOffsetDate(-2);
    right.value = createOffsetDate(7);
});
// 计算位置的函数
const calculateLeft = computed(() => (t) => {
    const time = new Date(t);
    const percentage = ((time.getTime() - left.value.getTime()) / (right.value.getTime() - left.value.getTime()));
    return Math.max(0, Math.min(percentage, 100));
});
const calculateRight = computed(() => (t) => {
    const time = new Date(t);
    const percentage = ((right.value.getTime() - time.getTime()) / (right.value.getTime() - left.value.getTime()));
    return Math.max(0, Math.min(percentage, 100));
});
const computedLocation = computed(() => (todo) => {
    return {
        marginLeft: calculateLeft.value(todo.start_time) * 100 + '%',
        marginRight: calculateRight.value(todo.end_time) * 100 + '%',
    };
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
    // @ts-ignore
    const __VLS_0 = {}
        .VContainer;
    ({}.VContainer);
    ({}.VContainer);
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    // @ts-ignore
    [VContainer, VContainer,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("day-row") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("day-row") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("day-row") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    for (const [day] of __VLS_getVForSourceType((__VLS_ctx.days))) {
        // @ts-ignore
        const __VLS_12 = {}
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
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((day)), ...{ class: ("day-column") }, }));
        const __VLS_14 = __VLS_13({ key: ((day)), ...{ class: ("day-column") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ key: ((day)), ...{ class: ("day-column") }, }));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        // @ts-ignore
        const __VLS_18 = {}
            .VCard;
        ({}.VCard);
        ({}.VCard);
        __VLS_components.VCard;
        __VLS_components.vCard;
        __VLS_components.VCard;
        __VLS_components.vCard;
        // @ts-ignore
        [VCard, VCard,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("day-card") }, }));
        const __VLS_20 = __VLS_19({ ...{ class: ("day-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ class: ("day-card") }, }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        (day);
        // @ts-ignore
        [days,];
        __VLS_nonNullable(__VLS_23.slots).default;
        __VLS_nonNullable(__VLS_17.slots).default;
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    for (const [todo] of __VLS_getVForSourceType((__VLS_ctx.todoStore.todos))) {
        // @ts-ignore
        const __VLS_24 = {}
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
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ key: ((todo.id)), align: ("center"), }));
        const __VLS_26 = __VLS_25({ key: ((todo.id)), align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ key: ((todo.id)), align: ("center"), }));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
        if (todo.start_time && todo.end_time) {
            // @ts-ignore
            const __VLS_30 = {}
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
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
            const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({}));
            const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("todo-item") }, ...{ style: ((__VLS_ctx.computedLocation(todo))) }, });
            // @ts-ignore
            const __VLS_36 = {}
                .VSheet;
            ({}.VSheet);
            ({}.VSheet);
            __VLS_components.VSheet;
            __VLS_components.vSheet;
            __VLS_components.VSheet;
            __VLS_components.vSheet;
            // @ts-ignore
            [VSheet, VSheet,];
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ height: ((30)), ...{ class: ("mx-auto") }, color: ("primary"), }));
            const __VLS_38 = __VLS_37({ height: ((30)), ...{ class: ("mx-auto") }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            ({}({ height: ((30)), ...{ class: ("mx-auto") }, color: ("primary"), }));
            const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
            // @ts-ignore
            const __VLS_42 = {}
                .SheetFooter;
            ({}.SheetFooter);
            ({}.SheetFooter);
            __VLS_components.SheetFooter;
            __VLS_components.sheetFooter;
            __VLS_components.SheetFooter;
            __VLS_components.sheetFooter;
            // @ts-ignore
            [SheetFooter, SheetFooter,];
            // @ts-ignore
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
            const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
            ({}({}));
            const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
            (todo.title);
            // @ts-ignore
            [todoStore, computedLocation,];
            __VLS_nonNullable(__VLS_47.slots).default;
            // @ts-ignore
            const __VLS_48 = {}
                .VTooltip;
            ({}.VTooltip);
            ({}.VTooltip);
            __VLS_components.VTooltip;
            __VLS_components.vTooltip;
            __VLS_components.VTooltip;
            __VLS_components.vTooltip;
            // @ts-ignore
            [VTooltip, VTooltip,];
            // @ts-ignore
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ text: ((todo.title)), activator: ("parent"), }));
            const __VLS_50 = __VLS_49({ text: ((todo.title)), activator: ("parent"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            ({}({ text: ((todo.title)), activator: ("parent"), }));
            const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
            __VLS_nonNullable(__VLS_41.slots).default;
            __VLS_nonNullable(__VLS_35.slots).default;
        }
        __VLS_nonNullable(__VLS_29.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['day-row'];
        __VLS_styleScopedClasses['day-column'];
        __VLS_styleScopedClasses['day-card'];
        __VLS_styleScopedClasses['todo-item'];
        __VLS_styleScopedClasses['mx-auto'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                todoStore: todoStore,
                days: days,
                computedLocation: computedLocation,
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
