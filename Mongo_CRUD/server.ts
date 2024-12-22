//server.ts used to collaborate with the custom modules[ @fetch, @delete,@update, @insert]
// server file is the main server and node starts the execution from the server.ts file

import * as express from 'express';
import * as cors from 'cors';
import * as body_perser from 'body-parser';
import fetch from './fetch/fetch';
import insert from './post/insert';
import remove from './delete/delete';
import update from './update/update';


//creating the rest object
let app:any = express();

app.use(cors());

// set the mime type
app.use(body_perser.json());
app.use(body_perser.urlencoded({extended:true}));

app.use('/fetch',fetch);
app.use('/insert',insert);
app.use('/update', update);
app.use('/remove', remove);

//server is listening on port 8080

// Server is listening on a dynamic or default port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});