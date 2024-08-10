export function isLocalhost(ip) {
    if (ip === '::1') {
        return true;
    }

    if (ip.startsWith('127.')) {
        return true;
    }

    return false;
}