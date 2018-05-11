<template>
  <div class="user-menaga-container">
    <userinfo-table :tableColumn="tableColumn" :tableData="userList" />
  </div>  
</template>

<script>
import Table from '@/components/table.vue'
import { mapActions, mapGetters } from 'vuex'
const tableColumn = [
  {
    prop: 'username',
    label: '用户名',
  },{
    prop: 'roles',
    label: '角色',
  },{
    prop: 'roleTypes',
    label: '角色类型',
  },{
    prop: 'organization',
    label: '所属机构',
  }
]
export default {
  name: 'UserMenaga',
  components: {
    'userinfo-table': Table
  },
  data() {
    return {
      tableColumn: tableColumn
    }
  },
  computed: {
    ...mapGetters(['userList'])
  },
  mounted() {
    this.$store.dispatch('userListRequest')
  }
}
</script>
