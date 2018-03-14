function mock(app) {
    app.post('/inspect/login', function(req, res) {
        console.log(req.body);
       var { username, password } =  req.body;
       if(password.trim()) {
           res.status(200);
           res.end(JSON.stringify({username}));
       } else {
           res.status(400);
           res.end(JSON.stringify({msg: "密码错误"}));
       }
    })
}

module.exports = mock;