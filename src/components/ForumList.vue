<template>
<div class="forum-list">

  <h2 class="list-title">
      <a href="#">Forums</a>
  </h2>
  <ForumListItem
    v-for="forum in forums"
    :key="forum['.key']"
    :forum="forum"
  />
</div>
</template>

<script>
import ForumListItem from '@/components/ForumListItem'
export default {
  name: 'ForumList',
  components: {
    ForumListItem
  },

  props: {
    forums: {
      required: true,
      type: Array
    }
  }
}
</script>