/*document , require*/
var socket  = require('socket.io'),
    express = require('express'),
    https   = require('https'),
    http    = require('https'),
    fs = require('fs'),
    logger  = require('winston');



const privateKey = fs.readFileSync(__dirname +'/bneksy.com.key');
const certificate = fs.readFileSync(__dirname +'/bneksy.com.cert');
const credentials = {
    key: privateKey,
    cert: certificate,
    passphrase: process.env.PASSPHRASE
}


logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console ,{colorize:true,timestamp:true});

logger.info('Socket Io  > listening on the port');

var app = express();
var http_server = http.createServer(credentials,app).listen(8081);

function emitNewOrder(http_server){
    var io = socket(http_server, {
            allowEIO3: true,
            cors: {
                origin: "https://bneksy.com",
                methods: ["GET", "POST"],
                allowedHeaders: ["my-custom-header"],
                credentials: true
            }
        }
    );
    io.sockets.on("connection",function(socket){
        socket.on("new_order",function(data){
            io.emit("new_order",data);
        });

    });
}



emitNewOrder(http_server);
