const firstDiv = document.querySelector('.first-step');
const secondtDiv = document.querySelector('.second-step');
const finaltDiv = document.querySelector('.final-step');

function go(currentStep, nextStep){
    let dNone, dBlock;
    if(currentStep == 1){
        dNone = firstDiv;
    }
    else if(currentStep == 2){
        dNone = secondtDiv;
    }
    else{
        dNone =  finaltDiv;
    }
    dNone.style.display = 'none';

    if(nextStep == 1){
        dBlock = firstDiv;
    }
    else if(nextStep == 2){
        dBlock = secondtDiv;
    }
    else{
        dBlock =  finaltDiv;
    }
    dBlock.style.display = 'block';
}

function validate(){
    const peso  = document.getElementById('peso');
    const altura  = document.getElementById('altura');
    peso.style.border = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value){
        if(!peso.value && !altura.value){
            peso.style.border = "1px solid red";
            altura.style.border = "1px solid red";
        }
        else if(!peso.value){
            peso.style.border = "1px solid red";
        }
        else if(!altura.value){
            altura.style.border = "1px solid red";
        }
    }
    else{
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado');
        
        if(imc < 18.5){
            result.innerHTML = 'Magreza | Obesidade: 0';
            result.style.color = 'yellow';
        }
        else if(imc >= 18.5 && imc < 25){
            result.innerHTML = 'Normal | Obesidade: 0';
            result.style.color = 'green';
        }
        else if(imc >= 25 && imc < 30){
            result.innerHTML = 'Sobrepeso | Obesidade: I';
            result.style.color = 'yellow';
        }
        else if(imc >= 30 && imc < 40){
            result.innerHTML = 'Obesidade | Obesidade: II';
            result.style.color = 'red';
        }
        else if(imc > 40){
            result.innerHTML = 'Obesidade Grave | Obesidade: III';
            result.style.color = 'black';
        }
        go(2,3);
    }
}