const passwordEl = document.getElementById("password-el")

const passwordChars = "ABCÇDEFGĞHIJKLMNOÖPQRSŞTUÜVWXYZabcçdefghijklmnoöpqrsştuüvwxyz0123456789!@#$%^&*()_+~'\'|}{[]:;?><,./-="

function generatePassword() {
    let password = ""
    const passwordLength = 10

    for (let i = 0; i < passwordLength; i++) {
        password += passwordChars[Math.floor(Math.random() * passwordChars.length)]
    }

    passwordEl.value = password
}

function copyPassword() {
    passwordEl.select()
    document.execCommand("copy")
    alert("Password copied to clipboard")
}