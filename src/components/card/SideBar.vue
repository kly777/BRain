<template>
    <div class="side">
        <div class="buttons">
            <AddRelation />
            <v-btn
                @click="toggleEdit"
                density="compact"
                icon="mdi-pencil"
            ></v-btn>
        </div>

        <!-- 父关系 -->
        <Relations
            :relations="parents"
            :edit="edit"
            :relations_type="'parents'"
        />
        <v-divider></v-divider>
        <div class="relation-item">
            <button @click="browseCard">
                {{ cardId }}
                {{ cardTitle }}
            </button>
        </div>
        <v-divider></v-divider>
        <Relations
            :relations="children"
            :edit="edit"
            :relations_type="'children'"
        />
    </div>
</template>

<script setup>
// 导入所需的组件和库
import AddRelation from "./sidebar/AddRelation.vue";
import Relations from "./sidebar/Relations.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { useCardStore } from "./store/card";
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
    } catch (error) {
        console.error("浏览卡片时出错:", error);
    }
}

// 定义一个函数，用于导航到指定的卡片页面
function routeToCard(id) {
    try {
        router.push({ name: "Card", params: { card_id: id } });
    } catch (error) {
        console.error("导航到卡片页面时出错:", error);
    }
}
</script>

<style scoped>
.side {
    width: 100%;
    height: 100%;
    background-color: #f7ebc7;
}

.relation {
    margin: 5px;
    padding: 5px;
    border: 1px solid #bababa;
    border-radius: 5px;
}

.delete {
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 4px;
    cursor: pointer;
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

.buttons {
    display: flex;
    justify-content: left;
}
</style>

