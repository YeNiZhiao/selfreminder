module.exports = {
    content: ["./**.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': '#e8ffff',
                'secondary': '#a6f6f1',
                'textPrimary': '#213e3b',
                'komponen': '#41aea9'
            },
            backgroundImage: {
                'elemen': "url('/img/elemen.png')",
                'bgsection': "url('../img/bgsection.jpg')",
            },
            fontFamily: {
                'indie': ['Indie Flower', 'cursive'],
                'patrick': ['Patrick Hand', 'cursive'],
                'comfortaa': ['Comfortaa', 'cursive']
            }
        },
    },
    plugins: [],
}