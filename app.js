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

        return false;
    },
    getPhotos: function(albumId){
        let url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`; //append album id to url query string
        https.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = isJson(body); //if the data is JSON assign to body
                displayAlbum(body,albumId);
            });
        });
    },
    getAlbum: function(){

    },
    displayAlbum: function(body, albumId){

    }
};