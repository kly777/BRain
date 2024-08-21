<template>
    <!-- 按钮组件，点击时调用cardStore的browseCard方法，传入relation的id -->
    <button @click="cardStore.browseCard(relation.id)">
        {{ relation.id }} . {{ relation.title }}
    </button>
    <!-- v-btn组件，点击时调用routeToCard方法，传入relation的id -->
    <v-btn
        icon="mdi-arrow-down"
        size="x-small"
        variant="text"
        @click="routeToCard(relation.id)"
    ></v-btn>
    <!-- v-btn组件，当props.edit为true时显示，点击时调用cardStore的deleteRelation方法，传入relation的relation_id -->
    <v-btn
        icon="mdi-delete"
        size="x-small"
        v-if="props.edit"
        class="delete"
        @click="cardStore.deleteRelation(relation.relation_id)"
    >
    </v-btn>
</template>

<script setup>
import { useCardStore } from "../store/card"; // 导入cardStore
import { useRouter } from "vue-router"; // 导入router

const router = useRouter(); // 初始化router

// 定义props，包括relation对象和edit布尔值
const props = defineProps({
    relation: Object,
    edit: Boolean,
});

const cardStore = useCardStore(); // 初始化cardStore

// 定义routeToCard方法，使用router的push方法导航到Card页面，传入card_id参数
function routeToCard(id) {
    router.push({ name: "Card", params: { card_id: id } });
}
</script>

<style scoped>
button {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
}

button.delete {
    background-color: #ff0000;
    color: #fff;
}

.relation-item {
    margin: 5px;
    padding: 5px;
    border: 1px solid #cacaca;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.relation-item:hover {
    background-color: #f0f0f0;
}

.relation-item .delete {
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 4px;
    cursor: pointer;
}

.relation-item .delete:hover {
    background-color: #ff0000;
}
</style>
