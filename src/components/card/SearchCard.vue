<template>
    <div>
        <v-text-field v-model="searchQuery" label="Search..." @input="Search" />
        <div v-if="searchQuery" scroll-strategy="reposition" class="bar">
            <v-card width="auto" class="pa-3">
                <v-list dense v-if="searchQuery">
                    <v-list-item v-for="(item, index) in searchResults" :key="index" link @click="() => {
                            router.push({ name: 'Card', params: { card_id: item.id } });

                        }
                        ">
                        <v-list-item-title>{{ item.id }} {{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import req from "../../utils/req";
import { useRouter } from "vue-router";

const router = useRouter();

// 定义搜索查询的状态
const searchQuery = ref("");
const searchResults = ref([]);

onMounted(() => {
    // 初始化搜索结果为空数组
    searchResults.value = [];
});

async function Search() {
    try {
        const encodedQuery = encodeURIComponent(searchQuery.value);
        const response = await req.get("/card/search/?q=" + encodedQuery);
        searchResults.value = response.data;
    } catch (error) {
        console.error("Error during search:", error);
        // 可以选择在这里显示错误信息给用户，或者记录日志等
        searchResults.value = ["No results found"];
    }
}
</script>

<style scoped>
.search-card {
    position: relative;
}

.search-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-overlay p {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.bar{
position: relative;
width: 100%;
height: 100%;
}
.pa-3{
position: absolute;
top: 0;
left: 0;
width: 100%;


}
</style>
