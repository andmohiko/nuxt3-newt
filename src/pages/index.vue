<script setup>
definePageMeta({
  layout: 'sp',
})
</script>

<template>
  <NuxtLayout>
    <FlexBox :gap="120">
      <h1 class="title">たいとる</h1>
      <p>これは段落です</p>
    </FlexBox>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.title {
  font-size: 40px;
  color: #ff0000;
}
</style>
