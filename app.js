const CryptoJS = require("crypto-js");
const prompt = require('prompt-sync')()
require('dotenv').config()
const chalk = require('chalk')


class exe {
    constructor() {
        this.input = null
        this.bytes = null
        this.decrypted = null
    }
    getInput() {
        console.log("Press 1 to Encrypt a message ")
        console.log("Press 2 to Decrypt a message ")
        console.log("Press 3 to exit ")
        this.input = prompt(chalk.green("Enter 1 2 or 3 "))

        try {
            if (this.input === "1") {
                this.input = prompt(chalk.green("Enter message to encrypt "))
                let key = prompt(chalk.green("Enter a key (Remember it) "))
                console.log("Your message encrypted is " + exe.encrypt(this.input, key))
            }
            if (this.input === "2") {
                this.decrypt()
            }
            if (this.input === "3") {
                process.exit()
            }
        } catch (e) {
            console.log("Bad key")
        }
        console.log("Press Enter to Continue")
        this.input = prompt()
        this.getInput()
    }
    static encrypt(textToEncrypt, key) {
        this.cipher = CryptoJS.AES.encrypt(JSON.stringify(textToEncrypt), key).toString();
        return this.cipher

    }

    decrypt() {
        let cipher = prompt(chalk.green("Enter Encrypted text "))
        let key = prompt(chalk.green("Enter your key "))

        let bytes = CryptoJS.AES.decrypt(cipher, key);
        console.log(bytes)
        this.decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(this.decrypted)

    }

}

let app = new exe()
app.getInput()

