const slownik = 'abcdefghijklmnopqrstuvwxyz1234567890';
export function randomString(length: number): string {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += slownik[Math.floor(Math.random() * slownik.length)];
    }
    return text;
}
