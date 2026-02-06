<template>
  <div class="bg-[#FFF5F0] min-h-screen font-body text-[#1a1a1a] overflow-x-hidden">
    
    <!-- LOADER AVEC LOGO ASSIA -->
    <div ref="loader" class="fixed inset-0 bg-primary z-[100] flex items-center justify-center">
      <div class="relative text-center">
        <div class="loader-text opacity-0 text-[#F3F0E7] mb-4">
          <span class="text-6xl md:text-8xl font-bold tracking-tighter">ACTUALITES</span>
        </div>
        <!-- <div class="loader-subtitle opacity-0 text-[#F3F0E7] text-lg mb-6">
          Nos Actualités
        </div> -->
        <div class="loader-progress w-0 h-1 bg-white mt-4"></div>
      </div>
    </div>

    <!-- NAVBAR -->
    <NavBar />

    <!-- HERO SECTION -->
    <header class="relative pt-32 pb-20 px-6 container mx-auto text-center">
      <h1 class="text-5xl md:text-8xl font-clemente font-black text-[#00A3B5] uppercase leading-tight tracking-tighter mb-8">
        Nos <span class="text-[#ff925c]">Actualités</span>
      </h1>
      <p class="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
        Découvrez les dernières nouvelles, témoignages et actualités du monde de l'accompagnement social avec ASSIA.
      </p>
    </header>

    <!-- FILTERS & SEARCH -->
    <!-- <section class="pb-16 px-6 container mx-auto">
      <div class="bg-white p-8 rounded-[40px] shadow-sm border border-orange-100 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div class="relative w-full md:w-96">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Rechercher un article..."
            class="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-[#00A3B5] transition-all font-medium"
          >
          <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <div class="flex flex-wrap gap-3 justify-center">
          <button 
            v-for="cat in categories" 
            :key="cat.slug"
            @click="selectedCategory = cat.slug"
            :class="[
              'px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all',
              selectedCategory === cat.slug 
                ? 'bg-[#00A3B5] text-white shadow-md scale-105' 
                : 'bg-orange-50 text-orange-400 hover:bg-orange-100'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </section> -->

    <!-- ARTICLES GRID -->
    <section class="pb-32 px-6 container mx-auto">
      
      <!-- LOADING STATE -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="i in 6" :key="i" class="animate-pulse flex flex-col gap-4">
          <div class="bg-gray-200 aspect-video rounded-[40px]"></div>
          <div class="h-8 bg-gray-200 rounded-full w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded-full w-full"></div>
          <div class="h-4 bg-gray-200 rounded-full w-1/2"></div>
        </div>
      </div>

      <!-- ERROR STATE -->
      <div v-else-if="error" class="text-center py-20 bg-white rounded-[60px] border-2 border-dashed border-orange-200">
        <div class="text-6xl mb-6 text-[#ff925c]">⚠️</div>
        <h3 class="text-2xl font-black text-gray-800 uppercase mb-4">Erreur de chargement</h3>
        <p class="text-gray-600 mb-8 max-w-md mx-auto">{{ error }}</p>
        <button @click="fetchArticles" class="bg-[#ff925c] text-white px-8 py-3 rounded-full font-bold uppercase transition-transform hover:scale-105">
          Réessayer
        </button>
      </div>

      <!-- NO RESULTS -->
      <div v-else-if="filteredArticles.length === 0" class="text-center py-20 bg-white rounded-[60px]">
        <div class="text-6xl mb-6">🔍</div>
        <h3 class="text-2xl font-black text-gray-800 uppercase mb-4">Aucun résultat</h3>
        <p class="text-gray-600">Aucun article ne correspond à votre recherche pour le moment.</p>
        <button @click="resetFilters" class="mt-8 text-[#00A3B5] font-bold border-b-2 border-[#00A3B5]">
          Réinitialiser les filtres
        </button>
      </div>

      <!-- GRID -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        <article 
          v-for="(article, index) in filteredArticles" 
          :key="article.id"
          class="article-card group flex flex-col bg-white rounded-[50px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-orange-100"
        >
          <!-- Featured Image -->
          <div class="relative aspect-[16/10] overflow-hidden m-4 rounded-[40px]">
            <img 
              :src="getFeaturedImage(article)" 
              :alt="article.title.rendered"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-[#00A3B5] tracking-widest">
              {{ getCategoryName(article) }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 flex-1 flex flex-col">
            <div class="text-xs font-bold text-[#ff925c] uppercase tracking-widest mb-4">
              {{ formatDate(article.date) }}
            </div>
            <h2 
              class="text-2xl font-bold text-gray-800 leading-tight mb-4 group-hover:text-[#00A3B5] transition-colors line-clamp-2"
              v-html="article.title.rendered"
            ></h2>
            <div 
              class="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm font-medium" 
              v-html="article.excerpt.rendered"
            ></div>
            
            <div class="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-orange-100 border-2 border-white overflow-hidden">
                  <img :src="getAuthorAvatar(article)" :alt="getAuthorName(article)" class="w-full h-full object-cover">
                </div>
                <span class="text-sm font-bold text-gray-700">{{ getAuthorName(article) }}</span>
              </div>
              <router-link 
                :to="'/articles/' + article.id" 
                class="w-10 h-10 rounded-full bg-[#00A3B5] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ArrowRight class="w-5 h-5" />
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-[#00A3B5] text-white py-20 px-6 rounded-t-[100px]">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-clemente font-black uppercase mb-8">Restons en contact</h2>
        <p class="text-xl opacity-80 mb-12">Suivez nos actualités et l'évolution d'ASSIA au quotidien.</p>
        <div class="flex flex-col md:flex-row justify-center gap-6">
          <a href="#" class="bg-white text-[#00A3B5] px-10 py-4 rounded-full font-bold uppercase hover:scale-105 transition-transform shadow-lg">
            S'inscrire à la newsletter
          </a>
          <a href="#" class="border-2 border-white px-10 py-4 rounded-full font-bold uppercase hover:bg-white hover:text-[#00A3B5] transition-all">
            Nous suivre sur LinkedIn
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import { Search, ArrowRight } from 'lucide-vue-next';
import NavBar from '../components/NavBar.vue';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';

const loader = ref(null);
const articles = ref([]);
const loading = ref(true);
const error = ref(null);
const searchQuery = ref('');
const selectedCategory = ref('all');

const categories = [
  { name: 'Tous', slug: 'all' },
  { name: 'Actualités', slug: 'actualites' },
  { name: 'Conseils', slug: 'conseils' },
  { name: 'Expertise', slug: 'expertise' }
];

const fetchArticles = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch('https://edossah.fr/wp-json/wp/v2/posts?_embed&per_page=12');
    if (!response.ok) throw new Error('Impossible de récupérer les articles');
    articles.value = await response.json();
  } catch (err) {
    error.value = err.message;
    console.error('Fetch error:', err);
  } finally {
    loading.value = false;
    // Tiny delay for GSAP to find elements
    setTimeout(() => {
      animateArticles();
    }, 100);
  }
};

const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const matchSearch = article.title.rendered.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                      article.content.rendered.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    // Simplification pour le mode dynamique : si on n'a pas les tags API, on filtre par slug simple
    const matchCategory = selectedCategory.value === 'all' || 
                         article.excerpt.rendered.toLowerCase().includes(selectedCategory.value);
    
    return matchSearch && matchCategory;
  });
});

