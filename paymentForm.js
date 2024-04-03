let cNumber = document.getElementById('ccNum');
cNumber.addEventListener('keyup', function(e) {
    let num = cNumber.value;

    let newValue = '';
    num = num.replace(/\s/g, '');
    for(var i = 0; i < num.length; i++) {
        if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
        newValue = newValue.concat(num[i]);
        cNumber.value = newValue;
    }
}

let ccNum = document.getElementById('c-number');
if(num.length<16) {
    ccNum.style.border = "1px solid red";
}else{
    ccNum.style.border = "1px solid green";
}
});


var form = document.getElementById("donation-form");

document.getElementById("donate-form-btn").addEventListener("click", function () {
  form.submit();
});