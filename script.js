somar(10)
function somar() {
    var multiplosDe3 = 0;
    var multiplosDe5 = 0;
    for(i = 0;i <= 1000;i++){
        multiplosDe3 += (i % 3 == 0) ? i : 0;
        multiplosDe5 += (i % 5 == 0) ? i : 0;
    }
    document.write(multiplosDe3 + multiplosDe5)
}