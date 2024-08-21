<template>
    <SearchCard />
    <div class="cardcontainer">
        <div v-for="card in cards" :key="card.id" class="card">
            {{ card.id }}.
            <RouterLink :to="{ name: 'Card', params: { card_id: card.id } }">
                {{ card.title }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cards = ref([]);

import req from "../utils/req";
import SearchCard from "./card/SearchCard.vue";
getCard();
async function getCard() {
    const response = await req("card/?root=true");
    cards.value = await response.data;
}
</script>

<style>
.card {
    margin: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    cursor: pointer;
}

.cardcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}
</style>
