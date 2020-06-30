/**
 * Auth.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    attributes: {
    id: { 
        type: 'number',  
        required : true
    },
    name:{
        type: "string"
    },
    emailid:{
        type: "string"
    },
    password:{
        type: "string"
    }

  },

};
