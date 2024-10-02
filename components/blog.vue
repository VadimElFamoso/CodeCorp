<template>
    <div class="relative bg-primary opacity-100 h-screen w-full">
        <div class="border-b-2 border-tertiary m-auto font-ethnocentric font-bold text-right text-tertiary text-6xl py-16 w-10/12">
            <h2>Blog</h2>
        </div>

        <div class="articles" v-if="posts && posts.length > 0">
            <div class="article" v-for="post in posts" :key="post.id">
                <h3>{{ post.acf_title }}</h3>
                <p class="article_description">{{ post.acf.article_description }}</p>
                <a href="">Lire l'article.</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app'

const { data: posts, error } = await useAsyncData('posts', () =>
  fetch('https://www.khenfer.but22.iutn.o2switch.site/wp-json/wp/v2/posts').then(res => res.json())
)

if (error.value) {
  console.error('An error occurred:', error.value)
}
</script>

<style>

</style>