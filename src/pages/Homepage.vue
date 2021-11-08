<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[3]"
        selection="multiple"
        :filter="filter"
        grid
        hide-header
    >
    <template v-slot:top-right>
   <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense

            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
          <template v-slot:append>
              <q-icon  name="search" color="pink-10" />
            </template>
            </q-input>

        </div>
    </template>
       <template v-slot:item="props">
          <div
            class="
              q-pa-xs
              col-xs-12 col-sm-4 col-md-4 col-lg-4
              grid-style-transition
            "
            :style="props.selected ? 'transform: scale(0.95);' : ''"
          >
            <q-card :class="props.selected ? 'bg-grey-2' : ''">
              <q-card-actions align="between">
                <div>
                  {{ props.row.name }}
                </div>
                <div class="q-gutter-x-xs">
                  <q-btn
                color="primary"
                    icon="edit"
                    flat
                    round
                @click="editRow = true"
              />
                  <q-dialog v-model="editRow">
                <q-card style="width: 600px">
                  <q-card-section class="row">
                    <div class="text-h6">Edit User</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-md">
                    <q-input outlined v-model="fname" label="First Name" />
                    <q-input outlined v-model="lname" label="Middle Initial" />
                    <q-input outlined v-model="mname" label="Last Name" />
                    <q-input outlined v-model="username" label="Username" />
                    <q-input outlined v-model="password" label="Password" />
                    <q-input
                      outlined
                      v-model="email"
                      label="Email"
                      type="email"
                    />
                    <q-select
                      outlined
                      v-model="role"
                      :options="options"
                      label="Roles"
                    />
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="red-10" v-close-popup />
                    <q-btn flat label="Save" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
                 <q-btn
                color="red-10"
                icon="delete"


                flat

                dense
                @click="dialog = true"
              />
              <q-dialog v-model="dialog" persistent>
                <q-card style="width: 300px">
                  <q-card-section class="row items-center">
                    <q-avatar
                      size="sm"
                      icon="warning"
                      color="red-10"
                      text-color="white"
                    />
                    <span class="q-ml-sm">Confirm Delete?</span>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn
                      flat
                      label="Cancel"
                      color="primary"
                      v-close-popup="cancelEnabled"
                      :disable="!cancelEnabled"
                    />
                    <q-btn flat label="Confirm" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
</div>
              </q-card-actions>

              <q-separator />
              <q-list dense>
                <q-item
                  v-for="col in props.cols.filter((col) => col.name !== 'desc')"
                  :key="col.name"
                >
                  <q-item-section>
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
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
  options = ['Admin', 'Chairperson'];


  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
<style lang="sass"></style>

