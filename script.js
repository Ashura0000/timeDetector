function a() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var date = new Date()
    var time = date.getHours()
    var b = document.getElementById('b')



    msg.innerHTML= `Agora são ${time} horas`
    if (time > 0 && time < 12) {
        b.innerHTML = `Tenha um Bom dia`
        img.src = 'imagem/Dia.png'
        document.body.style.background = '#015792'
   } else if (time >= 12 && time < 18) {
        b.innerHTML += 'Tenha uma Boa tarde'
        img.src = 'imagem/Tarde.png'
        document.body.style.background = '#ffe554'
    } else{
        b.innerHTML = `Tenha uma Boa noite`
        img.src = 'imagem/Noite.png'
        document.body.style.background = '#1e3137'
    }
}