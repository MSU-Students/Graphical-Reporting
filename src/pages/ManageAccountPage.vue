<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold">
      <q-icon
        name="account_circle"
        color="light-blue-6"
        style="font-size: 4rem"
      />
      Manage Account
    </div>

    <br />

    <q-table
      title="Account List"
      :rows="admins"
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
            @click="onNewAdmin()"
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
              @click="onEditAdmin(props.row)"
            />
            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow"> <q-icon name="edit" color="pink-10" style="font-size: 4rem" /> Edit User</div>
                  <div class="text-h6" v-else> <q-icon name="add" color="pink-10" style="font-size: 4rem" /> New User </div>
                  <q-space />
                  <q-btn flat dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input outlined v-model="presentAdmin.Fname" label="First Name" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentAdmin.Mname" label="Middle Name" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentAdmin.Lname" label="Last Name" />
                  </div>
                </q-card-section>
                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input outlined v-model="presentAdmin.username" label="Username" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="presentAdmin.password" label="Password" />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentAdmin.idNumber"
                            label="IDnumder"
                          />
                  </div>
                  <div class="col">
                    <q-input
                            outlined
                            v-model="presentAdmin.dateCreated"
                            type="date"
                            label="Date Created"
                          />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="presentAdmin.email"
                      label="Email"
                      type="email"
                    />
                  </div>
                  <div class="col">
                    <q-select
                      outlined
                      v-model="presentAdmin.role"
                      :options="options"
                      label="Roles"
                    />
                  </div>
                  <div class="col">
                    <q-select
                      outlined
                      v-model="presentAdmin.status"
                      :options="option"
                      label="Status"
                    />
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Save" color="primary" @click="onSaveAdmin" v-close-popup />
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
              @click="onDeleteAdmin(props.row)"
            />
            <q-dialog v-model="confirmDelete" persistent>
              <q-card style="width: 300px">
                <q-card-section class="row items-center">
                  <q-avatar
                    size="sm"
                    icon="warning"
                    color="red-10"
                    text-color="white"
                  />
                  <span class="q-ml-sm">Confirm Delete {{presentAdmin.Fname}}?</span>
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
import { IAdminInfo } from 'src/store/admin/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
  computed: {
    ...mapState('admin', ['admins', 'activeAdmin'])
  },
  methods: {
    ...mapActions('admin', ['newAdmin', 'editAdmin', 'deleteAdmin'])
  }
})
export default class ManageAccount extends Vue {

  admins!:IAdminInfo[];
  newAdmin!:(admin:IAdminInfo) => Promise<void>;
  editAdmin!:(admin:IAdminInfo) => Promise<void>;
  deleteAdmin!:(admin:IAdminInfo) => Promise<void>;
  columns = [
    {
     name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: IAdminInfo) => row.Fname +' '+ row.Lname +' '+ row.Mname,
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
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  defaultAdmin: IAdminInfo = {
  idNumber : '',
  Fname : '',
  Mname : '',
  Lname : '',
  username : '',
  password : '',
  email : '',
  status:'Active',
  dateCreated: '',
  role : 'Chairperson',
}
  presentAdmin = {...this.defaultAdmin};
  filter = '';
  options = ['Admin', 'Chairperson'];
  option = ['Active', 'Inactive'];

  onNewAdmin() {
    this.presentAdmin =  {...this.defaultAdmin};
    this.editRow = false;
    this.activeUser = true;
  }

  onEditAdmin(admin:IAdminInfo) {
    this.presentAdmin = {...admin};
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteAdmin(admin:IAdminInfo) {
    this.presentAdmin = {...admin};
    this.confirmDelete = true;
  }

  async onSaveAdmin() {
    if (!this.editRow) {
      await this.newAdmin(this.presentAdmin);
    } else {
      await this.editAdmin(this.presentAdmin);
    }
  }
  async onCofirmDelete() {
    await this.deleteAdmin(this.presentAdmin);
    this.confirmDelete = false;
  }
}
</script>
