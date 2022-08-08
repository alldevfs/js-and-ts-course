function recursiva(params) {
    if (params >= 26) return;
    params++;
    console.log(params);
    recursiva(params);
}
recursiva(4)