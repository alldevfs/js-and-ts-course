function hourReturn(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.'); F
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1966 11:24:22')
    const hora = hourReturn();
    console.log(hora);

} catch (error) {
    console.log(error);
} finally {
    console.log('Sistema encerrado.');
}