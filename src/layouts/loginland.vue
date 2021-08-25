<template>
  <q-layout view="lHh Lpr lFf ">

    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
   </q-page-container>
  </q-layout>

</template>


<style >
.bg-image{
  background-image: url(../assets/image/pexels.jpg);
  background-blend-mode: overlay;
  background-position: center;
  background-color: rgb(red, 50, 240);
  background-size: 100%;
}
</style>
