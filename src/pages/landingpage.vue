<template>
  <q-page class="bg-image">
    <div class="flex flex-center q-pl-xl" style="max-width: 350px">
      <q-list bordered class="rounded-borders q-pl-lg text-blue">
        <q-expansion-item
          icon="perm_identity"
          label="About System"
          caption="Rohma S. Carim"
        >
          <q-card>
            <q-card-section>
              This capstone project entitled “MSU Student Management System with
              Data Driven Graphical Reporting” is a software development project
              focused on the improvement and development of a software that will
              automate the current paper-based records, direct access all
              aspects of a student’s information and data-driven graphical
              report.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>

    <q-page-container class="">
      <div class="flex flex-center absolute-right q-pr-xl">
        <q-card class="flex flex-center">
          <div class="q-pa-lg">
            <div>
              <div class="text-h4 text-bold text-pink-10">
                Login to Continue
              </div>

               <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                v-model="text"
                label="Username"
                :rules="[
                  (val) => (val && val.length > 0) || 'Input your Username',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="people"
                  color="pink-10" />
                </template>
              </q-input>

              <q-input
                v-model="password"
                label="Password"
                :type="isPwd ? 'password' : 'text'"
                :rules="[
                  (val) => (val && val.length > 0) || 'Input your password',
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                    color="pink-10"
                  />
                </template>
                <template v-slot:prepend>
                  <q-icon name="lock"
                  color="pink-10"/>
                </template>
              </q-input>

              <div>
                <q-btn
                  class="full-width"
                  label="Login"
                  color="pink-10"
                  size="md"

                />
              </div>
            </q-form>
          </q-card-section>

</div>
          </div>
        </q-card>
      </div>
    </q-page-container>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      text: '',
      password: '',
      isPwd: true,
    };
  },
};
</script>
