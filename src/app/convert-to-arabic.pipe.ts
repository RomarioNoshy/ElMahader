import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToArabic'
})
export class ConvertToArabicPipe implements PipeTransform {

  transform(value: string): string {
    let arabicText = '';
    for (let i = 0; i < value.length; i++) {
      if (value[i] === '\\') {
        // Check if the next character is 'u' to identify Unicode escape sequence
        if (value[i + 1] === 'u') {
          // Get the Unicode value and convert it to the corresponding Arabic character
          const unicodeValue = parseInt(value.substring(i + 2, 4), 16);
          arabicText += String.fromCharCode(unicodeValue);
          i += 5; // Skip the Unicode escape sequence
        }
      } else {
        arabicText += value[i];
      }
    }
    return arabicText;
  }

}
