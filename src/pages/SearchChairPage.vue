<template>
<q-page class="bg-image">
  <div class="text-h4 text-bold text-pink-10">
        <q-icon name="search" color="pink-10" style="font-size: 4rem" />
        Search
      </div>

  <div class="q-pa-xs">
    <q-table
      :rows="searchs"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[3]"
        selection="multiple"

        :filter="filter"
        grid
        hide-header
    >
     <template v-slot:top-left>
   <div class="q-pa-sm q-gutter-sm row">
          <q-input
            outlined
            rounded
            dense

            debounce="300"
            v-model="filter"
            placeholder="Search"
            color="pink-10"

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

              color="pink-10"
              icon="edit"
              size="sm"
              flat
              dense
              @click="onEditSearch(props.row)"
            />
                  <q-dialog v-model="activeUser" persistent>
                <q-card style="width: 700px">
                   <div class="text-h6" v-if="editRow"> <q-icon name="edit" color="pink-10" style="font-size: 4rem" /> Edit User</div>
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

                   <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.fname"
                            label="First Name"
                          />
                          </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.mname"
                            label="Middle Initial"
                          />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentSearch.lname" label="Last Name" />
                  </div>

                </q-card-section>
                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.religion"
                            label="Religion"
                          />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentSearch.tribe"
                    label="Tribe" />
                  </div>
                   <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.nationality"
                            label="Nationality"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.birthday"
                            type="date"
                            label="Date of Birth"
                          />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.birthplace"
                            label="Birthplace"
                          />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentSearch.father" label="Father" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentSearch.mother" label="Mother" />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.idNumber"
                            label="IDnumder"
                          />
                  </div>
                </q-card-section>

               <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input outlined v-model="presentSearch.degree" label="Degree" />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.yearLevel"
                            label="yearLevel"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.academicAdviser"
                            label="Academic Adviser"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.scholarship"
                            label="Scholarship"
                          />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.academicStatus"
                            label="Academic Status"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.admitted"
                            label="Admitted"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.homeAddress"
                            label="Home Address"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.campusAddress"
                            label="Campus Address"
                          />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.mobileNumber"
                            label="Mobile Number"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.email"
                            label="Email Address"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentSearch.familyAnnualIncome"
                            label="familyAnnualIncome"
                          />
                  </div>
                  <div class="col">
                    <q-select
                            outlined
                            v-model="presentSearch.gender"
                            :options="options"
                            label="gender"
                          />
                  </div>
                </q-card-section>

              <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Save" color="primary" @click="onSaveSearch" v-close-popup />
                </q-card-actions>
              </q-card>

              </q-dialog>
                 <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              dense
              @click="onDeleteSearch(props.row)"
            />
              />
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
                  <span class="q-ml-sm">Confirm Delete {{presentSearch.fname}}?</span>
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
              </q-card-actions>

              <q-separator />
              <q-list dense>
                <q-item
                  v-for="cols in props.cols.filter((cols) => cols.name !== 'desc')"
                  :key="cols.name"
                >
                  <q-item-section>
                    <q-item-label>{{ cols.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ cols.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </template>
    </q-table>
  </div>
</q-page>
</template>

<script lang="ts">
import { ISearchInfo } from 'src/store/search/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
  computed: {
    ...mapState('search', ['searchs', 'activeSearch'])
  },
  methods: {
    ...mapActions('search', [ 'editSearch', 'deleteSearch'])
  }
})
export default class ManageAccount extends Vue {

  searchs!:ISearchInfo[];
  editSearch!:(searcht:ISearchInfo) => Promise<void>;
  deleteSearch!:(Search:ISearchInfo) => Promise<void>;
 columns = [
   {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: ISearchInfo) => row.fname +' '+ row.lname +' '+ row.mname,
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

 confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  defaultSearch: ISearchInfo = {
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
  presentSearch = {...this.defaultSearch};
  filter = '';
  options = ['Male', 'Female'];

  onEditSearch(search:ISearchInfo) {
    this.presentSearch = {...search};
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteSearch(search:ISearchInfo) {
    this.presentSearch = {...search};
    this.confirmDelete = true;
  }

  async onSaveSearch() {

      await this.editSearch(this.presentSearch);

  }
  async onCofirmDelete() {
    await this.deleteSearch(this.presentSearch);
    this.confirmDelete = false;
  }
}
</script>

<style lang="sass"></style>

