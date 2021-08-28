<template>
  <q-page class="bg-image">
    <q-page-container class="">

<div class="flex flex-center absolute-right q-pa-xl ">
      <q-card flat class=" flex flex-center  ">
      <div class="q-pa-lg">

        <div>

          <div class="text-center text-h4 text-bold text-italic text-pink-10">L O G I N H E R E</div>
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
