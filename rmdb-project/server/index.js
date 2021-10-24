const express = require('express');
const User = require('../database-mongodb/User');
const Video = require('../database-mongodb/Video');
const cors = require('cors');
const app = express();
const PORT = 3000;
const crypt = require('./hash')
const  Popular=require('../database-mongodb/popular')
const Slider = require('../database-mongodb/movieSlider');
const morgan = require('morgan');



app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist/rmdb-project/'));


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/api/videos', function (req, res) {
  Video.find({})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});

app.post('/api/videos', function (req, res) {
  Video.create(req.body)
    .then((result) => {
      res.status(201).send(result)
    })
    .catch(() => {
      res.status(403).send("failed")
    })
});

app.put('/api/popular/:videoId', function (req, res) {
  console.log(req.params, req.body)
  Popular.findOneAndUpdate({_id :req.params.videoId } , {$push :{comments : req.body} } )
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});

app.get('/api/videos/:videoId', function (req, res) {
  Video.findOne({ _id: req.params.videoId })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});

app.get('/api/slider', function(req, res) {
  Slider.find({})
    .then((result)=>{
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});

app.get('/api/slider/:sliderId', function(req, res) {
  Slider.findOne({_id: req.params.sliderId})
    .then((result)=>{
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});

app.get('/api/video/:videoTitle', function (req, res) {
  Video.findOne({ title: req.params.videoTitle })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});

app.post('/signup', (req, res) => {
  User.find({ email: req.body.email })
    .then((user) => {
      if (!user.length) {
          crypt.Hash(req.body.password)
          .then((passwordHashed) => {
            User.create({ email: req.body.email, username: req.body.username, password: passwordHashed })
              .then((data) => { res.status(201).send(data); })
              .catch((err) => { res.send(err); });
          });
      } else {
        res.status(403).send('user already exist');
      }

    })
    .catch((err)=>res.status(403).send(err))
});

app.get('/api/pop', function (req, res) {
  Popular.find({})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});



app.get('/api/pop/:videoId', function (req, res) {
  Popular.findOne({ _id: req.params.videoId })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});


app.put('/user/:userId', (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body)
    .then((result) => {
      res.status(201).send(result)
    })
    .catch(() => {
      res.status(403).send("failed")
    })
})


app.post('/signin', (req, res) => {
  User.find({ email: req.body.email })
    .then((user) => {
      if (user.length) {
        crypt.compareHash(req.body.password, user[0].password)
          .then((response) => {
            if (response === true) {
              res.status(201).send(user)
            }
            else{
              res.status(403).send('wrong password')
            }
          })
      }
      else {
        res.status(403).send('wrong email')
      }
    })
    .catch((err) => res.status(403).send(err))
})














app.get('/api/Action', function (req, res) {
  Popular.find({genres:"Action"})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});
app.get('/api/Drama', function (req, res) {
  Popular.find({genres:"Drama"})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});
app.get('/api/Comedy', function (req, res) {
  Popular.find({genres:"Comedy"})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});
app.get('/api/Family', function (req, res) {
  Popular.find({genres:"Family"})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});
app.get('/api/Crime', function (req, res) {
  Popular.find({genres:"Crime"})
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.status(403).send('failed');
    });
});

app.listen(PORT, () => { console.log('yemshy 3al 3000') });
