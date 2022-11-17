<template>
  <FlexBox>
    <h1>たいとる</h1>
    <p>これは段落です</p>
  </FlexBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { client } from '../lib/newt'

export default defineComponent({
  setup() {
    client
      .getContents({
        appUid: 'appuid',
        modelUid: 'modeluid'
      })
      .then((content) => console.log(content))
      .catch((err) => console.log(err))
  }
})
</script>
