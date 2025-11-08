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
    // '@feature-sliced',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended', // jsx-a11y 규칙은 웹 접근성을 준수하기 위함
    'plugin:@tanstack/query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // JSX 지원
    },
    project: './tsconfig.app.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    '@tanstack/query',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17 이상에서는 React import 없이 사용 가능
    '@typescript-eslint/no-unused-vars': [
      // typescript에서 사용하지 않는 변수에 대한 경고
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'import/prefer-default-export': 'off', // 단일 export만 있을 때도 default export를 강제하지 않음
    'react/prop-types': 'off', // TypeScript로 PropTypes를 대체하므로 비활성화
    'jsx-a11y/anchor-is-valid': 'off', // react router의 Link 컴포넌트가 a 태그를 대체하므로 비활성화
    'react/jsx-props-no-spreading': 'off', // JSX에서 props 스프레드(...props)를 허용
    'prettier/prettier': ['error'], // Prettier 에러 발생 시 ESLint 에러로 표시
    'import/no-extraneous-dependencies': [
      // devDependencies에 대한 규칙 설정
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
          '**/mocks/**', // mocks 폴더에서 devDependencies 사용 허용
        ],
      },
    ],
    'react/require-default-props': 'off', // defaultProps 사용을 권장하지 않음
    'react/no-unescaped-entities': 'off', // 문자열 내에서 특수문자를 이스케이프하지 않아도 됨
    'import/extensions': [
      // import 시 확장자를 생략할 수 있도록 함
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true, // 확장만 하는 빈 인터페이스는 허용
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.app.json',
      },
    },
  },
  overrides: [
    {
      files: [
        '.eslintrc.cjs',
        'public/**',
        'src/shared/assets/**',
        '**/*.stories.tsx',
        '**/*.stories.ts',
      ],
      parserOptions: {
        project: './tsconfig.app.json',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'react/function-component-definition': 'off',
      },
    },
  ],
};
