module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // JSX 지원
    },
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js', // 테스트 파일 허용
          '**/*.test.ts', // 테스트 파일 허용
          '**/*.test.tsx', // 테스트 파일 허용
          '**/*.stories.js', // Storybook 파일 허용
          '**/*.stories.tsx', // Storybook 파일 허용
          '**/*.stories.ts', // Storybook 파일 허용
          'src/setupTests.ts', // 테스트 설정 파일 허용
        ],
      },
    ],
    'react/require-default-props': 'off', // defaultProps 사용을 권장하지 않음
    'react/no-unescaped-entities': 'off', // 문자열 내에서 특수문자를 이스케이프하지 않아도 됨
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
  overrides: [
    {
      files: ['.eslintrc.cjs'], // .eslintrc.cjs 파일에 대한 규칙 비활성화
      parserOptions: {
        project: null, // TypeScript 타입 검사 비활성화
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
