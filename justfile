release:
    npm test
    rm dist/*
    npm run prepublish
    npm publish