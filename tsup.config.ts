import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['lib/index.ts'],
    format: ['esm', 'cjs'],
    platform: 'node',
    target: 'es2022',
    clean: true,
    skipNodeModulesBundle: true,
    shims : true,
    cjsInterop: true,
    keepNames: true,
    outDir: 'dist',
    dts: true,
    sourcemap: true,
    noExternal: [],
    external: [],
    esbuildPlugins: [],
    treeshake: false,
    splitting: false,
});
