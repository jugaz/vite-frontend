import { defineConfig } from 'vite'

export default defineConfig({

    build: {
        outDir: 'Content',
        rollupOptions: {
          output: {
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/[name]-[hash].js',
            
            assetFileNames: ({name}) => {
              if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                  return 'images/[name]-[hash][extname]';
              }

     
              
              if (/\.css$/.test(name ?? '')) {
                  return 'css/[name]-[hash][extname]';   
              }
              
              if (/\.json$/.test(name ?? '')) {
                console.log("name",name)
                return 'json/[name]-[hash][extname]';   
              }
     
              // default value
              // ref: https://rollupjs.org/guide/en/#outputassetfilenames
              return 'Content/[name]-[hash][extname]';
            },
          },
        },
        emptyOutDir: true,
        assetsInlineLimit:0,
      },
      publicDir:"public"
  })