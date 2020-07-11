//Rodando o node com node play.js
var nome = "Max";
var age = 29;
var HasHobbies = true;

function sumaryUser(userName, userAge, userHasHobby){
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies ' +userHasHobby
    );
}

console.log(sumaryUser(nome, age, HasHobbies));
