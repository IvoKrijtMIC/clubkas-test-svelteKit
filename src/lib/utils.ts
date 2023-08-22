export function parseNumber(number: number) : string {
    return number.toLocaleString('nl-NL', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}