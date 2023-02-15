export const convertToLatin = (input, spaceReplacement) => {
    input = input.toLowerCase();
    input = input.replaceAll('а', 'a');
    input = input.replaceAll('б', 'b');
    input = input.replaceAll('в', 'v');
    input = input.replaceAll('г', 'g');
    input = input.replaceAll('д', 'd');
    input = input.replaceAll('е', 'e');
    input = input.replaceAll('ж', 'zh');
    input = input.replaceAll('з', 'z');
    input = input.replaceAll('и', 'i');
    input = input.replaceAll('й', 'y');
    input = input.replaceAll('к', 'k');
    input = input.replaceAll('л', 'l');
    input = input.replaceAll('м', 'm');
    input = input.replaceAll('н', 'n');
    input = input.replaceAll('о', 'o');
    input = input.replaceAll('п', 'p');
    input = input.replaceAll('р', 'r');
    input = input.replaceAll('с', 's');
    input = input.replaceAll('т', 't');
    input = input.replaceAll('у', 'u');
    input = input.replaceAll('ф', 'f');
    input = input.replaceAll('х', 'h');
    input = input.replaceAll('ц', 'ts');
    input = input.replaceAll('ч', 'ch');
    input = input.replaceAll('щ', 'sht');
    input = input.replaceAll('ъ', 'a');
    input = input.replaceAll('ь', 'y');
    input = input.replaceAll('ю', 'yu');
    input = input.replaceAll('я', 'ya');
    input = input.replaceAll('-', '');
    input = input.replaceAll('–', '');
    input = input.replaceAll('"', '');
    input = input.replaceAll('.', '');
    input = input.replaceAll(',', '');
    input = input.replaceAll('!', '');
    input = input.replaceAll('?', '');
    input = input.replaceAll('\n', spaceReplacement);
    input = input.replaceAll('„', '');
    input = input.replaceAll('“', '');
    input = input.replaceAll('   ', spaceReplacement);
    input = input.replaceAll('  ', spaceReplacement);
    input = input.replaceAll(' ', spaceReplacement);
    return input;
}

export const getDate = () => {
    const cts = (number) => number = number > 9 ? number.toString() : '0' + number;
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getFullYear();
    
    return cts(day) + cts(month) + year;
}