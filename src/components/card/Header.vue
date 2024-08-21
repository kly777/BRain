<template>
    <h2 class="header">
        {{ cardStore.relation_card.title }}
    </h2>
    <h3 class="header" v-if="cardStore.card.id !== cardStore.relation_card.id">
        >>> {{ cardStore.card.title }}
    </h3>
</template>

<script setup>
import { ref } from "vue";

import { useCardStore } from "./store/card";

const cardStore = useCardStore();
</script>
