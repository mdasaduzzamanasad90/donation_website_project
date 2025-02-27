// click donation button
document.getElementById('donation').addEventListener('click',function(){
    // button color change
    document.getElementById('donation').classList.add("bg-[#B4F461]");
    document.getElementById('history').classList.remove("bg-[#B4F461]");
    // hidden add or remove
    document.getElementById('donationfrom').classList.remove("hidden");
    document.getElementById('historyfrom').classList.add("hidden");

})

// click history button
document.getElementById('history').addEventListener('click',function(){
    // button color change
    document.getElementById('history').classList.add("bg-[#B4F461]");
    document.getElementById('donation').classList.remove("bg-[#B4F461]");
    // hidden add or remove
    document.getElementById('historyfrom').classList.remove("hidden");
    document.getElementById('donationfrom').classList.add("hidden");
})


// input function
function inputfield(id){
    const element = document.getElementById(id).value;
    const elementnumber = parseFloat(element);
    return elementnumber;
}

// balance function
function balance (id){
    const element = document.getElementById(id).innerText;
    const elementnumber = parseFloat(element);
    return elementnumber;
}
