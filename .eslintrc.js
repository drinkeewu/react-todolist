module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extend-native': 'off',
    // 元素内容、标签和属性需要换行，无属性元素允许不换行
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignores: ['pre', 'textarea'],
    }],
    // 元素嵌套需要换行
    'vue/multiline-html-element-content-newline': ['error', {
      ignores: ['pre', 'textarea'],
    }],
    // 属性“=”号两边不允许空格
    'vue/no-spaces-around-equal-signs-in-attribute': true,
    // 允许 i++
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],

    //允许变量前加下划线
    "no-underscore-dangle": ['error' , {
      "allow" : ["_self"]
    }],

    //允许多层三目元算符
    "no-nested-ternary": 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
