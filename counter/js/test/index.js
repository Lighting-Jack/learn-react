require.config({
    paths: {
        depA: "./depA",
        jquery: "../../../build/jquery.min"
    }
})

require([
    'depA'
], function (depA) {
})