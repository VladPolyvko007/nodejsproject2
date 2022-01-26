import flatObjects from "./house.mjs";

main()

//Function room displays list of flats that fit by the amount of rooms
function room() {
    console.log('List of flats that fit by the amount of rooms:\n')
    let roomAmount = 3
    for (let i = 0; i < flatObjects.length; i++) {
        if (roomAmount === flatObjects[i].flatroomamount) {
            toString(i)
            //console.table(flatObjects[i])
        }
    }
}


//Function squreRoom displays list of flats that of flats that fit by the squre
function squreRoom() {
    console.log('List of flats that fit by the squre:\n')
    let minSqure = 20
    let maxSqure = 78
    for (let i = 0; i < flatObjects.length; i++) {
        if (minSqure <= flatObjects[i].flatsqure && flatObjects[i].flatsqure <= maxSqure) {
            toString(i)
        }
    }
}


//Function floorAndRoom displays list of flats that fit by amount of rooms and is in the range of floors
function floorAndRoom() {
    console.log('List of flats that fit by amount of rooms and is in the range of floors:\n')
    let roomAmount = 3
    let minFloor = 1
    let maxFloor = 3
    for (let i = 0; i < flatObjects.length; i++) {
        if (roomAmount === flatObjects[i].flatroomamount && minFloor <= flatObjects[i].flatfloor && flatObjects[i].flatfloor <= maxFloor) {
            toString(i)
        }
    }
}


function toString(amount) {
    console.log('Flat №' + (amount + 1))
    console.log('Flat id:' + flatObjects[amount].idnumber);
    console.log('Flat number:' + flatObjects[amount].flatnumber);
    console.log('Flat squre:' + flatObjects[amount].flatsqure);
    console.log('Flat floor:' + flatObjects[amount].flatfloor);
    console.log('Flat room amount:' + flatObjects[amount].flatroomamount);
    console.log('Flat flat address:' + flatObjects[amount].flataddress + '\n\n');
}

function main() {
    room()
    squreRoom()
    floorAndRoom()
}


