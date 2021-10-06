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
                round
                size="sm"
                icon="add"

                @click="addUser = true"
              />
              <q-dialog v-model="addUser"  >
                <q-card style="width: 700px">
                 <q-toolbar>
            <q-avatar>
              <q-icon name="book_online" size="sm" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Add</span>
              Appointment</q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

                  <q-card-section class="q-gutter-md">

                    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="fname" label="First Name" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="lname" label="Middle Initial" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="mname" label="Last Name" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Religion" label="Religion" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Tribe" label="Tribe" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="Nationality"
                      label="Nationality"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Birthday" label="Birthday" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Birthplace" label="Birthplace" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Father" label="Father" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Mother" label="Mother" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="IDnumder" label="IDnumder" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Degree" label="Degree" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="YearLevel" label="YearLevel" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="AcademicAdviser"
                      label="AcademicAdviser"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="Scholarship"
                      label="Scholarship"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="AcademicStatus"
                      label="AcademicStatus"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Admitted" label="Admitted" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="HomeAddress"
                      label="HomeAddress"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="CampusAddress"
                      label="CampusAddress"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="MobileNumber"
                      label="MobileNumber"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="EmailAddress"
                      label="EmailAddress"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="FamilyAnnualIncome"
                      label="FamilyAnnualIncome"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="email"
                      label="Email"
                      type="email"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-select
                      outlined
                      v-model="Gender"
                      :options="options"
                      label="Gender"
                    />
                    </div>
                    </div>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="red-10" v-close-popup />
                    <q-btn flat label="Save" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-btn

                color="green-10"
                icon="edit"
                size="sm"
                class="q-ml-sm"
                dense
                round
                @click="editRow = true"
              />
              <q-dialog v-model="editRow" persistent>
                <q-card style="width: 700px">
                 <q-toolbar>
            <q-avatar>
              <q-icon name="book_online" size="sm" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Edit</span>
              Appointment</q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

                  <q-card-section class="q-gutter-md">

                    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="fname" label="First Name" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="lname" label="Middle Initial" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="mname" label="Last Name" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Religion" label="Religion" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Tribe" label="Tribe" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="Nationality"
                      label="Nationality"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Birthday" label="Birthday" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Birthplace" label="Birthplace" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Father" label="Father" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Mother" label="Mother" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="IDnumder" label="IDnumder" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Degree" label="Degree" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="YearLevel" label="YearLevel" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="AcademicAdviser"
                      label="AcademicAdviser"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="Scholarship"
                      label="Scholarship"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="AcademicStatus"
                      label="AcademicStatus"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input outlined v-model="Admitted" label="Admitted" />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="HomeAddress"
                      label="HomeAddress"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="CampusAddress"
                      label="CampusAddress"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="MobileNumber"
                      label="MobileNumber"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="EmailAddress"
                      label="EmailAddress"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="FamilyAnnualIncome"
                      label="FamilyAnnualIncome"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      v-model="email"
                      label="Email"
                      type="email"
                    />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <q-select
                      outlined
                      v-model="Gender"
                      :options="options"
                      label="Gender"
                    />
                    </div>
                    </div>
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
                dense
                round
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
