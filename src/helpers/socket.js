import io from 'socket.io-client/dist/socket.io.js';

var socket;

export function socketInitializer() {
    return new Promise(function(resolve) {
        if(typeof socket == "undefined") {
            socket = io(`http://62.152.37.40:4000`, {
                transports: ['websocket', 'polling'],
            });
        };

        resolve(socket);
    });    
};

export function getSocket() {
    return socket;
};

export function postData(action, data) {
    return new Promise(resolve => {
        socket.emit('components', {
            action: action,
            data: data
        }, async function (response) {
            resolve(response);
        });
    });
};