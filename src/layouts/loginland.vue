<template>
  <q-layout view="lHh Lpr lFf ">
    <q-header elevated> </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.bg-image {
  background-image: url(../assets/image/Capture.png);
  background-blend-mode: overlay;
  background-position: center;
  background-color: rgb(rgb(29, 28, 28));
  background-size: 100%;
}
</style>
