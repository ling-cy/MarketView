export const errorResponse = (value) => {
    if (value === 400) {
        return 'Invalid symbol value. Please re-enter the valid symbol.';
    } if (value === 402) {
        return 'Server access over the limit. Please try again later.';
    } if (value === 403) {
        return 'Appreciate if you can report the issue and try again later.';
    } if (value === 404) {
        return 'We have insufficient data on the symbol searched.';
    } if (value === 429) {
        return 'Too many requests hit the server too quickly. An exponential backoff of your requests is recommended.';
    }
    return 'Something went wrong. Please try again later.'
}