module.exports = {
  preset: [
    '@vue/cli-plugin-unit-jest/preset/no-babel', // Preset predeterminado para pruebas unitarias sin Babel
    '@babel/preset-env', // Agregar el preset para compilar el código de JavaScript moderno
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  }
};
