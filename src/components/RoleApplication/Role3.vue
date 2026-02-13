<script setup>
import { ref, nextTick, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = ref([
  { 
    title: "Produire des indicateurs d’activité rapides", 
    content: [
        "Des tableaux de suivi adaptés",
        "Des indicateurs et graphiques directement disponibles",
        "Des exports de données personnalisables"
    ],
    isOpen: false,
    container: null
  },
  { 
    title: "Paramétrer des indicateurs d’activité spécifiques", 
    content: [
        "Comptabilité des activités (nombre de RDV, de visites, de réunions partenariales)",
        "Comptabilité des démarches engagées (orientation, aides apportées, objectifs éducatifs atteints)",
        "Mesure d’impact (point de vue bénéficiaire et professionnel)"
    ],
    isOpen: false,
    container: null
  },
  { 
    title: "Une gestion sécurisée des données", 
    content: [
        "Archivage automatique des données paramétrable",
        "Hébergement des données labélisé"
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
    <section class="action-section-left mr-4 md:mr-32 border-4 border-l-0 border-[#ff925c] rounded-r-[60px] p-8 md:p-12 bg-white shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center gap-12">
              <div class="action-content flex-1 flex flex-col gap-4 order-2 md:order-1 w-full">
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
                           class="overflow-hidden bg-[#fff3ee] px-8 font-clementeMini"
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
              
              <div class="action-title flex-1 order-1 md:order-2 text-center md:text-left">
                  <h1 class="uppercase text-4xl md:text-6xl font-black font-clemente text-[#ff925c] leading-none">
                      Suivre et piloter l’activité des services
                  </h1>
              </div>
            </div>
        </section>
</template>
