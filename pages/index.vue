<template>
  <main class="maincolumn">
    <div id="blogindex">
      <h1>{{ $t('welcome')}}</h1>
      <div v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="localePath({ name: 'blog-slug', params: { slug: article.slug } })"
          class="blogindex-article"
        >
          <div>
            <img :src="article.image" class="blogindex-article-img" />
          </div>
          <div>
            <p class="title-1 blogindex-article-title blogindex-article-text">
              {{ article.title }}
            </p>
            <p class="blogindex-article-readmore blogindex-article-text">
              {{ $t('readMore') }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      // .on(['title', 'img', 'slug', 'author'])
      // .sortBy('createdAt', 'asc')
      .fetch();

    return { articles };
  },
};
</script>
