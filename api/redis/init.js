const redis  = require('redis');
const url =  sails.config.datastores.default.redisURL;

(async () => {
     const redisClient = redis.createClient({url: url});
    await redisClient.connect();
    const  key = 'TEST:'+Date.now();
    await redisClient.set(key, "true");
    const value = await redisClient.get(key);
    
    global['redisClient'] = redisClient;
})().catch(err => {
    sails.log(err);
});


    