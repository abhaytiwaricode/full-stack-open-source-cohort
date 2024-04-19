Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateTime() {
const now = new Date();

// Get hours, minutes, and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Format hours for 12-hour clock
let amPm = 'AM';
if (hours >= 12) {
amPm = 'PM';
if (hours > 12) {
hours -= 12;
}
}
// Add leading zeros if necessary
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Display time in HH:MM:SS format
const time24Hour = hours + ':' + minutes + ':' + seconds;
const time12Hour = hours + ':' + minutes + ':' + seconds + ' ' + amPm;

console.log('24-hour format:', time24Hour);
console.log('12-hour format:', time12Hour);
}

// Call updateTime() initially to display the current time
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
