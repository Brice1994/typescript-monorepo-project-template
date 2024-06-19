module.exports = {
    extends: '../../.eslintrc.js', // Extends the top-level configuration
    plugins: [
      'svelte'
    ],
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte/svelte'
      }
    ],
    settings: {
      'svelte/typescript': true
    },
    rules: {
      // Add or override any rules specific to the ui package here
    }
  };
  