<script lang="ts" setup>
import dayjs from 'dayjs'
import type { Article } from '@/types/article'

const route = useRoute()
const { slug } = route.params

const { data } = await useAsyncData(`articles-${slug}`, async () => {
  const { $newtClient } = useNuxtApp()
  const config = useRuntimeConfig()

  return await $newtClient.getFirstContent<Article>({
    appUid: config.newt.appUid,
    modelUid: config.newt.modelUid,
    query: {
      slug,
      select: [
        '_id',
        'title',
        'createdAt',
        'updatedAt',
        'slug',
        'body',
        'headerImage',
      ],
    },
  })
})
const article = data.value

useHead({
  title: `ブログサイト | ${article?.title}`,
  meta: [{ name: 'description', content: '投稿詳細ページです' }],
})
</script>

<template>
  <NuxtLayout>
    <FlexBox :gap="40" :px="40" :py="80">
      <h1 class="title">{{ article.title }}</h1>
      <FlexBox class="article" :gap="16">
        <img :src="article.headerImage.src" class="header-image" />
        <span>投稿日: {{ dayjs(article.createdAt).format('YYYY.MM.DD') }}</span>
        <span>更新日: {{ dayjs(article.updatedAt).format('YYYY.MM.DD') }}</span>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="$sanitize(article.body)" />
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
    height: 320px;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  .article-title {
    font-size: 24px;
    line-height: 1.6;
  }
}
</style>
