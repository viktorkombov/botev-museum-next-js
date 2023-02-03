export const convertToLocalDate = (date) => {
    const currentDate = new Date();
    const currentOffset = currentDate.getTimezoneOffset();
    const offSetDate = new Date(new Date(date).getTime() + -currentOffset * 60 * 1000);
    
    const months = ['ян.', 'февр.', 'март', 'апр.', 'май', 'юни', 'юли', 'авг.', 'септ.', 'окт.', 'ноем.', 'дек.'];
    const cts = (number) => number = number > 9 ? number.toString() : '0' + number;

    const day = cts(offSetDate.getUTCDate());
    const month = months[offSetDate.getUTCMonth()];
    const year = offSetDate.getFullYear();
    const hours = cts(offSetDate.getHours());
    const minutes = cts(offSetDate.getMinutes());
    
    return `${hours}:${minutes}, ${day} ${month} ${year} г.`;
}