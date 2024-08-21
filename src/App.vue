<script setup>
import { ref, watch } from "vue";
import moment from "moment";
const time = ref(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));
function clock() {
    time.value = moment(time.value)
        .add(1, "seconds")
        .format("YYYY-MM-DD HH:mm:ss");
}
setInterval(clock, 1000);

</script>

<template>
    <v-layout>
        <div class="header">
            <nav class="nav">
                <RouterLink to="/" class="router-link">Home</RouterLink>
                <RouterLink to="/todo-cal" class="router-link"
                    >ToDoCal</RouterLink
                >
                <RouterLink to="/card" class="router-link">Card</RouterLink>
                <RouterLink to="/logout" class="router-link">Logout</RouterLink>
                <RouterLink to="/login" class="router-link">Login</RouterLink>
            </nav>
            <div class="time">
                {{ time }}
            </div>
        </div>
        <v-main class="main">
            <RouterView />
        </v-main>
    </v-layout>
</template>

<style scoped>
.main {
    margin-top: 35px;
}

/* Header and Navigation */
.header {
    border: #131313 solid 1px;
    height: 35px;
    width: 94%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    z-index: 1000;
    background-color: #fff;
    margin: 4px;
    border-radius: 5px;
    justify-content: flex-start;
    top: 3px;
}

/* Router Links */
.router-link {
    color: #000000;
    padding: 4px;
    margin: 4px;
    border-radius: 4px;
}

.router-link:hover {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.time {
    right: 16px;
    position: absolute;
}

.nav {
    display: flex;
    align-items: start;
}
</style>
