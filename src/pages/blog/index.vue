<script lang="ts" setup>
import dayjs from 'dayjs'
import type { Article } from '@/types/article'

const { data } = await useAsyncData('articles', async () => {
  const { $newtClient } = useNuxtApp()
  const config = useRuntimeConfig()

  return await $newtClient.getContents<Article>({
    appUid: config.newt.appUid,
    modelUid: config.newt.modelUid,
    query: {
      select: ['_id', 'title', 'createdAt', 'slug', 'body', 'headerImage'],
    },
  })
})
const articles = data.value?.items
</script>

<template>
  <NuxtLayout>
    <FlexBox :gap="40" :px="40" :py="80">
      <h1 class="title">ブログ一覧</h1>
      <FlexBox
        v-for="article in articles"
        :key="article._id"
        class="article"
        :gap="8"
      >
        <img :src="article.headerImage.src" class="header-image" />
        <span>{{ dayjs(article.createdAt).format('YYYY.MM.DD') }}</span>
        <h2 class="article-title">
          <NuxtLink :to="`/blog/${article.slug}`">
            {{ article.title }}
          </NuxtLink>
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="$sanitize(article.body.slice(0, 25))" />
      </FlexBox>
    </FlexBox>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.title {
  font-size: 40px;
  color: #ff0000;
}
.article {
  .header-image {
    height: 200px;
    width: 400px;
    object-fit: cover;
    overflow: hidden;
  }

  .article-title {
    font-size: 24px;
    line-height: 1.6;
  }
}
</style>
