{
    'rules': {
        'indent': [
            2,
            'tab'
        ],
        'quotes': [
            2,
            'single'
        ],
        'linebreak-style': [
            2,
            'unix'
        ],
        'semi': [
            2,
            'always'
        ]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
    },
    'env': {
        'es6': true,
        'node': true,
        'browser': true
    },
    'extends': 'eslint:recommended',
    'ecmaFeatures': {
        'jsx': true,
        'experimentalObjectRestSpread': true
    },
    'plugins': [
        'react'
    ]
}

