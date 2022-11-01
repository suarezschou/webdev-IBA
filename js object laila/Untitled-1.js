/* const pokemon = {
    name:"squirtle",
    type:"water",
    weakness:"plant",

    myMethod: function()
    {
        return this.weakness + " " + "can kill this pokemon";
    }
    
}; */

const pokemon = {
    name:"squirtle",
    type:"water",
    weakness:"plant",

    myMethod: function()
    {
        return `${this.weakness} can kill this pokemon`;
    }
    
};