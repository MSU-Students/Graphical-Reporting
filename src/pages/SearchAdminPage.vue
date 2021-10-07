<template>
  <div class="q-pa-md">
    <q-table
      grid
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
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
     { name: 'Password', align: 'center', label: 'Password', field: 'Password' },
    {
      name: 'lastLogin',
      align: 'center',
      label: 'Last Login',
      field: 'lastLogin',
    },
  ];
 rows = [
    {
      name: 'kim soo hyun',
      email: 'soohyun01@gmail.com',
      dateCreated: 'December 01, 1999',
      role: 'Admin',
      status: 'Active',
      lastLogin: '05 / 10 / 2021',
      Password: 'p@ssw0rd',
    },
    {
      name: 'kim yo han',
      email: 'kimyohan03@gmail.com',
      dateCreated: 'July 05, 1999',
      role: 'Admin',
      status: 'Active',
      lastLogin: '02 / 10 / 2021',
      Password: 'p@ssw0rd',
    },
    {
      name: 'han hyun seo',
      email: 'hyunseo05@gmail.com',
      dateCreated: 'May 08, 1998',
      role: 'Admin',
      status: 'Active',
      lastLogin: '03 / 09 / 2021',
      Password: 'p@ssw0rd',
    },
  ];

  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  fname ='';
  lname ='';
  mname ='';
  username ='';
  password ='';
  email ='';
  role ='';
  filter ='';
  options = ['Admin', 'Cashier'];
  option = ['Inactive', 'Active'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>

