<template>
<q-page class="bg-image">
  <div class="q-pa-md">
    <div class="text-h4 text-bold text-pink-10">
      <q-icon name="inbox" color="pink-10" style="font-size: 4rem" />
      View Student
    </div>

    <br />

    <q-table
    class="my-sticky-column-table"
      title="Student List"
      :rows="table"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"

    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            placeholder="Search"
            color="pink-10"
          >
            <template v-slot:append>
              <q-icon name="search" color="pink-10" />
            </template>
          </q-input>
        </div>
      </template>

    </q-table>
  </div>
</q-page>
</template>
<script lang="ts">
import { ITableInfo } from 'src/store/table/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
  computed: {
    ...mapState('table', ['table', 'activeTable'])
  },
  methods: {
    ...mapActions('table', ['newTable', 'editTablet', 'deleteTable'])
  }
})
export default class ManageAccount extends Vue {

  //vuex properties
  table!:ITableInfo[];
  newTable!:(student:ITableInfo) => Promise<void>;
  editTable!:(student:ITableInfo) => Promise<void>;
  deleteTable!:(student:ITableInfo) => Promise<void>;
  //local
   columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: ITableInfo) => row.fname +' '+ row.lname +' '+ row.mname,
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
    {
      name: 'nationality',
      align: 'center',
      label: 'Nationality',
      field: 'nationality',
    },
    { name: 'birthday', align: 'center', label: 'Birthday', field: 'birthday' },
    {
      name: 'birthplace',
      align: 'center',
      label: 'Birthplace',
      field: 'birthplace',
    },
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
      name: ' yearLevel',
      align: 'center',
      label: 'Year Level',
      field: 'yearLevel',
    },
    {
      name: 'academicAdviser',
      align: 'center',
      label: 'Academic Adviser',
      field: 'academicAdviser',
    },
    {
      name: 'scholarship',
      align: 'center',
      label: 'Scholarship',
      field: 'scholarship',
    },
    {
      name: 'academicStatus',
      align: 'center',
      label: 'Academic Status',
      field: 'academicStatus',
    },
    {
      name: 'admitted',
      align: 'center',
      label: 'Admitted',
      field: 'admitted',
    },
    {
      name: 'homeAddress',
      align: 'center',
      label: 'Home Address',
      field: 'homeAddress',
    },
    {
      name: 'campusAddress',
      align: 'center',
      label: 'Campus Address',
      field: 'campusAddress',
    },
    {
      name: 'mobileNumber',
      align: 'center',
      label: 'Mobile Number',
      field: 'mobileNumber',
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
    {
      name: 'familyAnnualIncome',
      align: 'center',
      label: 'Family Annual Income',
      field: 'familyAnnualIncome',
    },

  ];


}
</script>
<style lang="sass">
.my-sticky-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */


  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #fff

  td:first-child
    background-color: #f5f5dc

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>
