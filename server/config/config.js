const env = process.env.NODE_ENV || 'development';


if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/myproject', {
    useMongoClient: true,
    /* other options */
  };
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/myprojectTest', {
    useMongoClient: true,
    /* other options */
  };
}