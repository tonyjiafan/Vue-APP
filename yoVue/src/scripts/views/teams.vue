<template>
    <div style="text-align:center;">
        查看新闻：<input type="text" class="form-control" ref="query" value="NBA">
        <button class="btn" @click="searchTeams">搜索</button>
        <p style="margin:100px auto;" v-if="!teams || teams.length < 1">加载中...</p>
        <teams-card v-for="team in teams" :team="team" />
    </div>
</template>

<script>
    import TeamsCard from '../components/TeamsCard';
    import { searchNba } from '../actions/teams';

    export default {
        components: {
            TeamsCard,
        },
        data() {
            return {
                teams: [],
            };
        },
        methods: {
            searchTeams() {
                console.log(this.$refs.query.value);
                let query = this.$refs.query.value;

                searchNba(query).then(params => {
                    console.log(params);
                    if(params.flag) {
                        this.teams = params.teams;
                    }
                });
            },
        },
        mounted() {
            this.searchTeams();
        },
    };
</script>
