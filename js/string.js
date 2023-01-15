//String
console.groupCollapsed('String')
  console.info('Obs.: Todos os métodos de string retornam um novo valor. Eles não alteram a variável original.')

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // String Properties
  // 1.length = Retorna o tamanho da string.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // String Methods
  // 1. includes() = Verifica se uma string inclui o caracteres especificados.
  // 2. search() = Busca o valor específico ou expressão regular e retornar a posição do valor encontrado.
  // 3. startsWith() = Verifica se uma string começa com um caracter específico.
  // 4. endsWith() = Verifica se uma string termina com uma carácter específico, retornando true ou false.
  // 5. indexOf() = Busca o valor especificado e retorna a posição da primeira ocorrência encontrada.
  // 6. lastIndexOf() = Busca o valor especificado e retorna a posição da última ocorrência encontrada.
  // 7. repeat() = Retorna uma string com um determinado número de cópias concatenadas da string original.
  // 8. replace() = Substitui o valor especificado e o substitui.
  // 9. replaceAll() = Substitui todas as ocorrências do valor especificado.
  // 10. split() = Divide uma string em um array utilizando um separador.
  // 11. slice() = Extrai uma parte de uma string e a retorna como uma nova string.
  // 12. substring() = Extrai os caracteres entre as posições especificadas.
  // 13. padStart() = Preenche o início da string com um ou mais caracteres até o comprimento informado.
  // 14. padEnd() = Preenche o final da string com um ou mais caracteres até o comprimento informado.
  // 15. trim() = Remove os espaços em branco do início e do final da string.
  // 16. trimStart() = Remove os espaços em branco do começo da string.
  // 17. trimEnd() = Remove os espaços em branco do final da string.
  // 18. toLowerCase() = Converte uma string para letras minúsculas.
  // 19. toUpperCase() = Converte uma string para letras maiúsculas.
  // 20. toLocaleLowerCase() = Converte uma string em letras minúsculas, de acordo com a localização informada.
  // 21. toLocaleUpperCase() = Converte uma string em letras maiúsculas, de acordo com a localização informada.
  // 22. charAt() = Retorna o carácter do índice especificado.
  // 23. concat() = Combina o texto de duas ou mais strings e retorna uma nova string.
  // 24. charCodeAt() = Retorna o valor Unicode do carácter de índice específico.
  // 25. codePointAt() = Retorna um número inteiro não negativo que é o valor do ponto de código Unicode.
  // 26. fromCharCode() = Converte valores em Unicode para caracteres.
  // 27. fromCodePoint() = Retorna uma sequência de caracteres criado usando a sequência especificada de pontos de código.
  // 28. localeCompare() = Compara duas strings de acordo com o locale (localidade) informada atual.
  // 29. match() = Procura uma string e dá "match" com uma expressão regular e retornar uma correspondência.
  // 30. matchAll() = Retorna um iterador de todos os resultados correspondentes a uma string em relação a uma regex.
  // 31. normalize() = Retorna a Forma de Normalização Unicode (Unicode Normalization Form) de uma dada string (se o valor não é uma string, ele será convertido para uma primeiramente).
  // 32. toString() = Retorna uma string representando o objeto especificado.
  // 33. raw() = Pegar as strings no formato "cru" de modelos literais.
  // 34. valueOf() = Retorna o valor primitivo de um objeto String.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // - includes e search
  // - indexOf e lastIndexOf
  // - split, slice e substring
  // - replace e replaceAll
  // - padStart e padEnd
  // - trim, trimStart e trimEnd
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // String Properties
  // 1.length = Retorna o tamanho da string.
  const stringLength = 'victor'
  const newStringLength = stringLength.length

  console.groupCollapsed('length')
    console.log(newStringLength) // 6
  console.groupEnd()

  // String Methods
  // 01.includes() = Verifica se uma string contém o caracteres especificados.
  const stringIncludes = 'Victor Katsuo Yamashiro'
  const newStringIncludes1 = stringIncludes.includes('katsuo')
  const newStringIncludes2 = stringIncludes.includes('Katsuo')

  console.groupCollapsed('includes')
    console.log(newStringIncludes1)
    console.log(newStringIncludes2)
  console.groupEnd()

  // 02.search() = Busca o valor específico ou expressão regular e retornar a posição do valor encontrado.
  const stringSearch = 'salada';
  const newStringSearch = stringSearch.search('l')

  console.groupCollapsed('search')
    console.log(newStringSearch) // retorna 2
  console.groupEnd()

  // 03.startsWith() = Verifica se uma string começa com um caracter específico.
  const stringStartsWith = 'melancia'
  const newStringStartsWith1 = stringStartsWith.startsWith('M')
  const newStringStartsWith2 = stringStartsWith.startsWith('m')

  console.groupCollapsed('startsWith')
    console.log(newStringStartsWith1) // false
    console.log(newStringStartsWith2) // true
  console.groupEnd()

  // 04.endsWith() = Verifica se uma string termina com uma carácter específico, retornando true ou false.
  const stringEndsWith1 = 'Shiro champs'
  const stringEndsWith2 = 'champs Shiro'
  const newStringEndsWith1 = stringEndsWith1.endsWith('Shiro')
  const newStringEndsWith2 = stringEndsWith2.endsWith('Shiro')

  console.groupCollapsed('endsWith')
    console.log(newStringEndsWith1)
    console.log(newStringEndsWith2)
  console.groupEnd()

  // 05.indexOf() = Busca o valor especificado e retorna a posição da primeira ocorrência encontrada.
  const stringIndexOf = 'salada';
  const newStringIndexOfA = stringIndexOf.indexOf('a') // retorna 1
  const newStringIndexOfB = stringIndexOf.indexOf('sal') // retorna 0
  const newStringIndexOfC = stringIndexOf.indexOf('e') // retorna -1

  console.groupCollapsed('indexOf')
    console.log(newStringIndexOfA)
    console.log(newStringIndexOfB)
    console.log(newStringIndexOfC)
  console.groupEnd()

  // 06.lastIndexOf() = Busca o valor especificado e retorna a posição da última ocorrência encontrada.
  const stringLastIndexOf = 'melancia'
  const newStringLastIndexOf = stringLastIndexOf.lastIndexOf('n')

  console.groupCollapsed('lastIndexOf')
    console.log(newStringLastIndexOf) // 4
  console.groupEnd()

  // 07.repeat() = Retorna uma string com um determinado número de cópias concatenadas da string original.
  const stringRepeat = '123'
  const newStringRepeat = stringRepeat.repeat(3)

  console.groupCollapsed('repeat')
    console.log(newStringRepeat) // 123123123
  console.groupEnd()

  // 08.replace() = Substitui o valor especificado e o substitui.
  const stringReplace = 'maçãs: as maçãs são suculentas'
  const newStringReplace1 = stringReplace.replace('maçãs', 'melancias')
  const newStringReplace2 = stringReplace.replace('abacate', 'melancias')

  console.groupCollapsed('replace')
    console.log(newStringReplace1) // As melancias são suculentas
    console.log(newStringReplace2) // As maçãs são suculentas
  console.groupEnd()

  // 09.replaceAll() = Substitui todas as ocorrências do valor especificado.
  const stringReplaceAll = 'maçãs: as maçãs são suculentas'
  const newStringReplaceAll1 = stringReplaceAll.replaceAll('maçãs', 'melancias')
  const newStringReplaceAll2 = stringReplaceAll.replaceAll('abacate', 'melancias')

  console.groupCollapsed('replaceAll')
    console.log(newStringReplaceAll1) // melancias: as melancias são suculentas
    console.log(newStringReplaceAll2) // maçãs: as maçãs são suculentas
  console.groupEnd()

  // 10.split() = Divide uma string em um array utilizando um separador.
  const stringSplit = 'abacate, melancia, melão, limão, maçã';
  const newStringSplit1 = stringSplit.split(', ')
  const newStringSplit2 = stringSplit.split(', ', 3)

  console.groupCollapsed('split')
    console.log(newStringSplit1) // ["abacate", "melancia", "melão", "limão", "maçã"]
    console.log(newStringSplit2) // ["abacate", "melancia", "melão"]
  console.groupEnd()

  // 11.slice() = Extrai uma parte de uma string e a retorna como uma nova string.
  const stringSlice = 'a dificuldade faz parte da conquista';
  const newStringSlice = stringSlice.slice(27, 36)

  console.groupCollapsed('slice')
    console.log(newStringSlice) // conquista
  console.groupEnd()

  // 12.substring() = Extrai os caracteres entre as posições especificadas.
  const stringSubstring = "saladas mista"
  const newStringSubstring1 = stringSubstring.substring(2)
  const newStringSubstring2 = stringSubstring.substring(2, 8)
  const newStringSubstring3 = stringSubstring.substring(0, stringSubstring.length - 6)
  const newStringSubstring4 = stringSubstring.substring(-5)

  console.groupCollapsed('substring')
    console.log(newStringSubstring1)
    console.log(newStringSubstring2)
    console.log(newStringSubstring3)
    console.log(newStringSubstring4)
  console.groupEnd()

  // 13.padStart() = Preenche o início da string com um ou mais caracteres até o comprimento informado.
  const stringPadStart = '123'
  const newStringPadStart = stringPadStart.padStart(5, '*')

  console.groupCollapsed('padStart')
    console.log(newStringPadStart) // **123
  console.groupEnd()

  // 14.padEnd() = Preenche o final da string com um ou mais caracteres até o comprimento informado.
  const stringPadEnd = '123'
  const newStringPadEnd = stringPadEnd.padEnd(5, '0')

  console.groupCollapsed('padEnd')
    console.log(newStringPadEnd) // 12300
  console.groupEnd()

  // 15.trim() = Removendo whitespace de ambos os lados.
  // Obs.: não remove espaço entre as palavras da string.
  const stringTrim = '           saladas       mista        '
  const newStringTrim = stringTrim.trim()

  console.groupCollapsed('trim')
    console.log(newStringTrim)
  console.groupEnd()

  // 16.trimStart() = Remove os espaços em branco do começo da string.
  const stringTrimStart = '           saladas mista'
  const newStringTrimStart = stringTrimStart.trimStart()

  console.groupCollapsed('trimStart')
    console.log(newStringTrimStart)
  console.groupEnd()

  // 17.trimEnd() = Remove os espaços em branco do final da string.
  const stringTrimEnd = 'saladas mista         '
  const newStringTrimEnd = stringTrimEnd.trimEnd()

  console.groupCollapsed('trimEnd')
    console.log(newStringTrimEnd)
  console.groupEnd()

  // 18.toLowerCase() = Converte uma string para letras minúsculas.
  const stringToLowerCase = 'HELLO WORLD'
  const newStringToLowerCase = stringToLowerCase.toLowerCase()

  console.groupCollapsed('toLowerCase')
    console.log(newStringToLowerCase) // hello world
  console.groupEnd()

  // 19.toUpperCase() = Converte uma string para letras maiúsculas.
  const stringToUpperCase = 'hello world'
  const newStringToUpperCase = stringToUpperCase.toUpperCase()

  console.groupCollapsed('toUpperCase')
    console.log(newStringToUpperCase)
  console.groupEnd()

  // 20.toLocaleLowerCase() = Converte uma string em letras minúsculas, de acordo com a localização informada.
  const stringToLocaleLowerCase = 'MAÇÃ'
  const newStringToLocaleLowerCase = stringToLocaleLowerCase.toLocaleLowerCase()

  console.groupCollapsed('toLocaleLowerCase')
    console.log(`EN-US: ${stringToLocaleLowerCase.toLocaleLowerCase('en-US')}`)
  console.groupEnd()

  // 21.toLocaleUpperCase() = Converte uma string em letras maiúsculas, de acordo com a localização informada.
  const stringToLocaleUpperCase = 'maçã'
  const newStringToLocaleUpperCase = stringToLocaleUpperCase.toLocaleUpperCase()

  console.groupCollapsed('toLocaleUpperCase')
    console.log(`EN-US: ${stringToLocaleUpperCase.toLocaleUpperCase('en-US')}`)
  console.groupEnd()

  // 22.charAt() = Retorna o carácter do índice especificado.
  const stringCharAt = "Pelotas"
  const newStringCharAt1 = stringCharAt.charAt(0)
  const newStringCharAt2 = stringCharAt.charAt(4)

  console.groupCollapsed('charAt')
    console.log(newStringCharAt1) // P
    console.log(newStringCharAt2) // t
  console.groupEnd()

  // 23.concat() = Combina o texto de duas ou mais strings e retorna uma nova string.
  // Obs.: Em termos de performance é recomendado o uso dos operadores de atribuição (+, +=) em detrimento do método concat().
  const stringConcat1 = 'ABC'
  const stringConcat2 = 'DEF'
  const stringConcat3 = 'GHI'
  const newStringConcat = stringConcat1.concat(stringConcat2, stringConcat3)

  console.groupCollapsed('concat')
    console.log(newStringConcat)
  console.groupEnd()

  // 24.charCodeAt() = Retorna o valor Unicode do carácter de índice específico.
  const stringCharCodeAt = 'ABC'
  const newStringCharCodeAt = stringCharCodeAt.charCodeAt(0)

  console.groupCollapsed('charCodeAt')
    console.log(newStringCharCodeAt)
  console.groupEnd()

  // 25.codePointAt() = Retorna um número inteiro não negativo que é o valor do ponto de código Unicode.
  const stringCodePointAt = 'ABC'
  const newStringCodePointAt = stringCodePointAt.codePointAt(0)

  console.groupCollapsed('codePointAt')
    console.log(newStringCodePointAt)
  console.groupEnd()

  // 26.fromCharCode() = Converte valores em Unicode para caracteres.
  const stringFromCharCode = String.fromCharCode(65, 66, 67)

  console.groupCollapsed('fromCharCode')
    console.log(stringFromCharCode)
  console.groupEnd()

  // 27.fromCodePoint() = Retorna uma sequência de caracteres criado usando a sequência especificada de pontos de código.
  const stringFromCodePoint = String.fromCodePoint(40, 42, 41)

  console.groupCollapsed('fromCodePoint')
    console.log(stringFromCodePoint) // (*)
  console.groupEnd()

  // 28.localeCompare() = Compara duas strings de acordo com o locale (localidade) informada atual.
  const stringLocaleCompare1 = 'réservé'
  const stringLocaleCompare2 = 'RESERVE'
  const newStringLocaleCompare = stringLocaleCompare1.localeCompare(stringLocaleCompare2)

  console.groupCollapsed('localeCompare')
    console.log(newStringLocaleCompare) // 1
  console.groupEnd()

  // 29.match() = Procura uma string e dá "match" com uma expressão regular e retornar uma correspondência.
  const stringMatch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const newStringMatch = stringMatch.match(/[A-D]/gi)

  console.groupCollapsed('match')
    console.log(newStringMatch)
  console.groupEnd()

  // 30.matchAll() = Retorna um iterador de todos os resultados correspondentes a uma string em relação a uma regex.
  const stringMatchAll = 'test1test2'
  const regex = /t(e)(st(\d?))/g;
  const newStringMatchAll = [...stringMatchAll.matchAll(regex)];

  console.groupCollapsed('matchAll')
    console.log(newStringMatchAll[0]) // ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
  console.groupEnd()

  // 31.normalize() = Retorna a Forma de Normalização Unicode (Unicode Normalization Form) de uma dada string (se o valor não é uma string, ele será convertido para uma primeiramente).
  const stringNormalize = '\u0066\u0066'
  const newStringNormalize = stringNormalize.normalize()

  console.groupCollapsed('normalize')
    console.log(newStringNormalize)
  console.groupEnd()

  // 32.toString() = Retorna uma string representando o objeto especificado.
  const stringToTrim = new String('Hello World')
  const newStringToTrim = stringToTrim.toString()

  console.groupCollapsed('toString')
    console.log(newStringToTrim)
  console.groupEnd()

  // 33.raw() = Pegar as strings no formato "cru" de modelos literais.
  const stringRaw = String.raw`C:\Development\profile\aboutme.html`;

  console.groupCollapsed('raw')
    console.log(`The file was uploaded from: ${stringRaw}`);
  console.groupEnd()

  // 34.valueOf() = Retorna o valor primitivo de um objeto String.
  const stringValueOf = new String('Olá, mundo!')
  const newStringValueOf = stringValueOf.valueOf()

  console.groupCollapsed('valueOf')
    console.log(newStringValueOf) // Olá, mundo!
  console.groupEnd()

console.groupEnd()