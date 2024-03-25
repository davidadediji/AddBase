<script setup>
import Card from "./components/Card.vue";
import Search from "./components/Search.vue";
</script>

<template>
  <main class="relative overflow-hidden">
    <section class="bg-combinedShape bg-no-repeat bg-cover h-[40vh]">
      <div
        class="mx-auto container border border-red-500 flex justify-center items-center flex-col gap-4"
      >
        <h1 class="text-white font-bold">IP Address Tracker</h1>
        <Search />
      </div>
    </section>
    <section class="bg-map bg-no-repeat bg-cover h-[60vh]"></section>
    <section class="m-auto container absolute top-56 left-36">
      <Card />
    </section>
  </main>
</template>
