module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            'white': '#ffffff',
            'teal': '#76D1CB',
            'blue': {
                100: '#4d83d3',
                400: '#263878',
                600: '#22113E'
            },
            'purple': {
                100: '#C1B8E2',
                400: '#6557B0',
                600: '#413489',
                800: '#331B5B',
            }
        },
        fontFamily: {
            roboto: ['Roboto', 'serif'],
            slab: ['Roboto Slab', 'serif']
        },
        extend: {
            container: {
                center: true
            },
            boxShadow: {
                'custom': '0 0 25px 5px #6557B0',
            }
        }
    },
    plugins: [],
}
