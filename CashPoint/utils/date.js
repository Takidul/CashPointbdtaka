// date.js — তারিখ ফরম্যাট করার ছোট Utility

// আজকের তারিখ (DD/MM/YYYY)
export function getToday() {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth()+1).padStart(2, "0")}/${d.getFullYear()}`;
}

// সময় সহ তারিখ (DD/MM/YYYY HH:MM)
export function getDateTime() {
    const d = new Date();
    return `${getToday()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}

// timestamp → readable format
export function formatTimestamp(timestamp) {
    const d = new Date(timestamp);
    return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()} - ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}