const getCategoryName = (article) => {
  const terms = article._embedded?.['wp:term']?.[0] || [];
  return terms.length > 0 ? terms[0].name : 'Article';
};

const getAuthorName = (article) => {
  return article._embedded?.author?.[0]?.name || 'Edossah';
};

const getAuthorAvatar = (article) => {
  return article._embedded?.author?.[0]?.avatar_urls?.['96'] || 'https://randomuser.me/api/portraits/lego/1.jpg';
};

const getFeaturedImage = (article) => {
  const media = article._embedded?.['wp:featuredmedia']?.[0];
  return media ? media.source_url : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'all';
};

const animateArticles = () => {
  gsap.from(".article-card", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });
};

onMounted(async () => {
  await nextTick();
  
  // ANIMATION DU LOADER ASSIA
  const loaderTl = gsap.timeline();
  loaderTl.to('.loader-text', { opacity: 1, duration: 0.5, delay: 0.2 })
    .to('.loader-subtitle', { opacity: 1, duration: 0.5 }, "-=0.3")
    .to('.loader-progress', { width: '100%', duration: 1.5, ease: 'power2.out' }, '-=0.5')
    .to('.loader-text', { opacity: 0, duration: 0.5, delay: 0.3 })
    .to('.loader-subtitle', { opacity: 0, duration: 0.5 }, "<")
    .to(loader.value, { 
      y: '-100%', 
      duration: 1.2, 
      ease: 'power4.inOut' 
    });

  // Smooth scroll
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  fetchArticles();

  // Hero animations
  gsap.from("header > *", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
});
</script>

<style scoped>
.font-clemente { font-family: 'Clemente', sans-serif; font-weight: 900; }
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>