<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'">
        <q-toolbar-title :class="$q.dark.isActive ? 'text-black' : 'text-white'">
          BitcoinServices.info
        </q-toolbar-title>
          <p :class="$q.dark.isActive ? 'text-subtitle1 q-mr-sm q-mt-lg text-black' : 'text-subtitle1 q-mr-sm q-mt-lg'">A pleb community currated list of <strong>Bitcoin only</strong> services.</p>
        <q-btn :color="dark ? 'primary' : 'black'" @click="toggle">{{ dark ? 'Light' : 'Dark' }}</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',


  setup () {
    const $q = useQuasar();
    const dark = ref($q.dark.isActive);
    watch(() => $q.dark.isActive, (val:boolean) => {
      dark.value = val;
    })
    function toggle() {
      $q.dark.toggle();
    }
    return {
      dark,
      toggle
    }
  }
});
</script>
