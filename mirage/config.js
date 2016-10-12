export default function() {

    this.namespace = '/api';

    this.get('/ingredients', function() {
        return {
            data: [
                {id: 1, type: 'ingredient', name: 'voi', unit: 'g'},
                {id: 2, type: 'ingredient', name: 'maito', unit: 'dl'},
                {id: 3, type: 'ingredient', name: 'kananmuna', unit: 'kpl'},
                {id: 4, type: 'ingredient', name: 'vehnäjauho', unit: 'g'},
            ]
        };
    });
}
