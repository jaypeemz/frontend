<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Show All Books</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(book, index) in books"
          :key="index"
          @click="setActiveBook(book, index)"
        >
          {{ book.title }}
        </li>
      </ul>
    </div>

    <div class="col-md-6">
      <div v-if="currentBook">
        <h4>Book</h4>
        <div>
          <label>
            <strong>Book Title:</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="song_title"
            v-model="currentBook.title"
          />
        </div>
        <div>
          <label>
            <strong>Author:</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="book_author"
            v-model="currentBook.author"
          />
          <!-- {{ currentSong.author }} -->
        </div>
        <div>
          <label>
            <strong>Categories:</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="book_genre"
            v-model="currentBook.categories"
          />
        </div>
        <button class="m-3 btn btn-sm btn-danger" @click="deleteBook">
          Delete
        </button>
        <button class="m-3 btn btn-sm btn-danger" @click="saveBook">
          Update
        </button>
      </div>
      <div v-else>
        <br />
        <p v-if="books">Please click on a Book...</p>
      </div>
    </div>
  </div>
</template>

<script>
import AudiobookDataServices from '../services/AudiobookDataService';

export default {
  name: "book-list",
  data() {
    return {
      books: [],
      currentBook: null,
      currentIndex: -1,
    };
  },

  methods: {
    saveBook() {
      AudiobookDataServices.save(this.currentBook)
        .then((response) => {
          // this.refreshList();
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        })
    },
    deleteBook() {
      AudiobookDataServices.delete(this.currentBook.id)
        .then((response) => {
          this.refreshList();
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveBook(book, index) {
      this.currentBook = book;
      this.currentIndex = index;
    },
    refreshList() {
      this.currentBook = null;
      this.currentIndex = -1;
      AudiobookDataServices.get("")
        .then((response) => {
          this.songs = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    AudiobookDataServices.get("")
      .then(response => {
            this.books = response.data;
        })
          .catch(function (error) {
             console.log(error);
        });

        

      
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>