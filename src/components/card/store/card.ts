import { defineStore } from "pinia";
import { ref } from "vue";
import req from "../../../utils/req";

export const useCardStore = defineStore("card", () => {
    const card = ref({
        id: 0,
        title: "",
        content: "",
        relation: {
            parents: [],
            children: [],
        },
    });
    const relation_card = ref({
        id: 0,
        title: "",
        content: "",
        relation: {
            parents: [],
            children: [],
        },
    });

    const loading = ref(true);
    async function getCard(id: number) {
        try {
            if (!id || isNaN(id)) {
                console.error("无效的id");
                return;
            }
            const res = await req.get("/card/" + id);
            card.value = res.data;
            relation_card.value = card.value;
        } catch (error) {
            console.error("获取Card失败:", error);
        } finally {
            loading.value = false; // 数据加载完成后设置 loading 为 false
        }
    }
    async function browseCard(id: number) {
        try {
            if (!id || isNaN(id)) {
                console.error("无效的id");
                return;
            }
            const res = await req.get("/card/" + id);
            card.value = res.data;
        } catch (error) {
            console.error("获取Card失败:", error);
        }
    }
    async function createCard() {
        try {
            const res = await req.post("/card/", {
                title: "New Card",
                content: "Start typing here...",
            });
            return res.data.id;
        } catch (error) {
            console.error("创建Card失败:", error);
        } finally {
            loading.value = false;
        }
    }

    async function updateContent(id: number, content: string) {
        try {
            req.patch("/card/" + id + "/", {
                content: content,
            });
        } catch (error) {
            console.error("更新失败:", error);
        }
    }

    async function updateTitle(id: number, title: string) {
        try {
            req.patch("/card/" + id + "/", {
                title: title,
            });
        } catch (error) {
            console.error("更新失败:", error);
        }
    }

    async function deleteCard(id: number) {
        try {
            await req.delete("/card/" + id + "/");
        } catch (error) {
            console.error("删除Card失败:", error);
        }
    }
    async function deleteRelation(id: number) {
        try {
            await req.delete(`/card/relation/${id}/`);
        } catch (error) {
            console.error(`Failed to delete relation with ID: ${id}`, error);
            throw error;
        }
    }
    async function addRelation(
        type: string,
        parent_id: number,
        child_id: number
    ) {
        if (!type || !parent_id || !child_id) {
            alert("Please fill in all fields.");
            return;
        }
        await req
            .post("/card/relation/", {
                type: type,
                parent: parent_id,
                child: child_id,
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to add relation. Please try again later.");
            });
    }
    async function addRelationOf(
        type: string,
        id: number,
        main_id: number,
        relation: string
    ) {
        if (relation === "parent") {
            addRelation(type, id, main_id);
        } else if (relation === "child") {
            addRelation(type, main_id, id);
        }
    }

    async function updateRelation(
        id: number,
        type: string,
        parent_id: number,
        child_id: number
    ) {
        try {
            await req.patch("/card/relation/${id}/", {
                type: type,
                parent: parent_id,
                child: child_id,
            });
        } catch (error) {
            console.error(`Failed to update relation with ID: ${id}`, error);
            throw error;
        }
    }

    return {
        card,
        getCard,
        createCard,
        deleteCard,
        browseCard,

        updateTitle,
        updateContent,

        relation_card,
        deleteRelation,
        addRelation,
        addRelationOf,
        updateRelation,
    };
});
