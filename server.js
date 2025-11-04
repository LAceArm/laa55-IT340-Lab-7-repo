const express = require('express');
const app=express();
const port = 3000;
const mongoose=require('mongoose');
//the following I based on code I found on a medium
//const cors=require('cors');
//app.use(cors());

//The following is based on code given by the google search AI


mongoose.connect
('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.9', {
  useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.error(err));
//End of AI Segment
app.get('/', (req, res) => {
res.send('Hello MEAN Stack!');
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});


