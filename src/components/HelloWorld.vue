<!--
 * @Author: 王伟斌
 * @Date: 2022-01-15 22:22:43
 * @LastEditors: 王伟斌
 * @LastEditTime: 2022-01-16 12:26:31
 * @FilePath: \20220115\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <el-table
      stripe
      border
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" width="55" />
      <el-table-column
        type="index"
        :index="indexMethod"
        align="center"
        label="序号"
        width="70"
      />
      <el-table-column label="日期" align="center" width="180">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" align="center" label="姓名" width="220" />
      <el-table-column
        prop="address"
        align="center"
        label="地址"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableDataList.length"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      pageSize: 10,
      tableDataList: [],
      tableData: [],
      multipleSelection: [],
      currentPage: 1,
      pagesNum: 1
    }
  },
  created () {
    this.getTime()
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleCurrentChange (val) {
      this.pagesNum = val
      const max = (val - 1) * this.pageSize + this.pageSize > this.tableDataList.length ? this.tableDataList.length : (val - 1) * this.pageSize + this.pageSize
      this.tableData = this.tableDataList.slice((val - 1) * this.pageSize, max)
    },
    getTime () {
      const list = []
      const time = new Date().getTime()
      for (let a = 0; a < 10205; a++) {
        list.push({
          date: new Date(time + 24 * a * 60 * 60 * 1000).toLocaleDateString(),
          name: `王伟斌_${a}`,
          address: `ADDRESS_${a}`
        })
      }
      this.tableDataList = list
      this.tableData = list.slice(0, this.pageSize)
    },
    indexMethod (index) {
      return index + 1 + this.pageSize * (this.pagesNum - 1)
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.tableData = this.tableDataList.slice(0, val)
    }
  }
}
</script>
<style>
.el-pagination{
  text-align: center;
}
</style>
