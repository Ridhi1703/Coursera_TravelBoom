/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
colors:{
  'primaryd':'#1D5D9B',
  'primaryl':'#75C2F6',
  'secondaryd':'#F4D160',
  'secondaryl':'#FBEEAC',
},
fontFamily:{
'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],

},
    },
  },
  plugins: [],
}

