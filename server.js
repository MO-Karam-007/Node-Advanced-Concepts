const express = require('express')
const { Worker } = require('worker_threads')


const app = express()

app.get('/non-blocking', (req, res) =>
{
    res.json({
        type: "Non-Blocking"
    })
})


app.get('/blocking', async (req, res) =>
{
    const worker = new Worker('./worker.js')
    worker.on('message', (init) =>
    {
        res.json({
            type: "Blocking Code",
            value: init
        })
    })

    worker.on('error', (error) =>
    {
        res.json({
            type: "Blocking-Error",
            error
        })
    })
})

console.log(`Go to http://localhost:9090/non-blocking`);
console.log(`      http://localhost:9090/blocking`);

app.listen(9090, () =>
{
    console.log(`Server is working on 9090`);
})