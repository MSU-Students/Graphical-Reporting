<template>
  <q-page class="bg-image">
    <q-page-container style="">
      <div class="flex flex-center absolute-right q-pr-xl">
        <q-card class="flex flex-center">
          <div class="q-pa-xl">
            <div>
              <div class="text-h4 text-bold text-pink-10">
                Login to Continue
              </div>

              <q-card-section>
                <q-form class="q-gutter-xl" style="width: 350px; height: 300px">
                  <q-input
                    v-model="text"
                    label="Username"
                    :rules="[
                      (val) => (val && val.length > 0) || 'Input your Username',
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="people" color="pink-10" />
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
                      <q-icon name="lock" color="pink-10" />
                    </template>
                  </q-input>

                  <div class="">
                    <q-btn
                      class="text-bold text-subtitle1 full-width"
                      color="white"
                      text-color="pink-10"
                      label="L o g i n"
                      @click="loginMe"
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
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { mapActions } from 'vuex';
@Options({
  methods: {
    ...mapActions('auth', ['login'])
  }
})
export default class LandingPage extends Vue {
  login!:(cred: {username:string, password:string}) => Promise<void>;
  text = '';
  password = '';
  isPwd = true;
  async loginMe() {
    try {
      await this.login({username: this.text, password: this.password});
      await this.$router.replace('/ManageStudentPage');
    } catch (e) {
      this.$q.notify({
        message: String(e)
      });

    }
  }
}
</script>
