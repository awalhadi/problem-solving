// const input = "7 8 9 10"
const input = "7 10 8 9"
var lines = input.split(' ').map((item) => parseInt(item));
const [initial_hour, initial_minute, final_hour, final_minute] = lines.shift().split(' ').map(num => parseInt(num));


const one_day_total_time = 24 * 60;
const initial_hour_to_minute = initial_hour * 60;
const final_hour_to_minute   = final_hour * 60;

const total_initial_input_minute = initial_hour_to_minute + initial_minute;
const total_final_input_minute   = final_hour_to_minute + final_minute;

let time_diff = total_final_input_minute - total_initial_input_minute;

if (time_diff <= 0) {
    time_diff = time_diff + one_day_total_time;
}
 const hour = Math.floor(time_diff / 60);
 const minute = time_diff % 60;

console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`);