const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const fateGrandOrder = {
     'mashu kyrielight' : {
         name: 'Mashu Kyrielight',
         rarity: '4 Stars',
         ID: 1,
         Cost: 0,
         Attack: {
            'Min Attack No Status Cards': 1261,
            'Max Attack No Status Cards': 6791,
            'Min Attack With Status Cards': 1455,
            'Max Attack With Status Cards': 8730,
         },
        'Voice Actor': 'Takahashi Rie',
        'Illustrator': 'Takeuchi Takashi',
        'Attribute': 'Earth',
    	'Growth Curve': 'Linear',
        'Star Absorption': '99',
        'Star Generation': '9.9%',
        'NP Charge ATK': '0.84%',
        'NP Charge DEF': '3%',
        'Death Rate': '24.5%',
        Alignments: 'Lawful-Good',
        Gender: 'Female',
        Traits : ['Costume-Owning', 'Demi-servant', 'Female', 'Hominidae Servant', 'Humanoid', 'Living Human', 'Riding', 'Round Table Knight', 'Servant', 'Weak to Enuma Elish']
     },
     meltlilith : {
        name: 'Meltlilith',
        ID: 163,
        Cost: 16,
        Attack: {
            'Min Attack No Status Cards': 1807,
            'Max Attack No Status Cards': 11692,
            'Lv.100 Grail ATK:': 12799,
            'Lv.120 Grail ATK': 15023,
        },
        'Voice Actor': 'Hayami Saori',
        Illustrator: 'Wada Arco',
        Attribute: 'Earth',
        'Growth Curve': 'Linear',
        'Star Absorption': 100,
        'Star Generation': '10.2%',
        'NP Charge ATK': '0.92%',
        'NP Charge DEF': '4%',
        'Death Rate': '30%',
        'Alignments': 'Lawful-Good',
        'Gender': 'Female',
        'Traits': ['Divine', 'Female', 'Humanoid', 'Mechanical', 'Riding', 'Servant', 'Weak to Enuma Elish']
        },
     error:{
        name: 'error',
        rarity: 'error',
        ID: 'error',
        Cost: 'error',
        Attack: {
           'Min Attack No Status Cards': 'error',
           'Max Attack No Status Cards': 'error',
           'Min Attack With Status Cards': 'error',
           'Max Attack With Status Cards': 'error',
        },
       'Voice Actor': 'error',
       'Illustrator': 'error',
       'Attribute': 'error',
       'Growth Curve': 'error',
       'Star Absorption': 'error',
       'Star Generation': 'error',
       'NP Charge ATK': 'error',
       'NP Charge DEF': 'error',
       'Death Rate': 'error',
       Alignments: 'error',
       Gender: 'error',
       Traits : ['error']
     }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:servantName',(request,response)=>{
    let servant = request.params.servantName.toLowerCase()
    if(fateGrandOrder[servant]){
        response.json(fateGrandOrder[servant])
    }else{
        response.json(fateGrandOrder['error'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on ${PORT}.`)
})