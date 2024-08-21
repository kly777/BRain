import AddRelation from "./sidebar/AddRelation.vue";
import Relations from "./sidebar/Relations.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCardStore } from "./store/card";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const cardStore = useCardStore();
const router = useRouter();
const edit = ref(false);
// 计算属性
const parents = computed(() => cardStore.relation_card.relation.parents);
const children = computed(() => cardStore.relation_card.relation.children);
const cardId = computed(() => cardStore.relation_card.id);
const cardTitle = computed(() => cardStore.relation_card.title);
// 定义一个函数，用于切换编辑状态
function toggleEdit() {
    edit.value = !edit.value;
}
// 定义一个函数，用于浏览卡片
function browseCard() {
    try {
        cardStore.browseCard(cardStore.relation_card.id);
    }
    catch (error) {
        console.error("浏览卡片时出错:", error);
    }
}
// 定义一个函数，用于导航到指定的卡片页面
function routeToCard(id) {
    try {
        router.push({ name: "Card", params: { card_id: id } });
    }
    catch (error) {
        console.error("导航到卡片页面时出错:", error);
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("side") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons") }, });
    // @ts-ignore
    [AddRelation,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(AddRelation, new AddRelation({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(AddRelation, __VLS_1));
    // @ts-ignore
    const __VLS_5 = {}
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
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ 'onClick': {} }, density: ("compact"), icon: ("mdi-pencil"), }));
    const __VLS_7 = __VLS_6({ ...{ 'onClick': {} }, density: ("compact"), icon: ("mdi-pencil"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ ...{ 'onClick': {} }, density: ("compact"), icon: ("mdi-pencil"), }));
    let __VLS_11;
    const __VLS_12 = {
        onClick: (__VLS_ctx.toggleEdit)
    };
    const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7));
    let __VLS_8;
    let __VLS_9;
    // @ts-ignore
    [toggleEdit,];
    // @ts-ignore
    [Relations,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(Relations, new Relations({ relations: ((__VLS_ctx.parents)), edit: ((__VLS_ctx.edit)), relations_type: (('parents')), }));
    const __VLS_14 = __VLS_13({ relations: ((__VLS_ctx.parents)), edit: ((__VLS_ctx.edit)), relations_type: (('parents')), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ relations: ((__VLS_ctx.parents)), edit: ((__VLS_ctx.edit)), relations_type: (('parents')), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Relations, __VLS_14));
    // @ts-ignore
    [parents, edit,];
    // @ts-ignore
    const __VLS_18 = {}
        .VDivider;
    ({}.VDivider);
    ({}.VDivider);
    __VLS_components.VDivider;
    __VLS_components.vDivider;
    __VLS_components.VDivider;
    __VLS_components.vDivider;
    // @ts-ignore
    [VDivider, VDivider,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relation-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.browseCard) }, });
    (__VLS_ctx.cardId);
    (__VLS_ctx.cardTitle);
    // @ts-ignore
    [browseCard, cardId, cardTitle,];
    // @ts-ignore
    const __VLS_24 = {}
        .VDivider;
    ({}.VDivider);
    ({}.VDivider);
    __VLS_components.VDivider;
    __VLS_components.vDivider;
    __VLS_components.VDivider;
    __VLS_components.vDivider;
    // @ts-ignore
    [VDivider, VDivider,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    // @ts-ignore
    [Relations,];
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(Relations, new Relations({ relations: ((__VLS_ctx.children)), edit: ((__VLS_ctx.edit)), relations_type: (('children')), }));
    const __VLS_31 = __VLS_30({ relations: ((__VLS_ctx.children)), edit: ((__VLS_ctx.edit)), relations_type: (('children')), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    ({}({ relations: ((__VLS_ctx.children)), edit: ((__VLS_ctx.edit)), relations_type: (('children')), }));
    const __VLS_34 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Relations, __VLS_31));
    // @ts-ignore
    [edit, children,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['side'];
        __VLS_styleScopedClasses['buttons'];
        __VLS_styleScopedClasses['relation-item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                AddRelation: AddRelation,
                Relations: Relations,
                edit: edit,
                parents: parents,
                children: children,
                cardId: cardId,
                cardTitle: cardTitle,
                toggleEdit: toggleEdit,
                browseCard: browseCard,
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
