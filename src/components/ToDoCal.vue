<template>
    <v-row>
        <v-col :span="8">
            <div class="grid-content ep-bg-purple" />
            <ToDo />
        </v-col>
        <v-col :span="12">
            <div class="grid-content ep-bg-purple-light" />
            <Calendar />
            <TimeLine />
        </v-col>
    </v-row>
</template>

<script setup>

import ToDo from "./todocal/ToDo.vue";
import Calendar from "./todocal/Calendar.vue";
import TimeLine from "./todocal/TimeLine.vue";


</script>

<style scoped>

</style>
