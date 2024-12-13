<template>
  <div class="card" style="width: 18rem;">
    <img :src="book.cover" class="card-img-top" alt="Couverture" />
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="card-text">{{ book.author }}</p>
      <p class="card-text"><small class="text-muted">{{ book.date }}</small></p>
      <button class="btn btn-info btn-sm" @click="$emit('view-details', book)">Détails</button>
      <button class="btn btn-danger btn-sm" @click="$emit('delete-book', book)">Supprimer</button>
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
