export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}