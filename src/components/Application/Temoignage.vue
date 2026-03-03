<template>
  <div class="temoignage-slider-wrapper">
    <!-- Left arrow -->
    <button 
      v-if="canScrollLeft" 
      class="slider-arrow slider-arrow-left" 
      @click="scrollPrev"
      aria-label="Précédent"
    >
      <ChevronLeft class="w-6 h-6" />
    </button>

    <!-- Slider container -->
    <div ref="sliderRef" class="temoignage-slider" @scroll="updateScrollState">
      <div 
        v-for="(testi, idx) in testimonials" 
        :key="idx" 
        class="testimonial-card"
      >
        <h4 class="testi-name font-clemente font-black uppercase text-gray-800 leading-tight mb-1">{{ testi.name }}</h4>
        <p class="testi-role font-bold italic">{{ testi.role }}</p>
        <div class="testi-stars flex gap-1 text-[#ff925c]">
          <Star v-for="s in 5" :key="s" class="w-5 h-5 fill-current" />
        </div>
        <p class="testi-text font-clementeMini text-gray-600 leading-relaxed italic font-medium">"{{ testi.text }}"</p>
      </div>
    </div>

    <!-- Right arrow -->
    <button 
      v-if="canScrollRight" 
      class="slider-arrow slider-arrow-right" 
      @click="scrollNext"
      aria-label="Suivant"
    >
      <ChevronRight class="w-6 h-6" />
    </button>

    <!-- Dot indicators (visible on tablet & mobile) -->
    <div class="slider-dots">
      <button 
        v-for="(_, idx) in testimonials" 
        :key="idx"
        :class="['slider-dot', { active: activeIndex === idx }]"
        @click="scrollToCard(idx)"
        :aria-label="'Témoignage ' + (idx + 1)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { Star, ChevronLeft, ChevronRight } from 'lucide-vue-next';

const sliderRef = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);
const activeIndex = ref(0);

const testimonials = [
  { 
    name: "Gaëlle", 
    role: "Cheffe de service", 
    image: "https://randomuser.me/api/portraits/men/32.jpg", 
    text: "Vous faites un super travail. On a de la chance d'avoir une application aussi complète et aussi proche de nos besoins. Merci beaucoup." 
  },
  { 
    name: "Valérie", 
    role: "Coordinatrice Plateforme d'accompagnement social à l'hôtel", 
    image: "https://randomuser.me/api/portraits/men/32.jpg", 
    text: "L'application répond réellement à un besoin de nos équipes. Et l'équipe support est géniale. Très réactive et à l'écoute. Merci" 
  },
  { 
    name: "Benoît", 
    role: "Travailleur social en CHRS", 
    image: "https://randomuser.me/api/portraits/men/45.jpg", 
    text: "Je trouve cette application géniale et pourtant j'ai un niveau en informatique pas très élevé." 
  },
  { 
    name: "Coralie", 
    role: "Travailleuse sociale - Centre d'Hébergement d'Urgence", 
    image: "https://randomuser.me/api/portraits/men/45.jpg", 
    text: "Je trouve que c'est un logiciel qui peut vraiment permettre de gagner du temps et d'avoir un dossier usager plus organisé et complet si on prend le temps de le tester." 
  }
];

function updateScrollState() {
  if (!sliderRef.value) return;
  const el = sliderRef.value;
  canScrollLeft.value = el.scrollLeft > 5;
  canScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 5;

  // Update active dot based on scroll position
  const cards = el.querySelectorAll('.testimonial-card');
  if (cards.length === 0) return;
  const scrollCenter = el.scrollLeft + el.clientWidth / 2;
  let closest = 0;
  let closestDist = Infinity;
  cards.forEach((card, i) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const dist = Math.abs(scrollCenter - cardCenter);
    if (dist < closestDist) {
      closestDist = dist;
      closest = i;
    }
  });
  activeIndex.value = closest;
}

