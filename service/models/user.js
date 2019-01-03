const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 加密
const crypto = require('crypto');
// 改密码上锁时间
const SALT_WORK_FACTOR = 10;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1000;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
});

/**
 * 生命周期 hooks
 */
userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    if (this.isNew) {
        this.meta.createAt = this.meta.updatedAt = Date.now();
    } else {
        this.meta.updatedAt = Date.now();
    }
    next();
});

/**
 * 静态 function
 * @type {{comparePassword: (function(*, *): Promise<any>)}}
 */
userSchema.method = {
    comparePassword: (_inputPass, pass) => {
        return new Promise((resolve, reject) => {
            if (_inputPass === pass) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    }
};

userSchema.set('collection', 'users');

mongoose.model('User', userSchema, 'users');
