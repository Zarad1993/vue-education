<template>
  <div class="col-full">
    <ForumList :forums="forums" />
  </div>
</template>

<script>
import sourceData from '@/data'
import ForumList from '@/components/ForumList'
console.log(sourceData)
export default {
  components: {
    ForumList
  },
  name: 'PageForum',
  data () {
    return {
      forums: Object.values(sourceData.forums)
    }
  }
}
</script>
