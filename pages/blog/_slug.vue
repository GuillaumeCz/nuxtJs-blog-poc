<template>
  <main class="maincolumn">
    <article id="articlepage">
      <section id="articlepage-header">
        <span id="articlepage-header-img-container">
          <img
            id="articlepage-header-img"
            class="articlepage-img"
            alt="Illustration de l'article"
            :src="article.image"
          />
          <!--        Else display default img if no provided img -->
        </span>
        <div id="articlepage-header-title">
          <h1 id="articlepage-header-title-h1">
            {{ article.title }}
          </h1>
          <p>Ecrit par {{ article.author }}</p>
          <p>Le {{ formatDate(article.date) }}</p>
        </div>
      </section>
      <section id="articlepage-content">
        <nuxt-content :document="article" />
      </section>
      <img
        id="articlepage-img-bottom"
        class="articlepage-img"
        alt="Illustration de l'article"
        :src="article.image"
      />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("fr", options);
    },
  },
};
</script>

<style scoped></style>
