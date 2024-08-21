import { ref, watch, onMounted } from "vue";
import req from "../../utils/req";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
// 定义搜索查询的状态
const searchQuery = ref("");
const searchResults = ref([]);
onMounted(() => {
    // 初始化搜索结果为空数组
    searchResults.value = [];
});
async function Search() {
    try {
        const encodedQuery = encodeURIComponent(searchQuery.value);
        const response = await req.get("/card/search/?q=" + encodedQuery);
        searchResults.value = response.data;
    }
    catch (error) {
        console.error("Error during search:", error);
        // 可以选择在这里显示错误信息给用户，或者记录日志等
        searchResults.value = ["No results found"];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .VTextField;
    ({}.VTextField);
    __VLS_components.VTextField;
    __VLS_components.vTextField;
    // @ts-ignore
    [VTextField,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.searchQuery)), label: ("Search..."), }));
    const __VLS_2 = __VLS_1({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.searchQuery)), label: ("Search..."), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.searchQuery)), label: ("Search..."), }));
    let __VLS_6;
    const __VLS_7 = {
        onInput: (__VLS_ctx.Search)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    [searchQuery, Search,];
    if (__VLS_ctx.searchQuery) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ "scroll-strategy": ("reposition"), ...{ class: ("bar") }, });
        // @ts-ignore
        const __VLS_8 = {}
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
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ width: ("auto"), ...{ class: ("pa-3") }, }));
        const __VLS_10 = __VLS_9({ width: ("auto"), ...{ class: ("pa-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ width: ("auto"), ...{ class: ("pa-3") }, }));
        const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
        if (__VLS_ctx.searchQuery) {
            // @ts-ignore
            const __VLS_14 = {}
                .VList;
            ({}.VList);
            ({}.VList);
            __VLS_components.VList;
            __VLS_components.vList;
            __VLS_components.VList;
            __VLS_components.vList;
            // @ts-ignore
            [VList, VList,];
            // @ts-ignore
            const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ dense: (true), }));
            const __VLS_16 = __VLS_15({ dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
            ({}({ dense: (true), }));
            const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
            for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.searchResults))) {
                // @ts-ignore
                const __VLS_20 = {}
                    .VListItem;
                ({}.VListItem);
                ({}.VListItem);
                __VLS_components.VListItem;
                __VLS_components.vListItem;
                __VLS_components.VListItem;
                __VLS_components.vListItem;
                // @ts-ignore
                [VListItem, VListItem,];
                // @ts-ignore
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onClick': {} }, key: ((index)), link: (true), }));
                const __VLS_22 = __VLS_21({ ...{ 'onClick': {} }, key: ((index)), link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{ 'onClick': {} }, key: ((index)), link: (true), }));
                let __VLS_26;
                const __VLS_27 = {
                    onClick: (() => {
                        __VLS_ctx.router.push({ name: 'Card', params: { card_id: item.id } });
                    })
                };
                const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
                let __VLS_23;
                let __VLS_24;
                // @ts-ignore
                const __VLS_28 = {}
                    .VListItemTitle;
                ({}.VListItemTitle);
                ({}.VListItemTitle);
                __VLS_components.VListItemTitle;
                __VLS_components.vListItemTitle;
                __VLS_components.VListItemTitle;
                __VLS_components.vListItemTitle;
                // @ts-ignore
                [VListItemTitle, VListItemTitle,];
                // @ts-ignore
                const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({}));
                const __VLS_30 = __VLS_29({}, ...__VLS_functionalComponentArgsRest(__VLS_29));
                ({}({}));
                const __VLS_33 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30));
                (item.id);
                (item.title);
                // @ts-ignore
                [searchQuery, searchQuery, searchResults, router,];
                __VLS_nonNullable(__VLS_33.slots).default;
                __VLS_nonNullable(__VLS_25.slots).default;
            }
            __VLS_nonNullable(__VLS_19.slots).default;
        }
        __VLS_nonNullable(__VLS_13.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['bar'];
        __VLS_styleScopedClasses['pa-3'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                router: router,
                searchQuery: searchQuery,
                searchResults: searchResults,
                Search: Search,
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
