// validation.js — ইনপুট চেক করার জন্য

// খালি কি না
export function isEmpty(value) {
    return !value || value.trim() === "";
}

// নাম চেক
export function isValidName(name) {
    return /^[A-Za-z0-9 ]{3,30}$/.test(name);
}

// ইমেইল চেক
export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// নম্বর চেক
export function isValidNumber(num) {
    return /^[0-9]+$/.test(num);
}

// মিনিমাম লেন্থ চেক
export function minLength(text, length) {
    return text.length >= length;
}
