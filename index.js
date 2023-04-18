document.querySelector("#btnResult").onclick = function(){
    let output = '';
    let str = document.querySelector("#inp-str").value;
    let count = +document.querySelector("#inp-num").value;
    let arString = str.split("");

    if (count >= arString.length){
            output = arString.reverse().join("");
    } else if (count < arString.length) {
        let arrStart = [];
        let arrEnd = [];
        for(let i = count-1  ; i >= 0; i--){
           let outStart = arrStart.push(arString[i]);
           outStart = arrStart.join("");
           arrEnd = arString.join("").substring(count);
           output = outStart + arrEnd;
        }
        
    }
    document.querySelector("#result").innerHTML = output;
}




