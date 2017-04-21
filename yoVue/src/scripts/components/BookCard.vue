<template>
    <div class="card">
      <div class="card-title ">{{book.title}}-{{book.author.join('/')}}</div>
      <div class="content_main">
        <img class="main_image" :src="book.image" alt="主图" />
        <p style="text-align:left;text-indent:1em;">{{book.catalog}}</p>
    </div>
      <a class="go_movie" :href="book.alt">不如去看看吧</a>
    </div>
</template>

<script>
    export default {
        props: {
            book: Object,
        },
    };
</script>
