import { useToDoStore } from '../../../stores/todo';
import { ref, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const ToDoStore = useToDoStore();
const dialogVisible = ref(false);
const addedToDo = ref({
    title: null,
    full_time: false,
    content_tag: [],
    content: "",
    status: 0,
    priority: 0,
    start_time: null,
    end_time: null,
});
const shortcuts = [
    {
        text: 'Today',
        value: new Date(),
    },
    {
        text: 'Yesterday',
        value: () => {
            const date = new Date();
            date.setDate(date.getDate() - 1);
            return date;
        },
    },
    {
        text: 'A week ago',
        value: () => {
            const date = new Date();
            date.setDate(date.getDate() - 7);
            return date;
        },
    },
];
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
        .ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, plain: (true), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, plain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, plain: (true), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.dialogVisible = true;
            // @ts-ignore
            [dialogVisible,];
        }
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    const __VLS_8 = {}
        .ElDialog;
    ({}.ElDialog);
    ({}.ElDialog);
    __VLS_components.ElDialog;
    __VLS_components.elDialog;
    __VLS_components.ElDialog;
    __VLS_components.elDialog;
    // @ts-ignore
    [ElDialog, ElDialog,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ modelValue: ((__VLS_ctx.dialogVisible)), title: ("Tips"), width: ("500"), beforeClose: ((__VLS_ctx.handleClose)), ...{ class: ("dialog-box") }, }));
    const __VLS_10 = __VLS_9({ modelValue: ((__VLS_ctx.dialogVisible)), title: ("Tips"), width: ("500"), beforeClose: ((__VLS_ctx.handleClose)), ...{ class: ("dialog-box") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ modelValue: ((__VLS_ctx.dialogVisible)), title: ("Tips"), width: ("500"), beforeClose: ((__VLS_ctx.handleClose)), ...{ class: ("dialog-box") }, }));
    const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    // @ts-ignore
    const __VLS_14 = {}
        .ElRow;
    ({}.ElRow);
    ({}.ElRow);
    __VLS_components.ElRow;
    __VLS_components.elRow;
    __VLS_components.ElRow;
    __VLS_components.elRow;
    // @ts-ignore
    [ElRow, ElRow,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("title"), });
    // @ts-ignore
    [dialogVisible, handleClose,];
    // @ts-ignore
    const __VLS_20 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ type: ("text"), id: ("title"), modelValue: ((__VLS_ctx.addedToDo.title)), required: (true), }));
    const __VLS_22 = __VLS_21({ type: ("text"), id: ("title"), modelValue: ((__VLS_ctx.addedToDo.title)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ type: ("text"), id: ("title"), modelValue: ((__VLS_ctx.addedToDo.title)), required: (true), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    // @ts-ignore
    [addedToDo,];
    // @ts-ignore
    const __VLS_26 = {}
        .ElSwitch;
    ({}.ElSwitch);
    __VLS_components.ElSwitch;
    __VLS_components.elSwitch;
    // @ts-ignore
    [ElSwitch,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.addedToDo.full_time)), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.addedToDo.full_time)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ modelValue: ((__VLS_ctx.addedToDo.full_time)), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    [addedToDo,];
    __VLS_nonNullable(__VLS_19.slots).default;
    // @ts-ignore
    const __VLS_32 = {}
        .ElRow;
    ({}.ElRow);
    ({}.ElRow);
    __VLS_components.ElRow;
    __VLS_components.elRow;
    __VLS_components.ElRow;
    __VLS_components.elRow;
    // @ts-ignore
    [ElRow, ElRow,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
    const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({}));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    // @ts-ignore
    const __VLS_38 = {}
        .ElSlider;
    ({}.ElSlider);
    __VLS_components.ElSlider;
    __VLS_components.elSlider;
    // @ts-ignore
    [ElSlider,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ modelValue: ((__VLS_ctx.addedToDo.priority)), step: ((1)), min: ((0)), max: ((7)), }));
    const __VLS_40 = __VLS_39({ modelValue: ((__VLS_ctx.addedToDo.priority)), step: ((1)), min: ((0)), max: ((7)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ modelValue: ((__VLS_ctx.addedToDo.priority)), step: ((1)), min: ((0)), max: ((7)), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    // @ts-ignore
    [addedToDo,];
    __VLS_nonNullable(__VLS_37.slots).default;
    // @ts-ignore
    const __VLS_44 = {}
        .ElRow;
    ({}.ElRow);
    ({}.ElRow);
    __VLS_components.ElRow;
    __VLS_components.elRow;
    __VLS_components.ElRow;
    __VLS_components.elRow;
    // @ts-ignore
    [ElRow, ElRow,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({}));
    const __VLS_46 = __VLS_45({}, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({}));
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("start-time"), });
    // @ts-ignore
    const __VLS_50 = {}
        .ElDatePicker;
    ({}.ElDatePicker);
    __VLS_components.ElDatePicker;
    __VLS_components.elDatePicker;
    // @ts-ignore
    [ElDatePicker,];
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ modelValue: ((__VLS_ctx.addedToDo.start_time)), type: ("datetime"), placeholder: ("Select date and time"), shortcuts: ((__VLS_ctx.shortcuts)), timeFormat: ("HH:mm"), format: ("YYYY-MM-DD HH:mm"), }));
    const __VLS_52 = __VLS_51({ modelValue: ((__VLS_ctx.addedToDo.start_time)), type: ("datetime"), placeholder: ("Select date and time"), shortcuts: ((__VLS_ctx.shortcuts)), timeFormat: ("HH:mm"), format: ("YYYY-MM-DD HH:mm"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ modelValue: ((__VLS_ctx.addedToDo.start_time)), type: ("datetime"), placeholder: ("Select date and time"), shortcuts: ((__VLS_ctx.shortcuts)), timeFormat: ("HH:mm"), format: ("YYYY-MM-DD HH:mm"), }));
    const __VLS_55 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52));
    // @ts-ignore
    [addedToDo, shortcuts,];
    __VLS_nonNullable(__VLS_49.slots).default;
    // @ts-ignore
    const __VLS_56 = {}
        .ElRow;
    ({}.ElRow);
    ({}.ElRow);
    __VLS_components.ElRow;
    __VLS_components.elRow;
    __VLS_components.ElRow;
    __VLS_components.elRow;
    // @ts-ignore
    [ElRow, ElRow,];
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
    const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({}));
    const __VLS_61 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("end-time"), });
    // @ts-ignore
    const __VLS_62 = {}
        .ElDatePicker;
    ({}.ElDatePicker);
    __VLS_components.ElDatePicker;
    __VLS_components.elDatePicker;
    // @ts-ignore
    [ElDatePicker,];
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ modelValue: ((__VLS_ctx.addedToDo.end_time)), type: ("datetime"), placeholder: ("Select date and time"), shortcuts: ((__VLS_ctx.shortcuts)), timeFormat: ("HH:mm"), format: ("YYYY-MM-DD HH:mm"), }));
    const __VLS_64 = __VLS_63({ modelValue: ((__VLS_ctx.addedToDo.end_time)), type: ("datetime"), placeholder: ("Select date and time"), shortcuts: ((__VLS_ctx.shortcuts)), timeFormat: ("HH:mm"), format: ("YYYY-MM-DD HH:mm"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ modelValue: ((__VLS_ctx.addedToDo.end_time)), type: ("datetime"), placeholder: ("Select date and time"), shortcuts: ((__VLS_ctx.shortcuts)), timeFormat: ("HH:mm"), format: ("YYYY-MM-DD HH:mm"), }));
    const __VLS_67 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64));
    // @ts-ignore
    [addedToDo, shortcuts,];
    __VLS_nonNullable(__VLS_61.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.ToDoStore.addToDo(__VLS_ctx.addedToDo);
                // @ts-ignore
                [addedToDo, ToDoStore,];
            } }, type: ("submit"), });
    __VLS_nonNullable(__VLS_13.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['dialog-box'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ToDoStore: ToDoStore,
                dialogVisible: dialogVisible,
                addedToDo: addedToDo,
                shortcuts: shortcuts,
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
