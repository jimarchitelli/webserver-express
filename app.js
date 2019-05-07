const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });

    let salida = { nombre: "Juan", edad: 35, url: request.url };

    response.write(JSON.stringify(salida));
    response.end();
  })
  .listen(8080);
