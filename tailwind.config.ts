import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}' // This will cover all files within src and its subdirectories
    ],
    theme: {
        extend: {
            colors: {
                backgroundColor: '#ffffff',

                //
                primary: '#ffffff',
                secondary: '#000000',
                tertiary: '#000000',
                btn: {
                    //================Primary Button Colors ========
                    primary: '#123456',
                    primaryHover: '',
                    primaryBorder: '',
                    primaryShadow: '',
                    primaryText: '',
                    //================Secondary Button Colors ========
                    secondary: '#123456',
                    secondaryHover: '',
                    secondaryBorder: '',
                    secondaryShadow: '',
                    secondaryText: '',
                    //================Tertiary Button Colors ========
                    tertiary: '#123456',
                    tertiaryHover: '',
                    tertiaryBorder: '',
                    tertiaryShadow: '',
                    tertiaryText: ''
                }
            },
            screens: {
                xs: '480px', // Extra small devices (portrait phones)
                sm: '640px', // Small devices (landscape phones)
                md: '768px', // Medium devices (tablets)
                lg: '1024px', // Large devices (desktops)
                xl: '1280px', // Extra large devices (large desktops)
                '2xl': '1536px' // 2X Large devices (larger desktops)
            },
            spacing: {
                '128': '32rem',
                '144': '36rem'
            }
        }
    },
    plugins: []
}
export default config

