const requesthandler = (req, res) => {
    const url = req.url;
    const method = req.method;


    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove 01</title></head>');
        res.write(
            '<body><h1>Wecome to My page</h1><br><form action="/create-user" method="POST"><label for="username" style="font-size: x-large;">username</label>&nbsp;&nbsp;<input type="text" name="username">&nbsp;&nbsp;<button type="submit">Send</button></form></body>'
            );
        res.write('<html>');
        return res.end();
    }

    else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove 01</title></head>');
        res.write('<body><h1>Users List</h1><ul><li>User 1 </li><li>User 2 </li><li>User 3 </li></ul></body>');
        res.write('<html>');
        return res.end(); 
    }
   else if (url === '/create-user') {
        const body = [];
        req.on('data',(chunck) => {
            body.push(chunck);
        });
        req.on('end', ()=> {
            const parsebody = Buffer.concat(body).toString();
            console.log(parsebody.split('=')[1]);  
        }); 
        res.statusCode =302;
        res.setHeader('Location','/');
        return res.end();
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove 01</title></head>');
        res.write('<body><h1>Wrong Parameter</h1><br><h3>Only these below parameter are accepted:</h3><h3> "/" , "/create-user" , and "/users"</h3></body>');
        res.write('<html>');
        res.end();     
    }

};
module.exports= requesthandler;