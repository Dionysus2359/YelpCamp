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
                    url: 'https://res.cloudinary.com/dionysus2359/image/upload/v1756807883/YelpCamp/rr8vhvvgowsu4hipkq8u.jpg',
                    filename: 'YelpCamp/rr8vhvvgowsu4hipkq8u',
                },
                {
                    url: 'https://res.cloudinary.com/dionysus2359/image/upload/v1756807971/YelpCamp/yq2srvvwd5ddworfhrge.jpg',
                    filename: 'YelpCamp/yq2srvvwd5ddworfhrge',
                }
            ],
            price: Math.floor(Math.random() * 20) + 1,
            geometry: {
                type: 'Point',
                coordinates: [82.20523204654455, 26.799070829682726]
            },

            author: '686939d702ba470b2440966b',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur eaque odio, veniam tempore in quisquam perferendis numquam facilis cupiditate! Impedit quasi unde tempore quidem repellendus cupiditate in sapiente nobis.'
        })
        await camp.save();
    }
}



seedDB().then(() => {
    mongoose.connection.close();
})