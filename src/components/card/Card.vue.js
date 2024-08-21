import { ref, onMounted, watch, onUnmounted } from "vue";
import { useCardStore } from "./store/card";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
watch(() => cardStore.card.id, (newId) => {
    if (newId) {
        initVditor();
    }
    else {
        console.error("cardStore.card.id 未定义");
    }
});
// 监听 cardStore.card.content 的变化
watch(() => cardStore.card.content, (newContent) => {
    updateMarkdownContent(newContent);
});
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    (__VLS_ctx.cardStore.card.id);
    // @ts-ignore
    [cardStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (...[$event]) => {
                __VLS_ctx.cardStore.updateTitle(__VLS_ctx.cardStore.card.id, __VLS_ctx.cardStore.card.title);
                // @ts-ignore
                [cardStore, cardStore, cardStore,];
            } }, });
    (__VLS_ctx.cardStore.card.title);
    // @ts-ignore
    [cardStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.deleteCard(__VLS_ctx.cardStore.card.id);
                // @ts-ignore
                [cardStore, deleteCard,];
            } }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("vditorContainer"), });
    // @ts-ignore
    (__VLS_ctx.vditorContainer);
    // @ts-ignore
    [vditorContainer,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.extractMarkdown) }, });
    // @ts-ignore
    [extractMarkdown,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)({});
    (__VLS_ctx.markdownContent);
    // @ts-ignore
    [markdownContent,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                cardStore: cardStore,
                markdownContent: markdownContent,
                vditorContainer: vditorContainer,
                deleteCard: deleteCard,
                extractMarkdown: extractMarkdown,
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
