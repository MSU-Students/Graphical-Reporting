<template>
  <q-page class="bg-image">

    <div class="flex flex-center q-pt-xl ">
      <q-card flat class=" flex flex-center  bg-orange-2">
      <div class="q-pa-md">

        <div>

          <div class="text-center text-h4 text-bold text-italic text-orange-10">L O G I N</div>
          <div class="q-pa-md" >
            <q-input filled v-model="text" label="Email" />
            <div class="q-pa-md row items-start" >
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
            <div class="flex flex-center">
            <q-btn
              outline
              rounded
              color="primary"
              label="login"
              to="landingpage"
            />
            </div>
          </div>

        </div>
      </div>
</q-card>
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
