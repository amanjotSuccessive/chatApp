/* const { MongoClient, ObjectId } = require('mongodb');
const MONGO_URL = 'mongodb://localhost:27017/blog';

exports.mongoConnectionInit = async () => {/* 
    //for mongo v2
    const db = await MongoClient.connect(MONGO_URL, { 'useNewUrlParser': true });
  
    //for mongo v3
    (err, client) => {
        const db = client.db('myTestingDb');
        const Posts = db.collection('posts');
        const Comments = db.collection('comments');
    }
} */

//mongoose
exports.mongoConnectionInit = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/chatApp', { 'useNewParser': true });
}