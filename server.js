const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

// create the express application instance.......
const app = express();

const client = redis.createClient(6379);


client.on('error',(err) => {
    console.log("Error", err);
});

app.get('/photos',(req,res) => {
    // key to store the result in the Redis store......
    const photosRedisKey = 'user:photos';

    // Try to fetch the data from the redis in case we have cached it.......
   
