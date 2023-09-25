import { authInput, authName, authPw, authEmail, authGender, authPhone } from "../Regi";

// TDD 模式
it('input all correct', () => {
    // 定義測試替身
    const user = {
        name: "ej",
        pw: "12345678",
        email: "12345@gmail.com",
        gender: 1,
        phone: "0912345678"
    }
    // 建立好預計要測試的結果
    expect(authInput(user)).toEqual({ result: true, uncorrect: [] })
    expect(authName(user)).toBe(true)
    expect(authPw(user)).toBe(true)
    expect(authEmail(user)).toBe(true)
    expect(authGender(user)).toBe(true)
    expect(authPhone(user)).toBe(true)
})

it('name uncorrect', () => {
    const user = {
        name: "",
        pw: "12345678",
        email: "12345@gmail.com",
        gender: 1,
        phone: "0912345678"
    }
    expect(authInput(user)).toEqual({ result: false, uncorrect: ['name'] })
    expect(authName(user)).toBe(false)
})

it('multiples uncoeerct', () => {
    const user = {
        name: "",
        pw: "12345678",
        email: "",
        gender: 1,
        phone: "0912345678"
    }
    expect(authInput(user)).toEqual({ result: false, uncorrect: ['name', 'email'] })
    expect(authName(user)).toBe(false)
    expect(authEmail(user)).toBe(false)
})

it('option unInput', () => {
    const user = {
        name: "ej",
        pw: "12345678",
        email: "12345@gmail.com",
        gender: 0,
        phone: ""
    }
    expect(authInput(user)).toEqual({ result: true, uncorrect: [] })
    expect(authGender(user)).toBe(true)
    expect(authPhone(user)).toBe(true)
})