function simple(param) {
    if (typeof param !== 'number') throw ('Não é um número!');
    console.log(`${param} é um número`)
}
try {
    simple('s')
} catch (error) {
    console.log(error)
}
