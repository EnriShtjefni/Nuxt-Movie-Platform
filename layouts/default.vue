<template>
  <div>
    <Navbar />
    <div class="bg-black text-white mx-auto p-5 flex flex-wrap">
      <LeftContainer />
      <div class="flex-grow">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import LeftContainer from '@/components/LeftContainer.vue';
</script>
