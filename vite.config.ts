import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import solid from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solid(),
    checker({
      typescript: true,
      stylelint: {
        lintCommand: 'stylelint **/*.scss',
        dev: {
          /** Чтобы линтило UI либу */
          overrideConfig: {
            cwd: process.cwd(),
          },
        },
      },
      enableBuild: false,
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true,
  },
  // to access the Tauri environment variables set by the CLI with information about the current target
  envPrefix: [
    'VITE_',
    'TAURI_PLATFORM',
    'TAURI_ARCH',
    'TAURI_FAMILY',
    'TAURI_PLATFORM_VERSION',
    'TAURI_PLATFORM_TYPE',
    'TAURI_DEBUG',
  ],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
    // don't minify for debug builds
    // mini: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./frontend/', import.meta.url)),
      '@assets': fileURLToPath(new URL('./frontend/assets', import.meta.url)),
    },
  },
});
