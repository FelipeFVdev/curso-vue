new Vue ({
    el: '#desafio',
    data: {
        nome: 'Felipe',
        idade: 22,
        img: 'https://www.google.com/search?q=imagem&oq=imagem&aqs=chrome..69i57j0i131i433i512l3j0i433i512j0i512j0i433i512j0i131i433i650j0i512l2.2608j0j7&sourceid=chrome&ie=UTF-8#imgrc=ygh7mPZkmRrf7M',

    },
    methods: {
        mult3(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        },
    },
})