import { defineConfig } from 'vite';

export default defineConfig({
  base:'/',
  root:'src',
  publicDir:'src/public',
  build:{
    assetsDir:'',
    outDir:'../dist',
    lib:''
  }
})