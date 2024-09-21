import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}' // This will cover all files within src and its subdirectories
    ],
    theme: {
        extend: {
            colors: {
                backgroundColor: '#ffffff',
                primary: '#ffffff',
                secondary: '#000000',
                tertiary: '#000000',
                btn: {
                    //================Primary Button Colors ========
                    primary: '#123456',
                    primaryHover: '#000000',
                    primaryBorder: '#000000',
                    primaryText: '#000000',
                    //================Secondary Button Colors ========
                    secondary: '#123456',
                    secondaryHover: '#000000',
                    secondaryBorder: '#000000',
                    secondaryText: '#000000',
                    //================Tertiary Button Colors ========
                    tertiary: '#123456',
                    tertiaryHover: '#000000',
                    tertiaryBorder: '#000000',
                    tertiaryText: '#000000'
                }
            },
            boxShadow: {
                // ==========btn Shadow
                btnPrimary: '',
                btnSecondary: '',
                btnTertiary: ''
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

