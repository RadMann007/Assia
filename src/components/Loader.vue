<template>
  <div ref="loaderRef" class="fixed inset-0 z-[9999] flex items-center justify-center text-white overflow-hidden" :class="backgroundColor">
    <div class="relative z-10 flex flex-col items-center">
      
      <!-- Counter -->
      <div class="counter text-[80px] md:text-[120px] font-black leading-none mb-4 opacity-0">
        <span ref="counterRef">0</span>%
      </div>

      <!-- Title (Split into chars handled by GSAP or just block for now) -->
      <div class="overflow-hidden mb-2">
        <h1 class="loader-title text-4xl md:text-6xl font-black uppercase tracking-tighter translate-y-full opacity-0">
          {{ title }}
        </h1>
      </div>

      <!-- Subtitle -->
      <div class="overflow-hidden">
        <p class="loader-subtitle text-lg md:text-xl font-medium opacity-0 translate-y-full">
          {{ subtitle }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  title: {
    type: String,
    default: 'EDOSSAH'
  },
  subtitle: {
    type: String,
    default: 'Chargement...'
  },
  backgroundColor: {
    type: String,
    default: 'bg-[var(--primary)]' // Default primary color
  }
});

const loaderRef = ref(null);
const counterRef = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
        // Optional: emit event if needed, but the curtain up handles visibility
    }
  });

  // 1. Counter Animation 0 -> 100
  tl.to(counterRef.value, {
    textContent: 100,
    duration: 1.5,
    ease: 'power2.inOut',
    snap: { textContent: 1 },
    onUpdate: function() {
      // Counter is handled by textContent tween
    }
  })
  .to('.counter', { opacity: 1, duration: 0.5 }, 0) // Fade in counter start

  // 2. Title & Subtitle Reveal (overlapping with counter end)
  .to('.loader-title', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  }, "-=0.5")
  .to('.loader-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  }, "-=0.8")

  // 3. Pause briefly
  .to({}, { duration: 0.5 })

  // 4. Exit Animation (Curtain Up)
  .to('.counter, .loader-title, .loader-subtitle', {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  })
  .to(loaderRef.value, {
    yPercent: -100,
    duration: 1.2,
    ease: 'power4.inOut'
  }, "-=0.2");
});
</script>

<style scoped>
/* Ensure font is available or inherit */
</style>
