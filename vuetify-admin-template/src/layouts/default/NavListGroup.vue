<template>
  <v-list-group :prepend-icon="item.icon">
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <template
      v-for="(child, i) in item.items"
    >
      <default-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <default-list-item
        v-else
        :key="`child-${i}`"
        :item="child"
      />
    </template>

    <v-divider />
  </v-list-group>
</template>

<script>
import DefaultListItem from './NavListItem.vue'
import DefaultListGroup from './NavListGroup.vue'

export default {
  name: 'DefaultListGroup',
  components: {
    DefaultListItem: () => import(/* webpackChunkName: "views-default" */'./NavListItem.vue'),
    DefaultListGroup: () => import(/* webpackChunkName: "views-default" */'./NavListGroup.vue')
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>
