const mongoose = require("mongoose");
const { Schema } = mongoose



mongoose
    .connect('mongodb://127.0.0.1:27017/book')
    .then(() => console.log('Connected'))


    //books
    const bookSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    }, {
        collection: 'books'
    })
    const booksModel = mongoose.model('Books', bookSchema)

module.exports = {
    GET: async(_, res) => {
        try {
            res.send(await booksModel.find())
        } catch (err) {
            console.log(err);
        }
    },

    POST: async(req, res) => {
        try {
            const { title, author, year } = req.body
            const newBook = new booksModel({ title, author, year })
            newBook.save()
        res.json(newBook)
        } catch (error) {
            console.log(error);
        }
    },

    PUT: async(req, res) => {
        const { id } = req.params
        const { title, author, year } = req.body

        booksModel.findByIdAndUpdate(id, { title, author, year }, (err, doc) =>{
            if (err) throw err
            res.json(doc)
        })
    },

    DELETE: async(req, res) => {
        const { id } = req.params
    
        booksModel.findByIdAndDelete(id, (err, doc) => {
            if(err) throw err
    
            if(doc == null) {
                return res.json("There is no book like this")
            }
    
            res.json(doc)
        })
    }
}
