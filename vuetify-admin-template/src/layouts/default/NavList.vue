<template>
  <v-list
    expand
    dense
    nav
  >
    <template v-for="(item, i) in items">
      <default-list-group
        v-if="item.items"
        :key="`group-${i}`"
        :item="item"
      />
      <default-list-item
        v-else
        :key="`item-${i}`"
        :item="item"
      />
    </template>
    <!-- v-for="item in items"
      :key="item.title" -->
  </v-list>
</template>

<script>
import DefaultListItem from './NavListItem.vue'
import DefaultListGroup from './NavListGroup.vue'

export default {
  name: 'DefaultDrawerList',
  components: {
    DefaultListItem: () => import(/* webpackChunkName: "views-default" */'./NavListItem.vue'),
    DefaultListGroup: () => import(/* webpackChunkName: "views-default" */'./NavListGroup.vue'),
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  }
}
</script>
