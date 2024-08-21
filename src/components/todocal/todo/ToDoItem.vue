<script setup>
const props = defineProps(['todo'])
import { useToDoStore } from "../../../stores/todo.ts"
const ToDoStore = useToDoStore()

import { ref } from "vue";
import moment from "moment";
</script>

<template>
    <v-card class="mx-auto" max-width="400">
        <v-card-title>{{ todo.title }}</v-card-title>
        <v-card-subtitle>{{ todo.full_time }}</v-card-subtitle>
        <v-card-text>{{ moment(todo.start_time).format("MM/DD HH:mm") }} to {{ moment(todo.end_time).format("MM/DD HH:mm")}}</v-card-text>
        <v-card-actions class="actions">
            <v-btn @click="ToDoStore.archiveTodo(todo.id)" class="delete-button">
                Fail
            </v-btn>
            <v-btn @click="ToDoStore.archiveTodo(todo.id)" class="delete-button">
                Achieve
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.actions {
    justify-content: end;
}

.delete-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
</style>