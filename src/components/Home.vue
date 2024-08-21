<template>
    <v-container>
        <v-row>
            <v-col cols="4" sm="6" max-width="200px">
                <ToDo />
            </v-col>
            <v-col cols="12" sm="6">
            </v-col>
        </v-row>
    </v-container>

</template>

<style scoped></style>

<script setup>
import ToDo from './todocal/ToDo.vue';
</script>
