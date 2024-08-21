<template>
    <div v-for="(relations, type) in sortedRelations">
        {{ type }} x{{ relations.length }}
        <v-btn
            class="add-relation"
            color="primary"
            size="small"
            variant="text"
            icon="mdi-plus"
            @click="createRelation(type)"
            >ADD</v-btn
        >
        <div v-for="relation in relations" class="relation-item">
            <Relation :relation="relation" :edit="props.edit" />
        </div>
    </div>
</template>

<script setup>
import Relation from "./Relation.vue";
import { useCardStore } from "../store/card";
import { useRouter } from "vue-router";
import { computed } from "vue";
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
    if (!relations || !Array.isArray(relations)) return {};
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
        } else if (props.relations_type === "children") {
            cardStore.addRelation(type, cardStore.relation_card.id, newCardId);
        }
        routeToCard(newCardId);
    } catch (error) {
        // 处理可能出现的错误
        console.error("Error creating card:", error);
    }
}

// 路由到指定的卡片页面
function routeToCard(id) {
    router.push({ name: "Card", params: { card_id: id } });
}
</script>

<style scoped>
.relations {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.relation-type {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>
