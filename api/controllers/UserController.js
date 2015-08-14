/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	get:function(req,res){
        User.find()
            .populate('roles')
            .exec(function(err,users){
                if(err){
                    return res.json(err);
                }
                return res.json(users);
            })
    },
    getRoles:function(req,res){
        var username = req.params.name;
        User.findOne({username:username})
            .populate("roles")
            .exec(function(err,user){
                if(err){
                    return res.json(err);
                }
                return res.json(user.roles);
            })
    }
};

