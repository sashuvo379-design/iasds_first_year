window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', '"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
};
