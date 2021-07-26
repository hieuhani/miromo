import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'micromono-http',
    },
    rollupOptions: {
      output: {
        globals: (id) => id, // required for umd output
      },
    },
  },
});
