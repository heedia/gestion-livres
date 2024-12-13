<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="title" class="form-label">Titre</label>
      <input v-model="form.title" type="text" id="title" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="author" class="form-label">Auteur</label>
      <input v-model="form.author" type="text" id="author" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="date" class="form-label">Date de Publication</label>
      <input v-model="form.date" type="date" id="date" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="category" class="form-label">Catégorie</label>
      <select v-model="form.category" id="category" class="form-select" required>
        <option value="Roman">Roman</option>
        <option value="Science-Fiction">Science-Fiction</option>
        <option value="Biographie">Biographie</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="cover" class="form-label">Image de Couverture</label>
      <input type="file" id="cover" class="form-control" @change="handleImageUpload" />
      <div v-if="form.coverPreview" class="mt-3">
        <img :src="form.coverPreview" alt="Image de couverture" class="img-fluid" style="max-height: 200px; object-fit: cover;" />
      </div>
    </div>
    <button type="submit" class="btn btn-success">Ajouter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        author: '',
        date: '',
        category: 'Roman',
        cover: null,
        coverPreview: null, // Stocke l'URL de prévisualisation de l'image
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Créer une URL d'objet pour afficher l'image en prévisualisation
        this.form.cover = file;
        this.form.coverPreview = URL.createObjectURL(file);
      }
    },
    submitForm() {
      if (this.form.cover && this.form.coverPreview) {
        this.$emit('add-book', { ...this.form });
        this.resetForm();
      } else {
        alert('Veuillez ajouter une image de couverture.');
      }
    },
    resetForm() {
      this.form = { title: '', author: '', date: '', category: 'Roman', cover: null, coverPreview: null };
    },
  },
};
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
