//CSS Cheat page
window.onload = function(){
document.getElementById("colorChangeForm").addEventListener('submit', colorChange)
document.getElementById("sizingForm").addEventListener('submit', sizing)
document.getElementById("MargPadForm").addEventListener('submit', sizing)
}

//A function to remove a single charcter
String.prototype.removeCharAt = function (i) {
    var tmp = this.split('');
    tmp.splice(i , 1);
    return tmp.join('');
}

//Function to hide the other value when change happen
function hidColourInput(){
    for(let i = 1; i <= 4; i++){
            
        let groupColourInputRBG = document.getElementById("RGBvalue"+i)
        let groupColourInputHSL = document.getElementById("HSLvalue"+i)
        let groupColourInputHEX = document.getElementById("HEXvalue")
        console.log(groupColourInputRBG, groupColourInputHSL, groupColourInputHEX)
        groupColourInputRBG.disabled = true;
        groupColourInputRBG.hidden = true;
        groupColourInputHSL.disabled = true;
        groupColourInputHSL.hidden = true;
        groupColourInputHEX.disabled = true;
        groupColourInputHEX.hidden = true;
    }
}

//hide size input function
function hidSizeInput(input){
    if (input == "w"){
        let width100 = document.getElementById("width100")
        let widthpx = document.getElementById("widthpx")
        width100.disabled = true;
        width100.hidden = true;
        widthpx.disabled = true;
        widthpx.hidden = true;
    } else {
        let height100 = document.getElementById("height100")
        let heightpxpx = document.getElementById("heightpx")
        height100.disabled = true;
        height100.hidden = true;
        heightpxpx.disabled = true;
        heightpxpx.hidden = true;
    }
}

//Function to change color input
function colorValueSelect(colorType){
    
    let colorTypeSelector = colorType.value+"value"

    if(colorTypeSelector == "RGBvalue" || colorTypeSelector == "HSLvalue"){
        hidColourInput()
        for(let i = 1; i <= 3; i++){
            let groupColourInput = document.getElementById(colorTypeSelector+i)
            groupColourInput.disabled = false;
            groupColourInput.hidden = false;
            
        }
    
    }else if (colorTypeSelector == "RGBAvalue" || colorTypeSelector == "HSLAvalue"){
        
        colorTypeSelector = colorTypeSelector.removeCharAt(3);
        hidColourInput()
        for(let i = 1; i <= 4; i++){
            
            let groupColourInput = document.getElementById(colorTypeSelector+i)
            groupColourInput.disabled = false;
            groupColourInput.hidden = false;
        }
    }else if (colorTypeSelector == "HEXvalue") {
        hidColourInput()
        let groupColourInput = document.getElementById(colorTypeSelector)
        groupColourInput.disabled = false;
        groupColourInput.hidden = false;
    }else{
        hidColourInput()
    }
}

