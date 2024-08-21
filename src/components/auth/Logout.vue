<template>
    <button @click="authStore.logout()">Logout</button>

</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";


const authStore = useAuthStore();

</script>