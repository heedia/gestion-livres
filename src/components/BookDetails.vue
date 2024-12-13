<template>
  <div class="modal d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ book.title }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img :src="book.cover" alt="Couverture" class="img-fluid mb-3" />
          <p><strong>Auteur :</strong> {{ book.author }}</p>
          <p><strong>Date de publication :</strong> {{ book.date }}</p>
          <p><strong>Catégorie :</strong> {{ book.category }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('close')"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },
};
</script>

<style>
.modal {
  background: rgba(29, 3, 3, 0.5);
}
</style>