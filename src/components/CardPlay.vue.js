import { ref, onMounted } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const cards = ref([]);
import req from "../utils/req";
import SearchCard from "./card/SearchCard.vue";
getCard();
async function getCard() {
    const response = await req("card/?root=true");
    cards.value = await response.data;
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
    // @ts-ignore
    [SearchCard,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SearchCard, new SearchCard({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SearchCard, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cardcontainer") }, });
    for (const [card] of __VLS_getVForSourceType((__VLS_ctx.cards))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((card.id)), ...{ class: ("card") }, });
        (card.id);
        // @ts-ignore
        const __VLS_5 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ to: (({ name: 'Card', params: { card_id: card.id } })), }));
        const __VLS_7 = __VLS_6({ to: (({ name: 'Card', params: { card_id: card.id } })), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ to: (({ name: 'Card', params: { card_id: card.id } })), }));
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7));
        (card.title);
        // @ts-ignore
        [cards,];
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['cardcontainer'];
        __VLS_styleScopedClasses['card'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                cards: cards,
                SearchCard: SearchCard,
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
