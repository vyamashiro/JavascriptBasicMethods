//Object
console.groupCollapsed('Object')

    // Descobrir quanto itens tem um objeto
    const automovel = {
        fabricacao: 'Ford',
        modelo: 'Mustang',
        ano: '1969',
    }

    const automovel2 = {
        fabricacao: 'Ford',
        modelo: 'Mustang',
        ano: '1969',
        tipo: 'old school',
        novoObjeto: {
            designer: 'Charles',
            mecanico: 'Rodrigues'
        }
    }

    // Conversão
    console.groupCollapsed('Convert object to string')
        const stringifiedObj = Object.entries(automovel2).map(item => item.join(": ")).join("\n");
        console.log(stringifiedObj);
    console.groupEnd()

    console.groupCollapsed('Operações básicas com objeto')

        console.groupCollapsed('Ler o objeto')
            console.log('automovel2[1]', automovel2["1"]); // 
            console.log('automovel2.ano', automovel2.ano); // 1969
            console.log('automovel2[tipo]', automovel2['tipo']); // old school
            console.log('automovel2[novoObjeto]', automovel2['novoObjeto']); // designer: "Charles"
            console.log('automovel2.novoObjeto.designer', automovel2.novoObjeto.designer); // Charles
            console.log('automovel2[novoObjeto][designer]', automovel2['novoObjeto']['designer']); // Charles
        console.groupEnd()

        console.groupCollapsed('Adicionar propriedade e valor')
            automovel.tipo = 'tradicional school';
            console.log('automovel', automovel);
        console.groupEnd()

        console.groupCollapsed('Deletar propriedade e valor')
            delete automovel2.tipo;
            console.log('automovel2', automovel2);
        console.groupEnd()

        console.groupCollapsed('Atualizar a propriedade')
            automovel2.age = automovel2.ano;
            delete automovel2.ano;
            console.log('automovel2', automovel2);
        console.groupEnd()

        console.groupCollapsed('Atualizar a valor de uma propriedade')
            automovel2.tipo = 'vintage';
            console.log('automovel2', automovel2);
        console.groupEnd()

        console.groupCollapsed('Length')
            const objectLength = Object.keys(automovel).length
            console.log(objectLength) // 4
            
            const objectLengthAdjusted = Object.keys(automovel).length - 1
            console.log(objectLengthAdjusted) // 3

        console.groupEnd()

    console.groupEnd()

    console.groupCollapsed('Copiar um objeto (Shallow e Deep)');

        console.groupCollapsed('Shallow copy')
            // Obs.: Caso você queira clonar um objeto que contém apenas strings e números
            console.log(Object.assign({ tipo: 'novo' }, automovel))
        console.groupEnd()

        console.groupCollapsed('Deep clone do objeto')
            JSON.parse(JSON.stringify(automovel)) 
        console.groupEnd()

    console.groupEnd()

    console.groupCollapsed('Manipular um objeto');

    const automovel3 = {
        fabricacao: 'Ford',
        modelo: 'Mustang',
        ano: '1969',
        tipo: 'old school',
        novoObjeto: {
            designer: 'Charles'
        }
    }

        console.groupCollapsed('Deletar uma propriedade dentro de um objeto');
            
            console.log('automovel3', automovel3);
            delete automovel3.novoObjeto.designer
            console.log('automovel3', automovel3);

        console.groupEnd()

    console.groupEnd()

    // const deepClone = obj => {
    // 	// Se não for array ou objeto, retorna null
    // 	if (typeof obj !== 'object' || obj === null) {
    // 		return obj;
    // 	}

    // 	let cloned, i;

    // 	// Handle: Date
    // 	if (obj instanceof Date) {
    // 		cloned = new Date(obj.getTime());
    // 		return cloned;
    // 	}

    // 	// Handle: array
    // 	if (obj instanceof Array) {
    // 		let l;
    // 		cloned = [];
    // 		for (i = 0, l = obj.length; i < l; i++) {
    // 			cloned[i] = deepClone(obj[i]);
    // 		}

    // 		return cloned;
    // 	}

    // 	// Handle: object
    // 	cloned = {};
    // 	for (i in obj) if (obj.hasOwnProperty(i)) {
    // 		cloned[i] = deepClone(obj[i]);
    // 	}

    // 	return cloned;
    // }

    // const obj = { "name": "Ricardo Metring", "subobj": { color: "black" } };
    // const obj2 = deepClone(obj);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Métodos do construtor Object
    // 01.assign() = Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino.
    // 02.create() = Cria um novo objeto com o objeto e as propriedades do protótipo especificado.
    // 03.entries() = Retorna uma matriz contendo todos os pares [key, value] das próprias propriedades de string enumeráveis ​​de um determinado objeto.
    // 04.fromEntries() = Retorna um novo objeto de um iterável de pares de valor-chave (o contrário do método entries).
    // 05.keys() = Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido.
    // 06.values() = Retorna uma matriz contendo os valores que correspondem a todas as propriedades de string enumeráveis ​​do próprio objeto.
    // 07.defineProperty() = Adiciona a propriedade nomeada descrita por um determinado descritor a um objeto.
    // 08.defineProperties() = Adiciona as propriedades nomeadas descritas pelos descritores fornecidos a um objeto.
    // 09.getOwnPropertyDescriptor() = Retorna um descritor de propriedade para uma propriedade nomeada em um objeto.
    // 10.getOwnPropertyDescriptors() = Retorna um objeto contendo todos os descritores de propriedade para um objeto.
    // 11.getOwnPropertyNames() = Retorna uma matriz contendo os nomes de todas as propriedades enumeráveis ​​e não enumeráveis ​​do próprio objeto fornecido.
    // 12.getOwnPropertySymbols() = Retorna uma matriz de todas as propriedades de símbolo encontradas diretamente sobre um determinado objeto.
    // 13.setPrototypeOf() = Define o protótipo (isto é, a propriedade interna [[Prototype]]).
    // 14.getPrototypeOf() = Retorna o protótipo do objeto especificado.
    // 15.is() = Compara se dois valores são o mesmo valor. Equivale a todos os valores de NaN (que diferem da Comparação de Igualdade Abstrata e da Comparação de Igualdade Estrita).
    // 16.preventExtensions() = Impede qualquer extensão de um objeto.
    // 17.isExtensible() = Determina se a extensão de um objeto é permitida.
    // 18.freeze() = Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade.
    // 19.isFrozen() = Determina se um objeto foi congelado.
    // 20.seal() = Impede que outro código exclua propriedades de um objeto.
    // 21.isSealed() = Determina se um objeto está selado.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Métodos do construtor Object

    // 03.entries() = Retorna uma matriz contendo todos os pares [key, value] das próprias propriedades de string enumeráveis ​​de um determinado objeto.
    const objectEntries = Object.entries(automovel)

    console.groupCollapsed('entries')
        console.log(objectEntries)
    console.groupEnd()

    // 04.fromEntries() = Retorna um novo objeto de um iterável de pares de valor-chave (o contrário do método entries).
    const objectFromEntries = new Map([ ['foo', 'bar'], ['baz', 42] ]);
    const newObjectFromEntries = Object.fromEntries(objectFromEntries)

    console.groupCollapsed('fromEntries')
        console.log(newObjectFromEntries)
    console.groupEnd()

    // 05.keys() = Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido.
    const objectKeys = Object.keys(automovel)

    console.groupCollapsed('keys')
        console.log(objectKeys);
    console.groupEnd()

    // 06.values() = Retorna uma matriz contendo os valores que correspondem a todas as propriedades de string enumeráveis ​​do próprio objeto.
        const objectValues = Object.values(automovel)

    console.groupCollapsed('values')
        console.log(objectValues) // ["Ford", "Mustang" "1969", "tradicional school"]
    console.groupEnd()

    // 11.getOwnPropertyNames() = Retorna uma matriz contendo os nomes de todas as propriedades enumeráveis ​​e não enumeráveis ​​do próprio objeto fornecido.

    const object1 = {
        a: 1,
        b: 2,
        c: 3
    };

    console.groupCollapsed('getOwnPropertyNames')
        console.log(Object.getOwnPropertyNames(object1)); // expected output: Array ["a", "b", "c"]
    console.groupEnd()

    // 15.is() = Compara se dois valores são o mesmo valor. Equivale a todos os valores de NaN (que diferem da Comparação de Igualdade Abstrata e da Comparação de Igualdade Estrita).
    const objectIs1 = Object.is(15, 15)
    const objectIs2 = Object.is(15, '15')

    console.groupCollapsed('is')
        console.log(objectIs1)
        console.log(objectIs2)
    console.groupEnd()

    // 16.preventExtensions() = Impede qualquer extensão de um objeto.
    const newObjectPreventExtensions = { a: 1 }
    const objectIsPreventExtensions = Object.preventExtensions(newObjectPreventExtensions)

    console.groupCollapsed('preventExtensions')
        console.log(objectIsPreventExtensions)
    console.groupEnd()

    // 17.isExtensible() = Determina se a extensão de um objeto é permitida.
    const objectIsExtensible1 = Object.isExtensible(automovel)
    const objectIsExtensible2 = Object.isExtensible(newObjectPreventExtensions)

    console.groupCollapsed('isExtensible')
        console.log(objectIsExtensible1)
        console.log(objectIsExtensible2)
    console.groupEnd()

    // 18.freeze() = Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade.
    const newObjectFreeze = { a: 1 }
    const objectFreeze = Object.freeze(newObjectFreeze)

    console.groupCollapsed('freeze')
        console.log(objectFreeze)
    console.groupEnd()

    // 19.isFrozen() = Determina se um objeto foi congelado.
    const objectIsFrozen1 = Object.isFrozen(newObjectFreeze)
    const objectIsFrozen2 = Object.isFrozen(automovel)

    console.groupCollapsed('isFrozen')
        console.log(objectIsFrozen1)
        console.log(objectIsFrozen2)
    console.groupEnd()

    // 20.seal() = Impede que outro código exclua propriedades de um objeto.
    const newObjectSeal = { a: 1 }
    const objectSeal = Object.seal(newObjectSeal)

    console.groupCollapsed('seal')
        console.log(objectSeal)
    console.groupEnd()

    // 21.isSealed() = Determina se um objeto está selado.
    const objectIsSeal1 = Object.isSealed(newObjectSeal)
    const objectIsSeal2 = Object.isSealed(automovel)

    console.groupCollapsed('isSealed')
        console.log(objectIsSeal1)
        console.log(objectIsSeal2)
    console.groupEnd()

console.groupEnd()