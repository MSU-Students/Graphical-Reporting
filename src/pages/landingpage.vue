<template>
  <q-page class="bg-image">
    <!-- <q-card flat class="bg-transparent absolute-center">
      <div class="text-h3 flex flex-center q-ml-xl">
        MSU Student Management System with Data Driven Graphical Reporting
      </div>
      <div class="text-subtitle1 flex flex-center">
        This project will show a graphical report of General Enrollment
        Statistic, General Graduate Statistic, General Grade Statistic, General
        GPA Statistic, General CGPA Statistic, General Dropout Statistic,
        General INC Statistic, General Failing Grade Statistic, demographical,
        gender, course, address
      </div>
    </q-card> -->

    <q-page-container class="bg-transparent">
      <div class=" text-center text-h3 text-bold text-arial text-brown q-pt-xl">
      Welcome To The MSU Student Management System with Data Driven Graphical
      Reporting
    </div>
    <q-card flat class=" flex flex-center q-pa-s">
    <div class="text-center flex flex-center text-h6 text-arial text-orange-10 q-pa-md">
      This project will show a graphical report of General Enrollment Statistic,
      General Graduate Statistic, General Grade Statistic, General GPA
      Statistic, General CGPA Statistic, General Dropout Statistic, General INC
      Statistic, General Failing Grade Statistic, demographical, gender, course,
      address.
    </div>
    </q-card>
    <div class="flex flex-center q-pa-lg">
      <q-btn
      to="Login"

      >
        Proceed

      </q-btn>
    </div>
    </q-page-container>

  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
