var input = document.getElementById("input");
var btnChecar = document.getElementById("btnChecar");
var promise;

function chamarPromise() {

    checaIdade(input.value)
        .then(function (resolve) {
            setTimeout(function () {
                console.log(resolve)
            }, 2000);
        })
        .catch(function (reject) {
            setTimeout(function () {
                console.log(reject);
            }, 2000);
        })

}

function checaIdade(idade) {

    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve("Maior que 18 anos");
        } else {
            reject("Menor que 18 anos");
        }
    });
}

btnChecar.onclick = chamarPromise;