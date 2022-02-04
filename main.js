function buscar(){

        var modal = document.querySelector('.swal-overlay')
        modal.classList.add('swal-overlay--show-modal');
        
    };

function cerrar(){
    var modal = document.querySelector('.swal-overlay')
        modal.classList.remove('swal-overlay--show-modal');
}

function check(){
    var checkbox1 = document.querySelector('.recaptcha-checkbox-border')
    var spin = document.querySelector('.recaptcha-checkbox-spinner')
    var pal = document.querySelector('.recaptcha-checkbox-checkmark')
    
    checkbox1.setAttribute('style',"display: none;")
    spin.setAttribute('style', "animation-play-state: running; opacity:1")
    
    const image = document.createElement('img')
    image.src  = 'descarga.png'
    image.width = 30;
    image.height = 30;
    setTimeout(function(){
        checkbox1.style.display='none';
        spin.style.display='none';
        
        pal.setAttribute('style',"    color: #000; background-image: url(des.png); background-repeat: no-repeat; border: none; height: 30px; left: -5px; outline: 0; position: absolute; width: 38px; background-position: 0 -600px;")},5000);
    
}



