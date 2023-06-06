var input = require('fs').readFileSync('./event_time.txt', 'utf8');
var lines = input.split('\n');
const [startDay, startTime, endDay, endTime] = lines.map(x => x.replace(/Dia/, '')).map(x => x.replace(/\s/g, ''));



const startDate = new Date(`04/${startDay}/2023 ${startTime}`);   
var endDate = new Date(`04/${endDay}/2023 ${endTime}`); 

const miliseconds = endDate.getTime() - startDate.getTime(); 

const total_seconds = parseInt(Math.floor(miliseconds / 1000));
const total_minutes = parseInt(Math.floor(total_seconds / 60));
const total_hours = parseInt(Math.floor(total_minutes / 60));
const days = parseInt(Math.floor(total_hours / 24));


const seconds = parseInt(total_seconds % 60);
const minutes = parseInt(total_minutes % 60);
const hours = parseInt(total_hours % 24);

console.log(`${days} dia(s)`);
console.log(`${hours} hora(s)`);
console.log(`${minutes} minuto(s)`);
console.log(`${seconds} segundo(s)`);
