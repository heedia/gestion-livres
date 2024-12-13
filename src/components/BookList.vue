<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <input
        type="text"
        class="form-control w-50"
        placeholder="Rechercher par titre ou auteur"
        v-model="searchQuery"
      />
      <select class="form-select w-25" v-model="selectedCategory">
        <option value="">Toutes les catégories</option>
        <option>Roman</option>
        <option>Science-Fiction</option>
        <option>Biographie</option>
      </select>
    </div>
    <div class="row">
      <div
        v-for="(book, index) in filteredBooks"
        :key="index"
        class="col-md-4 mb-3"
      >
        <BookCard
          :book="book"
          @view-details="$emit('view-details', book)"
          @delete-book="$emit('delete-book', index)"
        />
      </div>
    </div>
    <p v-if="filteredBooks.length === 0" class="text-center text-muted">
      Aucun livre trouvé.
    </p>
  </div>
</template>

<script>
import BookCard from './BookCard.vue';

export default {
  components: { BookCard },
  props: {
    books: Array,
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        const matchesSearch =
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory =
          !this.selectedCategory || book.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    },
  },
};
</script>
