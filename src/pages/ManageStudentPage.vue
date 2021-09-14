<template>
  <div class="q-pa-md">
    <q-table
      title="Account List"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
  </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
interface IRow {
  name: string;
}
@Options({})
export default class ManageAccount extends Vue {
  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
    {
      name: 'dateCreated',
      align: 'center',
      label: 'Date Created',
      field: 'dateCreated',
    },
    { name: 'role', align: 'center', label: 'Role', field: 'role' },
    { name: 'status', align: 'center', label: 'Status', field: 'status' },
    {
      name: 'lastLogin',
      align: 'center',
      label: 'Last Login',
      field: 'lastLogin',
    },
  ];
  rows = [
    {
      name: 'Basam C. Serad',
      email: 'basamserad1998@gmail.com',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
      lastLogin: '11 / 11 / 2001',
    },
    {
      name: 'Basem C. Serad',
      email: 'basamserad1998@gmail.com',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
      lastLogin: '11 / 11 / 2001',
    },
    {
      name: 'Arefa C. Serad',
      email: 'basamserad1998@gmail.com',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
      lastLogin: '11 / 11 / 2001',
    },
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  name = '';
  username = '';
  password = '';
  email = '';
  role = '';
  filter = '';
  options = ['Admin', 'Cashier'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
