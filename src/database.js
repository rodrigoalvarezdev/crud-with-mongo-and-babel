import {connect} from 'mongoose';

(async () =>{
    try {
        const db = await connect("mongodb://localhost/crud-mongo");
        console.log(`db connected to ${db.connection.name}`);
    } catch (err) {
        console.log(err);
    }
})()

