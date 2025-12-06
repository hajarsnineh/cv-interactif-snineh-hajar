document.addEventListener('DOMContentLoaded', function () {
    const showProjectsBtn = document.getElementById('showProjectsBtn');
    const projectsContent = document.getElementById('projectsContent');
    let projectsLoaded = false;

   
    showProjectsBtn.addEventListener('click', function() {
        if (!projectsLoaded) {
            
            const projectsHTML = `
                <div class="project-entry border-start border-primary ps-3 mb-3">
                    <h6 class="fw-bold">Projet 1: Optimisation des ventes B2B</h6>
                    <p class="small text-muted">Mise en place d'un nouveau CRM pour automatiser le suivi, menant à une augmentation de 15% des leads qualifiés en 6 mois.</p>
                </div>
                <div class="project-entry border-start border-primary ps-3 mb-3">
                    <h6 class="fw-bold">Projet 2: Campagne de lancement de produit</h6>
                    <p class="small text-muted">Conception et exécution d'une stratégie de lancement complète pour un nouveau produit FMCG, atteignant 120% de l'objectif de vente trimestriel.</p>
                </div>
            `;
            
            projectsContent.innerHTML = projectsHTML;
            this.textContent = 'Masquer les détails des projets';
            projectsLoaded = true;

        } else {
            
            projectsContent.innerHTML = '<p class="text-muted">Projets masqués...</p>';
            this.textContent = 'Afficher les détails des projets';
            projectsLoaded = false;
        }
    });

   
    var cvTabs = document.getElementById('cvTabs');
    cvTabs.addEventListener('shown.bs.tab', function (event) {
        
        console.log(`Onglet actif: ${event.target.textContent}`);
       
    });
});