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
      <default-list-item
        :key="`child-${i}`"
        :item="child"
      />
    </template>

    <v-divider />
  </v-list-group>
</template>

<script>
import DefaultListItem from './NavListItem.vue'

export default {
  name: 'DefaultListGroup',
  components: {
    DefaultListItem
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>
