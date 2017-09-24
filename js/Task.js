function timers() {
    var name = prompt("Please input name: ");
    var time = "17:00";
    var place = "San-Frankivsk";

    var event = prompt(name + " enter event please.");

    if (typeof event === "string" && event !== "") {
        var eventRes = name + " has " + event + " today at " + time + " somewhere in " + place;
        console.log(eventRes);
    } else {
        alert ("Your event wrong, please write normal!");
    }

}

function countMoney () {
    alert("Today 1 euros equal 31.50 for 1 uah, and 1 dollar equal 28.90 uah")
    var euros = prompt("Please input count of euros")
    var grEu = euros * 31.50;
    var dollars = prompt("Please input count of dollars")
    var grDl = dollars * 28.90;

    if (parseInt(euros) && parseInt(dollars)){
        var count = euros + " is equal " + grEu + " uah, and " + dollars + "dollars is eaual " + grDl + " uah"
        alert(count)
    }
    else {
        alert("Write correct number!!");
    }



}

