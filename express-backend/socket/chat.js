'use strict'

module.exports = io => {
    io.on('connection', socket => {
        console.log((new Date).toISOString()+': new connection')
        socket.broadcast.emit('hi');
        socket.on('echo', data =>{
            io.emit('echo',data)
        })
        //   client.emit('load all messages', messages.reverse())

        socket.on('disconnect', () => {
            console.log((new Date).toISOString()+': user disconnected')
        })

        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });

    })
}
