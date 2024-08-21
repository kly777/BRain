import { useToDoStore } from "../../stores/todo.ts";
import AddToDo from "./todo/AddToDo.vue";
import ToDoItem from "./todo/ToDoItem.vue";
import { ref } from "vue";
import { formatDateTime } from "../../utils/tranTime.ts";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 初始化待办事项列表
const ToDoStore = useToDoStore();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("todo-app") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("app-title") }, });
    // @ts-ignore
    [AddToDo,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(AddToDo, new AddToDo({ ...{ class: ("add-todo") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("add-todo") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ class: ("add-todo") }, }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(AddToDo, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("todos-list") }, });
    for (const [todo] of __VLS_getVForSourceType((__VLS_ctx.ToDoStore.todos))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((todo.id)), ...{ class: ("todo-item") }, });
        // @ts-ignore
        [ToDoItem,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(ToDoItem, new ToDoItem({ todo: ((todo)), }));
        const __VLS_6 = __VLS_5({ todo: ((todo)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        ({}({ todo: ((todo)), }));
        const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ToDoItem, __VLS_6));
        // @ts-ignore
        [ToDoStore,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['todo-app'];
        __VLS_styleScopedClasses['app-title'];
        __VLS_styleScopedClasses['add-todo'];
        __VLS_styleScopedClasses['todos-list'];
        __VLS_styleScopedClasses['todo-item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                AddToDo: AddToDo,
                ToDoItem: ToDoItem,
                ToDoStore: ToDoStore,
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
