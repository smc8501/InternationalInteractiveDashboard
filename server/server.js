const express = require('express');
const app = express();
const {mongoose} = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('validator');
const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;
const cors = require('cors');

// Schema - database design
const internationalStudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        createIndexes: { unique: true },
    },
    password: {type: String, required: true },
});

internationalStudentSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next;
    } catch (err) {
        return next(err);
    }
});

internationalStudentSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};
const internationalStudentCollection = mongoose.model('InternationalStudent', internationalStudentSchema);

module.exports = internationalStudentCollection;

//middleware
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))



// db
mongoose
.connect("mongodb+srv://sofiamarijuancarreno15:DHTo9Ek6OczgSPNv@internationalstudentdb.itibzgr.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB not connected\n", err))
app.get("/", (req,res)=>{res.json("Hi")});
app.get("/loginform", (req,res) => {
    res.json("log in");
});
app.get("/registerform", (req,res)=>{
    res.json("register");
});

// get data from log in page
app.post("/", async(req,res) =>{
    const {username, password} = req.body;

    try {
        const check=await internationalStudentCollection.findOne({username:username});
        if (check) {
            res.json("exist");
        } else {
            res.json("doesn't exist");
            await internationalStudentCollection.insertMany([data])
        }
    } catch(err) {
        res.json("doesn't exist");
    }
});
//The port that the server is listening to
app.listen(4000, () => {console.log("Server started on port 4000")})
