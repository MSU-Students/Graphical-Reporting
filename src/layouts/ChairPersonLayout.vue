<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-pink-10">
      <q-toolbar>
        <q-toolbar-title
          >MSUStudentManagementSystemwithDataDrivenGraphical
          Reporting</q-toolbar-title
        >
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 180px);
          margin-top: 180px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="ManageStudentPage">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section> Manage Student </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="ViewStudentChairPage">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> View Student </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="SearchChairPage">
            <q-item-section avatar>
              <q-icon name="search" />
            </q-item-section>

            <q-item-section> Search </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="trypage">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Summary </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="landingpage">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> Logout </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="../assets/image/suna.jpg"
        style="height: 180px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-lb-sm">
            <img src="../assets/image/suna.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Chairperson Account</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

