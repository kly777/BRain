import Relation from "./Relation.vue";
import { useCardStore } from "../store/card";
import { useRouter } from "vue-router";
import { computed } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const cardStore = useCardStore();
// 定义组件的 props
const props = defineProps({
    edit: {
        type: Boolean,
        default: false,
    },
    relations: {
        type: Array,
    },
    relations_type: {},
});
// 计算属性，用于对 relations 按类型进行分组
const sortedRelations = computed(() => {
    const relations = props.relations;
    if (!relations || !Array.isArray(relations))
        return {};
    // 创建一个对象来存储不同类型的元素
    const typedRelations = {};
    // 遍历 relation 数组
    relations.forEach((relation) => {
        if (relation.type) {
            // 如果对应的 type 还没有在 typedRelations 中创建数组，则创建一个空数组
            if (!typedRelations[relation.type]) {
                typedRelations[relation.type] = [];
            }
            // 将当前元素添加到对应类型的数组中
            typedRelations[relation.type].push(relation);
        }
    });
    return typedRelations;
});
// 创建新的 relation
async function createRelation(type) {
    try {
        // 使用 await 等待 Promise 解析
        const newCardId = await cardStore.createCard();
        // 现在 newCardId 已经是一个确定的值
        if (props.relations_type === "parents") {
            cardStore.addRelation(type, newCardId, cardStore.relation_card.id);
        }
        else if (props.relations_type === "children") {
            cardStore.addRelation(type, cardStore.relation_card.id, newCardId);
        }
        routeToCard(newCardId);
    }
    catch (error) {
        // 处理可能出现的错误
        console.error("Error creating card:", error);
    }
}
// 路由到指定的卡片页面
function routeToCard(id) {
    router.push({ name: "Card", params: { card_id: id } });
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        edit: {
            type: Boolean,
            default: false,
        },
        relations: {
            type: Array,
        },
        relations_type: {},
    },
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
    for (const [relations, type] of __VLS_getVForSourceType((__VLS_ctx.sortedRelations))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (type);
        (relations.length);
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
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("add-relation") }, color: ("primary"), size: ("small"), variant: ("text"), icon: ("mdi-plus"), }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("add-relation") }, color: ("primary"), size: ("small"), variant: ("text"), icon: ("mdi-plus"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {} }, ...{ class: ("add-relation") }, color: ("primary"), size: ("small"), variant: ("text"), icon: ("mdi-plus"), }));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (...[$event]) => {
                __VLS_ctx.createRelation(type);
                // @ts-ignore
                [sortedRelations, createRelation,];
            }
        };
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        let __VLS_3;
        let __VLS_4;
        __VLS_nonNullable(__VLS_5.slots).default;
        for (const [relation] of __VLS_getVForSourceType((relations))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relation-item") }, });
            // @ts-ignore
            [Relation,];
            // @ts-ignore
            const __VLS_8 = __VLS_asFunctionalComponent(Relation, new Relation({ relation: ((relation)), edit: ((props.edit)), }));
            const __VLS_9 = __VLS_8({ relation: ((relation)), edit: ((props.edit)), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
            ({}({ relation: ((relation)), edit: ((props.edit)), }));
            const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Relation, __VLS_9));
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['add-relation'];
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
                $props: __VLS_makeOptional(props),
                ...props,
                Relation: Relation,
                sortedRelations: sortedRelations,
                createRelation: createRelation,
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
