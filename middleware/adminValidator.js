const isKeyValid = key => {
    const adminKey = process.env.ADMIN_KEY;
    if (key.length !== adminKey.length) {
        return false;
    }

    for (let i = 0; i < key.length; i++) {
        if(key.charAt(i) !== adminKey.charAt(i)){
            return false;
        } 
    }

    return true;
}

const isSecretValid = secret => {
    const adminSecret = process.env.ADMIN_SECRET;
    if (secret.length !== adminSecret.length) {
        return false;
    }

    for (let i = 0; i < secret.length; i++) {
        if(secret.charAt(i) !== adminSecret.charAt(i)){
            return false;
        } 
    }

    return true;
}

module.exports = { isKeyValid, isSecretValid };