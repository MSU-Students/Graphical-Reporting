<template>
  <q-page class="bg-image">
<div class="flex flex-center q-pl-xl  " style="max-width: 350px ">
    <q-list bordered class="rounded-borders q-pl-lg text-blue">
      <q-expansion-item

        icon="perm_identity"
        label="About System"
        caption="Rohma S. Carim"
     >
        <q-card  >
          <q-card-section>
            This capstone project entitled “MSU Student Management System with Data Driven
             Graphical Reporting” is a software development project focused on the improvement
              and development of a software that will automate the current paper-based records,
               direct access all aspects
            of a student’s information and data-driven graphical report.
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>

<div class=" flex flex-center q-pl-xl   " style="max-width: 350px ">
    <q-list bordered class="rounded-borders q-pl-lg text-blue">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Account settings"
        caption="John Doe"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>

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
              to="Homepage"
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
