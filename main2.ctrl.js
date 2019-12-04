angular.module('app').controller("MainController", function(){
    this.title = 'D&D Characters';
    this.searchInput = '';
    this.shows = [
        {
            name: 'Laly',
            type: 'View'
        }
    ];
    this.stuff = [
        {
            equipment: 'stuff',
            class: 'stuff',
            ability: 'stuff',
            race: 'stuff'
        }
    ];
    this.new = {};
    this.addPerson = function(){
        this.shows.push(this.new);
        this.new = {};
    };

});