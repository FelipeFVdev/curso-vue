new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        btnAlerta(event){
            alert('Alerta');
        },
        alterarValor(event) {
            this.valor = event.target.value;
        }
    },
})