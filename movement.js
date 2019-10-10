const hourpt = document.getElementById('hour');
const minutept = document.getElementById('minute');
const secondpt = document.getElementById('second');

function movepointer(){
    //Aqui vamos pegar os dados das horas, minutos e segundos atual
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    //Agora calculamos o ângulo de cada ponteiro
    let sAngle = parseFloat(s*6);
    let mAngle= parseFloat(m*6 + s/10);
    let hAngle = parseFloat(h*30 + m/2);

    hourpt.style.transform = "rotate(" + hAngle + "deg)";
    minutept.style.transform = "rotate(" + mAngle + "deg)";
    secondpt.style.transform = "rotate(" + sAngle + "deg)";
}

setInterval(movepointer, 1000)