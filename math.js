exports.compute = function(user, book, summary){
    fs = require('fs');
    let result = "<b>User Name : </b>" + user + "<br><b>Book Name : </b>" + book + "<br><b>Summary : </b>" + summary +"<br><br>";
    fs.appendFile('data.html', result, function (err) {
        if (err) return console.log(err);
        console.log(result);
      });
    console.log('data.html');
    return result;

};




