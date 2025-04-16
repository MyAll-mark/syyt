<template>
  <div :style="containerStyle">
    <table class="table" :style="tableStyle">
      <thead>
        <tr>
          <th>序号</th>
          <th>文书名称</th>
          <th>数量</th>
          <th>备注</th>
          <th>起始文号</th>
          <th>结束文号</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td><el-input v-model="row.col1" /></td>
          <td><el-input v-model="row.col2" /></td>
          <td><el-input v-model="row.col3" /></td>
          <td><el-input v-model="row.col4" placeholder="空白" type="textarea" /></td>
          <td><el-input v-model="row.col5" /></td>
          <td><el-input v-model="row.col6" /></td>
          <!-- <el-input v-model="input" placeholder="Please input" /> -->
        </tr>
      </tbody>
    </table>
    <button @click="addRow">添加行</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 使用 defineProps 接收父组件传递的属性
const props = defineProps({
  componentInfo: {
    type: Object,
    default: () => ({})
  },
  dtcData: {
    type: Object,
    default: () => ({})
  },
  nodeData: {
    type: Object,
    default: () => ({})
  },
  isEdit: {
    type: Boolean,
    default: false
  }
});

// 计算容器样式
const containerStyle = computed(() => {
  const { component_attrs = {} } = props.componentInfo;
  const { style = {} } = component_attrs;
  return {
    border: style.outsideBorderCustom,
    height: style.height,
    width: style.width
  };
});

// 计算表格样式
const tableStyle = computed(() => {
  const { component_attrs = {} } = props.componentInfo;
  const { style = {} } = component_attrs;
  return {
    '--dtc-fixed-table-border': style.insideBorderCustom
  };
});

// 解构 dtcData 时添加默认值，避免报错
const { taskFormInfo, searchOpts, taskInfo, dtcSettingInfo, taskItem } = props.dtcData || {};

// 表格数据
const tableData = ref([
  { col1: '', col2: '', col3: '', col4: '', col5: '' ,col6:''}
  // { col1: '', col2: '', col3: '', col4: ''}
]);

// 添加行的方法
const addRow = () => {
  tableData.value.push({ col1: '', col2: '', col3: '', col4: '', col5: '' ,col6:'' });
  // tableData.value.push({ col1: '', col2: '', col3: '', col4: ''});

};
</script>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
  /* display: flex; */
  justify-content: center;
   /* 水平居中 */
  align-items: center; 
  /* 垂直居中 */
}

.table th,
.table td {
  border: var(--dtc-fixed-table-border, 1px solid #ccc);
  padding: 8px;
  text-align: left;
}

button {
  margin-top: 10px;
}

input {
  width: 100%;
  box-sizing: border-box;
}
</style>    