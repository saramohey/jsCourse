var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('formId');
form.addEventListener('submit', function (event) {
    if (!numField1.value || !numField2.value) {
        alert("Please enter input values");    
    } 
    else {
        
        var x=parseFloat(numField1.value);
        var y=parseFloat(numField2.value);
        var result=x/y*100;
        resultField.innerText="The result is : "+result+" % .";
        event.preventDefault();
        
    }
});