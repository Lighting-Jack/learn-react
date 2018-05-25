define('depB', [
    'depA'
], function (depA) {
    console.log(depA)
    return 'depB'
})