function scrollPrev() {
  if (!sliderRef.value) return;
  const cardWidth = sliderRef.value.querySelector('.testimonial-card')?.offsetWidth || 300;
  const gap = parseFloat(getComputedStyle(sliderRef.value).gap) || 40;
  sliderRef.value.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
}

function scrollNext() {
  if (!sliderRef.value) return;
  const cardWidth = sliderRef.value.querySelector('.testimonial-card')?.offsetWidth || 300;
  const gap = parseFloat(getComputedStyle(sliderRef.value).gap) || 40;
  sliderRef.value.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
}

function scrollToCard(idx) {
  if (!sliderRef.value) return;
  const cards = sliderRef.value.querySelectorAll('.testimonial-card');
  if (cards[idx]) {
    cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
}

function handleResize() {
  nextTick(() => updateScrollState());
}

onMounted(() => {
  nextTick(() => updateScrollState());
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.temoignage-slider-wrapper {
  position: relative;
  width: 100%;
}

.temoignage-slider {
  display: flex;
  gap: 2.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0.5rem 0;
}

.temoignage-slider::-webkit-scrollbar {
  display: none;
}

/* --- Card base styles --- */
.testimonial-card {
  flex: 0 0 calc((100% - 5rem) / 3); /* 3 cards visible */
  scroll-snap-align: start;
  min-width: 0;
  background: #FFF3EE;
  border: 2px solid #FF925C;
  padding: 2.5rem;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.testi-name {
  font-size: 1.25rem;
}

.testi-role {
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.testi-stars {
  margin-bottom: 1.5rem;
}

.testi-text {
  font-size: 1rem;
}

/* --- Arrow styles --- */
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #FF925C;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.slider-arrow:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.slider-arrow-left {
  left: -22px;
}

.slider-arrow-right {
  right: -22px;
}

/* --- Dot indicators --- */
.slider-dots {
  display: none; /* hidden by default on desktop */
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.slider-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--primary, #ff925c);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.slider-dot.active {
  background: var(--primary, #ff925c);
  transform: scale(1.2);
}

/* ======================= */
/* Responsive: Tablet      */
/* ======================= */
@media (max-width: 1024px) {
  .temoignage-slider {
    gap: 1.5rem;
  }

  .testimonial-card {
    flex: 0 0 calc((100% - 1.5rem) / 2); /* 2 cards */
    padding: 2rem;
    border-radius: 40px;
  }

  .slider-arrow-left {
    left: -18px;
  }

  .slider-arrow-right {
    right: -18px;
  }

  .slider-dots {
    display: flex;
  }
}

/* ======================= */
/* Responsive: Mobile      */
/* ======================= */
@media (max-width: 640px) {
  .temoignage-slider-wrapper {
    padding: 0 0.5rem;
  }

  .temoignage-slider {
    gap: 1rem;
    padding: 0.25rem 0;
  }

  .testimonial-card {
    flex: 0 0 100%; /* 1 card at a time */
    padding: 1.5rem 1.25rem;
    border-radius: 30px;
  }

  .testi-name {
    font-size: 1.1rem;
  }

  .testi-role {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }

  .testi-stars {
    margin-bottom: 1rem;
  }

  .testi-stars svg {
    width: 16px;
    height: 16px;
  }

  .testi-text {
    font-size: 0.9rem;
  }

  /* Position arrows inside the card area */
  .slider-arrow {
    width: 36px;
    height: 36px;
    top: 50%;
  }

  .slider-arrow-left {
    left: 4px;
  }

  .slider-arrow-right {
    right: 4px;
  }

  .slider-dots {
    display: flex;
    margin-top: 1rem;
  }
}

/* ======================= */
/* Responsive: Very small  */
/* ======================= */
@media (max-width: 380px) {
  .testimonial-card {
    padding: 1.25rem 1rem;
    border-radius: 24px;
  }

  .testi-name {
    font-size: 1rem;
  }

  .testi-text {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .slider-arrow {
    width: 32px;
    height: 32px;
  }
}
</style>
