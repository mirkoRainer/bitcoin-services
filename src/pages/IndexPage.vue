<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-sm">
      <q-btn :class="$q.dark.isActive ? 'q-pa-sm text-black' : 'q-pa-sm'" :color="$q.dark.isActive ? 'secondary' : 'primary'" @click="showHelpDialog = !showHelpDialog" icon="eva-github-outline" label="Are we missing something?"/>
    </div>
    <q-dialog v-model="showHelpDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">What are we missing?</div>
        </q-card-section>

        <q-card-section class="q-pa-sm">
          <div class="q-pa-sm">
            <q-icon name="eva-github" />
            <a href="https://github.com/mirkoRainer/bitcoin-services/issues/new" target="_blank">Visit our GitHub and file an issue</a> to request new information to be added.
          </div>
          <q-separator />
          <div class="q-pa-sm">
            Or email gary@codechief.dev with any requests.
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-table
      :fullscreen="isFullscreen"
      :columns="columns"
      :rows="data"
      style="width: 90vw"
      :pagination="pagination"
      grid
    >
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section :class="$q.dark.isActive ? 'text-center text-h3 bg-secondary text-black' : 'text-center text-h3 bg-primary text-white'">
              <strong>{{ props.row.name }}</strong>
            </q-card-section>
              <q-card-section class="flex flex-center q-pa-sm">
                <div :class="$q.dark.isActive ? 'text-center text-white' :'text-center'"><a  :class="$q.dark.isActive ? 'text-white' :''" :href="props.row.url">{{ props.row.url }}</a></div>
              </q-card-section>
            <q-separator />
            <q-card-section class="flex flex-center">
              <div class="text-center">{{ props.row.description }}</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pa-sm">
              <div class="flex q-pa-sm">
                <div class="flex content-center">Locales:</div>
              </div>
              <div class="row">
                <div class="text-center q-pa-sm flex" v-for="locale in props.row.locales" :key="locale">
                  <q-chip :class="$q.dark.isActive ? 'bg-secondary text-black' : 'bg-primary text-white'">{{ Locale[locale] }}</q-chip>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <div class="flex q-pa-sm">
                <div class="flex content-center">Category:</div>
              </div>
              <div class="row">
                <div class="text-center q-pa-sm flex" v-for="category in props.row.categories" :key="category">
                  <q-chip :class="$q.dark.isActive ? 'bg-secondary text-black' : 'bg-primary text-white'">{{ ServiceCategory[category] }}</q-chip>
                </div>
              </div>
            </q-card-section>

          </q-card>
        </div>
      </template>
      </q-table>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { Locale, ServiceCategory } from 'src/components/models';
import { data } from 'src/data/data';
import { defineComponent, ref } from 'vue';

const columns = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    required: true,
    align: 'left',
    sortable: true,
    headerStyle: 'width: 500px',
  },
  {
    name: 'description',
    label: 'Description',
    field: 'description',
    required: true,
    align: 'left',
    sortable: false,
    style: 'width: 80vw'
  },
  {
    name: 'url',
    label: 'Website Link',
    field: 'url',
    required: true,
    align: 'left',
    sortable: false,
  },
  {
    name: 'locales',
    label: 'Locales',
    field: 'locales',
    required: true,
    align: 'left',
    sortable: true,
  },
  {
    name: 'categories',
    label: 'Categories',
    field: 'categories',
    required: true,
    align: 'left',
    sortable: true,
  },
]

const pagination = {
    sortBy: 'desc',
    descending: false,
    rowsPerPage: 25
}

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const isFullscreen = ref(false);
    const $q = useQuasar();
    const showHelpDialog = ref(false);

    return {
      isFullscreen,
      columns,
      data,
      pagination,
      Locale,
      ServiceCategory,
      $q,
      showHelpDialog
    };
  }
});
</script>
