const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const router = express.Router();
const {mongoose} = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//schema
const internationalStudentSchema = new mongoose.Schema({
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
        createIndexes: { unique: true },
    },
    password: {type: String, required: true },
});

const internationalStudentCollection = mongoose.model('InternationalStudent', internationalStudentSchema);
// db
mongoose
.connect("mongodb+srv://sofiamarijuancarreno15:DHTo9Ek6OczgSPNv@internationalstudentdb.itibzgr.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB not connected\n", err))
app.get("/", (req,res)=>{res.json("Hi")});

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true}));

// routes

app.post('/registerform', async (req, res) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;
        const existingInternationalStudent = await internationalStudentCollection.findOne({email});

        if (existingInternationalStudent) {
            return res.status(400).json({message: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const internationalStudent = await internationalStudentCollection.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword
        });
        await internationalStudent.save();

        res.status(201).json({message: 'User created', internationalStudent});

        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'Server error', error});
    }
});

app.post('/loginform', async (req, res) => {
    try {
        const { username, password } = req.body;
        const internationalStudent = await internationalStudentCollection.findOne({ username });

        if (!internationalStudent) {
            console.log("Cannot find international student");
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const isPasswordCorrect = await bcrypt.compare(password, internationalStudent.password);
        if (!isPasswordCorrect) {
            console.log("Incorrect Password");
            return res.status(400).json({message: 'Invalid credentials'});
        }
        res.status(200).json({message: 'Login successful', internationalStudent});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error' });
    }
});

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

//The port that the server is listening to
app.listen(4000, () => {console.log("Server started on port 4000")});
