//Array
console.groupCollapsed('Array')
  // Sumário das propriedades e métodos do Array

  // Array multidimensional (Matriz)
  const usuarios = [
    ['Clark', 'Kent', 'Planeta diário'],
    ['Gabriel', 'Fróes', 'Código Fonte'],
    ['Peter', 'Parker', 'Clarim diário'],
    ['Vanessa', 'Weber', 'Código Fonte']
  ];

  console.groupCollapsed('Array Multidimensional (Matriz)')
    console.log(usuarios);
    console.log(usuarios[1][2]); // O resultado será 'Código Fonte'
  console.groupEnd()

  // Array multidimensional (Matriz)
  const band = ['guitar', 'drums', 'singer'];
  const newMember = [ 'guitar'];

  const newBand = [...band, ...newMember];

  console.groupCollapsed('Copiando um array')
    console.log(newBand) // ['guitar', 'drums', 'singer', 'guitar'];
  console.groupEnd()

  // Objeto @@iterator
  console.groupCollapsed('Objeto @@iterator')

    const arrayIterator = ['w', 'y', 'k', 'o', 'p'];
    const newArrayIterator = arrayIterator[Symbol.iterator]();

    console.log(newArrayIterator.next().value); // w
    console.log(newArrayIterator.next().value); // y
    console.log(newArrayIterator.next().value); // k
    console.log(newArrayIterator.next().value); // o
    console.log(newArrayIterator.next().value); // p
  console.groupEnd()

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Array - Propriedades
  // 1. constructor = retorna a função que criou o protótipo do objeto Array.
  // 2. length = retorna a quantidade de elementos em um array.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Array - Métodos
  // 1. from() = cria um array a partir de um objeto.
  // 2. isArray() = verificar se é um array.
  // 3. of() = cria um novo array com um número variável de argumentos.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Métodos de modificação
  // 1. copyWithin() = copia elementos dentro do array, de uma posição específica para outra.
  // 2. fill() = preenche (fill) o array com o elemento informado, de acordo com o posição inicial e final informadas
  // 3. reverse() = inverte o array, de modo que o primeiro item se torne o último e vice-versa.
  // 4. sort() = Ordena os elementos de um Array (vide tabela ASCII).
  // 5. splice() = adiciona ou remove elementos em um array.
  // 6. pop() = remove o último elemento de um array e retorna esse elemento
  // 7. push() = adiciona um elemento no final do array e retorna o tamanho do array.
  // 8. shift() = remove o primeiro elemento de um array e retorna esse elemento
  // 9. unshift() = adiciona novos elementos ao início de um array e retorna o novo tamanho do array.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Métodos de acesso
  // 1. concat() = junta vários arrays e devolve uma cópia dos arrays concatenados
  // 2. includes() = verifica se um elemento está dentro do array e retorna true
  // 3. join() = converte o array para string (permitindo definir o separador).
  // 4. toString() = converte o array para string.
  // 5. slice() = retorna uma cópia da parte selecionada do array.
  // 6. indexOf() = procurar por um elemento e retorna sua posição (do início para o final).
  // 7. lastIndexOf() = procurar por um elemento e retorna sua posição (do final para o início).
  // 8. toLocaleString() = retorna uma string localizada que representa a matriz e seus elementos.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Métodos de iteração
  // 1. keys() = retorna um novo array que contém os índices para cada item do array.
  // 2. values() = retorna um novo array que contém os valores para cada item do array.
  // 3. entries() = retorna um novo array que contém índices e valores para cada item do array.
  // 4. every() = itera sobre os elementos do array, até que false seja retornado da condição (função).
  // 5. some() = itera sobre os elementos do array, até que true seja retornado da condição (função).
  // 6. find() = retorna o valor do primeiro elemento em um array que passa no teste.
  // 7. findIndex() = retorna o índice do primeiro elemento em um array que passa no teste.
  // 8. forEach() = executa uma função específica em todos os elementos do array.
  // 9. map() = cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
  // 10. filter() = cria um array com todos os elementos avaliados com true pela função especificada
  // 11. reduce() = reduz o valor do array para um único valor (acumulando da esquerda para a direita)
  // 12. reduceRight() = reduz o valor do array para um único valor (acumulando da direita para a esquerda)
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // - keys, values e entries
  // - every e some
  // - find, findIndex, indexOf e lastIndexOf
  // - forEach, map e filter
  // - reduce e reduceRight
  // - join e toString
  // - splice, pop e push
  // - shift e unshift
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Array - Propriedades
  // 1. constructor = retorna a função que criou o protótipo do objeto Array.
  // 2. length = retorna a quantidade de elementos em um array.

  console.groupCollapsed('Propriedades')

  // 1. constructor = retorna a função que criou o protótipo do objeto Array.
  const arrayConstructor1 = {};
  const newArrayConstructor1 = arrayConstructor1.constructor === Object

  const arrayConstructor2 = [];
  const newArrayConstructor2 = arrayConstructor2.constructor === Array;

  const arrayConstructor3 = new Number(3);
  const newArrayConstructor3 = arrayConstructor3.constructor === Number;

  console.groupCollapsed('Constructor')
    console.log(newArrayConstructor1) // true
    console.log(newArrayConstructor2) // true
    console.log(newArrayConstructor3) // true
  console.groupEnd()

  // 2. length = retorna a quantidade de elementos em um array.
  const arrayLength = ['Maçã', 'Banana', 'Melancia', 'Jaca', 'Melão']
  const newArrayLength = arrayLength.length

  console.groupCollapsed('Length')
    console.log(newArrayLength) // 5
  console.groupEnd()

  console.groupEnd()

  // Array - Métodos
  // 1. from() = cria um array a partir de um objeto.
  // 2. isArray() = verificar se é um array.
  // 3. of() = cria um novo array com um número variável de argumentos.

  console.groupCollapsed('Métodos')

  // 1. from() = cria um array a partir de array ou objeto iterável.
  const arrayFrom1 = '123456'
  const newArrayFrom1 = Array.from(arrayFrom1)

  const arrayFrom2 = [123456]
  const newArrayFrom2 = Array.from(arrayFrom2)

  console.groupCollapsed('From')
    console.log(arrayFrom1) // 123456
    console.log(newArrayFrom1) // ["1", "2", "3", "4", "5", "6"]
    console.log(arrayFrom2) // [123456]
    console.log(newArrayFrom2) // [123456]
  console.groupEnd()

  // 2. isArray() = verificar se é um array.
  const arrayIsArray = ['Maçã', 'Banana']
  const newArrayIsArray = Array.isArray(arrayIsArray)

  console.groupCollapsed('IsArray')
    console.log(newArrayIsArray) // true
  console.groupEnd()

  // 3. of() = cria um novo array com um número variável de argumentos.
  const newArrayOf1 = Array.of(7)
  const newArrayOf2 = Array.of(2, 3, 4, 7, 9)

  console.groupCollapsed('Of')
    console.log(newArrayOf1) // [7]
    console.log(newArrayOf2) // [2, 3, 4, 7, 9]
  console.groupEnd()

  console.groupEnd()

  // Métodos de modificação
  // 1. copyWithin() = copia elementos dentro do array, de uma posição específica para outra.
  // 2. fill() = preenche (fill) o array com o elemento informado, de acordo com o posição inicial e final informadas
  // 3. reverse() = inverte o array, de modo que o primeiro item se torne o último e vice-versa.
  // 4. sort() = Ordena os elementos de um Array (vide tabela ASCII).
  // 5. splice() = adiciona ou remove elementos em um array.
  // 6. pop() = remove o último elemento de um array e retorna esse elemento
  // 7. push() = adiciona um elemento no final do array e retorna o tamanho do array.
  // 8. shift() = remove o primeiro elemento de um array e retorna esse elemento
  // 9. unshift() = adiciona novos elementos ao início de um array e retorna o novo tamanho do array.

  console.groupCollapsed('Métodos de Modificação')

  // 1. copyWithin() = copia elementos dentro do array, de uma posição específica para outra.
  const arrayCopyWithin1 = [1, 2, 3, 4, 5, 6]
  const newArrayCopyWithin1 = arrayCopyWithin1.copyWithin(0, 3) //Muda para a posição 0 os elementos a partir da posição 3
  const arrayCopyWithin2 = [1, 2, 3, 4, 5, 6]
  const newArrayCopyWithin2 = arrayCopyWithin2.copyWithin(1, 3, 5) //Muda para a posição 1 os elementos a partir da posição 3 até a posição anterior a posição 5.

  console.groupCollapsed('copyWithin')
    console.log(arrayCopyWithin1) // [4, 5, 6, 4, 5, 6]
    console.log(newArrayCopyWithin1) // [4, 5, 6, 4, 5, 6]
    console.log(arrayCopyWithin2) // [1, 4, 5, 4, 5, 6]
    console.log(newArrayCopyWithin2) // [1, 4, 5, 4, 5, 6]
  console.groupEnd()

  // 2. fill() = preenche (fill) o array com o elemento informado, de acordo com o posição inicial e final informadas
  const arrayFill1 = [1, 2, 3, 4, 5]
  const newArrayFill1 = arrayFill1.fill(4, 2) // preenche com o valor 4 apartir do índice 2
  const arrayFill2 = ['1', '2', '3', '4', '5']
  const newArrayFill2 = arrayFill2.fill('preenche', 1, 4) // preenche com o valor 'preenche' apartir do índice 1 até antes do 4

  console.groupCollapsed('fill')
    console.log(arrayFill1) // [1, 2, 4, 4, 4]
    console.log(newArrayFill1) // [1, 2, 4, 4, 4]
    console.log(arrayFill2) // ['1', "preenche", "preenche", "preenche", '5']
    console.log(newArrayFill2) // ['1', "preenche", "preenche", "preenche", '5']
  console.groupEnd()

  // 3. reverse() = inverte o array, de modo que o primeiro item se torne o último e vice-versa.
  const arrayReverse = ['1', '2', '3', '4', '5']
  const newArrayReverse = arrayReverse.reverse()

  console.groupCollapsed('reverse')
    console.log(newArrayReverse)
  console.groupEnd()

  // 4. sort() = Ordena os elementos de um Array (vide tabela ASCII).
  // Obs.: O método sort() ordena os valores conforme os valores da tabela ASCII, por conta disso, podem ocorrer divergência entre o que esperamos intuitivamente e a realidade.
  // Para obter mais informações sobre a tabela ASCII, acesse http://www.asciitable.com

  const arraySort1 = ['A', 'b', 'a', 'C', 'G', 'd'];
  const newArraySort1 = arraySort1.sort();

  const arraySort2 = ['e', 'c', 'a', 'd', 'b'];
  const newArraySort2 = arraySort2.sort().reverse();

  const arraySort3 = ['john' , 'ana', 'Ana', 'John'];
  const newArraySort3 = arraySort3.sort();

  const arraySort4 = ['john' , 'ana', 'Ana', 'John'];
  const newArraySort4 = arraySort4.sort((a, b) => a.localeCompare(b));

  const arraySort5 = [21, 1, 10, 2];
  const newArraySort5 = arraySort5.sort();

  const arraySort6 = [21, 1, 10, 2];
  const newArraySort6 = arraySort6.sort((a, b) => a - b);

  console.groupCollapsed('sort')
    console.log(arraySort1) // ["A", "C", "G", "a", "b", "d"]
    console.log(newArraySort1) // ["A", "C", "G", "a", "b", "d"]
    console.log(arraySort2) // ["e", "d", "c", "b", "a"]
    console.log(newArraySort2) // ["e", "d", "c", "b", "a"]
    console.log(arraySort3) // ["Ana", "John", "ana", "john"]
    console.log(newArraySort3) // ["Ana", "John", "ana", "john"]
    console.log(arraySort4) // ["ana", "Ana", "john", "John"]
    console.log(newArraySort4) // ["ana", "Ana", "john", "John"]
    console.log(arraySort5) //  [1, 10, 2, 21]
    console.log(newArraySort5) //  [1, 10, 2, 21]
    console.log(arraySort6) // [1, 2, 10, 21]
    console.log(newArraySort6) // [1, 2, 10, 21]
  console.groupEnd()

  // 5. splice() = adiciona ou remove elementos em um array.
  const arraySplice1 = ['a', 'b', 'c', 'd', 'e']
  const newArraySplice1 = arraySplice1.splice(3, 2) //apartir do índice 2 remove os dois próximos itens
  const arraySplice2 = ['a', 'b', 'c', 'd', 'e']
  const newArraySplice2 = arraySplice2.splice(5, 0, 'f', 'g', 'h') // apartir do índice 5, deleta zero elemento e adiciona ''f', 'g', 'h'

  console.groupCollapsed('splice')
    console.log(arraySplice1) // ['a', 'b', 'c']
    console.log(newArraySplice1) // ['d', 'e']
    console.log(arraySplice2) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    console.log(newArraySplice2) // []
  console.groupEnd()

  // 6. pop() = remove o último elemento
  const arrayPop = ['Maçã', 'Banana', 'Laranja']
  const newArrayPop = arrayPop.pop();

  console.groupCollapsed('pop')
    console.log(newArrayPop) // ['Laranja']
    console.log(arrayPop) // ['Maçã', 'Banana']
  console.groupEnd()

  // 7. push() = adiciona um elemento no final do array e retorna o tamanho do array.
  const arrayPush1 = ['Maçã', 'Banana']
  const newArrayPush1 = arrayPush1.push('Laranja');

  const arrayPush2 = ['Maçã', 'Banana']
  const newArrayPush2 = arrayPush2.push('Laranja', 'Limão', 'Uva');

  console.groupCollapsed('push')
    console.log(newArrayPush1) // 3
    console.log(arrayPush1) // ['Maçã', 'Banana', 'Laranja']
    console.log(newArrayPush2) // 5
    console.log(arrayPush2) // ['Maçã', 'Banana', 'Laranja', 'Limão', 'Uva']
  console.groupEnd()

  // 8. shift() = remove o primeiro elemento de um array e retorna esse elemento
  // Obs.: O método shift e unshift permite que um array emule a estrutura de dados básica de fila (queue).
  const arrayShift = ['Maçã', 'Banana', 'Laranja']
  const newArrayShift  = arrayShift.shift(); // remove Maçã do início

  console.groupCollapsed('shift')
    console.log(newArrayShift) // Maça
    console.log(arrayShift) // ['Maçã', 'Banana']
  console.groupEnd()

  // 9. unshift() = adiciona novos elementos ao início de um array e retorna o novo tamanho do array.
  // Obs.: O método shift e unshift permite que um array emule a estrutura de dados básica de fila (queue).
  const arrayUnshift = ['Banana', 'Laranja'];
  const newArrayUnshift  = arrayUnshift.unshift('Maçã', 'Limão');

  console.groupCollapsed('unshift')
    console.log(newArrayUnshift) // 4
    console.log(arrayUnshift) // ['Maçã', 'Limão', 'Banana', 'Laranja']
  console.groupEnd()

  console.groupEnd()

  // Métodos de acesso
  // 1. concat() = junta vários arrays e devolve uma cópia dos arrays concatenados
  // 2. includes() = verifica se um elemento está dentro do array e retorna true
  // 3. join() = reúne todos os elementos do array em uma string.
  // 4. toString() = converte uma array para uma string.
  // 5. slice() = retorna uma cópia da parte selecionada do array.
  // 6. indexOf() = procurar por um elemento e retorna sua posição (do início para o final).
  // 7. lastIndexOf() = procurar por um elemento e retorna sua posição (do final para o início).
  // 8. toLocaleString() = retorna uma string localizada que representa a matriz e seus elementos.

  console.groupCollapsed('Métodos de Acesso')

  // 1. concat() = junta vários arrays e devolve uma cópia dos arrays concatenados
  const arrayConcat1 = ['1','2','3','4','5']
  const arrayConcat2 = ['6','7','8','9','10']
  const newArrayConcat = arrayConcat1.concat(arrayConcat2) 

  console.groupCollapsed('concat')
    console.log(newArrayConcat)
  console.groupEnd()

  // 2. includes() = verifica se um elemento está dentro do array e retorna true
  const arrayIncludes = ['melão', 'melancia']
  const newArrayIncludes1 = arrayIncludes.includes('melancia')
  const newArrayIncludes2 = arrayIncludes.includes('melão')
  const newArrayIncludes3 = arrayIncludes.includes('melão', 1)

  console.groupCollapsed('includes')
    console.log(newArrayIncludes1) // true
    console.log(newArrayIncludes2) // true
    console.log(newArrayIncludes3) // false
  console.groupEnd()

  // 3. join() = reúne todos os elementos do array em uma string.
  const arrayJoin1 = ['a', 'b', 'c', 'd', 'e']
  const newArrayJoin1 = arrayJoin1.join('-');
  const arrayJoin2 = ['<li>linha 1</li>', '<li>linha 2</li>', '<li>linha 3</li>' ]
  const newArrayJoin2 = arrayJoin2.join('');

  console.groupCollapsed('join')
    console.log(typeof newArrayJoin1)
    console.log(newArrayJoin1)
    console.log(typeof newArrayJoin2)
    console.log(newArrayJoin2)
  console.groupEnd()

  // 4. toString() = converte uma array para uma string.
  const arrayToString = ['a', 'b', 'c', 'd', 'e']
  const newArrayToString = arrayToString.toString()

  console.groupCollapsed('toString')
    console.log(typeof newArrayToString)
    console.log(newArrayToString)
  console.groupEnd()

  // 5. slice() = retorna uma cópia da parte selecionada do array.
  const arraySlice = [0, 1, 2, 3, 4, 5];
  const newArraySlice1 = arraySlice.slice(1, 4) // apartir do índice 1 retorna todos os valores até o item anterior ao 4.
  const newArraySlice2 = arraySlice.slice(2) // apartir do índice 2 retorna todos os valores restantes.
  const newArraySlice3 = arraySlice.slice(-2)

  console.groupCollapsed('slice')
    console.log(arraySlice) // [0, 1, 2, 3, 4, 5]
    console.log(newArraySlice1); // retornará [1, 2, 3]
    console.log(newArraySlice2); // retornará [2, 3, 4, 5]
    console.log(newArraySlice3); // retornará [4, 5]
  console.groupEnd()

  // 6. indexOf() = procurar por um elemento e retorna sua posição (do início para o final).
  const arrayIndexOf = ['a', 'melão', 'c', 'd', 'melão', 'f', 'g', 'melão']
  const newArrayIndexOf1 = arrayIndexOf.indexOf('melão')
  const newArrayIndexOf2 = arrayIndexOf.indexOf('melão', 2)

  console.groupCollapsed('indexOf')
    console.log(newArrayIndexOf1) // 1
    console.log(newArrayIndexOf2) // 4
  console.groupEnd()

  // 7. lastIndexOf() = procurar por um elemento e retorna sua posição (do final para o início).
  const arrayLastIndexOf = ['a', 'melão', 'c', 'd', 'melão', 'f', 'g', 'melão']
  const newArrayLastIndexOf1 = arrayLastIndexOf.lastIndexOf('melão')
  const newArrayLastIndexOf2 = arrayLastIndexOf.lastIndexOf('melão', 4)

  console.groupCollapsed('lastIndexOf')
    console.log(newArrayLastIndexOf1) // 7
    console.log(newArrayLastIndexOf2) // 4
  console.groupEnd()

  // 8. toLocaleString() = retorna uma string localizada que representa a matriz e seus elementos.
  const arrayToLocaleString1 = ['￥7', 500, 8123, 12];
  const newArrayToLocaleString1 = arrayToLocaleString1.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
  const arrayToLocaleString2 = 123456.789;
  const newArrayToLocaleString2 = arrayToLocaleString2.toLocaleString('de-DE')

  console.groupCollapsed('toLocaleString')
    console.log(typeof newArrayToLocaleString1) // string
    console.log(newArrayToLocaleString1) // ￥7,￥500,￥8,123,￥12
    console.log(typeof newArrayToLocaleString2) // string
    console.log(newArrayToLocaleString2) // 123.456,789
  console.groupEnd()

  console.groupEnd()

  // Métodos de iteração
  // 1. keys() = retorna um novo array que contém os índices para cada item do array.
  // 2. values() = retorna um novo array que contém os valores para cada item do array.
  // 3. entries() = retorna um novo array que contém índices e valores para cada item do array.
  // 4. every() = itera sobre os elementos do array, até que false seja retornado da condição (função).
  // 5. some() = itera sobre os elementos do array, até que true seja retornado da condição (função).
  // 6. find() = retorna o valor do primeiro elemento em um array que passa no teste.
  // 7. findIndex() = retorna o índice do primeiro elemento em um array que passa no teste.
  // 8. forEach() = executa uma função específica em todos os elementos do array.
  // 9. map() = cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
  // 10. filter() = cria um array com todos os elementos avaliados com true pela função especificada
  // 11. reduce() = reduz o valor do array para um único valor (acumulando da esquerda para a direita)
  // 12. reduceRight() = reduz o valor do array para um único valor (acumulando da direita para a esquerda)

  console.groupCollapsed('Métodos de Iteração')

  // 1. keys() = retorna um novo array que contém os índices para cada item do array.
  const arrayKeys = ['a', , 'c', , 'e']
  const newArrayKeys = [...arrayKeys.keys()]
  const newObjectKeys = Object.keys(arrayKeys) // Nesse caso específico adicionei o Object.key() aqui para melhor compreensão e comparação.

  console.groupCollapsed('keys')
    console.log(newArrayKeys) // [0, 1, 2, 3, 4]
    console.log(newObjectKeys) // ['0', '2', '4']
  console.groupEnd()

  // 2. values() = retorna um novo array que contém os valores para cada item do array.
  console.groupCollapsed('values')
  const arrayValues = ['a', 'b', 'c', 'd', 'e']
  const newArrayValues = arrayValues.values()

  for (const value of newArrayValues) { console.log(value) }
  console.groupEnd()

  // 3. entries() = retorna um novo array que contém índices e valores para cada item do array.
  // Obs.: Não confundir com Object.entries().

  const arrayEntries = ['a', 'b', 'c']
  const newArrayEntries = arrayEntries.entries()

  const newArrayEntries2 = () => {
    for (let e of newArrayEntries) { console.log(e) }
  }

  console.groupCollapsed('entries')
    console.log(newArrayEntries)
    console.log(newArrayEntries2())
  console.groupEnd()

  // 4. every() = itera sobre os elementos do array, até que false seja retornado da condição (função).
  const arrayEvery1 = [32, 33, 16, 40]
  const newArrayEvery1 = arrayEvery1.every((ages) => ages >= 10)

  const arrayEvery2 = [32, 33, 16, 40]
  const newArrayEvery2 = arrayEvery2.every((ages) => ages >= 30)

  console.groupCollapsed('every')
    console.log(arrayEvery1)
    console.log(newArrayEvery1) // true
    console.log(arrayEvery2)
    console.log(newArrayEvery2) // false
  console.groupEnd()

  // 5. some() = itera sobre os elementos do array, até que true seja retornado da condição (função).
  const arraySome1 = ['Banana', 'Maçã', 'Laranja']
  const newArraySome1 = arraySome1.some((item) => item == 'Banana')
  const newArraySome2 = arraySome1.some((item) => item == 'Acarajé')

  console.groupCollapsed('some')
    console.log(arraySome1) // ['Banana', 'Maçã', 'Laranja']
    console.log(newArraySome1) // true
    console.log(newArraySome2) // false
  console.groupEnd()

  // 6. find() = retorna o valor do primeiro elemento em um array que passa no teste.
  const arrayFind = ['Maçã', 'Banana', 'Laranja', 'Banana']
  const newArrayFind = arrayFind.find(item => item == 'Banana')

  console.groupCollapsed('find')
    console.log(arrayFind) // ['Maçã', 'Banana', 'Laranja', 'Banana']
    console.log(newArrayFind) // Banana
  console.groupEnd()

  // 7. findIndex() = retorna o índice do primeiro elemento em um array que passa no teste.
  const arrayFindIndex = ['Maçã', 'Banana', 'Laranja', 'Banana']
  const newArrayFindIndex = arrayFindIndex.findIndex(item => item == 'Banana' )

  console.groupCollapsed('findIndex')
    console.log(arrayFindIndex) // ['Maçã', 'Banana', 'Laranja', 'Banana']
    console.log(newArrayFindIndex) // retorna 1
  console.groupEnd()

  // 8. forEach() = executa uma função específica em todos os elementos do array.
  const arrayForEach = [1, 2, 3, 4, 5]
  // const arrayForEach2 = [{carro: 'Subaro'}, {carro: 'Fusca'}]
  const newArrayForEach1 = arrayForEach.forEach((number) => console.log(number)) // a cada iteração mostra o elemento da array
  const newArrayForEach2 = arrayForEach.forEach((number) => console.log(number * 2)) // a cada iteração multiplica o valor do array por 2
  const newArrayForEach3 = arrayForEach.forEach((number, index) => console.log(index)) // a cada iteração mostra o index de cada elmento
  const newArrayForEach4 = arrayForEach.forEach((number, index, array) => console.log(array)) // a cada iteração mostra o array que está sendo iterado.

  console.groupCollapsed('forEach')
    console.log(arrayForEach) // [1, 2, 3, 4, 5]
    console.log(newArrayForEach1) // undefined
    console.log(newArrayForEach2) // undefined
    console.log(newArrayForEach3) // undefined
    console.log(newArrayForEach4) // undefined
  console.groupEnd()

  // 9. map() = cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
  const arrayMap = ['Banana', 'Maçã', 'Laranja', 'Maçã']
  const newArrayMap = arrayMap.map((item) => item === 'Maçã')

  console.groupCollapsed('map')
    console.log(arrayMap) // ["Banana", "Maçã", "Laranja", "Maçã"]
    console.log(newArrayMap) // [false, true, false, true]
  console.groupEnd()

  // 10. filter() = cria um array com todos os elementos avaliados com true pela função especificada
  const arrayFilter = ['Banana', 'Maçã', 'Laranja', 'Maçã']
  const newArrayFilter1 = arrayFilter.filter((item) => item === 'Maçã')
  const newArrayFilter2 = arrayFilter.filter((item) => item !== 'Maçã')

  console.groupCollapsed('filter')
    console.log(arrayFilter) // ["Banana", "Maçã", "Laranja", "Maçã"]
    console.log(newArrayFilter1) // ["Maçã", "Maçã"]
    console.log(newArrayFilter2) // ["Banana", "Laranja"]
  console.groupEnd()

  // 11. reduce() = reduz o valor do array para um único valor (acumulando da esquerda para a direita)
  const arrayReduce = [1, 2, 3, 4]
  const newArrayReduce = arrayReduce.reduce((accumulator, currentValue) => accumulator + currentValue)

  console.groupCollapsed('reduce')
    console.log(arrayReduce) // [1, 2, 3, 4]
    console.log(newArrayReduce) // 10
  console.groupEnd()

  // 12. reduceRight() = reduz o valor do array para um único valor (acumulando da direita para a esquerda)
  const arrayReduceRight = [1, 2, 3, 4]
  const newArrayReduceRight = arrayReduceRight.reduceRight((accumulator, currentValue) => accumulator + currentValue)

  console.groupCollapsed('reduceRight')
    console.log(arrayReduceRight)
    console.log(newArrayReduceRight)
  console.groupEnd()

  console.groupEnd()

console.groupEnd()
