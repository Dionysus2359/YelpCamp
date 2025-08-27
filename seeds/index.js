const mongoose = require('mongoose');
const Campground = require('../models/campground'); // Import the Campground model
const { places, descriptors } = require('./seedHelpers');
const cities = require('./cities');

mongoose.connect('mongodb://localhost:27017/yelp-camp'); // Connect to the MongoDB database named 'yelp-camp'

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connnection error:')); // Log any connection errors(on listens for error event every time on the db object)
db.once('open', () => {
    console.log("Database connected")
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city} , ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/dionysus2359/image/upload/v1752564265/YelpCamp/mdiwsof1kuhavlkdtyrv.png',
                    filename: 'YelpCamp/mdiwsof1kuhavlkdtyrv',
                },
                {
                    url: 'https://res.cloudinary.com/dionysus2359/image/upload/v1752564276/YelpCamp/dbkcjyf1lup603bqfrtj.png',
                    filename: 'YelpCamp/dbkcjyf1lup603bqfrtj',
                }
            ],
            price: Math.floor(Math.random() * 20) + 1,
            author: '686939d702ba470b2440966b',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur eaque odio, veniam tempore in quisquam perferendis numquam facilis cupiditate! Impedit quasi unde tempore quidem repellendus cupiditate in sapiente nobis.'
        })
        await camp.save();
    }
}



seedDB().then(() => {
    mongoose.connection.close();
})