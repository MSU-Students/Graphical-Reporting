<template>
  <q-page class="bg-image">
    <div class="text-center text-h3 text-bold text-arial text-brown q-pt-lg">
      Welcome To The MSU Student Management System with Data Driven Graphical
      Reporting
    </div>

    <div class="text-center text-h6 text-arial text-brown q-pa-lg">
      This project will show a graphical report of General Enrollment Statistic,
      General Graduate Statistic, General Grade Statistic, General GPA
      Statistic, General CGPA Statistic, General Dropout Statistic, General INC
      Statistic, General Failing Grade Statistic, demographical, gender, course,
      address.
    </div>
    <div>
      <div class="q-pa-md q-gutter-md flex flex-center">
        <q-btn-toggle
          v-model="model"
          toggle-color="primary"
          to="Login"
          flat
          :options="[{ label: 'Read More' }]"
        />
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      model: '',
    };
  },
};
</script>
