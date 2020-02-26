export default (text: string, abbreviation: boolean = false): string => {
    if (abbreviation) {
        return text.toUpperCase();
    }
    return text.charAt(0).toUpperCase() + text.substring(1);
};