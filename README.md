# Javascript - String, Array e Objeto

  Meu repositório de estudo com uma compilação de todos os métodos para String, Array e Objeto com exemplos.

  Para ver o resultado no navegador abar o console ou veja os comentários no próprio código.

Fonte:
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects
  https://www.w3schools.com/jsref/default.asp

## String

String Properties
  1.length = Retorna o tamanho da string.

String Methods
  1. includes() = Verifica se uma string inclui o caracteres especificados.
  2. search() = Busca o valor específico ou expressão regular e retornar a posição do valor encontrado.
  3. startsWith() = Verifica se uma string começa com um caracter específico.
  4. endsWith() = Verifica se uma string termina com uma carácter específico, retornando true ou false.
  5. indexOf() = Busca o valor especificado e retorna a posição da primeira ocorrência encontrada.
  6. lastIndexOf() = Busca o valor especificado e retorna a posição da última ocorrência encontrada.
  7. repeat() = Retorna uma string com um determinado número de cópias concatenadas da string original.
  8. replace() = Substitui o valor especificado e o substitui.
  9. replaceAll() = Substitui todas as ocorrências do valor especificado.
  10. split() = Divide uma string em um array utilizando um separador.
  11. slice() = Extrai uma parte de uma string e a retorna como uma nova string.
  12. substring() = Extrai os caracteres entre as posições especificadas.
  13. padStart() = Preenche o início da string com um ou mais caracteres até o comprimento informado.
  14. padEnd() = Preenche o final da string com um ou mais caracteres até o comprimento informado.
  15. trim() = Remove os espaços em branco do início e do final da string.
  16. trimStart() = Remove os espaços em branco do começo da string.
  17. trimEnd() = Remove os espaços em branco do final da string.
  18. toLowerCase() = Converte uma string para letras minúsculas.
  19. toUpperCase() = Converte uma string para letras maiúsculas.
  20. toLocaleLowerCase() = Converte uma string em letras minúsculas, de acordo com a localização informada.
  21. toLocaleUpperCase() = Converte uma string em letras maiúsculas, de acordo com a localização informada.
  22. charAt() = Retorna o carácter do índice especificado.
  23. concat() = Combina o texto de duas ou mais strings e retorna uma nova string.
  24. charCodeAt() = Retorna o valor Unicode do carácter de índice específico.
  25. codePointAt() = Retorna um número inteiro não negativo que é o valor do ponto de código Unicode.
  26. fromCharCode() = Converte valores em Unicode para caracteres.
  27. fromCodePoint() = Retorna uma sequência de caracteres criado usando a sequência especificada de pontos de código.
  28. localeCompare() = Compara duas strings de acordo com o locale (localidade) informada atual.
  29. match() = Procura uma string e dá "match" com uma expressão regular e retornar uma correspondência.
  30. matchAll() = Retorna um iterador de todos os resultados correspondentes a uma string em relação a uma regex.
  31. normalize() = Retorna a Forma de Normalização Unicode (Unicode Normalization Form) de uma dada string (se o valor não é uma string, ele será convertido para uma primeiramente).
  32. toString() = Retorna uma string representando o objeto especificado.
  33. raw() = Pegar as strings no formato "cru" de modelos literais.
  34. valueOf() = Retorna o valor primitivo de um objeto String.
## Array

Array Properties
  1. constructor = retorna a função que criou o protótipo do objeto Array.
  2. length = retorna a quantidade de elementos em um array.

Array Methods
  1. from() = cria um array a partir de um objeto.
  2. isArray() = verificar se é um array.
  3. of() = cria um novo array com um número variável de argumentos.

Métodos de modificação
  1. copyWithin() = copia elementos dentro do array, de uma posição específica para outra.
  2. fill() = preenche (fill) o array com o elemento informado, de acordo com o posição inicial e final informadas
  3. reverse() = inverte o array, de modo que o primeiro item se torne o último e vice-versa.
  4. sort() = Ordena os elementos de um Array (vide tabela ASCII).
  5. splice() = adiciona ou remove elementos em um array.
  6. pop() = remove o último elemento de um array e retorna esse elemento
  7. push() = adiciona um elemento no final do array e retorna o tamanho do array.
  8. shift() = remove o primeiro elemento de um array e retorna esse elemento
  9. unshift() = adiciona novos elementos ao início de um array e retorna o novo tamanho do array.

