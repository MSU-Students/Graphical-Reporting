<template>
  <div class="q-pa-xl flex flex-center">
    <div class="q-gutter-xl">
      <q-card class="flex flex-center" style="width: 500px; height: 500px">
        <div>
          <div></div>
          <div class="text-center text-h text-bold text-italic">
            W E L C O M E
          </div>
          <div class="q-pa-md" style="width: 300px">
            <q-input outlined v-model="text" label="Email" />

            <div
              class="q-gutter-xl row items-start q-pa-xs"
              style="width: 600px"
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
              style="flex flex-center; "
            />
          </div>

        </div>

      </q-card>
    </div>
     <div class="q-pa-md">
    <div class="text-center text-h4 text-bold q-pa-lg"  >

    <div class="q-gutter-sm">
      <q-radio v-model="shape" val="Chairperson" label="CHAIRPERSON" />
      <q-radio v-model="shape" val="Admin" label="ADMIN" />

    </div>

    <div class="q-px-sm">
      Your selection is: <strong>{{ shape }}</strong>
    </div>
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
      shape: '',
    };
  },
};
</script>
