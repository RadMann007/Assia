<script setup>
import { ref, nextTick, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = ref([
  { 
    title: "Tout avoir à portée de main : transversalité et pilotage", 
    content: [
        "Suivi des prises en charges ",
        "Gestion d’attribution des suivis aux travailleurs sociaux",
        "Gestion des hébergements et logements",
        "Collaborations facilitées",
        "Gestion des droits d’accès aux données modulable"
    ],
    isOpen: false,
    container: null
  },
  { 
    title: "Module Hébergement",
    content: [
        "Calcul des participations financières et redevances",
        "Edition des avis d’échéances et justificatifs",
        "Gestion des dépôts de garantie",
        "Gestion des aides financières, prêts et avances",
        "Suivi du compte de la personne accompagnée"
    ],
    isOpen: false,
    container: null
  },
  { 
    title: "Module Paiement", 
    content: [
        "Gestion des places",
        "Calcul des taux d’occupation",
        "Gestion des états des lieux",
        "Attestations d’hébergement"
    ],
    isOpen: false,
    container: null
  },
  { 
    title: "Module Asile et plein d’autres", 
    content: [
        "Bilan de santé disponible",
        "Dédié aux équipes médicales"
    ],
    isOpen: false,
    container: null
  }
]);

const toggleItem = async (index) => {
  const item = items.value[index];
  
  if (item.isOpen) {
    // Fermeture
    gsap.to(item.container, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        item.isOpen = false;
        ScrollTrigger.refresh();
      }
    });
  } else {
    // Ouverture
    item.isOpen = true;
    await nextTick();
    
    gsap.fromTo(item.container, 
      { height: 0, opacity: 0 },
      { 
        height: "auto", 
        opacity: 1, 
        duration: 0.5, 
        ease: "power2.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      }
    );
  }
};
</script>

<template>
    <section class="action-section-right ml-4 md:ml-32 border-4 border-r-0 border-[#ff925c] rounded-l-[60px] p-8 md:p-12 bg-white shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row-reverse items-center gap-12">
              <div class="action-content flex-1 flex flex-col gap-4 w-full">
                  <div v-for="(item, index) in items" :key="index" 
                       class="font-clemente text-white shadow-md rounded-[25px] overflow-hidden transition-all duration-300"
                       :class="item.isOpen ? 'bg-[#ff925c]' : 'bg-[#ff925c] hover:scale-[1.02]'">
                      
                      <!-- Header cliquable -->
                      <div @click="toggleItem(index)" 
                           class="p-6 cursor-pointer flex justify-between items-center select-none">
                          <p class="text-3xl md:text-4xl font-black leading-tight flex-1 text-center uppercase">
                              {{ item.title }}
                          </p>
                          <div class="text-3xl font-light transition-transform duration-300 ml-4"
                               :style="{ transform: item.isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }">
                              +
                          </div>
                      </div>

                      <!-- Contenu collapse -->
                      <div :ref="el => items[index].container = el" 
                           class="overflow-hidden bg-[#F5F5DC] px-8"
                           :class="{ 'h-0': !item.isOpen }">
                          <ul class="pb-6 pt-2 text-left text-3xl font-medium space-y-4 font-clementeMini">
                              <li v-for="(point, pIndex) in item.content" :key="pIndex" class="flex items-start gap-2">
                                  <span class="mt-3 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                                  <span class="text-black">{{ point }}</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div class="action-title flex-1 text-center md:text-right">
                  <h1 class="uppercase text-4xl md:text-6xl font-black font-clemente text-[#ff925c] leading-none">
                      Faciliter le quotidien à tous les niveaux
                  </h1>
              </div>
            </div>
        </section>
</template>

<style scoped>
.font-clemente {
    font-family: 'Clemente', sans-serif;
}
</style>
