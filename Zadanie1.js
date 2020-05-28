if(process.argv.length < 4) {
    console.log("Необходимо ввести название файла в текущей директории и искомое слово.");
    process.exit(1);
}

const fs = require('fs');
const file = process.argv[2];
const word = process.argv[3];

fs.readFile(file, 'utf8', function(err, text) {
    if (err) throw err;

    const newRegExp = new RegExp(word, "g"); // Позволяет использовать в RegExp переменную из окружения
    const result = (text.toLowerCase().match(newRegExp) || []).length;
    
    console.log(`Слово "${word}" встречается в файле ${file} ${result} раз.`); 
  });