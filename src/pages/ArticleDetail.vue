<template>
  <div class="bg-[#FFF5F0] min-h-screen font-body text-[#1a1a1a] overflow-x-hidden">
    
    <!-- NAVBAR -->
    <NavBar />

    <!-- HERO SECTION -->
    <header v-if="article" class="relative pt-40 pb-20 px-6 container mx-auto">
      <router-link 
        to="/articles" 
        class="inline-flex items-center gap-2 mb-10 text-[#00A3B5] font-bold uppercase tracking-widest hover:translate-x-[-10px] transition-transform"
      >
        <ArrowLeft class="w-5 h-5" />
        Retour aux actualités
      </router-link>

      <div class="flex flex-col gap-8 max-w-5xl">
        <div class="flex items-center gap-4">
          <span class="bg-orange-100 text-orange-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            {{ getCategoryName(article) }}
          </span>
          <span class="text-gray-400 font-medium text-sm">
            Publié le {{ formatDate(article.date) }}
          </span>
        </div>
        
        <h1 
          class="text-4xl md:text-7xl font-clemente font-black text-[#00A3B5] uppercase leading-tight tracking-tighter"
          v-html="article.title.rendered"
        ></h1>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main v-if="article" class="pb-32 px-6 container mx-auto">
      <div class="max-w-5xl mx-auto flex flex-col gap-12">
        
        <!-- Featured Image -->
        <div class="relative aspect-video rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
          <img 
            :src="getFeaturedImage(article)" 
            :alt="article.title.rendered"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Article text -->
        <div class="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-orange-100 flex flex-col md:flex-row items-center gap-6 mb-8">
           <div class="w-16 h-16 rounded-full overflow-hidden border-4 border-orange-50 shadow-sm flex-shrink-0">
             <img :src="getAuthorAvatar(article)" :alt="getAuthorName(article)" class="w-full h-full object-cover">
           </div>
           <div class="flex flex-col">
             <p class="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Écrit par</p>
             <h4 class="text-xl font-bold text-gray-800">{{ getAuthorName(article) }}</h4>
           </div>
        </div>

        <div 
          class="article-content bg-white p-8 md:p-16 rounded-[60px] shadow-sm border border-orange-100 text-lg md:text-xl leading-relaxed text-gray-700 font-medium"
          v-html="article.content.rendered"
        ></div>

      </div>
    </main>

    <!-- LOADING STATE -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A3B5] mb-4"></div>
        <p class="text-gray-500 font-bold uppercase tracking-widest">Chargement de l'article...</p>
      </div>
    </div>

    <!-- ERROR STATE -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center px-6">
      <div class="text-center py-20 bg-white rounded-[60px] border-2 border-dashed border-orange-200 p-12 max-w-lg">
        <div class="text-6xl mb-6 text-orange-300">⚠️</div>
        <h3 class="text-2xl font-black text-gray-800 uppercase mb-4">Oups !</h3>
        <p class="text-gray-600 mb-8">{{ error }}</p>
        <router-link to="/articles" class="bg-[#ff925c] text-white px-8 py-3 rounded-full font-bold uppercase transition-transform hover:scale-105 inline-block">
          Retour à la liste
        </router-link>
      </div>
    </div>

    <!-- FOOTER (Matching Articles.vue) -->
    <footer v-if="article" class="bg-[#00A3B5] text-white py-20 px-6 rounded-t-[100px]">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-clemente font-black uppercase mb-8">Partager cet article</h2>
        <div class="flex justify-center gap-6">
          <a href="#" class="bg-white text-[#00A3B5] px-10 py-4 rounded-full font-bold uppercase hover:scale-105 transition-transform shadow-lg">
            Copier le lien
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowLeft } from 'lucide-vue-next';
import NavBar from '../components/NavBar.vue';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

const route = useRoute();
const article = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchArticle = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch(`https://edossah.fr/wp-json/wp/v2/posts/${route.params.id}?_embed`);
    if (!response.ok) throw new Error('Impossible de charger cet article. Il a peut-être été déplacé.');
    article.value = await response.json();
    
    // Animation once loaded
    setTimeout(() => {
      gsap.from(".article-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, 100);

  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

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

onMounted(() => {
  window.scrollTo(0, 0);
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  fetchArticle();
});
</script>

<style>
.font-clemente { font-family: 'Clemente', sans-serif; font-weight: 900; }

/* Styling WordPress content */
.article-content h2, .article-content h3 {
  font-family: 'Clemente', sans-serif;
  font-weight: 900;
  color: #00A3B5;
  text-transform: uppercase;
  margin: 2rem 0 1rem 0;
}
.article-content p {
  margin-bottom: 1.5rem;
}
.article-content img {
  border-radius: 40px;
  margin: 2rem auto;
  display: block;
}
.article-content blockquote {
  border-left: 8px solid #fb923c;
  padding-left: 2rem;
  font-style: italic;
  margin: 2rem 0;
  color: #fb923c;
}
</style>
