// const mongoose = require('mongoose');

// const dbName = 'mycourses';

// const dbString  =`mongodb+srv://narath:1996@cluster0.fwn2tqn.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// mongoose
// 	.connect(dbString, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log(`Connected to ${dbName} database!`))
// 	.catch((err) => console.log(err));


const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://Rochester1995t:12345@cluster0.nfmpd.mongodb.net/?retryWrites=true&w=majority,
${process.env.employee_tracker}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

    
