<template>
    <div>
        <Header />
        <div class="card-container">
            <SideBar class="card" />
            <Card />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";

import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
import Card from "./Card.vue";

import { useCardStore } from "./store/card";
const cardStore = useCardStore();

const route = useRoute();

cardStore.getCard(route.params.card_id);
watchEffect(() => {
    cardStore.getCard(route.params.card_id);
});
</script>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 10px;
    grid-auto-rows: minmax(1000px, auto);
    background-color: rgb(238, 238, 238);
}

.card {
    margin: 5px;
}
</style>
