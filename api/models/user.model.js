import mongoose from 'mongoose'
 
// A schema is the rules and conditions we wanna add for the user.

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
        default:
          'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
      },
     
    },
    { timestamps: true }
    // Time stamp true means each user is going to have two extra information, the time of creation and the time of edit. So MongoDB is going to automatically add
  );
  
  const User = mongoose.model('User', userSchema);

//   the user is the name of the model. And it must be uppercase and singular because MongoDB is going to automatically add the S and the plural form of the user inside the database for us. And also we wanna add this user schema here. So the model needs to have the user schema.

  export default User;
//   And finally, we need to export it as a default so we can use it anywhere else in our application.