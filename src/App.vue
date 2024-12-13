<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Gestion d'un Catalogue de Livres</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container my-5">
    <!-- Navigation entre les vues -->
    <div class="text-center mb-4">
      <button 
        class="btn btn-primary me-2" 
        :class="{ active: activeView === 'list' }" 
        @click="activeView = 'list'"
      >
        Liste des Livres
      </button>
      <button 
        class="btn btn-secondary" 
        :class="{ active: activeView === 'add' }" 
        @click="activeView = 'add'"
      >
        Ajouter un Livre
      </button>
    </div>

    <!-- Vue active -->
    <div v-if="activeView === 'list'">
      <BookList 
        :books="books" 
        @view-details="viewDetails" 
        @delete-book="deleteBook" 
      />
    </div>
    <div v-else-if="activeView === 'add'">
      <BookForm @add-book="addBook" />
    </div>

    <!-- Détails du livre -->
    <BookDetails 
      v-if="selectedBook" 
      :book="selectedBook" 
      @close="closeDetails" 
    />
  </div>
</template>

<script>
import BookForm from './components/BookForm.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

export default {
  components: {
    BookForm,
    BookList,
    BookDetails,
  },
  data() {
    return {
      activeView: 'list', // Pour gérer les vues actives (list ou add)
      books: [
        {
          title: 'Le Crime de l’Orient-Express',
          author: 'Agatha Christie',
          date: '1934-01-01',
          category: 'Roman',
          cover: require('@/assets/roman 2.jpg'), // Vérifiez le chemin de l'image
        },
        {
          title: 'Science',
          author: 'Isaac Asimov',
          date: '1951-06-01',
          category: 'Science-Fiction',
          cover: require('@/assets/sc fic 4.jpg'), // Vérifiez le chemin de l'image
        },
        {
          title: 'Brave New World',
          author: 'Aldous Huxley',
          date: '1932-08-01',
          category: 'Biographie',
          cover: require('@/assets/bio 1.jpg'), // Vérifiez le chemin de l'image
        },
        {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          date: '1937-09-21',
          category: 'Biographie',
          cover: require('@/assets/bio 1.jpg'), // Vérifiez le chemin de l'image
        },
        {
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          date: '1951-07-16',
          category: 'Roman',
          cover: require('@/assets/sc fic 1.jpg'), // Vérifiez le chemin de l'image
        },
      ],
      selectedBook: null, // Pour afficher les détails d’un livre sélectionné
    };
  },
  methods: {
    addBook(newBook) {
      this.books.push(newBook); // Ajouter un livre
      this.activeView = 'list'; // Retourner à la liste après ajout
    },
    viewDetails(book) {
      this.selectedBook = book; // Voir les détails d’un livre
    },
    closeDetails() {
      this.selectedBook = null; // Fermer les détails
    },
    deleteBook(index) {
      this.books.splice(index, 1); // Supprimer un livre
    },
  },
};
</script>

<style scoped>
.active {
  font-weight: bold;
  border: 2px solid #1d3a59;
}

.container {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 10px;
  color: #5c3a3a; /* Texte clair sur un fond sombre */
}
</style>
