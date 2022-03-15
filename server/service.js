import fs from 'fs';
import config from './config.js';
import { join } from 'join';

const { dir: {
    publicDirectory
    } 
} = config;


class Service {
    createFileStream(filename) {
       return  fs.createReadStream(filename);
    }

    async getFileInfo(file) {
        // file = home/index.html
        const fullyPath = join (publicDirectory, file)
    }

    async getFileStream(file) {
        const { } = await this.getFileInfo(file)

        return {   
           stream: this.createFileStream(file)
        }
    }   
}


export default new Service();