'use strict'
const { constants } = require('buffer');

const EventEmitter = require('events');
EventEmitter.captureRejection = true; //node --unhandled-rejections=strict
const fs = require("fs");

class FileProcessor extends EventEmitter {
    constructor(props) {
        super(props);
    }

    run() {

        this.on('print_content', (content) => console.log(content));

        const files = fs.readdirSync('./data');

        files.forEach(item => {
            const file = item.split('.');
            console.log(`#${item}#`);
            if (file[1] === 'txt')  this.dealWithEventsInStreamsInFs(item);
        })  

        //this.emit('error', 'Some error message'); // this error has to be handled in listeners
        
    }

    dealWithEventsInStreamsInFs(name_file) {
        const readStream = fs.createReadStream(`./data/${name_file}`, "utf-8");
        
        let content = '';

        readStream.on("data", (chunk) => {
            content += chunk;
        });

        readStream.on("end", () => {
            this.emit('print_content', content);
        })

    }
}

module.exports = new FileProcessor();
