function capToFront(s){
    var sp = s.split("");
    var cap = []; 
    var lower = []
    for (var i = 0; i < sp.length; i++)
        {
            if (sp[i] == sp[i].toUpperCase()){              
                cap.push(sp[i]);
            }
            if (sp[i] == sp[i].toLowerCase()){
                lower.push(sp[i]);
            }
        }
    return cap.join("").concat(lower.join(""));
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));