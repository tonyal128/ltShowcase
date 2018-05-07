'use strict';
const https = require("https");

getAlbum();

function isNumber(input){
    let result = isNaN(input) ? false : true;
    return result;
}

function isJson(body){
    try{
        return JSON.parse(body); //if data is JSON, return the parsed body
    }
    catch(e){
        console.log("Failed: JSON not passed in"); //if not JSON alert user of failure
    }

    return false;
}

function getPhotos(albumId){
    if(isNumber(albumId)){
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
    }
    else{
        console.log("Not a number, no album found.");
        return;
    }
}

function displayAlbum(body,albumId){
    console.log(`Photo Album: ${albumId}`); //show the requested album id

    //if not null or empty, show the photo id and title of each photo in album. If null alert user of empty album
    if(body){
        for(var result in body){
            console.log(`[${body[result].id}] ${body[result].title}`);
        }
    }
    else{
        console.log(`No photos found in album ${albumId}`);
    }
}

function getAlbum(){
    let albumId;
    if(process.argv[2] > 0){ 
        albumId = process.argv[2]; 
        getPhotos(albumId);
    }
    else{
        console.log("Enter Album ID: "); 
        var stdin = process.openStdin(); 

        stdin.addListener("data", function(input){
            if(isNumber(input)){
                getPhotos(input.toString().trim());
            }
            else{
                console.log("Not a number, no album found.");
                return;
            }
        });
    }
}

module.exports = {
    isNumber: isNumber,
    isJson: isJson,
    getPhotos: getPhotos,
    displayAlbum: displayAlbum
};