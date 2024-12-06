import Alpine from "alpinejs";
window.alpine = Alpine;
import Recettes from "./components/Recettes";
import persist from '@alpinejs/persist';


// declare your Alpine components here...
Alpine.plugin(persist);
Alpine.data('Recettes', Recettes);
Alpine.start();

