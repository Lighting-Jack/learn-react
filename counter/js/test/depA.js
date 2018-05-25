define('depA', [
    'depB'
], function (depB) {
    console.log(depB)
    return "depA"
})