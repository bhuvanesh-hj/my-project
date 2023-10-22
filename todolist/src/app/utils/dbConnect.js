const mongoose = require("mongoose")

export default async function dbConnect(){
    await mongoose.connect(
        "mongodb+srv://bhuvaneshhj:GMVOZTmT471wS0kR@cluster0.fghogsf.mongodb.net/todos?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
}