<template>
    <span>
        {{ moment(focusStore.focus).format("YYYY年M月D日") }}
    </span>
    <span class="navigation-buttons">
        <button @click="focusStore.prevWeek" class="nav-button">上一周</button>
        <button @click="focusStore.nextWeek" class="nav-button">下一周</button>
        <button @click="focusStore.prevDay" class="nav-button">上一天</button>
        <button @click="focusStore.nextDay" class="nav-button">下一天</button>
        <button @click="focusStore.backToday" class="nav-button">回到今天</button>
    </span>
</template>

<script setup>

import moment from "moment";


import { useFocusStore } from "../../../stores/focus";

const focusStore = useFocusStore();

</script>

<style scoped>
.navigation-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.nav-button {
    margin: 0 10px;

    padding: 10px 20px;

    font-size: 14px;

    color: #fff;

    background-color: #007bff;

    border: none;

    border-radius: 5px;

    cursor: pointer;

    transition: background-color 0.3s ease;

}

.nav-button:hover {
    background-color: #0056b3;

}
</style>