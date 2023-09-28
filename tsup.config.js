// tsup.config.js
export default {
    entryPoints: ['./src/index.ts'],
    format: ['cjs', 'esm'],
    outDir: './dist',
    dts: true,
};
