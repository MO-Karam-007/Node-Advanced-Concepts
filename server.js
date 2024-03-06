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
            type: "Blocking",
            value: init
        })
    })

    worker.on('error', (error) =>
    {
        res.json({
            type: "Blocking-Error",
            value: error
        })
    })
})


app.listen(9090, () =>
{
    console.log(`Server is working on 9090`);
})