const http = require('http'),
    fs   = require('fs'),
    port = 3000;

const server = http.createServer( function( request,response ) {
    switch( request.url ) {
        case '/':
            sendFile( response, 'index.html' );
            break;
        case '/index.html':
            sendFile( response, 'index.html' );
            break;
        case '/public/wpi.png':
            sendFile( response, 'public/wpi.png' );
            break;
        case '/public/mystyles.css':
            sendFile( response, 'public/mystyles.css' );
            break;
        default:
            response.end( '404 Error: File Not Found' );
    }
});

const sendFile = function( response, filename ) {
    fs.readFile( filename, function( err, content ) {
        response.end( content, 'utf-8' );
    });
}

server.listen( process.env.PORT || port, () => {
    console.log("Server listening on port " + port);
} );

