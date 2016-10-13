export default function() {

    this.namespace = '/api';
    this.logging = false;

    this.get('/ingredients', function() {
        return {
            data: [
                {id: 1, type: 'ingredient', attributes: {
                    name: 'voi',
                    unit: 'g',
                }},
                {id: 2, type: 'ingredient', attributes: {
                    name: 'maito',
                    unit: 'dl',
                }},
                {id: 3, type: 'ingredient', attributes: {
                    name: 'kananmuna',
                    unit: 'kpl',
                }},
                {id: 4, type: 'ingredient', attributes: {
                    name: 'vehnäjauho',
                    unit: 'g',
                }},
            ]
        };
    });
}
