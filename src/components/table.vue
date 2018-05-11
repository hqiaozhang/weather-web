<template>
  <div class="table-container">
    <div class="operation-button">
      <span>新增用户<i class="el-icon-circle-plus-outline" /></span>
      <span>编辑用户<i class="el-icon-edit" /></span>
      <span>删除用户<i class="el-icon-delete" /></span>
    </div>
  <el-table
    :data="tableData"
    stripe
    @select="handleSelect"
    
    style="width: 100%">
    <el-table-column
      type="selection"
      :setCurrentRow="setCurrentRow"
      width="55" />
    <el-table-column 
      v-for="(item, index) in tableColumn"
      :key="index"
      :prop="item.prop"
      :label="item.label"
    />
  </el-table>
  </div> 
</template>

<script>
  export default {
    name: 'Table',
    props: {
      tableData: Array,
      tableColumn: Array
    },
    data() {
      return {
        selectKey: ''
      }
    },
    methods: {
      handleSelect(selection)  {
        selection = [selection.pop()]
        console.log(selection)
      },
      setCurrentRow(row) {
        console.log(row)
      }
    }
  }
</script>

<style lang="scss" scoped>
.table-container {
  .operation-button {
    margin-bottom: 20px;
    color: #006eea;
    span {
      padding-right: 20px;
      cursor: pointer;
      i {
        margin-left: 10px;
      }
    }
  }
}
</style>
