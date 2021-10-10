<template>

    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-pink-10">
        <q-toolbar>
          <q-toolbar-title>MSU Student Management System with Data Driven Graphical Reporting</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 180px); margin-top: 180px; border-right: 1px solid #ddd">
          <q-list padding>



            <q-item clickable v-ripple to="ManageAccountPage"  >
              <q-item-section avatar>
                <q-icon name="settings"  />
              </q-item-section>

              <q-item-section>
                Manage Account
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple to="ViewAccount" >
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                View Account
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="ViewStudentPage" >
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                View Student
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="SearchAdminPage">
              <q-item-section avatar>
                <q-icon name="search" />
              </q-item-section>

              <q-item-section>
                Search
              </q-item-section>
            </q-item>

              <q-item clickable v-ripple to="SummaryAdmin">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Summary </q-item-section>
          </q-item>

             <q-item clickable v-ripple to="landingpage">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Logout
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top " src="../assets/image/annie.jpg" style="height: 180px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-l">
              <img src="../assets/image/annie.jpg">
            </q-avatar>
            <div class="text-weight-bold">Admin Account</div>
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
  data () {
    return {
      drawer: false
    }
  }
}
</script>
