<template>
  <div>
    <Header title="Movies" class="mb-4 "/>
    <ItemList2 :searched-movie="searchMovie"/>
    <div>
      <ItemList listName=" List of movies"
                @seen-button="changeSeenUnseenButton"
                @show-all-movies="showAllMovies"
                @change-index="changeIndexMovie"
                @delete-movie="deleteMovie"
                :item-list="movies"
                :show-movie="showMovie"
                :index-movie="indexMovie"/>
    </div>
    <div>
      <ItemList listName="Seen movies"
                @seen-button="changeSeenUnseenButton"
                @show-all-movies="showSeenMovies"
                @change-index="changeIndexMovie"
                @delete-movie="deleteMovie"
                :item-list="seenMovies"
                :show-movie="showSeenMovie"
                :index-movie="indexMovie"
                color="blue"/>

    </div>
    <div>
      <ItemList listName="Uneen movies"
                @seen-button="changeSeenUnseenButton"
                @show-all-movies="showUnseenMovies"
                @change-index="changeIndexMovie"
                @delete-movie="deleteMovie"
                :item-list="unseenMovies"
                :show-movie="showUnseenMovie"
                :index-movie="indexMovie"
                :color="unseenMoviesColor"/>
    </div>
  </div>
</template>

<script>

import ItemList from "@/components/ItemList";
import Header from "@/components/Header";
import ItemList2 from "@/components/ItemList2";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Movies',
  components: {
    ItemList2,
    Header,
    ItemList,
  },
  data() {
    return {
      movies: [
        {
          title: "Se7en",
          genre: "Drama",
          producer: "James Mc. Teigue",
          year: 2000,
          seen: false,
          seenYear: "",
        },
        {
          title: "Blood Diamond",
          genre: "Drama",
          producer: "Edward Zwik",
          year: 2007,
          seen: false,
          seenYear: ""
        },
        {
          title: "Changeling",
          genre: "Mister",
          producer: "Clint Eastwood",
          year: 2011,
          seen: false,
          seenYear: ""
        },
        {
          title: "Alive",
          genre: "Aventura",
          producer: "Franc Marshall",
          minutesLength: 127,
          year: 2005,
          seen: true,
          seenYear: ""
        }
      ],
      showMovie: false,
      indexMovie: -1,
      showSeenMovie: false,
      showUnseenMovie: false,
      searchMovie: '',
      unseenMoviesColor: 'red'
    }
  },
  computed: {
    seenMovies() {
      return this.movies.filter(movie => movie.seen)
    },
    unseenMovies() {
      return this.movies.filter(movie => !movie.seen)
    }
  },
  methods: {
    changeSeenUnseenButton(index) {
      this.movies[index].seen = !this.movies[index].seen
    },
    showAllMovies() {
      this.showMovie = !this.showMovie
      this.showSeenMovie = false;
    },
    showSeenMovies() {
      this.showSeenMovie = !this.showSeenMovie
      this.showMovie = false;
      this.showUnseenMovie = false;
    },
    showUnseenMovies() {
      this.showUnseenMovie = !this.showUnseenMovie
      this.showMovie = false;
      this.showSeenMovie = false;
    },
    changeIndexMovie(index) {
      this.indexMovie = this.indexMovie != index ? index : -1
    },
    deleteMovie(index) {
      this.movies.splice(index, 1)
      this.indexMovie = -1;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
