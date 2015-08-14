/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoCreatedAt:false,
    autoUpdatedAt:false,
  attributes: {
        username:{
            type:"string",
            required:true,
            unique:true
        },
      password:{
          type:"string",
          required:true
      },
      email:{
          type:"string",
          required:true
      },
      roles:{
          collection:"Role",
          through:"userrole"
      }
  }
};

