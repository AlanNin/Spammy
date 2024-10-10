import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./node_modules/@shadcn/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-geist-sans)", ...fontFamily.sans]
  		},
  		screens: {
  			'max-m': {
  				max: '480px'
  			},
  			'max-md': {
  				max: '640px'
  			},
  			'max-lg': {
  				max: '768px'
  			},
  			'max-xl': {
  				max: '1024px'
  			},
  			'max-2xl': {
  				max: '1280px'
  			},
  			'max-3xl': {
  				max: '1536px'
  			},
  			'min-m': {
  				min: '481px'
  			},
  			'min-md': {
  				min: '641px'
  			},
  			'min-lg': {
  				min: '769px'
  			},
  			'min-xl': {
  				min: '1025px'
  			},
  			'min-2xl': {
  				min: '1281px'
  			},
  			'min-3xl': {
  				min: '1537px'
  			},
  			m: {
  				min: '0px',
  				max: '480px'
  			},
  			md: {
  				min: '481px',
  				max: '640px'
  			},
  			lg: {
  				min: '641px',
  				max: '768px'
  			},
  			xl: {
  				min: '769px',
  				max: '1024px'
  			},
  			'2xl': {
  				min: '1025px',
  				max: '1280px'
  			},
  			'3xl': {
  				min: '1281px',
  				max: '1536px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
