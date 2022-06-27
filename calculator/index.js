const numberButtons=document.querySelectorAll(".numbers");
const operationButtons=document.querySelectorAll(".operand");
const equalButton=document.getElementById("equal");
const delet=document.getElementById("delete");
const clear=document.getElementById("clear");
const previousElement=document.getElementById("previous_output");
const currentElement=document.getElementById("current_output");



class Calculator{

    constructor(previousElement,currentElement){
        this.previousElement=previousElement;
        this.currentElement=currentElement;
        this.clear()
    }
    clear() {
        this.current="";
        this.previous="";
        this.operation=undefined
    }
    equal() {
        this.compute()

    }
    getDisplay(number) {
        const stringNumber=number.toString()
        const precedingNumber=parseFloat(stringNumber.split(".")[0])
        const sucedingNumber=stringNumber.split(".")[1];
        let integerDisplay
        if(isNaN(precedingNumber)){
           integerDisplay='' 
        }
        else{
            integerDisplay=precedingNumber.toLocaleString('en',{maximumFractionDigits:0})
        }
        if(sucedingNumber!=null){
            return `${integerDisplay}.${sucedingNumber}`
        }
        else{
            return integerDisplay
        }







    }

    delete() {
        this.current=(this.current.toString()).slice(0,-1)

    }
    append(number) {
        if(number==="." && this.current.includes(".")){return }
        this.current=this.current.toString()+ number.toString()
        
    }
    operate(operation){

        if(this.current==="") {
            return 
        }
        if(this.previous!="") {
            this.compute()
        }
        this.operation=operation
        this.previous=this.current
        this.current=""
    }
    compute() {
        let computation
        this.prevNumber=parseFloat(this.previous).toFixed(2)
        this.currentNumber=parseFloat(this.current).toFixed(2)
        if(isNaN(this.prevNumber) || isNaN(this.currentNumber)) {
            return 
        }
        switch(this.operation) {
            case "+":
                computation=(parseFloat(this.prevNumber)+parseFloat(this.currentNumber)).toFixed(2);
                break;
            case "-":

                computation=(parseFloat(this.prevNumber)-parseFloat(this.currentNumber)).toFixed(2);
                break;
            case "/":
                computation=(parseFloat(this.prevNumber)/parseFloat(this.currentNumber)).toFixed(2);
                break;
            case "%":
                computation=(parseFloat(this.prevNumber)%parseFloat(this.currentNumber)).toFixed(2);
                computation=(this.prevNumber%this.currentNumber).toFixed(2);
                break;
            default:
                return
        
        }
        this.current=computation
        this.operation=undefined
        this.previous=""


    }
    updateDisplay() {
        (this.currentElement).innerText=this.getDisplay(this.current)
        if(this.operation != undefined){
            this.previousElement.innerText = `${this.getDisplay(this.previous)} ${this.operation}`
        }
        else{
            this.previousElement.innerText=this.getDisplay(this.previous)
        }
        
    }


}
const calculator= new Calculator(previousElement,currentElement);


numberButtons.forEach(buttons=>{
    buttons.addEventListener('click',()=>{
        calculator.append(buttons.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(operations=>{
    operations.addEventListener("click",()=>{
        calculator.operate(operations.innerText)
        calculator.updateDisplay()
    })
})
equalButton.addEventListener("click",()=>{
    calculator.equal()
    calculator.updateDisplay()

})
clear.addEventListener("click",()=>{
    calculator.clear()
    calculator.updateDisplay()
})

delet.addEventListener("click",()=>{
    calculator.delete()
    calculator.updateDisplay()
})