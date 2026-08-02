import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        // Mantener el viewBox para que los iconos escalen con CSS (size-*)
                        removeViewBox: false,
                      },
                    },
                  },
                  // Prefijar los ids con el nombre del archivo. Sin esto, cleanupIds
                  // los renombra a "a", "b", "c"... en TODOS los svg y, al inlinearse
                  // varios iconos en la misma página, url(#a) resuelve al primer #a
                  // del documento (el de otro icono) y los degradados salen mal.
                  "prefixIds",
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
