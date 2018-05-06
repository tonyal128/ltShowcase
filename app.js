'use strict';
const https = require("https");

module.exports = {
    isNumber: function(input){
        let result = isNaN(input) ? false : true;

        return result;
    },
    isJson: function(body){
        try{
            return JSON.parse(body); //if data is JSON, return the parsed body
        }
        catch(e){
            console.log("Failed: JSON not passed in"); //if not JSON alert user of failure
        }

        return true;
    },
    getPhotos: function(albumId){
        
    },
    getAlbum: function(){

    },
    displayAlbum: function(body, albumId){

    }
};