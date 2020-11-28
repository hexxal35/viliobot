'use strict';
import { helpEmbed, addEmbed, addPedalEmbed, removeEmbed, kaksiEmbed, addPhotoEmbed } from './embeds.js';
import { Client, MessageEmbed, User } from 'discord.js';
import fs from 'fs';
const client = new Client();

let db = [];
let thumbs = [];
let pedal = [];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    let rawdata = fs.readFileSync('phrases.json');
    db = JSON.parse(rawdata);

    let rawthumbs = fs.readFileSync('thumbs.json');
    thumbs = JSON.parse(rawthumbs);

    let rawpedal = fs.readFileSync('pedal.json');
    pedal = JSON.parse(rawpedal);
});

const SaveDb = () => {
    fs.writeFile('./phrases.json', JSON.stringify(db), 'utf8', (err) => {
        if (err) {
            console.log(`Error writing file: ${err}`);
        } else {
            console.log(`File is written successfully!`);
        }
    })
}

const SaveThumbs = () => {
    fs.writeFile('./thumbs.json', JSON.stringify(thumbs), 'utf8', (err) => {
        if (err) {
            console.log(`Error writing file: ${err}`);
        } else {
            console.log(`File is written successfully!`);
        }
    })
}

const SavePedal = () => {
    fs.writeFile('./pedal.json', JSON.stringify(pedal), 'utf8', (err) => {
        if (err) {
            console.log(`Error writing file: ${err}`);
        } else {
            console.log(`File is written successfully!`);
        }
    })
}

client.on('message', msg => {
    const prefix = 'vilio';
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const wholeCommand = msg.content.slice(prefix.length).trim();
    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    let quote = '';
    let thumb = '';

    switch(command) {
        case 'help':
            msg.channel.send(helpEmbed());
            break;
        case 'add':
                quote = msg.content.substr(10);
    
                if(quote){

                    if (!db.includes(quote)) {
                        db.push(quote);
                    }
                    
                    SaveDb();
                    msg.channel.send(addEmbed(msg, quote));
                }
            break;
    
        // case 'remove':
        //         quote = msg.content.substr(13);
    
        //         console.log(db)
        //         if (db.includes(quote)) {
        //             db.splice(db.indexOf(quote), 1);
        //         }
        //         console.log(db);
        //         SaveDb();

        //         msg.channel.send(removeEmbed(msg, quote));
        //     break;
    
        case 'kaksi':
            quote = db[Math.floor(Math.random() * db.length)]
            thumb = thumbs[Math.floor(Math.random() * thumbs.length)]
            msg.channel.send(kaksiEmbed(quote, thumb));
            break;
        
        case 'addphoto':
            const url = args[0];
            if(url){
                if (!thumbs.includes(url)) {
                    thumbs.push(url);
                }
                SaveThumbs();
                msg.channel.send(addPhotoEmbed(msg));
            }
            break;

        case 'addpedal':
            quote = msg.content.substr(15);
    
            if(quote) {
                if (!pedal.includes(quote)) {
                    pedal.push(quote);
                }
                
                SavePedal();
                msg.channel.send(addPedalEmbed(msg, quote));
            }
            break;
        default:
            switch (wholeCommand){
                case 'e pedal':
                    quote = pedal[Math.floor(Math.random() * pedal.length)]
                    msg.author.send(quote ? quote : "si ti we");
            }
            break

    }
})

client.login("Nzc5NDIxNjU0MTExMjIzODU5.X7gS-w.zFucfvIcYoHvxIHjqQjSxXGiL7k");