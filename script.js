let btn = document.querySelector('#send');

let sdf = 25.69
let cbf = 27.26
let sgtf = 29.61
let stf = 31.81
let tenf = 50.65
let capf = 60.21
let majf = 73.03
let tcf = 79.41

btn.addEventListener('click', function(e) {

    e.preventDefault()

    let sd = document.querySelector('#sd')
    let cb = document.querySelector('#cb')
    let sgt = document.querySelector('#sgt')
    let st = document.querySelector('#st')
    let ten = document.querySelector('#ten')
    let cap = document.querySelector('#cap')
    let maj = document.querySelector('#maj')
    let tc = document.querySelector('#tc')

    let value = sd.value*sdf + cb.value*cbf + sgt.value*sgtf + st.value*stf + ten.value*tenf + cap.value*capf + maj.value*majf + tc.value*tcf

    document.getElementById('resultado').innerHTML = 'R$' +(value.toFixed(2))

})



