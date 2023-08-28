export function DateFormatted(data) {
    function pad(s, width, character) {
        return new Array(width - s.toString().length + 1).join(character) + s;
    }

    var maxDate = new Date(Number(data.toString()));
    return pad(maxDate.getDate(), 2, '0') + '.' + pad(maxDate.getMonth() + 1, 2, '0') + '.' + maxDate.getFullYear();
}