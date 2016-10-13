import INGREDIENTS from "./ingredients";
export default function() {

    this.namespace = '/api';
    this.logging = false;

    this.get('/ingredients/:id', function(db, request) {
        let hit = INGREDIENTS.filter(r => r.id == request.params.id);
        d(request.params.id, INGREDIENTS.filter(r => r.id == request.params.id));

        if (hit.length) {
            return {
                data: hit[0]
            };
        }
    });

    this.get('/ingredients', function() {
        return {
            data: INGREDIENTS
        };
    });
}
