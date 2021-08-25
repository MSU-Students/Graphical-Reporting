<template>
  <div class="q-pa-md flex flex-center">
    <div class="q-gutter-s">
      <q-card class="flex flex-center" style="width: 500px; height: 500px">
        <div>
          <div></div>
          <div class="text-center text-h text-bold text-italic">
            W E L C O M E
          </div>
          <div class="q-pa-s" style="width: 300px">
            <q-input filled v-model="text" label="Email" />
            <div
              class="q-pa-md row items-start q-pa-md"
              style="width: 300px"
            >
              <q-input
                rounded
                outlined
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
              style="flex flex-center "

            />
          </div>

        </div>

      </q-card>
    </div>
  </div>
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
