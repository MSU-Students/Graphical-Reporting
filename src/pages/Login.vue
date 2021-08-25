<template>
<q-page class = "bg-image">
  <div class="q-pa-md flex flex-center  ">
    <div class="q-gutter-s ">
      <q-card class="flex flex-center q-pt-md" style="width: 300px; height: 300px">
        <div>
          <div>
          </div>
          <div class="text-center text-h4 text-bold text-italic">
            L O G I N
          </div>
          <div class="q-pa-md" style="width: 300px">
            <q-input filled v-model="text" label="Email" />
            <div
              class="q-pa-md row items-start q-pa-md"
              style="width: 300px"
            >
              <q-input

                v-model="password"
                label="password"
                filled
                :type="isPwd ? 'password' : 'text'"
                hint=""
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>

            <q-btn
              outline
              rounded
              color="primary"
              label="login"
              to="landingpage"
            />


          </div>

        </div>


</q-card>
    </div>
  </div>
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
