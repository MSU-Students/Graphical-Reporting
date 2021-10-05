<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold text-pink-10">
      <q-icon name="account_circle" color="pink-10" style="font-size: 4rem" />
      Manage Student
    </div>

    <br />

    <q-table
      title="Account List"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
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
              <q-icon name="search" color="pink-10" />
            </template>
          </q-input>
        </div>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <div>
            <q-td>
              <q-btn
                color="pink-10"
                dense
                flat
                size="sm"
                icon="add"
                @click="addUser = true"
              />
              <q-dialog v-model="addUser" persistent>
                <q-card style="width: 350px">
                  <q-card-section>
                    <div class="text-h6">Add User</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-md">
                    <q-input outlined v-model="fname" label="First Name" />
                    <q-input outlined v-model="lname" label="Middle Initial" />
                    <q-input outlined v-model="mname" label="Last Name" />
                    <q-input outlined v-model="Religion" label="Religion" />
                    <q-input outlined v-model="Tribe" label="Tribe" />
                    <q-input
                      outlined
                      v-model="Nationality"
                      label="Nationality"
                    />
                    <q-input outlined v-model="Birthday" label="Birthday" />
                    <q-input outlined v-model="Birthplace" label="Birthplace" />
                    <q-input outlined v-model="Father" label="Father" />
                    <q-input outlined v-model="Mother" label="Mother" />
                    <q-input outlined v-model="IDnumder" label="IDnumder" />
                    <q-input outlined v-model="Degree" label="Degree" />
                    <q-input outlined v-model="YearLevel" label="YearLevel" />
                    <q-input
                      outlined
                      v-model="AcademicAdviser"
                      label="AcademicAdviser"
                    />
                    <q-input
                      outlined
                      v-model="Scholarship"
                      label="Scholarship"
                    />
                    <q-input
                      outlined
                      v-model="AcademicStatus"
                      label="AcademicStatus"
                    />
                    <q-input outlined v-model="Admitted" label="Admitted" />
                    <q-input
                      outlined
                      v-model="HomeAddress"
                      label="HomeAddress"
                    />
                    <q-input
                      outlined
                      v-model="CampusAddress"
                      label="CampusAddress"
                    />
                    <q-input
                      outlined
                      v-model="MobileNumber"
                      label="MobileNumber"
                    />
                    <q-input
                      outlined
                      v-model="EmailAddress"
                      label="EmailAddress"
                    />
                    <q-input
                      outlined
                      v-model="FamilyAnnualIncome"
                      label="FamilyAnnualIncome"
                    />
                    <q-input
                      outlined
                      v-model="email"
                      label="Email"
                      type="email"
                    />
                    <q-select
                      outlined
                      v-model="Gender"
                      :options="options"
                      label="Gender"
                    />
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="red-10" v-close-popup />
                    <q-btn flat label="Save" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-btn
                round
                color="pink-10"
                icon="edit"
                size="sm"
                class="q-ml-sm"
                flat
                dense
                @click="editRow = true"
              />
              <q-dialog v-model="editRow" persistent>
                <q-card style="width: 350px">
                  <q-card-section class="row">
                    <div class="text-h6">Edit User</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-md">
                    <q-input outlined v-model="fname" label="First Name" />
                    <q-input outlined v-model="lname" label="Middle Initial" />
                    <q-input outlined v-model="mname" label="Last Name" />
                    <q-input outlined v-model="Religion" label="Religion" />
                    <q-input outlined v-model="Tribe" label="Tribe" />
                    <q-input
                      outlined
                      v-model="Nationality"
                      label="Nationality"
                    />
                    <q-input outlined v-model="Birthday" label="Birthday" />
                    <q-input outlined v-model="Birthplace" label="Birthplace" />
                    <q-input outlined v-model="Father" label="Father" />
                    <q-input outlined v-model="Mother" label="Mother" />
                    <q-input outlined v-model="IDnumder" label="IDnumder" />
                    <q-input outlined v-model="Degree" label="Degree" />
                    <q-input outlined v-model="YearLevel" label="YearLevel" />
                    <q-input
                      outlined
                      v-model="AcademicAdviser"
                      label="AcademicAdviser"
                    />
                    <q-input
                      outlined
                      v-model="Scholarship"
                      label="Scholarship"
                    />
                    <q-input
                      outlined
                      v-model="AcademicStatus"
                      label="AcademicStatus"
                    />
                    <q-input outlined v-model="Admitted" label="Admitted" />
                    <q-input
                      outlined
                      v-model="HomeAddress"
                      label="HomeAddress"
                    />
                    <q-input
                      outlined
                      v-model="CampusAddress"
                      label="CampusAddress"
                    />
                    <q-input
                      outlined
                      v-model="MobileNumber"
                      label="MobileNumber"
                    />
                    <q-input
                      outlined
                      v-model="EmailAddress"
                      label="EmailAddress"
                    />
                    <q-input
                      outlined
                      v-model="FamilyAnnualIncome"
                      label="FamilyAnnualIncome"
                    />
                    <q-input
                      outlined
                      v-model="email"
                      label="Email"
                      type="email"
                    />
                    <q-select
                      outlined
                      v-model="Gender"
                      :options="options"
                      label="Gender"
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
                size="sm"
                class="q-ml-sm"
                flat
                round
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
            </q-td>
          </div>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
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
  fname = '';
  lname = '';
  mname = '';
  Religion = '';
  Tribe = '';
  Nationality = '';
  Birthday = '';
  Birthplace = '';
  Father = '';
  Mother = '';
  IDnumder = '';
  Degree = '';
  YearLevel = '';
  AcademicAdviser = '';
  Scholarship = '';
  AcademicStatus = '';
  Admitted = '';
  HomeAddress = '';
  CampusAddress = '';
  MobileNumber = '';
  EmailAddress = '';
  FamilyAnnualIncome = '';
  email = '';
  Gender = '';
  filter = '';
  options = ['Admin', 'Cashier'];
  option = ['Inactive', 'Active'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
