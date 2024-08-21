<template>
    <div>
        <h5>id:{{ cardStore.card.id }}</h5>
        <input
            @input="
                cardStore.updateTitle(cardStore.card.id, cardStore.card.title)
            "
            v-model="cardStore.card.title"
        />
        <button @click="deleteCard(cardStore.card.id)">Del</button>
        <div ref="vditorContainer"></div>
        <button @click="extractMarkdown">上传</button>
        <pre>{{ markdownContent }}</pre>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import { useCardStore } from "./store/card";

const cardStore = useCardStore();

import Vditor from "vditor"; // 导入 vditor
import "vditor/dist/index.css"; // 导入 vditor 的 CSS 文件

const markdownContent = ref("");

const vditorContainer = ref(null);

// 监听 title 的变化，并更新 cardStore.card.title
watch(cardStore.card.title, (newTitle) => {
    cardStore.updateTitle(cardStore.card.id, newTitle);
});
import { useRouter } from "vue-router";

const router = useRouter();

function deleteCard(id) {
    cardStore.deleteCard(id);
    router.push({ path: "/card" });
}

let vditorInstance;

// 初始化 Vditor
function initVditor() {
    if (!vditorContainer.value) {
        console.error("VDITOR: 容器未找到");
        return;
    }
    vditorInstance = new Vditor(vditorContainer.value, {
        cache: {
            id: cardStore.card.id,
        },
        after: () => {
            // 确保 Vditor 完全初始化后再设置内容

            if (vditorInstance) {
                vditorInstance.setValue(cardStore.card.content);
            }
        },
    });
}

// 更新 Markdown 内容
function updateMarkdownContent(newContent) {
    if (vditorInstance | newContent) {
        vditorInstance.setValue(newContent);
    }
}

// 监听 cardStore.card.id 的变化
watch(
    () => cardStore.card.id,
    (newId) => {
        if (newId) {
            initVditor();
        } else {
            console.error("cardStore.card.id 未定义");
        }
    }
);

// 监听 cardStore.card.content 的变化
watch(
    () => cardStore.card.content,
    (newContent) => {
        updateMarkdownContent(newContent);
    }
);

// 提取 Markdown 内容
function extractMarkdown() {
    markdownContent.value = vditorInstance.getValue();
    cardStore.updateContent(cardStore.card.id, markdownContent.value);
}

// 组件挂载完成后初始化 Vditor
onMounted(() => {
    if (cardStore.card.id) {
        initVditor();
    }
});

// 组件卸载时清理 Vditor 实例
onUnmounted(() => {
    if (vditorInstance) {
        vditorInstance.destroy();
    }
});
</script>
