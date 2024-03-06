const { parentPort } = require('worker_threads')

let init = 0;
for (var i = 0; i < 20_000_000_000; i++)
{
    init++;
}

parentPort.postMessage(init)