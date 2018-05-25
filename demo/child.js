module.exports = function (event, context, callback) {
    setTimeout(() => {
        console.log("child")
    }, 3000)

    console.log('child has loaded')
    // process.send('child has opened', () => {
    //     console.log("child send message: hello")
    // })
    process.exit(0)


}
