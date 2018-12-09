const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connection = mongoose.createConnection('mongodb://anton:1qazqwerty@ds157158.mlab.com:57158/walkme');
const Video = new Schema({
    videoId: String
    , title: String
    , thumbnail: String
});
const videoModel = connection.model('videoModel', Video);

const getAll = () => new Promise((resolve, reject) =>
    videoModel.find((err, result) => {
        if (err) return reject(err);
        return resolve(result);
    }));

const create = (videoId, title, thumbnail) => new Promise((resolve, reject) =>
    videoModel.create({ videoId, title, thumbnail }, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
    }));

const destroy = videoId => new Promise((resolve, reject) =>
    videoModel.deleteOne({ videoId }, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
    }));

module.exports = {
    create
    , getAll
    , destroy
};
