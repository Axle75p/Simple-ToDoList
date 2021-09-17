let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

    


app.get('/', (req, res) => {
 
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let currentDate = today.toLocaleDateString("en-US", options);
    console.log(currentDate);

    res.render("index.ejs", {currentDate: currentDate});

});


app.post('/', function(sReq, sRes){    
    var email = sReq.body.email;
    console.log(email);   
});

app.listen(3000, () => console.log('app listening on port 3000!'));