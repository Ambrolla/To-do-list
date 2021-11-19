//error when putting it in the main file, needs to be fixed;

exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", options);
}
exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", options);
}


















////NOTES////

    // A switch code just to tell what day of the week is this
    // let currentDay = today.getDay();
    // let day = "";
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;
    //     default:
    //         console.log("Error: current day is  " + currentDay);
    //         break;
    // }
    //
    ///// Code below is to say the date, not only the day of the week. 