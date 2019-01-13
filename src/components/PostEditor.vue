<template>
  <div>
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea class="form-input" v-model="newPostText"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostEditor',

  props: {
    threadId: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      newPostText: ''
    }
  },

  methods: {
    addPost () {
      const postId = 'greatPost' + Math.random()
      let post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'L664y3qZSubDbT1R6npC0EEybJ73',
        '.key': postId
      }

      this.newPostText = ''
      this.$emit('save', {post})
    }
  }
}
</script>