export default function() {

    this.namespace = '/api';

    this.get('/ingredients', function() {
        return {
            data: [
            ]
        };
    });
}
