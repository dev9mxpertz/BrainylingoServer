const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const studentSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  OTP: {
    type: Number,
  },
  UserType: {
    type: String,
    default: "student",
  },
  WeeklyPerformanceId:{type:String},
  Daily_Quiz: [
    {
      Date: {
        type: Date,
        default: Date.now // Set default value to current date
      },
      Score: {
        AttemptedQuestion: {
          type: Number,
          default: 0 // Default value for attempted questions
        },
        Correct_Answer: {
          type: Number,
          default: 0 // Default value for correct answers
        },
        Wrong_Answer: {
          type: Number,
          default: 0 // Default value for wrong answers
        }
      }
    },
  ],
});

studentSchema.pre("save", async function (next) {
  try {
    // Check if the password has changed
    if (!this.isModified("Password")) {
      return next(); // Skip hashing if the password hasn't changed
    }
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND, 10));
    const hashedPassword = await bcrypt.hash(this.Password, salt);
    this.Password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

studentSchema.statics.comparePassword = async function (
  enteredPassword,
  storedPassword
) {
  try {
    return await bcrypt.compare(enteredPassword, storedPassword);
  } catch (error) {
    throw error;
  }
};

studentSchema.methods.jwttoken = async function () {
  try {
    const data = {
      UserType: "student",
    };
    const token = jwt.sign(
      { id: this._id, ...data },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
