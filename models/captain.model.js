const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 'Please fill a valid email address']
    },
    fullname: {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastName: {
            type: String,
            trim: true,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(v);
            },
            message: props => `${props.value} is not a valid password! It must contain at least one uppercase letter, one lowercase letter, and one number.`
        }
    },

    vehicals: {
        color: {
            type: String,
            required: true,
            trim: true
        },

        passangerCapacity: {
            type: Number,
            required: true,
            min: [1, 'Passenger capacity must be at least 1']
        },

        regNo: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/, 'Please fill a valid registration number']
        },

        vehicalType: {
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto'],
            default: 'car'
        }
    },

    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    },


    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },

    socketID: {
        type: String,
        default: null
    }
});

// Pre-save hook to hash the password before saving
captainSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})

// Method to compare passwords
captainSchema.methods.comparePassword = async function (candidatePassword) {
    console.log('Comparing:', candidatePassword, 'with hash:', this.password);
    return await bcrypt.compare(candidatePassword, this.password);
}

// Method to generate JWT token
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

const Captain = mongoose.model('Captain', captainSchema);
module.exports = Captain;