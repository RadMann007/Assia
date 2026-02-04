<template>
  <div class="testimonial-card bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div class="text-4xl text-[#FF6B6B] mb-4">"</div>
    <p class="text-lg text-gray-700 mb-6 italic">
      {{ props.text }}
    </p>
    <div class="flex items-center gap-4">
      <div 
        class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
        :style="{ backgroundColor: props.initialColor }"
      >
        {{ props.initial }}
      </div>
      <div>
        <p class="font-bold">{{ props.name }}</p>
        <p class="text-sm text-gray-500">{{ props.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Définir les props
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "Vous faites un super travail. On a de la chance d'avoir une application aussi complète et aussi proche de nos besoins. Merci beaucoup."
  },
  name: {
    type: String,
    default: "Gaëlle"
  },
  position: {
    type: String,
    default: "Cheffe de service"
  },
  initial: {
    type: String,
    default: "G"
  },
  initialColor: {
    type: String,
    default: "#4ECDC4"
  }
})
</script>