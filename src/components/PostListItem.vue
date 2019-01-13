<template>
  <div class="post">
      <div class="user-info">
          <a href="#" class="user-name">{{user.name}}</a>

          <a href="#">
              <img class="avatar-large" :src="user.avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>

          <p class="desktop-only text-small">23 threads</p>

          <span class="online desktop-only">online</span>

      </div>

      <div class="post-content">
          <div>
            <p>
              {{post.text}}
            </p>
          </div>
          <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
      </div>

      <div class="post-date text-faded">
        <AppDate :timestamp="post.publishedAt" />
      </div>

  </div>
</template>

<script>
import sourceData from '@/data'
export default {
  name: 'PostListItem',
  props: {
    post: {
      required: true,
      type: Object
    }
  },

  computed: {
    user () {
      return sourceData.users[this.post.userId]
    }
  }
}
</script>