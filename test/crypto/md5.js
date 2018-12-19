const crypto = require('crypto');

const data = "username12345";
const hash_md5 = crypto.createHash("md5");
hash_md5.update(data);
const md5_code=hash_md5.digest("hex");

console.log(md5_code);

const hash_sha1 = crypto.createHash("sha1");
hash_sha1.update(data);
const sha1_code = hash_sha1.digest("hex");

console.log(sha1_code);


const hash_sha256=crypto.createHash("sha256");
hash_sha256.update(data);
const sha256c=hash_sha256.digest("hex");

console.log(sha256c);

const secret = "secret12password";

const hmac = crypto.createHmac("sha256", secret);
const content = hmac.update(data);
const hmac_code= content.digest("hex");

console.log(hmac_code);

const secretKey = "password";
const enc = encryption(data, secretKey);

/**
 * AES 对称加密
 * @param string 主体
 * @param selfKey 密钥
 * @returns {string}
 */
function encryption(string, selfKey) {
    if (!(string && selfKey)) {
        throw error("lack of encode string or key!");
    } else {
        const cipher = crypto.createCipher("aes192", selfKey);
        let enc = cipher.update(string, "utf8", "hex");
        enc+=cipher.final("hex");
        return enc;
    }
}

/**
 * AES 对称解密
 * @param code 秘文
 * @param selfKey key
 * @returns {string}
 */
function decrypt(code, selfKey) {
    if (!(code && selfKey)) {
        throw error("lack of code or key!");
    } else {
        const decipher = crypto.createDecipher("aes192", selfKey);
        let dec = decipher.update(code, "hex", "utf8");
        dec+=decipher.final("utf8");
        return dec;
    }
}

console.log(decrypt(enc, secretKey));


