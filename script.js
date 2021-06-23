const patientDaneEl = document.querySelector('.pacjent')
const doctorDaneEl = document.querySelector('.lekarz')

doctorDaneEl.addEventListener('click',function(){
    location.href ="./page.html";
    this.blur();
})
patientDaneEl.addEventListener('click',function(){
    location.href ="./index.html";
    this.blur();
})
