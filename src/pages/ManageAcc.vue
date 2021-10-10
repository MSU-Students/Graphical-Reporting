<template>
  <q-page class="bg-image">
    <div class="q-pa-xl">
      <q-card class="bg-secondary">
        <q-card-section class="text-black">
          <div class="text-h7 text-bold">MSU Office of the Chancellor</div>
          <div class="text-h6 text-white">
            <q-icon name="arrow_upward" />
            ONGOING SCHEDULES
          </div>
        </q-card-section>
      </q-card>
      <q-btn
        color="black"
        text-color="white"
        label="Add Appointment"
        icon-right="add"
        @click="prompt = true"
      />
    </div>

    <div>
      <q-dialog v-model="prompt" persistent>
        <q-card style="width: 500px">
          <q-toolbar>
            <q-avatar>
              <q-icon name="book_online" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Add</span>
              Appointment</q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section class="q-gutter-y-sm">
            <q-input
              v-model="participant.name"
              dense
              outlined
              type="text"
              label="Employee Name"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              v-model="participant.appointmentDate"
              dense
              outlined
              label="Appointment Date"
            />
            <q-input
              v-model="participant.timeSlots"
              dense
              outlined
              label="Time Slots"
            />
            <q-input
              v-model="participant.purpose"
              dense
              outlined
              label="Purpose"
            />
            <q-input
              v-model="participant.clientName"
              dense
              outlined
              label="Client Name"
            />
            <q-input
              v-model="participant.phoneNumber"
              dense
              outlined
              label="Phone No."
            />
            <q-input
              v-model="participant.emailAdd"
              dense
              outlined
              label="Email"
            />
            <q-input v-model="participant.address"
            dense
            outlined
            label="Address" />

          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              color="green"
              label="Add Appointment"
              @click="addAppointment()"
            />
            <q-btn color="red" label="Cancel" @click="prompt = false" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="q-px-xl absolute-bottom">
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[3]"
        selection="multiple"
        v-model:selected="selected"
        :filter="filter"
        grid
        hide-header
      >
        <div class="q-pb-lg"></div>
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
                    @click="editAppointment()"
                  />
                  <q-btn
                    color="red"
                    icon="delete"
                    dense
                    flat
                    @click="deleteAppointment()"
                  />
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
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'name',
    align: 'center',
    label: 'Employee Name',
    field: 'name',
    sortable: true,
  },
  {
    name: 'appointmentDate',
    label: 'Appointment Date',
    field: 'appointmentDate',
    sortable: true,
  },
  {
    name: 'timeSlots',
    label: 'Time Slots',
    field: 'timeSlots'
  },
  {
    name: 'purpose',
    label: 'Purpose',
    field: 'purpose'
  },
  { name: 'clientName',
  label: 'Client Name',
  field: 'clientName'
  },
  {
    name: 'phoneNumber',
    label: 'Phone No.',
    field: 'phoneNumber',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'emailAdd',
    label: 'Email',
    field: 'emailAdd',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'address',
    label: 'Address',
    field: 'address',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: 'Azimah D. Ampuan',
    appointmentDate: 'September 21, 2021',
    timeSlots: '10:00AM-11:00AM',
    purpose: 'Academic concerns',
    clientName: 'Sahanie D. Ampuan',
    phoneNumber: '09615133065',
    emailAdd: 'ampuann98@gmail.com',
    address: 'Marawi City',
  },
];

export default {
  data() {
    return {
      prompt: false,
      address: '',
      filter: '',
      selected: [],
      columns,
      rows,
      participant: {
        name: '',
        appointmentDate: '',
        timeSlots: '',
        purpose: '',
        clientName: '',
        phoneNumber: '',
        emailAdd: '',
        address: '',
      },
    };
  },


};
</script>
<style lang="sass"></style>
