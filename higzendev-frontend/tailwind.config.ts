import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'dark-bg': '#0d0d0d',
				'dark-section': '#121212',
				'dark-card': '#1a1a1a',
				'dark-input': '#111111',
				'glow-primary': 'hsl(var(--glow-primary))',
				'glow-secondary': 'hsl(var(--glow-secondary))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scroll-right': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'scroll-left': {
					from: { transform: 'translateX(-50%)' },
					to: { transform: 'translateX(0)' }
				},
				'marquee-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'marquee-left': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'carousel-scroll-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-50% - 16px))' }
				},
				'carousel-scroll-left': {
					'0%': { transform: 'translateX(calc(-50% - 16px))' },
					'100%': { transform: 'translateX(0)' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'carousel-scroll-right': 'carousel-scroll-right 25s linear infinite',
				'carousel-scroll-left': 'carousel-scroll-left 25s linear infinite',
				'marquee-right': 'marquee-right 25s linear infinite',
				'marquee-left': 'marquee-left 25s linear infinite',
				'marquee': 'marquee 30s linear infinite',
				'marquee-slow': 'marquee 45s linear infinite',
			},
			backgroundImage: {
				'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/tech-bg.jpg")',
				'tech-grid': 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.92)), url("/tech-grid.jpg")',
				'gradient-dark': 'linear-gradient(180deg, #0d0d0d 0%, #121212 100%)'
			},
			boxShadow: {
				'glow': '0 0 10px hsl(var(--glow-primary) / 0.5)',
				'glow-lg': '0 0 20px hsl(var(--glow-primary) / 0.7)',
				'card-glow': '0 4px 20px rgba(14, 165, 233, 0.1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
