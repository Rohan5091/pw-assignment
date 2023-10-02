// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.

let random_num=Math.floor(Math.random()*10)


function delay_function(delay) {
    console.log(`function is run after a delay of ${delay} second`);

    time=3
    const interval =setInterval(() => {
        console.log(`Remaining time is ${time}`);
        time--

        if (time===0) {
            console.log(random_num);
            clearInterval(interval)
        }
    }, 1000);
}
delay_function(3)