Métodos de acesso
  1. concat() = junta vários arrays e devolve uma cópia dos arrays concatenados
  2. includes() = verifica se um elemento está dentro do array e retorna true
  3. join() = converte o array para string (permitindo definir o separador).
  4. toString() = converte o array para string.
  5. slice() = retorna uma cópia da parte selecionada do array.
  6. indexOf() = procurar por um elemento e retorna sua posição (do início para o final).
  7. lastIndexOf() = procurar por um elemento e retorna sua posição (do final para o início).
  8. toLocaleString() = retorna uma string localizada que representa a matriz e seus elementos.

Métodos de iteração
  1. keys() = retorna um novo array que contém os índices para cada item do array.
  2. values() = retorna um novo array que contém os valores para cada item do array.
  3. entries() = retorna um novo array que contém índices e valores para cada item do array.
  4. every() = itera sobre os elementos do array, até que false seja retornado da condição (função).
  5. some() = itera sobre os elementos do array, até que true seja retornado da condição (função).
  6. find() = retorna o valor do primeiro elemento em um array que passa no teste.
  7. findIndex() = retorna o índice do primeiro elemento em um array que passa no teste.
  8. forEach() = executa uma função específica em todos os elementos do array.
  9. map() = cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
  10. filter() = cria um array com todos os elementos avaliados com true pela função especificada
  11. reduce() = reduz o valor do array para um único valor (acumulando da esquerda para a direita)
  12. reduceRight() = reduz o valor do array para um único valor (acumulando da direita para a esquerda)

## Array

Object Methods
  1.assign() = Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino.
  2.create() = Cria um novo objeto com o objeto e as propriedades do protótipo especificado.
  3.entries() = Retorna uma matriz contendo todos os pares [key, value] das próprias propriedades de string enumeráveis ​​de um determinado objeto.
  4.fromEntries() = Retorna um novo objeto de um iterável de pares de valor-chave (o contrário do método entries).
  5.keys() = Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido.
  6.values() = Retorna uma matriz contendo os valores que correspondem a todas as propriedades de string enumeráveis ​​do próprio objeto.
  7.defineProperty() = Adiciona a propriedade nomeada descrita por um determinado descritor a um objeto.
  8.defineProperties() = Adiciona as propriedades nomeadas descritas pelos descritores fornecidos a um objeto.
  9.getOwnPropertyDescriptor() = Retorna um descritor de propriedade para uma propriedade nomeada em um objeto.
  10.getOwnPropertyDescriptors() = Retorna um objeto contendo todos os descritores de propriedade para um objeto.
  11.getOwnPropertyNames() = Retorna uma matriz contendo os nomes de todas as propriedades enumeráveis ​​e não enumeráveis ​​do próprio objeto fornecido.
  12.getOwnPropertySymbols() = Retorna uma matriz de todas as propriedades de símbolo encontradas diretamente sobre um determinado objeto.
  13.setPrototypeOf() = Define o protótipo (isto é, a propriedade interna [[Prototype]]).
  14.getPrototypeOf() = Retorna o protótipo do objeto especificado.
  15.is() = Compara se dois valores são o mesmo valor. Equivale a todos os valores de NaN (que diferem da Comparação de Igualdade Abstrata e da Comparação de Igualdade Estrita).
  16.preventExtensions() = Impede qualquer extensão de um objeto.
  17.isExtensible() = Determina se a extensão de um objeto é permitida.
  18.freeze() = Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade.
  19.isFrozen() = Determina se um objeto foi congelado.
  20.seal() = Impede que outro código exclua propriedades de um objeto.
  21.isSealed() = Determina se um objeto está selado.
