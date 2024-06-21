<script setup>
import { createApp } from 'vue';
import { SignIn, clerkPlugin } from 'vue-clerk';
import app from '../../vue-main';

app.mount('#app');
</script>

<template>
  <div id="app">
    <SignIn path="/sign-in" routing="path" sign-up-url="/sign-up" />
  </div>
</template>

<style is:global></style>
