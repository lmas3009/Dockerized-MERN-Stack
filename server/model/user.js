import mongodb  from "mongoose";

const userinfo = new mongodb.Schema({
    username:{
        type: String,
        required: true // username should be required
    },
    email:{
        type: String,
        required: true // email should be required
    },
    phone:{
        type: String,
        required: true // phone number should be required
    }
})

export default userinfo;

