var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smartinternz')
.catch (error => console.log(error));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
var movieSchema = new mongoose.Schema({
			id: String,
		    name: String,
			year: String,
			rating: String
		});
var movie = mongoose.model("movie", movieSchema);

app.get('/adddata', function(req, res){
	console.log("get");
   res.render('movie');
});
app.post('/',async function(req, res){
	console.log("show message pug");
	  var myData = new movie(req.body);
	      myData.save().then(item => {
				res.send("<br>New Movie Added<br> <br><a href='/getdata'>View MoviesData</a> <br><br><a href='/adddata'>Add MoviesData</a><br><br><a href='/update'>Update MoviesData</a>");
			})
			.catch(err => {
				res.status(400)
				.send("unable to save to database");
			});							
});

app.get('/getdata',async function(req, res){
console.log("view");
try{
	const records=await movie.find({},{ _id: 0, __v: 0 });//
	console.log("try after find"+records.length);
		if (records.length > 0) {
			console.log(records);
			temp="<table border=1>";
			temp+="<caption>Movie Details</caption>";
			temp+="<tr><td>Id:</td><td>Name:</td><td>year:</td><td>Rating:</td></tr>";
			for (let i in records) {
				temp += "<tr><td>" + records[i].id + "</td>";
				temp+= "<td>"+records[i].name+"</td>";
				temp+= "<td>"+records[i].year+"</td>";
				temp+= "<td>"+records[i].rating+"</td></tr>";				  
				}
				temp+="</table>";
				temp+="<br><br><a href='/adddata'>Add MoviesData</a><br><br><a href='/delete'>Delete MoviesData</a><br><br><a href='/update'>Update MoviesData</a>";
				res.send(""+temp);
		}
}
catch (err) {
		console.log(err.errmsg);
	}						
});
app.get('/delete',function(req, res){
console.log("delete pug");
   res.render('moviedelete');
});
app.post('/deletedata',async function(req, res){
	console.log("deletedata");
	  data = req.body;
	  //res.send(data);
	  id=data["id"];
	  try {
	       console.log("try block");
           await movie.deleteOne({id:id});           
		   res.send("Movie Deleted succesfully <br><br><br><a href='/getdata'>View Movies Data</a><br><br><a href='/adddata'>Add Movies Data</a><br><br><a href='/update'>Update MoviesData</a>");
		
         } 
		 catch (err) {
              console.log(err.errmsg);
         }
		
});

app.get('/update',function(req, res){
console.log("update pug");
   res.render('movieupdate');
});

app.post('/updatedata',async function(req, res){
  console.log("update data");
  data = req.body;
  id=data["id"];
  name=data["name"];
  try{
	  const records=await movie.findOneAndUpdate({id:id},{name:name});	  
      res.send("Updated Movie Details Succesfully  <br><br><br><a href='/getdata'>View MoviesData</a><br><br><a href='/adddata'>Add MoviesData</a><br><br><a href='/update'>Update MoviesData</a><br><br><a href='/delete'>Delete MoviesData</a>");
    
  } catch (err) {
    console.log(err.errmsg);
  }
	  
});
app.listen(3000);