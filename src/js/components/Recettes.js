import recette from '../../data/recipes.json';

export default function Recettes() {
    return {
        ListeRecettes: [],
        selectedRecette: null, 
        currentStep: 0, 
        difficultyFilter: '',
        prepTimeFilter: '',
        categoryFilter: '',
        searchQuery: '', 

       
        init() {
            this.ListeRecettes = recette.recipes;
          
        },

    
        get filteredRecettes() {
            let filtered = this.ListeRecettes;

            
            if (this.searchQuery) {
                filtered = filtered.filter(recette =>
                    recette.title.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }

            
            if (this.difficultyFilter) {
                filtered = filtered.filter(recette => recette.difficulty === this.difficultyFilter);
            }

           
            if (this.prepTimeFilter) {
                if (this.prepTimeFilter === 'moins_30') {
                    filtered = filtered.filter(recette => recette.preparationTime < 30);
                } else if (this.prepTimeFilter === '30_60') {
                    filtered = filtered.filter(recette => recette.preparationTime >= 30 && recette.preparationTime <= 60);
                } else if (this.prepTimeFilter === 'plus_60') {
                    filtered = filtered.filter(recette => recette.preparationTime > 60);
                }
            }

           
            if (this.categoryFilter) {
                filtered = filtered.filter(recette => recette.category === this.categoryFilter);
            }

            return filtered;
        },


        
        openRecette(recette) {
            this.selectedRecette = recette;
            this.currentStep = 0; 
        },

       
        closeRecette() {
            this.selectedRecette = null;
        },

        
        nextStep() {
            if (this.currentStep < this.selectedRecette.instructions.length - 1) {
                this.currentStep++;
            }
        },

       
        previousStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        }
    };
}
