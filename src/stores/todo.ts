import { defineStore } from "pinia";
import { ref } from "vue";

import req from "../utils/req";

import { h } from "vue";
import { ElNotification } from "element-plus";

import moment from "moment";


import { useFocusStore } from "./focus";

// 定义一个名为todos的store

export const useToDoStore = defineStore("todos", () => {
  // 定义一个ref类型的todos变量，用于存储待办事项
  const focusStore = useFocusStore();
  const todos = ref(getToDos(focusStore.firstDayOfTable));


  // 异步函数，用于获取待办事项
  async function getToDos(firstDayOfTable: Date) {

    try {
      if (!firstDayOfTable || isNaN(firstDayOfTable.getTime())) {
        console.error("无效的日期参数");
        return;
      }
      // 发送GET请求，获取待办事项
      const res = await req.get("/todo-cal/",

        {
          params: {
            s_time: moment(firstDayOfTable).format("YYYY-MM-DD"),
            e_time: moment(firstDayOfTable).add(35, "days").format("YYYY-MM-DD"),
          }
        }

      );
      // 将获取到的待办事项赋值给todos变量
      todos.value = res.data.sort((a:any, b:any) => {
        const dateA = new Date(a.end_time);
        const dateB = new Date(b.end_time);
        return dateA.getTime() - dateB.getTime();
      });
    } catch (error) {
      console.error("获取待办事项失败：", error);
    }
  }

  // 添加待办事项
  async function addToDo(addedToDo:any) {
    try {
      const res = await req.post("/todo-cal/", {
        title: addedToDo.title,
        content: "",
        status: addedToDo.status,
        priority: addedToDo.priority,
        full_time: addedToDo.full_time,
        end_time: addedToDo.end_time,
        start_time: addedToDo.start_time,
        content_tag: [],
        tool_tag: [],
        parent: [],
        last_one: [],
      });
      console.log(res);
      // 调用getToDos函数，重新获取待办事项
      getToDos(focusStore.firstDayOfTable);

      // 使用ElNotification组件，显示添加成功的信息
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "新待办事项添加成功"),
      });
    } catch (error) {
      console.error("添加待办事项失败：", error);
    }
  }

  // 用于删除待办事项
  const archiveTodo = async (id: any) => {
    try {
      // 发送DELETE请求，删除待办事项
      const response = await req.delete(`/todo-cal/${id}/`);
      console.log(response);
      getToDos(focusStore.firstDayOfTable);

      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "Todo 已成功删除"),
      });
    } catch (error) {
      console.error("Failed to archive todo:", error);
    }
  };

  return {
    todos,
    addToDo,
    archiveTodo,
    getToDos,
  };
});
