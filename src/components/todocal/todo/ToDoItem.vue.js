const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps(['todo']);
import { useToDoStore } from "../../../stores/todo.ts";
const ToDoStore = useToDoStore();
import { ref } from "vue";
import moment from "moment";
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['todo'],
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
    // @ts-ignore
    const __VLS_0 = {}
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("mx-auto") }, maxWidth: ("400"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("mx-auto") }, maxWidth: ("400"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("mx-auto") }, maxWidth: ("400"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .VCardTitle;
    ({}.VCardTitle);
    ({}.VCardTitle);
    __VLS_components.VCardTitle;
    __VLS_components.vCardTitle;
    __VLS_components.VCardTitle;
    __VLS_components.vCardTitle;
    // @ts-ignore
    [VCardTitle, VCardTitle,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    (__VLS_ctx.todo.title);
    // @ts-ignore
    [todo,];
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_12 = {}
        .VCardSubtitle;
    ({}.VCardSubtitle);
    ({}.VCardSubtitle);
    __VLS_components.VCardSubtitle;
    __VLS_components.vCardSubtitle;
    __VLS_components.VCardSubtitle;
    __VLS_components.vCardSubtitle;
    // @ts-ignore
    [VCardSubtitle, VCardSubtitle,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    (__VLS_ctx.todo.full_time);
    // @ts-ignore
    [todo,];
    __VLS_nonNullable(__VLS_17.slots).default;
    // @ts-ignore
    const __VLS_18 = {}
        .VCardText;
    ({}.VCardText);
    ({}.VCardText);
    __VLS_components.VCardText;
    __VLS_components.vCardText;
    __VLS_components.VCardText;
    __VLS_components.vCardText;
    // @ts-ignore
    [VCardText, VCardText,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    (__VLS_ctx.moment(__VLS_ctx.todo.start_time).format("MM/DD HH:mm"));
    (__VLS_ctx.moment(__VLS_ctx.todo.end_time).format("MM/DD HH:mm"));
    // @ts-ignore
    [todo, todo, moment, moment,];
    __VLS_nonNullable(__VLS_23.slots).default;
    // @ts-ignore
    const __VLS_24 = {}
        .VCardActions;
    ({}.VCardActions);
    ({}.VCardActions);
    __VLS_components.VCardActions;
    __VLS_components.vCardActions;
    __VLS_components.VCardActions;
    __VLS_components.vCardActions;
    // @ts-ignore
    [VCardActions, VCardActions,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("actions") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("actions") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ class: ("actions") }, }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    // @ts-ignore
    const __VLS_30 = {}
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, ...{ class: ("delete-button") }, }));
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, ...{ class: ("delete-button") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("delete-button") }, }));
    let __VLS_36;
    const __VLS_37 = {
        onClick: (...[$event]) => {
            __VLS_ctx.ToDoStore.archiveTodo(__VLS_ctx.todo.id);
            // @ts-ignore
            [todo, ToDoStore,];
        }
    };
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    let __VLS_33;
    let __VLS_34;
    __VLS_nonNullable(__VLS_35.slots).default;
    // @ts-ignore
    const __VLS_38 = {}
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, ...{ class: ("delete-button") }, }));
    const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, ...{ class: ("delete-button") }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("delete-button") }, }));
    let __VLS_44;
    const __VLS_45 = {
        onClick: (...[$event]) => {
            __VLS_ctx.ToDoStore.archiveTodo(__VLS_ctx.todo.id);
            // @ts-ignore
            [todo, ToDoStore,];
        }
    };
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    let __VLS_41;
    let __VLS_42;
    __VLS_nonNullable(__VLS_43.slots).default;
    __VLS_nonNullable(__VLS_29.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['actions'];
        __VLS_styleScopedClasses['delete-button'];
        __VLS_styleScopedClasses['delete-button'];
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
                ToDoStore: ToDoStore,
                moment: moment,
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
