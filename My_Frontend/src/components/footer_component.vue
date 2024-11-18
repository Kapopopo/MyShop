<template>
  <footer>
    <div class="pagination">
      <span v-for="page in pages" :key="page" class="page-item">
        <a class="page-link" href="#">{{ page }}</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      pages: Array.from({ length: 10 }, (_, i) => i + 1),
    };
  },
};
</script>
