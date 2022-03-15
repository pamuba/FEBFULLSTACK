"use strict";

var pokemon = {
  firstName: 'Pika',
  lastName: 'Chu',
  getPokeName: function getPokeName() {
    return fullName = this.firstName + ' ' + this.lastName;
  }
};

var pokemonName = function pokemonName(snack, hobby) {
  console.log(this.getPokeName() + ' I choose you');
  console.log(this.getPokeName() + ' like ' + snack + ' and ' + hobby);
}; //BIND


var logPkemon = pokemonName.bind(pokemon); //after 1 yr

logPkemon('sushi', 'js'); //CALL
// pokemonName.call(pokemon, 'sushi', 'js')
//APPLY
// pokemonName.call(pokemon, ['sushi'] , ['js'])