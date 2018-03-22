var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/authorApp/dist' ));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Author');

var AuthorSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  quote: [{cont: {type: String, minlength:3}, vote:{type:Number, default:0}}]
},{timestamps:true})

mongoose.model('Author', AuthorSchema); 
var Author = mongoose.model('Author')
mongoose.Promise = global.Promise;

app.get('/authorlist',function(req,res){
  Author.find({}, function(err,data){
    if(err){
      console.log("Returned error", err);
      res.json({message: "Error", error: err})
   }
   else {
      res.json({message: "Success", data: data})
   }
  })
});

app.post('/author',function(req,res){
  let name = req.body.name;
  console.log(req.body);
  Author.findOne({name:name},function(err,data){
    if(data){
      console.log(data)
       res.json({message: "Error", data: "Author Exsists"})
    }else{
      console.log("Returned error", err);
      let x = new Author(req.body);
      x.save(function(err,data){
        if(err){
          res.status(500).send(err);
        }else{
          res.json({message: "New", data:data})
        }
      })
    }  
  })
})

app.delete('/destroyme/:id',function(req,res){
  Author.remove({_id:req.params.id}, function(err,data){
      if(err){
          console.log(err);
          res.status(500).send(err);
      }else{
          res.json(data)
      }
  })
})

app.get('/author/:id',function(req,res){
  Author.findOne({_id:req.params.id}, function(err,data){
    if(err){
      console.log(err);
      res.status(500).send(err);
    }else{
        res.json(data)
    }
  })
})

app.put('/author/:id', function(req,res){
  Author.find({_id:req.params.id},function(err,data){
    if(err){
        res.status(500).send(err)
    }else{
        Author.update({_id:req.params.id},{$set:req.body},function(err,data){
            if(err){
                res.status(500).send(err)
            }else{
                res.json(data)
            }
        })
    }

})
})

app.post('/author/quote/:id', function(req,res){
  Author.findOne({_id:req.params.id}, function(err, data){
    if(err){
      res.status(500).send(err)
    }else{
      console.log(req.body)
      data.quote.push({cont:req.body.desc})
      console.log(data.quote)
      data.save(function(errz,dataz){
        if(errz){
        console.log(errz)
        res.send(errz)
        }else{
        console.log(dataz)
        res.json(dataz)}
      })
    }
  })
})

app.post('/author/quote/destroy/:id',function(req,res){
  Author.update({_id:req.params.id},{$pull:{quote:{_id:req.body.thing}}}, function(err, data){
    if(err){
      console.log(err)
      res.status(500).send(err)
    }else{
      res.json(data)
    }
  })
})

app.post('/author/quote/upvote/:id',function(req,res){
  Author.update({_id:req.params.id,'quote._id':req.body.qid}, {$inc:{"quote.$.vote":req.body.num}}, function(err, data){
    if(err){
      console.log(err)
      res.status(500).send(err)
    }else{
      Author.update({_id:req.params.id},{$pull:{quote:{vote:-5}}}, function(err, data){
        if(err){
          console.log(err)
          res.status(500).send(err)
        }else{
          res.json(data)
        }
      })
      }
  })
})

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./authorApp/dist/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});
