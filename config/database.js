const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//to let me know what's happening with my connection
const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to ${db.name}`);
  });