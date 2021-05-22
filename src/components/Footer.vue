<template>
  <footer class="bg-gray-800 py-8 text-white min-h-40">
    <Container>
      <div class="mb-20">
        <form action="">
          <label>
            Ismingiz
          </label>
          <input
            class="focus:ring-6 transition-all block px-4 py-3 rounded-md mt-2 mb-3"
            type="text"
            name="name"
            placeholder="Eshmat"
          />
          <label>
            Elektron pochtangiz
          </label>
          <input
            class="focus:ring-6 transition-all block px-4 py-3 rounded-md mt-2 mb-3"
            type="email"
            name="email"
            placeholder="eshmat@toshmatov.uz"
          />
          <button
            disabled
            type="submit"
            class="hover:bg-indigo-700 active:bg-indigo-800 focus:ring-6 disabled:opacity-50 transition-all mr-2 mt-3 bg-indigo-600 px-4 py-3 shadow-sm rounded-md"
          >
            Obuna bo'lish
          </button>
          <span
            class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-2 py-1 text-xs rounded-md"
            >Tez kunda</span
          >
        </form>
      </div>

      <p class="text-sm text-light text-gray-300">
        Ushbu veb-sayt
        <a target="_blank" href="https://gridsome.org/"> Gridsome</a> yordamida
        barpo etilgan.
        <a target="_blank" href="https://netlify.com">Netlify</a>-ga deploy
        qilingan.
      </p>
    </Container>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  a {
    @apply text-indigo-500;
  }
}
</style>
