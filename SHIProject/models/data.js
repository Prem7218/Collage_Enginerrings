const userSchema = new mongoose.Schema({
    email: String,
    password: String
  });
  
  const User = mongoose.model('User', userSchema);
  
  User.insertMany(users, (err, users) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Fake data inserted successfully!');
    }
  });


  module.exports=userSchema;