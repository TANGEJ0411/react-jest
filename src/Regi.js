const phoneRegEx = new RegExp(/^09[0-9]{8}$/)
const emailRegEx = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
const passwordRegEx = new RegExp(/^[A-Za-z0-9!@#$%^&*()_+=\-[\]{};':"|,.<>/?]{8,24}$/)


// 測試替身格式
const user = {
    name: "",
    pw: "",
    email: "",
    gender: 0,
    phone: ""
}


export const authName = (user) => {
    if (user.name) {
        return true
    } else {
        return false
    }
}

export const authPw = (user) => {
    if (user.pw && passwordRegEx.test(user.pw)) {
        return true
    } else {
        return false
    }
}

export const authEmail = (user) => {
    if (user.email && emailRegEx.test(user.email)) {
        return true
    } else {
        return false
    }
}

export const authGender = (user) => {
    if (!user.gender || user.gender == 1 || user.gender == 2) {
        return true
    } else {
        return false
    }
}

export const authPhone = (user) => {
    if (!user.phone || phoneRegEx.test(user.phone)) {
        return true
    } else {
        return false
    }
}

export const authInput = (user) => {
    const resultObj = { result: true, uncorrect: [] }
    if (!authName(user)) {
        resultObj.result = false
        resultObj.uncorrect.push('name')
    }
    if (!authPw(user)) {
        resultObj.result = false
        resultObj.uncorrect.push('pw')
    }
    if (!authEmail(user)) {
        resultObj.result = false
        resultObj.uncorrect.push('email')
    }
    if (!authGender(user)) {
        resultObj.result = false
        resultObj.uncorrect.push('gneder')
    }
    if (!authPhone(user)) {
        resultObj.result = false
        resultObj.uncorrect.push('phone')
    }
    return resultObj
}