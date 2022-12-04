$(function(){

    var oculto = false;
    $('#home').click(function(){
       
            if(oculto==true){
                $('#conteiner-sidebar').show();
                oculto=false;
            }
            else{
                $('#conteiner-sidebar').hide();
                oculto=true;
            }
    });
    
    var actualizarHora = function(){
        var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        segundos = fecha.getSeconds(),
        minutos = fecha.getMinutes(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

        var pHoras = document.getElementById('horas');
        var pAMPM = document.getElementById('ampm');
        var pMinutos = document.getElementById('minutos');
        var pSegundos = document.getElementById('segundos');
        var pDiaSemana = document.getElementById('diaSemana');
        var pDia = document.getElementById('dia');
        var pMes = document.getElementById('mes');
        var pYear = document.getElementById('year');

        var semana = ['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
        pMes.textContent = meses[mes];

        pYear.textContent = year;

        if(horas >= 12){
            horas = horas-12;
            ampm = 'PM';
        }
        else{
            ampm = 'AM';
        }
        if(horas==0){
            horas=12;
        };

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos < 10){minutos = "0" + minutos};
        if(segundos < 10){segundos = "0" + segundos};


        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };

    actualizarHora();

    var intervalo = setInterval(actualizarHora, 1000);
});