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
			padding: {
				DEFAULT: '1rem',
				xs: '1rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '2.5rem',
				xl: '3rem',
				'2xl': '3.5rem',
			},
			screens: {
				xs: '475px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1400px',
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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cosmic: {
					purple: 'hsl(var(--cosmic-purple))',
					'purple-light': 'hsl(var(--cosmic-purple-light))',
					cyan: 'hsl(var(--electric-cyan))',
					green: 'hsl(var(--mystic-green))',
					ember: 'hsl(var(--ember-orange))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '0.75rem' }],
				'3xs': ['0.5rem', { lineHeight: '0.625rem' }],
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-fire': 'var(--gradient-fire)',
				'gradient-ethereal': 'var(--gradient-ethereal)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				glow: 'var(--shadow-glow)',
				'accent-glow': 'var(--shadow-accent-glow)',
				cosmic: 'var(--shadow-cosmic)',
				elevated: 'var(--shadow-elevated)'
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
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) scale(1)',
						opacity: '0.3'
					},
					'50%': {
						transform: 'translateY(-20px) scale(1.1)',
						opacity: '0.6'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				},
				'dragon-float': {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) translateY(0px) translateX(0px) scale(1)'
					},
					'25%': {
						transform: 'translate(-50%, -50%) translateY(-20px) translateX(15px) scale(1.02)'
					},
					'50%': {
						transform: 'translate(-50%, -50%) translateY(-10px) translateX(30px) scale(0.98)'
					},
					'75%': {
						transform: 'translate(-50%, -50%) translateY(-25px) translateX(15px) scale(1.01)'
					}
				},
				'dragon-drift': {
					'0%, 100%': {
						transform: 'translateX(25%) translateY(0px) rotate(0deg) scale(0.75)'
					},
					'33%': {
						transform: 'translateX(-10%) translateY(-30px) rotate(-5deg) scale(0.8)'
					},
					'66%': {
						transform: 'translateX(10%) translateY(-15px) rotate(3deg) scale(0.7)'
					}
				},
				'dragon-breath': {
					'0%, 100%': {
						opacity: '0.1',
						transform: 'scaleY(1) scaleX(1)'
					},
					'25%': {
						opacity: '0.3',
						transform: 'scaleY(1.1) scaleX(1.05)'
					},
					'50%': {
						opacity: '0.2',
						transform: 'scaleY(1.2) scaleX(1.1)'
					},
					'75%': {
						opacity: '0.25',
						transform: 'scaleY(1.1) scaleX(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'shimmer': 'shimmer 2s linear infinite',
				'dragon-float': 'dragon-float 6s ease-in-out infinite',
				'dragon-drift': 'dragon-drift 8s ease-in-out infinite',
				'dragon-breath': 'dragon-breath 3s ease-in-out infinite'
			}
		}
	},
	plugins: [
		// @ts-ignore
		require("tailwindcss-animate")
	],
} satisfies Config;
