import INGREDIENTS from "./data/ingredients";
import RECIPES from "./data/recipes";
export default function() {

    this.namespace = '/api';
    this.logging = false;

    this.defineRoutes = function(url, DATA) {

        this.get(url, function() {
            return {
                data: DATA
            };
        });

        this.get(url + '/:id', function(db, request) {
            let hit = DATA.filter(r => parseInt(r.id) === parseInt(request.params.id));
            if (hit.length) {
                return {
                    data: hit[0]
                };
            }
        });
    };

    this.defineRoutes('/ingredients', INGREDIENTS);
    this.defineRoutes('/recipes', RECIPES);
}
