const convert= ()=>{
    return new Promise((resolve, reject)=>{

        let unitArea= document.getElementById("opt");

        document.getElementById('convert').addEventListener('click', ()=>{
            let temp= document.getElementById("temperature").value;
            let newTemp= Number.parseInt(temp);
            let ans= null;

            if (unitArea.value==="Fahrenheit"){
                ans= Number.parseFloat((newTemp-32)*(5/9));
                document.getElementById("ans").setAttribute("value", ans);
            }
            else {
                ans= Number.parseFloat((newTemp*1.8)+32);
                document.getElementById("ans").setAttribute("value", ans);
            }
            
        })

        document.getElementById("Fah").addEventListener('click', ()=>{
            unitArea.value= "Fahrenheit";
        })

        document.getElementById("Cel").addEventListener('click', ()=>{
            unitArea.value= "Celsius";
        })

        resolve(101);
    })
}

let p1= convert();

p1.then((val)=>{
    console.log(val);
})