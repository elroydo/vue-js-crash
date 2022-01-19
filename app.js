const app = new Vue({
    el: '#app',
    data() {
        return {
            firstName: 'Caspian',
            lastName: 'Wolfgang',
            email: 'caspian@email.com',
            picture: 'https://thispersondoesnotexist.com/image'
        }
    },
    methods: {
        async morph() {
            const res = await fetch('https://randomuser.me/api/');
            const { results } = data = await res.json();

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.picture = results[0].picture.large
        }
    },
})