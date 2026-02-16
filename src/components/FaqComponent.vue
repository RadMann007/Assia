<script setup>
import { ref } from 'vue';

const faqItems = ref([
    {
        question: "Que faire en cas de problème ou de question ?",
        answer: "Nous nous engageons à fournir un logiciel de haute qualité. Cependant, comme sur toute application, des bugs peuvent survenir très ponctuellement, et nous les résolvons immédiatement.\n\nPour toutes vos remontées, nous avons une équipe d’accompagnement qui répond à toutes vos demandes sur une adresse e-mail dédiée, dans un bref délai. Si nécessaire, nous vous appelons pour une assistance en direct.",
        isOpen: false
    },
    {
        question: "Quel est le niveau de sécurité des données ?",
        answer: "La fiabilité et la sécurité de vos données sont nos priorités. ASSIA est hébergée sur des serveurs sécurisés dans un Hébergement de Données de Santé (HDS). L’application fait l’objet de mises à jour régulières pour garantir une performance optimale et une protection maximale de vos informations.",
        isOpen: false
    },
    {
        question: "Comment faire si ASSIA ne répond pas à tous nos besoins ?",
        answer: "On échange sur vos besoins et on déploie des évolutions de l’application tous les mois, pour faciliter au maximum le quotidien des professionnels. Notre équipe travaille constamment à l’amélioration et à la mise à jour du logiciel pour assurer une expérience utilisateur fluide.",
        isOpen: false
    },
    {
        question: "Comment puis-je obtenir une démonstration d'ASSIA ?",
        answer: "C’est simple ! Cliquez sur le bouton “Recevoir une démo” tout en bas de la page, puis remplissez le formulaire et nous vous contacterons rapidement pour organiser une démonstration personnalisée, adaptée à vos besoins.",
        isOpen: false
    },
    {
        question: "Quels sont les tarifs d’ASSIA ?",
        answer: "Comme vous le savez, ASSIA est conçue avec des associations de l’AHI, et nous avons aussi construit ensemble notre grille tarifaire, pour que celle-ci soit accessible à chaque asso, selon ses ressources, qui sont liées à sa taille. C’est pourquoi ASSIA est facturée selon le nombre d’utilisateurs.\n\nNos prix sont toujours indiqués en TTC, pour éviter les 20% additionnels.",
        isOpen: false
    }
]);

const toggle = (index) => {
    // Option 1: Allow multiple open
    faqItems.value[index].isOpen = !faqItems.value[index].isOpen;

    // Option 2: Accordion (only one open at a time) - verify if this is preferred? 
    // Usually standard FAQ allows multiple.
    // If strict accordion is needed:
    // faqItems.value.forEach((item, i) => {
    //     if (i !== index) item.isOpen = false;
    // });
};
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-clemente">
            S’il vous reste une question, la réponse est peut-être dans notre F.A.Q :
        </h1>
        
        <div class="space-y-4">
            <div v-for="(item, index) in faqItems" :key="index" 
                 class="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                
                <button @click="toggle(index)" 
                        class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors">
                    <span class="text-lg md:text-xl font-semibold text-[#001214] font-clementeMini">
                        {{ item.question }}
                    </span>
                    <span class="transform transition-transform duration-300 ml-4 flex-shrink-0"
                          :class="{ 'rotate-180': item.isOpen }">
                        <!-- Chevron Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>

                <div v-show="item.isOpen" 
                     class="px-6 pb-6 pt-0 text-gray-600 animate-fade-in text-base leading-relaxed whitespace-pre-line font-clementeMini">
                    <div class="h-px w-full bg-gray-100 mb-4"></div>
                    {{ item.answer }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any specific transitions if not using Tailwind utilities entirely */
.animate-fade-in {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
