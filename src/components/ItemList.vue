<template>
  <div>
    <h2 @click="showAllMovies" id="list-div" :style="cssVars"
        :class="{  ' w-25 mx-auto rounded-3 p-2' : !showMovie}">
      {{ listName }}
    </h2>
    <div v-show="showMovie">
      <div v-for="(movie, index) in itemList" v-bind:key="index"
           class=" border border-3 rounded-4 w-50 m-auto p-3 text-dark my-4"
           :class="[ indexMovie === index  ? 'bg-warning w-25 mx-auto rounded-3 p-2' : 'bg-primary']">
        <h3 @click="changeIndexMovie(index)" class="fst-italic ">{{ movie.title }}</h3>
        <div v-show="indexMovie === index">
          <h4>Genre: {{ movie.genre }}</h4>
          <h5 @click="showProducer(index)"
              :class="[indexProducer === -1? 'fw-bold text-success' : ' movie.producer = fst-italic']">
            <span v-if="indexProducer===index ">
              {{ movie.producer }}
            </span>
            <span v-else>
                Producer
            </span>
          </h5>
          <p>Year:
            <span class='fw-bold'>{{ movie.year }}</span>
          </p>
          <button @click="changeSeenUnseenButton(index)"
                  v-bind:class="[movie.seen ? 'btn btn-secondary mx-3' : 'btn btn-success mx-3']">
            {{ movie.seen ? 'Unseen' : 'Seen' }}
          </button>
          <button class="btn btn-danger" @click="deleteMovie(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: ["itemList", 'color', "listName", 'showMovie', 'indexMovie'],
  data() {
    return {
      indexProducer: -1
    }
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color
      }
    }
  },
  methods: {
    changeSeenUnseenButton(index) {
      this.$emit('seen-button', index)
    },
    showAllMovies() {
      this.$emit('show-all-movies')
    },
    changeIndexMovie(index) {
      this.$emit('change-index', index)
    },
    showProducer(index) {
      //gasim elementu h dupa id
      //sa ii setam innerText cu string vid
      // let heading = document.findByid("adsfasdf")
      // heading.innerHTML=""
      this.indexProducer = this.indexProducer != index ? index : -1
    },
    deleteMovie(index) {
      this.$emit('delete-movie', index)
    }
  }
}
</script>

<style>
#list-div {
  /*background: var(--color);*/
}
</style>