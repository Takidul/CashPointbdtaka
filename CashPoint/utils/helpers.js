// helpers.js — ছোট ছোট kaikk type utility functions

// LocalStorage save
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// LocalStorage load
export function load(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

// Random ID generate
export function generateId(prefix = "id") {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

// HTML ফাইল load করা (Component system)
export async function loadComponent(id, filePath) {
    const response = await fetch(filePath);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}
