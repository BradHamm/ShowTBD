// connection to the Atlas DB
mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});