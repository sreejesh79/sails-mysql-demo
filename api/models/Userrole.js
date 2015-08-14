/**
* Userrole.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoCreatedAt:false,
    autoUpdatedAt:false,
    autoPK:false,
  attributes: {
    user:{
        model:"User"
    },
      role:{
          model:"Role"
      }
  }
};

