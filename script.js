roll_num = 0 // setting the roll counter at 0
document.querySelector('#roll').onclick = function() { // the following happens when clicking "roll"
    let dice_num = (document.querySelector('#dice_num').value); // number of dice to be rolled
    let dice = (document.querySelector('#dice').selectedOptions[0].value); // type of dice to be rolled
    roll_num++; // increasing roll counter

    roll_values = new Array // setting up the array to store the rolls of individual dice
    roll_values.length = dice_num
    roll_values.fill(0)

    let get_roll_value = function() { // this function rolls a specified dice
        roll_value = Math.floor(Math.random() * dice + 1)
        return roll_value
     }

     roll_values.forEach(function(item, index, array){ // this calls the get_roll_value function for each element within the array
          array[index] = get_roll_value(item);
     });

    let rolls_sum = roll_values.reduce((a, b) => a + b) // this calculates the sum of rolls of individual dice

    let roll = document.createElement('div'); // creating a div to append
    roll.innerHTML = `Roll #${roll_num} (${dice_num}d${dice}): ${rolls_sum} (dice: ${roll_values})` // the div's contents
    document.getElementById('place_for_text').appendChild(roll) // appending the div
    }

document.querySelector('#clear').onclick = function() { // this function removes all the divs created
    roll_num = 0 // resetting the counter after clearing roll history
    let to_remove = document.getElementById('place_for_text')
    to_remove.replaceChildren();
}