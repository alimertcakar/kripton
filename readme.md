# Kripton

Kripton is a little npm package. It encrypts  your text by using Caesar's crypt. 

Encryption is done only with a single line, package is just 5 lines, **don't use it in production**. 

## Usage

`const caesar = require("@alimert/kripton");`

**Encrypt**

`let password = [1,2,3,4]`

`let encrypted = caesar.encrypt("alimert", password);`

**Decrypt**

`caesar.decrypt(encrypted , password);`



**Note:**

If you omit the password, default is 1923.



**Don't use it in production**