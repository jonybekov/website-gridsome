<template>
  <Layout>
    <Container>
      <h1 class="text-4xl mb-8 font-bold">
        Kamina haqida qisqacha.
        <g-image class="inline ml-2 w-10" src="/images/waving-hand.png" />
      </h1>
      <p>
        Men <strong> {{ age }} </strong>-yoshli front-end dasturchi-injinerman.
        Xozirda Toshkentda qaror topganman. Qiziqishlarim Javascript, UI
        (foydalanuvchi interfeysi), WebGL, Problem Solving (bu yo'nalishda
        deyarli end boshlayabman). Xozirda
        <span class="text-blue-600 font-medium"> React</span> hamda
        <span class="text-green-600 font-medium">Vue</span> freyvorklarida
        <span class="text-gray-500"> (React - bu aslida kutubxona😜)</span>
        ishlamoqdaman.
      </p>
    </Container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
  computed: {
    age() {
      const birthDate = "1999-02-21";
      const today = this.$dayjs().format("YYYY-MM-DD");

      return String(this.$dayjs(today).diff(birthDate, "year", true)).substring(
        0,
        10
      );
    },
  },
};
</script>
