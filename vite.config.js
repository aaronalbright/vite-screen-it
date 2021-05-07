import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [postcssNesting]
    }
  }
})
