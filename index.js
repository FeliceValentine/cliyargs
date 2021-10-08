const fs = require('fs');
const command = process.argv[2];
const input = process.argv[3];
const value = process.argv[4];
const { add, list, update, deleteMovie } = require('./utils');

const yargs = require("yargs/yargs");
const { hideBin } = require ("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;


const app = () =>{
    let movieListArr;
    try{
        movieListArr = JSON.parse(fs.readFileSync('./netflix.json'));
    }catch(error){
        movieListArr = [];
    }    
    
    if(argv.add){
        add(movieListArr, input);
    }else if (argv.list){
        
        list();
    }else if (argv.update){
     
        update(movieListArr,input,value)

    }else if (argv.delete){
       
        deleteMovie(movieListArr, input);
    }
}

app();
