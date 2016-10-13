import INGREDIENTS from "./ingredients";
export default function() {

    this.namespace = '/api';
    this.logging = false;

    this.get('/ingredients', function() {
        return {
            data: INGREDIENTS
        };
    });
}
