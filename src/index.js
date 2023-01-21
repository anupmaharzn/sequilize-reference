const app = require('./config/express.config');
require('dotenv').config();
const port =process.env.PORT;
app.listen(port,()=>{
    console.log("server listening on port",port);
});
