const data = new Date()

function zeroLeftData(num) {
    return num >= 10 ? num : `0${num}`;
}
function formatData(data) {
    const dia = zeroLeftData(data.getDate());
    const mes = zeroLeftData(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroLeftData(data.getHours());
    const min = zeroLeftData(data.getMinutes());
    const seg = zeroLeftData(data.getSeconds());

    return `${dia}/${mes}/${ano} = ${hora}:${min}:${seg}.`;
}

const dataBrasil = formatData(data)
console.log(dataBrasil);