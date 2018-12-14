const mongoose = require('mongoose');
const unqVal = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/petsdb', {useNewUrlParser: true});


const PetSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: [true, "Pet's name is required!"], minlength: [3, "Pet's name must be at least 3 characters long!"] },
    type: { type: String, required: [true, "Pet's type is required!"], minlength: [3, "Pet's type must be at least 3 characters long!"] },
    description: { type: String, required: [true, "Pet's description is required!"], minlength: [3, "Pet's description must be at least 3 characters long!"] },
    skill1: String,
    skill2: String,
    skill3: String,
    likes: { type: Number, default: 0 }
}, {timestamps: true });

PetSchema.plugin(unqVal, { message: 'This Pet name already exists!'});
module.exports =  mongoose.model("Pet", PetSchema);