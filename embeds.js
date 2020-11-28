import { MessageEmbed } from 'discord.js';
import fs from 'fs';
const zeroToF = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

const getColorDigit = () => zeroToF[Math.floor(Math.random() * 16)]


const removeEmbed = (msg, quote) =>
    new MessageEmbed()
        .setTitle('Премахнато!')
        .setColor(0xff0000)
        .setDescription(`${msg.member.user.username} премахна "${quote}" от базата.`)

const addEmbed = (msg, quote) =>
    new MessageEmbed()
        .setTitle('Добавено!')
        .setColor(0x00ff00)
        .setDescription(`${msg.member.user.username} добави "${quote}" в базата.`)

const addPedalEmbed = (msg, quote) =>
    new MessageEmbed()
        .setTitle('Добавено!')
        .setColor(0x00ff00)
        .setDescription(`${msg.member.user.username} добави "${quote}" в педал базата.`)

const addPhotoEmbed = (msg) =>
    new MessageEmbed()
        .setTitle('Добавена снимка!')
        .setColor(0xff00ff)
        .setDescription(`${msg.member.user.username} добави снимка в базата.`)

const helpEmbed = () =>
     new MessageEmbed()
        .setTitle('Help')
        .setColor(0x000000)
        .setDescription('Команди:')
        .addFields(
            { name: 'vilio add <vilio_quote>', value: 'Слага цитат в базата.' },
            { name: 'vilio kaksi', value: 'Показва какво си мисли Вильо.' },
            { name: 'vilio addphoto <img_url>', value: 'Добавя снимка на Вильо.' },
            { name: 'vilio e pedal', value: 'Не псувай Вильо, моля :).' },
            { name: 'vilio addpedal <vilio_pedal_quote>', value: 'Помогнете на Вильо да затапва хейтарите.' },
        )

const kaksiEmbed = (quote, thumb) => {
    let color = "";
    for (let i = 0; i < 6; i++) {
        color += getColorDigit();
    }

    return new MessageEmbed()
        .setTitle('Vilio bot e dobre')
        .setColor(color)
        .addField("MAIKA TI WE", (quote ? quote : "hui"))
        .setThumbnail(thumb)
}
    

export {
    addEmbed,
    removeEmbed,
    helpEmbed,
    kaksiEmbed,
    addPedalEmbed,
    addPhotoEmbed
}