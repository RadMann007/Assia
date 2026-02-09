<template>
  <footer class="footer-container bg-[#03A3B5] text-white pt-24 pb-12 px-6 rounded-t-[80px] md:rounded-t-[100px] mt-20 relative overflow-hidden opacity-0 translate-y-20">
    <!-- Fond décoratif discret -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        
        <!-- Colonne 1 : Logo & Description -->
        <div class="flex flex-col gap-6">
          <a href="/" class="text-3xl font-display font-black uppercase tracking-tighter text-white">
            edossah
          </a>
          <p class="text-white/80 font-medium leading-relaxed max-w-xs">
            Agence numérique engagée pour les structures de l'accompagnement social. Nous transformons vos pratiques réelles en solutions utiles.
          </p>
          <div class="flex gap-4">
            <a href="https://linkedin.com" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Colonne 2 : Liens rapides -->
        <div class="flex flex-col gap-6">
          <h4 class="text-white font-black uppercase tracking-widest text-sm underline decoration-white/20 underline-offset-8">Navigation</h4>
          <nav class="flex flex-col gap-4">
            <a href="/" class="text-white/80 hover:text-white transition-colors font-medium">Accueil</a>
            <a href="/application" class="text-white/80 hover:text-white transition-colors font-medium">L'application ASSIA</a>
            <a href="/articles" class="text-white/80 hover:text-white transition-colors font-medium">Actualités</a>
            <a href="/contact" class="text-white/80 hover:text-white transition-colors font-medium">Contact</a>
          </nav>
        </div>

        <!-- Colonne 3 : Contact -->
        <div class="flex flex-col gap-6">
          <h4 class="text-white font-black uppercase tracking-widest text-sm underline decoration-white/20 underline-offset-8">Contactez-nous</h4>
          <div class="flex flex-col gap-4">
            <a href="mailto:emilie@edossah.fr" class="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail class="w-4 h-4" />
              </div>
              <span class="font-medium">emilie@edossah.fr</span>
            </a>
            <div class="flex items-start gap-3 text-white/80">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin class="w-4 h-4" />
              </div>
              <span class="font-medium">La Turbine,<br>95000 Cergy</span>
            </div>
          </div>
        </div>

        <!-- Colonne 4 : Légal -->
        <div class="flex flex-col gap-6">
          <h4 class="text-white font-black uppercase tracking-widest text-sm underline decoration-white/20 underline-offset-8">Informations</h4>
          <nav class="flex flex-col gap-4">
            <a href="#" class="text-white/80 hover:text-white transition-colors font-medium">Mentions légales</a>
            <a href="#" class="text-white/80 hover:text-white transition-colors font-medium">Politique de confidentialité</a>
            <a href="#" class="text-white/80 hover:text-white transition-colors font-medium">Gestion des cookies</a>
          </nav>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-white/40 text-sm font-bold uppercase tracking-widest">
          &copy; {{ new Date().getFullYear() }} Avenir-Green — Tous droits réservés
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
import { Mail, MapPin, Linkedin } from 'lucide-vue-next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".footer-container", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".footer-container",
      start: "top 95%",
    }
  });
});
</script>

<style scoped>
.font-display { font-family: 'Montserrat', sans-serif; }
</style>
