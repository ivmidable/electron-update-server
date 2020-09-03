//Includes
const express = require('express');
const cors = require('cors');

class UpdateServer {
    constructor() {
        this.app = express();
        this.setupExpress();
        this.processExpress();
    }

    setupExpress() {
        //this.app.set('trust proxy', 1);
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
    }

    processExpress() {
        console.log('Update Server: Binding > 2323');
        this.app.listen(2323);
        console.log('Update Server: Bound > 2323');
    }
}

var updateServer = new UpdateServer();
