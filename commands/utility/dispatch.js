const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const currentDate = new Date();

const exampleEmbed = new EmbedBuilder()
    .setColor('#457cc0')
    .setTitle('Dispatch du ' + currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear())
    .setDescription('**Heure:** 21h30\n**Lieu: ** Station La Mesa')
    .setThumbnail('https://www.google.com/url?sa=i&url=https%3A%2F%2Fmadonnestudio-fivepd.fandom.com%2Ffr%2Fwiki%2FSAHP&psig=AOvVaw3_RAAINcai_zv-bjsGul8n&ust=1715868617906000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICpgu3qj4YDFQAAAAAdAAAAABAE')
    .addFields(
        { name: 'Information', value: "Inscrivez votre présence ou votre absence au briefing de ce soir. Ce vote a pour but de nous aider dans la conception des patrouilles, il peut être changé jusqu'à 20h00. " },
        {
            name: 'Unités',
            value: ':sahp: SAHP \n :motorcycle: MD (Motorcycle Division) \n :truck: (Commercial)'
        },
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

const channel =

    module.exports = {
        data: new SlashCommandBuilder()
            .setName('dispatch')
            .setDescription('Envoei le message de dispatch'),
        async execute(interaction) {
            const channel = interaction.client.channels.cache.get('926870922147803147')
            await channel.send({ embeds: [exampleEmbed] });
        },
    };