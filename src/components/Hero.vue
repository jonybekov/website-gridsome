<template>
  <div class="bg-indigo-600">
    <Container>
      <div class="flex pb-12 text-white items-center">
        <p class="text-3xl mr-4 text-white">
          Assalomu alaykum! Sahifamga xush kelibsiz. Men front-end
          yo'nalishidagi dasturchi-injinerman.
        </p>
        <div class="avatar mb-8">
          <g-image
            alt="Azizbek Jonibekov"
            src="/images/avatar4.jpg"
            class="w-150 "
          />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.avatar {
  width: 250px;
  min-width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;

  @apply ring-10 transition-all;
}

.avatar:hover {
  @apply ring-15;
}

.avatar:hover img {
  @apply origin-center transform scale-110;
}

.avatar img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;

  @apply transition-transform;
}
</style>
