import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupPlugin from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupPlugin()
  ],
  resolve: {
    extensions: ['.vue','.json','.ts'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      "/api": { // ��/api�� �Լ�ǰ���ַ����ᱻ�滻Ϊ��������
        target: "http://localhost:8080/", // ��������
        secure: false, // �����Ƿ�Ϊhttps
        changeOrigin: true, // �Ƿ����
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
