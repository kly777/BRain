<template>
	<el-button plain @click="dialogVisible = true">
		Click to add
	</el-button>
	<el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose" class="dialog-box">
		<el-row>
			<label for="title">标题:</label>
			<el-input type="text" id="title" v-model="addedToDo.title" required />
			<el-switch v-model="addedToDo.full_time" />
		</el-row>
		<el-row>
			<el-slider v-model="addedToDo.priority" :step="1" :min="0" :max="7" />
		</el-row>
		<el-row>
			<label for="start-time">开始时间:</label>
			<el-date-picker v-model="addedToDo.start_time" type="datetime" placeholder="Select date and time"
				:shortcuts="shortcuts" time-format="HH:mm" format="YYYY-MM-DD HH:mm" />
		</el-row>
		<el-row>
			<label for="end-time">结束时间:</label>
			<el-date-picker v-model="addedToDo.end_time" type="datetime" placeholder="Select date and time"
				:shortcuts="shortcuts" time-format="HH:mm" format="YYYY-MM-DD HH:mm" />
		</el-row>
		<button @click="ToDoStore.addToDo(addedToDo)" type="submit">提交</button>
	</el-dialog>
</template>

<script setup>
import { useToDoStore } from '../../../stores/todo'
import { ref, watch } from 'vue';
const ToDoStore = useToDoStore()

const dialogVisible = ref(false)



const addedToDo = ref({
	title: null,
	full_time: false,
	content_tag: [],
	content: "",
	status: 0,
	priority: 0,
	start_time: null,
	end_time: null,
});

const shortcuts = [
	{
		text: 'Today',
		value: new Date(),
	},
	{
		text: 'Yesterday',
		value: () => {
			const date = new Date()
			date.setDate(date.getDate() - 1)
			return date
		},
	},
	{
		text: 'A week ago',
		value: () => {
			const date = new Date()
			date.setDate(date.getDate() - 7)
			return date
		},
	},
]
</script>



<style scoped>
.dialog-box {
	border: 1px solid #ccc;

	border-radius: 10px;
}

el-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	height: 30px;
}

.add-button {
	padding: 10px 20px;
	font-size: 14px;
	color: #fff;
	background-color: #007bff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.add-button:hover {
	background-color: #0056b3;

}
</style>