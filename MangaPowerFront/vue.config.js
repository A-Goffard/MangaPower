const { defineConfig } = require('@vue/cli-service');
const { VueLoaderPlugin } = require('vue-loader'); // Importa VueLoaderPlugin desde vue-loader

module.exports = {
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = true;
      return args;
    });
  },

  configureWebpack: {
    // Aquí puedes agregar configuración personalizada de Webpack
    plugins: [
      // Otros plugins...
      new VueLoaderPlugin(), // Asegúrate de agregar VueLoaderPlugin aquí si no lo has hecho antes
      new VueLoaderPlugin({
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('app-'),
          // Otras características de compilación...
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
        }
      })
    ],
    resolve: {
      // Otras configuraciones de resolución...
    },
    module: {
      // Otras configuraciones de módulos...
    }
  }
};
