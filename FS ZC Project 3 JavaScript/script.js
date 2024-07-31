/* Step 2: Create a simple JSON file with more than five records in the file.
Step 3: Read the file using the Fetch API available in JavaScript.
Step 4: Using a forEach loop iterate over all the records available from the JSON file and display one of the key-value pairs of data to test that your reading of the JSON file is working.
Step 5: write three functions to return strings of data describing the contents of the JSON file.*/

fetch('./stuff.json')
    .then((response) => response.json())
    .then(data => showInfo(data));

function showInfo(file) {
    console.log(file)
    let listToHtml = ''

    for (let i = 0; i < file.length; i++) {
        console.log(file[i])
        listToHtml = listToHtml + `<h3>ID ${file[i].id}: ${file[i].name}</h3><ul><li>${customerNameAndId(file[i])}</li><li>${contactInfo(file[i])}</li><li>${carOwnership(file[i])}</li></ul>`
    }
    document.getElementById("scriptcontent").innerHTML = listToHtml
}

function customerNameAndId(item) {
    let text = `Customer ID ${item.id} belongs to ${item.name}.`
    console.log(text)
    return text
}

function contactInfo(item) {
    let text = `${item.name}'s Phone Number is ${item.phone}.`
    console.log(text)
    return text
}

function carOwnership(item) {
    let text;
    if (item.carOwned == true) {
        text = `${item.name} owns a car and paid $${item.carPrice} for it.`
    } else {
        text = `${item.name} does not own a car.`
    }
    console.log(text)
    return text
}