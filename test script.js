document.getElementById('medForm').addEventListener('submit', function(event){
    event.preventDefault();

    const medName = document.getElementById('medName').value;
    const medTime = document.getElementById('medTime').value;
    const medSideEffects =
    document.getElementById('medSideEffects');

    this,reset();
})

function addMedication(name, time, medSideEffects) {
    const medList = document.getElementById('medList');

}


const { Client } =require('pg');
const { Client } = require('undici-types');
// создание клиента с парметром 
const Client = new Client ({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
    port: 5432,
})

client.connect()
    .then(() => console.log('connected to PostgreSQL'))
    .catch (err => console.error('connection error', err.stack));


client.query('select now()', (err, res) => {
    if (err){
        console.error(err);
        return;

}
console.log('Current Time:', res.rows[0]);
client.end();
})
