export default {
  "**/*.{ts, tsx}": [() => "tsc --skipLibCheck --noEmit", "eslint"],
  "**/*.{ts, tsx, css}": [() => "prettier --write"]
};
