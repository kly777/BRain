import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const dialog = ref(false);
import { useCardStore } from "../store/card";
const cardStore = useCardStore();
const relation = ref("parent");
const type = ref("");
const idInput = ref("");
function addRelation() {
    if (!type.value || !idInput.value) {
        alert("Please fill in all fields.");
        return;
    }
    if (relation.value === "parent") {
        cardStore.addRelation(type.value, idInput.value, cardStore.relation_card.id);
    }
    else if (relation.value === "child") {
        cardStore.addRelation(type.value, cardStore.relation_card.id, idInput.value);
    }
    dialog.value = false;
}
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, density: ("compact"), icon: ("mdi-plus"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, density: ("compact"), icon: ("mdi-plus"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, density: ("compact"), icon: ("mdi-plus"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.dialog = true;
            // @ts-ignore
            [dialog,];
        }
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    const __VLS_8 = {}
        .VDialog;
    ({}.VDialog);
    ({}.VDialog);
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    // @ts-ignore
    [VDialog, VDialog,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ modelValue: ((__VLS_ctx.dialog)), width: ("50%"), }));
    const __VLS_10 = __VLS_9({ modelValue: ((__VLS_ctx.dialog)), width: ("50%"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ modelValue: ((__VLS_ctx.dialog)), width: ("50%"), }));
    const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    // @ts-ignore
    const __VLS_14 = {}
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
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ("dialog-card") }, }));
    const __VLS_16 = __VLS_15({ ...{ class: ("dialog-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ ...{ class: ("dialog-card") }, }));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    // @ts-ignore
    const __VLS_20 = {}
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
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({}));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    // @ts-ignore
    [dialog,];
    __VLS_nonNullable(__VLS_25.slots).default;
    // @ts-ignore
    const __VLS_26 = {}
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
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({}));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    const __VLS_32 = {}
        .VRadioGroup;
    ({}.VRadioGroup);
    ({}.VRadioGroup);
    __VLS_components.VRadioGroup;
    __VLS_components.vRadioGroup;
    __VLS_components.VRadioGroup;
    __VLS_components.vRadioGroup;
    // @ts-ignore
    [VRadioGroup, VRadioGroup,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ inline: (true), modelValue: ((__VLS_ctx.relation)), }));
    const __VLS_34 = __VLS_33({ inline: (true), modelValue: ((__VLS_ctx.relation)), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ inline: (true), modelValue: ((__VLS_ctx.relation)), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    // @ts-ignore
    const __VLS_38 = {}
        .VRadio;
    ({}.VRadio);
    ({}.VRadio);
    __VLS_components.VRadio;
    __VLS_components.vRadio;
    __VLS_components.VRadio;
    __VLS_components.vRadio;
    // @ts-ignore
    [VRadio, VRadio,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("parent"), value: ("parent"), }));
    const __VLS_40 = __VLS_39({ label: ("parent"), value: ("parent"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ label: ("parent"), value: ("parent"), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    // @ts-ignore
    [relation,];
    // @ts-ignore
    const __VLS_44 = {}
        .VRadio;
    ({}.VRadio);
    ({}.VRadio);
    __VLS_components.VRadio;
    __VLS_components.vRadio;
    __VLS_components.VRadio;
    __VLS_components.vRadio;
    // @ts-ignore
    [VRadio, VRadio,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ label: ("child"), value: ("child"), }));
    const __VLS_46 = __VLS_45({ label: ("child"), value: ("child"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ label: ("child"), value: ("child"), }));
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    __VLS_nonNullable(__VLS_37.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.type)), placeholder: ("Type"), });
    // @ts-ignore
    [type,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.idInput)), placeholder: ("ID"), });
    // @ts-ignore
    [idInput,];
    __VLS_nonNullable(__VLS_31.slots).default;
    // @ts-ignore
    const __VLS_50 = {}
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
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
    const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({}));
    const __VLS_55 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52));
    // @ts-ignore
    const __VLS_56 = {}
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
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ 'onClick': {} }, color: ("primary"), }));
    const __VLS_58 = __VLS_57({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ ...{ 'onClick': {} }, color: ("primary"), }));
    let __VLS_62;
    const __VLS_63 = {
        onClick: (...[$event]) => {
            __VLS_ctx.addRelation();
            // @ts-ignore
            [addRelation,];
        }
    };
    const __VLS_61 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58));
    let __VLS_59;
    let __VLS_60;
    __VLS_nonNullable(__VLS_61.slots).default;
    __VLS_nonNullable(__VLS_55.slots).default;
    __VLS_nonNullable(__VLS_19.slots).default;
    __VLS_nonNullable(__VLS_13.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['dialog-card'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                dialog: dialog,
                relation: relation,
                type: type,
                idInput: idInput,
                addRelation: addRelation,
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
