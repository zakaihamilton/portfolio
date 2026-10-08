import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypes from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

const config = [
  ...nextVitals,
  ...nextTypes,
  { rules: jsxA11y.flatConfigs.recommended.rules },
  {
    ignores: [
      "**/.next/**",
      "node_modules/**",
      "**/next-env.d.ts",
      "coverage/**",
    ],
  },
];

export default config;
