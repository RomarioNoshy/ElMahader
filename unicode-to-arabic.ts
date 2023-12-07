export function convertUnicodeToArabic(unicodeText: string): string {
    let arabicText = '';
    for (let i = 0; i < unicodeText.length; i++) {
        const unicodeValue = unicodeText.charCodeAt(i);
        arabicText += String.fromCharCode(unicodeValue + 1584);
    }
    return arabicText;
}