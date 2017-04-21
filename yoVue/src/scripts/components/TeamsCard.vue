<template>
    <div class="card">
      <div class="card-title ">{{team.title}}-{{team.author.join('/')}}</div>
      <div class="content_main">
          <img class="main_image" :src="team.image" alt="主图" />
          <p style="text-align:left;text-indent:1em;">{{team.catalog}}</p>
      </div>
      <a class="go_movie_2" :href="team.alt">查看新闻</a>
    </div>
</template>

<script>
    export default {
        props: {
            team: Object,
        },
    };
</script>
