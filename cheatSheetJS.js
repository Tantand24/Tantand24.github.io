//An Useful list of javascript code to copy from
//Useful website for more javascript thing that aren't listed here
//https://www.w3schools.com/js/default.asp

//Sample code
//To add event Listener and to apply them to the doc button
window.onload = function(){
    document.getElementById('test1').addEventListener('button', testfunction)
}

//constructor to make objects
function testObjects(item1, item2, item3) {
    
    //the this.something only work inside object
    this.item1 = item1

    //You can put function inside object
    this.testFunction = function(){
        console.log("Test Function" + this.item1)
    }

    //To check for an input if not default to something
    if(item2){
    this.item2 = item2
    } else {
    this.item2 = 0
    }

    //you can put array inside object
    this.testarray = [item3]
}

//to use the constructor
const testObject = new testObjects(item, item, item)

//To go through an object
for(ObjectItem of testObject){
    console.log(ObjectItem)
}

//array setup
const testarray1 = []

for(ArrayItem in testarray1){
    console.log(ArrayItem)
}

//to add something into an array
testarray1.push(testObject)

//to grab html element by id
let item = document.getElementById("TestHtmlElement") //.value if to grab a user input

//To created html element
let li = document.createAttribute('li')

//To add to list
item.appendChild(li)

//to edit the content of an html element
item.textContent = ""

//help with debugging by sending variable to console log
console.log(testItem)

//Function to through an array
for(let i = 0; i < testarray1; i++){
    console.log(testarray1[i])
}

//method for string
//https://www.w3schools.com/js/js_string_methods.asp

//method to convert type
//https://www.w3schools.com/js/js_type_conversion.asp
