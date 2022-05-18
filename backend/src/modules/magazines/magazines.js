const mongoose = require("mongoose");
const { Schema } = mongoose


mongoose
    .connect('mongodb://127.0.0.1:27017/book')
    .then(() => console.log('Connected'))

    const magazineSchema = new Schema({
        maga_title: {
            type: String,
            required: true
        },
        maga_author: {
            type: String,
            required: true
        }
    }, {
        collection: 'magazine'
    })
    const magazineModel = mongoose.model('Magazines', magazineSchema)



    module.exports = {
        GET: async(_, res) => {
            try {
                res.send(await magazineModel.find())
            } catch (err) {
                console.log(err);
            }
        },
        
        POST: async(req, res) => {
            try {
                const { maga_title, maga_author } = req.body
                const newMagazine = new magazineModel({ maga_title, maga_author })
                newMagazine.save()
            res.json(newMagazine)
            } catch (error) {
                console.log(error);
            }
        },

        PUT: async(req, res) => {
            const { id } = req.params
            const { maga_title, maga_author } = req.body
    
            magazineModel.findByIdAndUpdate(id, { maga_title, maga_author }, (err, doc) =>{
                if (err) throw err
                res.json(doc)
            })
        },

        DELETE: async(req, res) => {
            const { id } = req.params
    
            magazineModel.findByIdAndDelete(id, (err, doc) => {
                if(err) throw err
        
                if(doc == null) {
                    return res.json("There is no magazines like this")
                }
        
                res.json(doc)
            })
        }
    }