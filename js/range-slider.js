const rangeInput=document.querySelectorAll(".range-input input");
priceInput=document.querySelectorAll(".price-range input");

progress= document.querySelector(".slider .progress");

let priceGap=1000;

rangeInput.forEach(input =>{
    input.addEventListener("input", e=>{
        //getting two ranges value and parsing them to number
        let minVal= parseInt(rangeInput[0].value),
        maxVal= parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
            rangeInput[0].value=maxVal-priceGap;

            }else{
            rangeInput[1].value=minVal+priceGap;

            }
        }
        else{
            priceInput[0].value=minVal;
            priceInput[1].value=maxVal;

            progress.style.left=(minVal/rangeInput[0].max)*100 + "%";
           progress.style.right= 100 -(minVal/rangeInput[1].max)*100 + "%";
        }
    });
});