//To change the background color of test box
const groupColourInputArray = [4]
function colorChange(event){
    event.preventDefault()

    let infoColorInfo = document.getElementById('infoColorInfo')
    let colorTestBox = document.getElementById('testBox')
    let colorType = document.getElementById('colorValue')
    let colorTypeSelector = colorType.value+"value"
    infoColorInfo.textContent = "" 

    if(colorTypeSelector == "RGBvalue" || colorTypeSelector == "HSLvalue"){
        console.log(colorTypeSelector)
        for(let i = 1; i <= 3; i++){
            groupColourInputArray[i-1] = document.getElementById(colorTypeSelector+i).value
            console.log(groupColourInputArray)
        }

        if(colorTypeSelector == "RGBvalue"){
            let testBoxBackgroundColor = `${colorType.value.toLowerCase()}(${groupColourInputArray[0]}, ${groupColourInputArray[1]}, ${groupColourInputArray[2]})`
            colorTestBox.style.backgroundColor = testBoxBackgroundColor
            infoColorInfo.textContent ="background-color: " +  testBoxBackgroundColor + ";"
        }else{
            let testBoxBackgroundColor = `${colorType.value.toLowerCase()}(${groupColourInputArray[0]}, ${groupColourInputArray[1]}%, ${groupColourInputArray[2]}%)`
        colorTestBox.style.backgroundColor = testBoxBackgroundColor
        infoColorInfo.textContent = "background-color: " + testBoxBackgroundColor + ";"
        }

    }else if (colorTypeSelector == "RGBAvalue" || colorTypeSelector == "HSLAvalue"){
        
        colorTypeSelector = colorTypeSelector.removeCharAt(3);
        console.log(colorTypeSelector)
        for(let i = 1; i <= 4; i++){
            groupColourInputArray[i-1] = document.getElementById(colorTypeSelector+i).value
            console.log(groupColourInputArray)
        }

        if(colorTypeSelector == "RGBvalue"){
            let testBoxBackgroundColor = `${colorType.value.toLowerCase()}(${groupColourInputArray[0]}, ${groupColourInputArray[1]}, ${groupColourInputArray[2]}, ${groupColourInputArray[3]})`
            colorTestBox.style.backgroundColor = testBoxBackgroundColor
            infoColorInfo.textContent ="background-color: " +  testBoxBackgroundColor + ";"
        }else{
            let testBoxBackgroundColor = `${colorType.value.toLowerCase()}(${groupColourInputArray[0]}, ${groupColourInputArray[1]}%, ${groupColourInputArray[2]}%, ${groupColourInputArray[3]})`
        colorTestBox.style.backgroundColor = testBoxBackgroundColor
        infoColorInfo.textContent ="background-color: " + testBoxBackgroundColor + ";"
        }

    }else if(colorTypeSelector == "HEXvalue"){
        let groupColourInput = document.getElementById(colorTypeSelector).value
        colorTestBox.style.backgroundColor = `#${groupColourInput}`
        infoColorInfo.textContent = `background-color: #${groupColourInput};`
    }else{
        console.log ('error')
    }
}

//To pick which unit for sizing
function widthValueSelect(unitType){
    let unitTypeW = unitType.value
    let hideSize = "w"

    hidSizeInput(hideSize)

    if(unitTypeW == "px"){
        let widthpx = document.getElementById("widthpx")
        widthpx.disabled = false;
        widthpx.hidden = false;
    } else if (unitTypeW == "vw" || unitTypeW == "vmin" || unitTypeW == "vmax" || unitTypeW == "%"){
        let width100 = document.getElementById("width100")
        width100.disabled = false;
        width100.hidden = false;
    } else {
        return
    }
}

function heightValueSelect(unitType){
    let unitTypeH = unitType.value
    let hideSize = "H"

    hidSizeInput(hideSize)

    if(unitTypeH == "px"){
        let heightpx = document.getElementById("heightpx")
        heightpx.disabled = false;
        heightpx.hidden = false;
    } else if (unitTypeH == "vh" || unitTypeH == "vmin" || unitTypeH == "vmax" || unitTypeH == "%"){
        let height100 = document.getElementById("height100")
        height100.disabled = false;
        height100.hidden = false;
    } else {
        return
    }
}

//To change the size of the test box
function sizing(event){
    event.preventDefault()

    let sizeTestBox = document.getElementById('testBox')
    let sizeW = document.getElementById('widthType').value
    let sizeH = document.getElementById('heightType').value
    let widthInfo = document.getElementById("widthInfo")
    let heightInfo = document.getElementById("heightInfo")

    if(sizeW == "vw" || sizeW == "vmin" || sizeW == "vmax" || sizeW == "%"){
        let width100 = document.getElementById("width100").value
        sizeTestBox.style.width = `${width100}${sizeW}`
        widthInfo.textContent = `width: ${width100}${sizeW};`
    } else if (sizeW == "px"){
        let widthpx = document.getElementById("widthpx").value
        console.log(widthpx)
        sizeTestBox.style.width = `${widthpx}${sizeW}`
        widthInfo.textContent = `width: ${widthpx}${sizeW};`
    }
    if(sizeH == "vh" || sizeH == "vmin" || sizeH == "vmax" || sizeH == "%"){
        let height100 = document.getElementById("height100").value
        sizeTestBox.style.height = `${height100}${sizeH}`
        heightInfo.textContent = `height: ${height100}${sizeH};`
    } else if (sizeH == "px"){
        let heightpx = document.getElementById("heightpx").value
        console.log(heightpx)
        sizeTestBox.style.height = `${heightpx}${sizeH}`
        heightInfo.textContent = `height: ${heightpx}${sizeH};`
    }
}