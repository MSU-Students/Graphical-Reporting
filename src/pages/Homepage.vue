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
      name: 'religion',
      align: 'center',
      label: 'Religion',
      field: 'religion',
    },
    {
      name: 'tribe',
      align: 'center',
      label: 'Tribe',
      field: 'tribe',
    },
    { name: 'nationality', align: 'center', label: 'Nationality', field: 'nationality' },
    { name: 'birthday', align: 'center', label: 'Birthday', field: 'birthday' },
    { name: 'birthplace', align: 'center', label: 'Birthplace', field: 'birthplace' },
    {
      name: 'father',
      align: 'center',
      label: 'Father',
      field: 'father',
    },
     {
      name: 'mother',
      align: 'center',
      label: 'Mother',
      field: 'mother',
    },
     {
      name: 'degree',
      align: 'center',
      label: 'Degree',
      field: 'degree',
    },
     {
      name: ' yearlevel',
      align: 'center',
      label: 'Year Level',
      field: 'yearlevel',
    },
     {
      name: 'academicadviser',
      align: 'center',
      label: 'Academic Adviser',
      field: 'academicadviser',
    },
     {
      name: 'scholarship',
      align: 'center',
      label: 'Scholarship',
      field: 'scholarship',
    },
     {
      name: 'academicstatus',
      align: 'center',
      label: 'Academic Status',
      field: 'academicstatus',
    },
     {
      name: 'admitted',
      align: 'center',
      label: 'Admitted',
      field: 'admitted',
    },
     {
      name: 'homeaddress',
      align: 'center',
      label: 'Home Address',
      field: 'homeaddress',
    },
     {
      name: 'campusaddress',
      align: 'center',
      label: 'Campus Address',
      field: 'campusaddress',
    },
     {
      name: 'mobilenumber',
      align: 'center',
      label: 'Mobile Number',
      field: 'mobilenumber',
    },
     {
       name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
     {
      name: 'familyannualincome',
      align: 'center',
      label: 'Family Annual Income',
      field: 'familyannualincome',
    },
   ];
  rows = [
    {
      name: 'kim soo hyun',
      religion: 'Islam',
      tribe: 'Mranao',
     nationality:'Filipino',
  birthday: 'April 11, 1999',
  birthplace: 'Marawi City',
  father: 'Mohammad Sani',
  mother: 'Noraida Indad',
  degree: 'BS Information System',
  yearlevel: '3rd year',
  academicadviser: 'MAMA, Jasmin',
  scholarship: 'NONE',
  academicstatus: 'Paying',
  admitted: '1st semester',
  homeaddress: 'saguiaran, LDS',
  campusaddress: 'MSU Campus, Marawi City',
  mobilenumber:'09876543111',
  familyannualincome: '00.00',
  email:'kimyohan03@gmail.com',
  Gender: 'Female',
    },
     {
      name: 'kim so hyun',
      religion: 'Islam',
      tribe: 'Mranao',
     nationality:'Filipino',
  birthday: 'April 11, 1999',
  birthplace: 'Marawi City',
  father: 'Mohammad Sani',
  mother: 'Noraida Indad',
  degree: 'BS Information System',
  yearlevel: '3rd year',
  academicadviser: 'MAMA, Jasmin',
  scholarship: 'NONE',
  academicstatus: 'Paying',
  admitted: '1st semester',
  homeaddress: 'saguiaran, LDS',
  campusaddress: 'MSU Campus, Marawi City',
  mobilenumber:'09876543111',
  familyannualincome: '00.00',
  email:'kimyohan03@gmail.com',
  Gender: 'Female',
    }

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
