let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

let items=[]; //globally?

//--app.get start
app.get('/', (req, res) => {
 
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let currentDate = today.toLocaleDateString("en-US", options);
    console.log(currentDate);

    res.render("index.ejs", {currentDate: currentDate,itemList: items});
});
//--app.get end
//--app.post start
app.post('/', function(sReq, sRes){    
    let newItem = sReq.body.newItem; //get data from form
    items.push(newItem); //
    sRes.redirect("/");
});
//--app.post end
app.listen(3000, () => console.log('app listening on port 3000!'));