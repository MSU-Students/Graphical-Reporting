<template>
  <div class="q-pa-md">
    <q-table
      grid
      title="Summary Table"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      :rows-per-page-options="[0]"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section class="text-center">
              Summary of
              <br>
              <strong>{{ props.row.name }}</strong>
            </q-card-section>
            <q-separator />
            <q-card-section class="flex flex-center" :style="{ fontSize: props.row.calories + 'px' }">
              <div>{{ props.row.email }} g</div>
            </q-card-section>
          </q-card>
        </div>
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

  ];
 rows = [
    {
      name: 'kim soo hyun',
      email: 'soohyun01@gmail.com',

    },
    {
      name: 'kim yo han',
      email: 'soohyun01@gmail.com',

    },
    {
      name: 'han hyun seo',
      email: 'soohyun01@gmail.com',

    },
    {
      name: 'kim weo suk',
      email: 'soohyun01@gmail.com',

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

