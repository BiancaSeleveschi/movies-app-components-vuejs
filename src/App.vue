<template>
  <div id="app">
    <Header title="Movies" class="mb-4 "/>
    <div>
      <ItemList listName="List of movies"
                @seen-button="changeSeenUnseenButton"
                @show-all-movies="showAllMovies"
                @change-index="changeIndexMovie"
                @show-producer="showProducer"
                @delete-movie="deleteMovie"
                :item-list="movies"
                :show-movie="showMovie"
                :index-movie="indexMovie"
                :index-producer='indexProducer'/>

    </div>
    <div>
      <ItemList listName="Seen movies"
                @seen-button="changeSeenUnseenButton"
                @show-all-movies="showSeenMovies"
                @change-index="changeIndexMovie"
                @show-producer="showProducer"
                @delete-movie="deleteMovie"
                :item-list="seenMovies"
                :show-movie="showSeenMovie"
                :index-movie="indexMovie"
                :index-producer='indexProducer'/>

    </div>
    <div>
      <ItemList listName="Uneen movies"
                @seen-button="changeSeenUnseenButton"
                @show-all-movies="showUnseenMovies"
                @change-index="changeIndexMovie"
                @show-producer="showProducer"
                @delete-movie="deleteMovie"
                :item-list="unseenMovies"
                :show-movie="showUnseenMovie"
                :index-movie="indexMovie"
                :index-producer='indexProducer'/>

    </div>
  </div>
</template>

<script>

import ItemList from "@/components/ItemList";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
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
      indexProducer: -1,
      showSeenMovie: false,
      showUnseenMovie: false,
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
    showProducer(index) {
      this.indexProducer = this.indexProducer != index ? index : -1
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
