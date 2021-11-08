<template>

   <div class="q-pa-md">
    <div class="text-h4 text-bold text-pink-10">
      <q-icon name="inbox" color="pink-10" style="font-size: 4rem" />
      Manage Student
    </div>


    <br />

    <q-table
      class="my-sticky-column-table"
      title="Student List"
      :rows="students"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:top-right>
        <div class="q-pa-md q-gutter-sm row">
          <q-btn
            label="Add User"
            color="pink-10"
            dense
            flat
            icon="add"
            @click="onNewStudent()"
          />
          <q-input
            outlined
            rounded
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

        </div>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">

            <q-btn

              color="pink-10"
              icon="edit"
              size="sm"
              flat
              dense
              @click="onEditStudent(props.row)"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              dense
              @click="onDeleteStudent(props.row)"
            />
            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 1500px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow"> <q-icon name="edit" color="pink-10" style="font-size: 4rem" /> Edit User</div>
                  <div class="text-h6" v-else> <q-icon name="add" color="pink-10" style="font-size: 4rem" /> New User </div>
                  <q-space />
                  <q-btn flat dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.fname"
                            label="First Name"
                          />
                          </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.mname"
                            label="Middle Initial"
                          />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentStudent.lname" label="Last Name" />
                  </div>

                </q-card-section>
                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.religion"
                            label="Religion"
                          />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentStudent.tribe"
                    label="Tribe" />
                  </div>
                   <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.nationality"
                            label="Nationality"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.birthday"
                            type="date"
                            label="Date of Birth"
                          />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.birthplace"
                            label="Birthplace"
                          />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentStudent.father" label="Father" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentStudent.mother" label="Mother" />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.idNumber"
                            label="IDnumder"
                          />
                  </div>
                </q-card-section>

               <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input outlined v-model="presentStudent.degree" label="Degree" />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.yearLevel"
                            label="yearLevel"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.academicAdviser"
                            label="Academic Adviser"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.scholarship"
                            label="Scholarship"
                          />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.academicStatus"
                            label="Academic Status"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.admitted"
                            label="Admitted"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.homeAddress"
                            label="Home Address"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.campusAddress"
                            label="Campus Address"
                          />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.mobileNumber"
                            label="Mobile Number"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.email"
                            label="Email Address"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentStudent.familyAnnualIncome"
                            label="familyAnnualIncome"
                          />
                  </div>
                  <div class="col">
                    <q-select
                            outlined
                            v-model="presentStudent.gender"
                            :options="options"
                            label="gender"
                          />
                  </div>
                </q-card-section>

              <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Save" color="primary" @click="onSaveStudent" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <q-dialog v-model="confirmDelete" persistent>
              <q-card style="width: 300px">
                <q-card-section class="row items-center">
                  <q-avatar
                    size="sm"
                    icon="warning"
                    color="red-10"
                    text-color="white"
                    style="font-size: 4rem"
                  />
                  <span class="q-ml-sm">Confirm Delete {{presentStudent.fname}}?</span>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="Cancel"
                    color="primary"
                    v-close-popup="cancelEnabled"
                    :disable="!cancelEnabled"
                  />
                  <q-btn flat label="Confirm" @click="onCofirmDelete" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>

</template>
<script lang="ts">
import { IStudentInfo } from 'src/store/student/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
  computed: {
    ...mapState('student', ['students', 'activeStudent'])
  },
  methods: {
    ...mapActions('student', ['newStudent', 'editStudent', 'deleteStudent'])
  }
})
export default class ManageAccount extends Vue {

  //vuex properties
  students!:IStudentInfo[];
  newStudent!:(student:IStudentInfo) => Promise<void>;
  editStudent!:(student:IStudentInfo) => Promise<void>;
  deleteStudent!:(student:IStudentInfo) => Promise<void>;
  //local
   columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: IStudentInfo) => row.fname +' '+ row.lname +' '+ row.mname,
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
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  defaultStudent: IStudentInfo = {
    idNumber: '',
     fname: '',
    mname: '',
    lname: '',
    religion: 'Islam',
    tribe: 'Meranao',
    nationality: 'Filipino',
    birthday: '',
    birthplace: '',
    father: '',
    mother: '',
    degree: 'BS Information System',
    yearLevel: '',
    academicAdviser: 'MAMA, Jasmin',
    scholarship: 'NONE',
    academicStatus: 'Paying',
    admitted: '1st semester',
    homeAddress: '',
    campusAddress: '',
    mobileNumber: '',
    familyAnnualIncome: '00.00',
    email: '',
    gender: 'Female',
  }
  presentStudent = {...this.defaultStudent};
  filter = '';
  options = ['Male', 'Female'];

  onNewStudent() {
    this.presentStudent =  {...this.defaultStudent};
    this.editRow = false;
    this.activeUser = true;
  }

  onEditStudent(student:IStudentInfo) {
    this.presentStudent = {...student};
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteStudent(student:IStudentInfo) {
    this.presentStudent = {...student};
    this.confirmDelete = true;
  }

  async onSaveStudent() {
    if (!this.editRow) {
      await this.newStudent(this.presentStudent);
    } else {
      await this.editStudent(this.presentStudent);
    }
  }
  async onCofirmDelete() {
    await this.deleteStudent(this.presentStudent);
    this.confirmDelete = false;
  }
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
