<script setup>
import { ref, nextTick, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = ref([
  { 
    title: "Fluidifier la prise en charge des bénéficiaires", 
    content: [
        "Un dossier unique dédié à l’accompagnement qui réunit toutes les données utiles ( évaluation sociale, documents, partenaires, historique des démarches)",
        "Un dossier de stockage des documents de la personne accompagnée",
        "Un espace dédié aux rendez-vous et aux échéances liées aux démarches du bénéficiaire",
        "Des notes disponibles"
    ],
    isOpen: false,
    container: null
  },
  { 
    title: "Réduire le temps d’administratif", 
    content: [
        "Import des données du SI-SIAO disponible",
        "Export de l’évaluation sociale vers une trame de rapport social modifiable",
        "Agenda qui permet de conserver un historique des rendez-vous",
        "Copie des Rendez-vous sur Google et Microsoft",
        "Système de mots-clés pour retrouver les informations rapidement et créer des indicateurs d’activité sur mesure"
    ],
    isOpen: false,
    container: null
  },
  { 
    title: "Adapter l’outil sur mesure pour votre dispositif", 
    content: [
        "Des formulaires adaptables aux dispositifs",
        "Des modules permettant une prise en main différenciée selon les besoins"
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
    <section class="action-section-left mr-4 md:mr-32 border-4 border-l-0 border-[var(--accent)] rounded-r-[var(--border-radius-primary)] p-8 md:p-12 bg-white ">
            <div class="flex flex-col md:flex-row items-start gap-12">
              <div class="action-content flex-1 flex flex-col gap-4 order-2 md:order-1 w-full">
                  <div v-for="(item, index) in items" :key="index" 
                       class="font-clemente text-white rounded-[25px] transition-all duration-300"
                       :class="item.isOpen ? 'bg-[var(--accent)]' : 'bg-[var(--accent)] hover:scale-[1.02]'">
                      
                      <!-- Header cliquable -->
                      <div @click="toggleItem(index)" 
                           class="p-6 cursor-pointer flex justify-between items-center select-none">
                          <p class="text-2xl md:text-3xl font-black leading-tight flex-1 text-center">
                              {{ item.title }}
                          </p>
                          <div class="text-2xl font-light transition-transform duration-300 ml-4"
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

              
              <div class="action-title flex-1 order-1 md:order-2 text-center md:text-left">
                  <h1 class="uppercase text-3xl md:text-5xl font-black font-clementeMini tracking-wider  text-[var(--accent)] leading-none">
                     CollaborATION entre professionnels sur chaque suivi :
                  </h1>
              </div>
            </div>
        </section>
</template>
