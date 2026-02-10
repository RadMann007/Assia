<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div v-for="(testi, idx) in testimonials" :key="idx" class="testimonial-card bg-[#FFF5F0] border-2 border-orange-100 p-10 rounded-[60px] flex flex-col items-center shadow-lg hover:shadow-2xl transition-all group">
      <!-- <div class="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
        <img :src="testi.image" :alt="testi.name" class="w-full h-full object-cover">
      </div> -->
      <h4 class="font-clemente text-xl font-black uppercase text-gray-800 leading-tight mb-1">{{ testi.name }}</h4>
      <p class="text-sm text-[#ff925c] font-bold mb-4 italic">{{ testi.role }}</p>
      <div class="flex gap-1 mb-6 text-[#ff925c]">
        <Star v-for="s in 5" :key="s" class="w-5 h-5 fill-current" />
      </div>
      <p class="text-gray-600 text-md leading-relaxed italic font-medium">"{{ testi.text }}"</p>
    </div>
  </div>
</template>

<script setup>
import { Star } from 'lucide-vue-next';

const testimonials = [
  { name: "Kassim Said Abdou", role: "Directeur de Esperer 95", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "Très satisfait(e) de mon expérience ! Le service est professionnel." },
  { name: "Sandra Aldi Bara", role: "Directrice de Esperer 95", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "Un outil métier co-construit qui s'adapte réellement." },
  { name: "Christoph Daniel", role: "Directeur de Esperer 95", image: "https://randomuser.me/api/portraits/men/45.jpg", text: "Une approche innovante pour le secteur AHI." }
];
</script>
