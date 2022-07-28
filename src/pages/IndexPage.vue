<template>
  <q-drawer
      v-model="drawerLeft"
      :width="200"
      :breakpoint="700"
      elevated
      class="bg-primary text-white"
    >
      <q-scroll-area :class="q$.dark.isActive ? 'fit bg-black' : 'fit'">
        <div class="q-pa-sm">
          <div class="q-gutter-sm">
            <div class="q-pa-sm text-h5">Locales</div>
            <div v-for="locale in locales" :key="locale">
              <q-checkbox dense v-model="filterLocales" :dark="q$.dark.isActive" :color="q$.dark.isActive ? 'secondary' : ''" :val="locale" :label="locale.toLocaleUpperCase()" />
            </div>
          </div>
        </div>
        <q-separator />
        <div class="q-pa-sm">
          <div class="q-gutter-sm">
            <div class="q-pa-sm text-h5">Categories</div>
            <div v-for="category in categories" :key="category">
              <q-checkbox dense v-model="filterCategories" :dark="q$.dark.isActive" :val="category" :label="category.toLocaleUpperCase()" />
            </div>
          </div>
        </div>
      </q-scroll-area>
  </q-drawer>
  <q-page class="column items-center justify-evenly flex">
    <div class="row fit justify-center">
      <div class="q-pa-sm">
        <q-btn :class="q$.dark.isActive ? 'q-pa-sm text-black' : 'q-pa-sm'" :color="q$.dark.isActive ? 'secondary' : 'primary'" @click="drawerLeft = !drawerLeft" :icon="drawerLeft ? 'eva-arrow-left-outline' : 'eva-arrow-right-outline'" label="Filter"/>
      </div>
      <div class="q-pa-sm">
        <q-btn :class="q$.dark.isActive ? 'q-pa-sm text-black' : 'q-pa-sm'" :color="q$.dark.isActive ? 'secondary' : 'primary'" @click="showHelpDialog = !showHelpDialog" icon="eva-github-outline" label="Are we missing something?"/>
      </div>
    </div>
    <q-dialog v-model="showHelpDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">What are we missing?</div>
        </q-card-section>

        <q-card-section class="q-pa-sm">
          <div class="q-pa-sm">
            <q-icon name="eva-github" />
            <a href="https://github.com/mirkoRainer/bitcoin-services/issues/new?assignees=mirkoRainer&labels=&template=new-service-request.md&title=" target="_blank">Visit our GitHub and file an issue</a> to request new information to be added.
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
    <div class="fit row">
        <div class="row items-center justify-center flex">
          <div v-for="row in rows" :key="row.name">
            <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4" style="width: 350px">
              <q-card>
                <q-card-section :class="q$.dark.isActive ? 'text-center text-h3 bg-secondary text-black' : 'text-center text-h3 bg-primary text-white'">
                  <strong>{{ row.name }}</strong>
                </q-card-section>
                <q-card-section class="flex flex-center q-pa-sm">
                  <div :class="q$.dark.isActive ? 'text-center text-white' :'text-center'"><a  :class="q$.dark.isActive ? 'text-white' :''" :href="row.url">{{ truncate(row.url) }}</a></div>
                </q-card-section>
                <q-separator />
                <q-card-section class="flex flex-center">
                  <div class="text-center">{{ row.description }}</div>
                </q-card-section>
                <q-separator />
                <q-card-section class="q-pa-none">
                  <div class="flex q-pb-none q-pt-sm q-pl-sm">
                    <div class="flex content-center">Locales:</div>
                  </div>
                  <div class="row">
                    <div class="text-center q-pa-none flex" v-for="locale in row.locales" :key="locale">
                      <q-chip :class="q$.dark.isActive ? 'bg-secondary text-black' : 'bg-primary text-white'">{{ Locale[locale] }}</q-chip>
                    </div>
                  </div>
                </q-card-section>
                <q-card-section class="q-pa-none">
                  <div class="flex q-pb-none q-pt-sm q-pl-sm">
                    <div class="flex content-center">Category:</div>
                  </div>
                  <div class="row">
                    <div class="text-center q-pa-none flex" v-for="category in row.categories" :key="category">
                      <q-chip :class="q$.dark.isActive ? 'bg-secondary text-black' : 'bg-primary text-white'">{{ ServiceCategory[category] }}</q-chip>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { Locale, Service, ServiceCategory } from 'src/components/models';
import { data } from 'src/data/data';
import { defineComponent, Ref, ref, watch } from 'vue';

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
    const q$ = useQuasar();
    const showHelpDialog = ref(false);
    const drawerLeft = ref(false);
    const locales = Object.keys(Locale).filter((v) => isNaN(Number(v)));
    const categories = Object.keys(ServiceCategory).filter((v) => isNaN(Number(v)));
    const filterLocales = ref(locales)
    const filterCategories = ref(categories);
    const rows = ref(data.sort((a, b) => a.name.localeCompare(b.name)));

    watch(filterLocales, () => {
      rows.value = data;
      rows.value = filterData(rows, filterLocales, filterCategories);
    })

    watch(filterCategories, () => {
      rows.value = data;
      rows.value = filterData(rows, filterLocales, filterCategories);
    })

    function filterData(array: Ref<Service[]>, localesFilter: Ref<string[]>, categoriesFilter: Ref<string[]>): Service[] {
      return array.value.filter(x => {
        const categoriesInFilter=x.categories.filter(y => categoriesFilter.value.indexOf(ServiceCategory[y])!==-1);
        const localeInFilter=x.locales.filter(y => localesFilter.value.indexOf(Locale[y])!==-1);
        return localeInFilter.length!=0 && categoriesInFilter.length!=0;
      });
    }

    function filter() {
      rows.value = filterData(rows, filterLocales, filterCategories).sort((a, b) => a.name.localeCompare(b.name));
    }

    function truncate(input:string) : string {
      const length = 40
      if (input.length > length) {
          return input.substring(0, length) + '...';
      }
      return input;
    }


    return {
      isFullscreen,
      columns,
      rows,
      pagination,
      Locale,
      ServiceCategory,
      q$,
      showHelpDialog,
      drawerLeft,
      filter,
      categories,
      locales,
      filterLocales,
      filterCategories,
      truncate
    };
  }
});
</script>


