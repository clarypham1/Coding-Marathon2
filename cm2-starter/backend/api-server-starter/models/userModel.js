
const userSchema = new Schema(
  {
      name: { type: String, required: true }, // Full name of the user
      email: { type: String, required: true, unique: true }, // Unique username for login
      password: { type: String, required: true }, // Hashed password for authentication
      phone_number: { type: String, required: true }, // Contact phone number
      gender: { type: String, required: true }, // Gender of the user
      date_of_birth: { type: Date, required: true },
      address: {
          street: { type: String, required: true }, // Street address
          city: { type: String, required: true }, // City
          zipCode: { type: String, required: true } // Postal/ZIP code
      }
  },
  { timestamps: true, versionKey: false }
  );

  /*
  userSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret._id;
        return ret;
    }
  });
  */

userSchema.statics.signup = async function(email, password){

    //the part that validates if all good:
    if (!email || !password) {
        throw Error('FILL ALL FIELDS')
    }
    if (!validator.isEmail(email)){
        throw Error('Email not valid!')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Your password is WEAK!')
    }

    const exist = await this.findOne({email})

    if (exist){
        throw Error('Somebody already using this email')
    }


    const salting = await bcrypt.genSalt(8)
    const hash = await bcrypt.hash(password, salting)

    const user = await this.create({email,password:hash})

    return user
}

userSchema.statics.login = async function(email, password){

    if (!email || !password){
        throw Error('FILL ALL THE FIELDS')
    }

    const user = await this.findOne({email})
    if (!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    };
    return user;
}


module.exports = mongoose.model('User', userSchema);
