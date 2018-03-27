var weather = new Vue({
    el: '#values',

    data: {
        title: 'Get data from an API:',
        valores: [],
        personas: [],
    },
    created: function () {
        //this.fetchData();
        this.fetchDataPersonas();
    },        
    methods: {
        fetchData: function () {
            this.$http.get('https://my-json-server.typicode.com/typicode/demo/posts')
                .then(response => {
                    this.valores = response.data;
                })
        },
        fetchDataPersonas: function(){
            console.log("Personas")
            var that = this;
            fetch('db1.json')
                .then(function(response){
                    return response.json();
                })
                .then(function(personas){
                    that.personas = personas;
                });  
        }
    } 
})
;