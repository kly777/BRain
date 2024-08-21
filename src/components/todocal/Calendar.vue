<template>
	<FocusSwitcher />
	<div class="calendar-table">
		<table>
			<thead>
				<tr>
					<!-- 显示星期几 -->
					<th scope="col" v-for="day in daysOfWeek" :key="day">{{ day }}</th>
				</tr>
			</thead>
			<tbody>
				<!-- 显示日历表格的行 -->
				<tr v-for="row in 5" :key="row">
					<!-- 显示日历表格的单元格 -->
					<td v-for="cell in 7" :key="cell" class="day-cell">
						<DayContainer :cell=cell :row=row class="day-container" />
					</td>
				</tr>
			</tbody>
		</table>
		<!-- 显示表格的第一天 -->
	</div>
	<!-- 显示导航按钮 -->
</template>

<script setup>
import DayContainer from "./cal/DayContainer.vue";
import FocusSwitcher from "./cal/FocusSwitcher.vue";

import { useFocusStore } from "../../stores/focus";

import { ref, computed } from "vue";
import moment from "moment";


const focusStore = useFocusStore();
// 定义当前日期
const currentDate = new Date();

// 定义星期几
const daysOfWeek = ["一", "二", "三", "四", "五", "六", "日"];


</script>

<style scoped>
.day-cell {
	margin: auto;
	width: auto;
	max-width: 20px;
}

.day-container {
	margin: auto;
	width: auto;
	height: auto;
}

.current-date {
	font-size: 18px;
	margin-bottom: 10px;
}

.calendar-table {
	width: 100%;
}

table {
	width: 100%;
	border-collapse: collapse;
}

th,
td {
	border: 1px solid #ccc;
}

.day-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.month-label {
	font-size: 12px;
	color: #666;
}

.day-number {
	font-size: 16px;
}

.today-indicator {
	background-color: #ff0000;
	color: #fff;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5px;
}

.first-day-label {
	margin-top: 10px;
	font-size: 14px;
	color: #666;
}

.navigation-buttons {
	margin-top: 20px;
}
</style>
