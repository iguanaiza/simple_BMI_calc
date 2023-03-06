let calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', ()=>{

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmiResult = document.getElementById('bmi');
    const bmiDetails = document.getElementById('details');
    const bmiMessage = document.getElementById('message');
    const hr = document.getElementById('hr');

    let weightProvided=false, heightProvided=false;

    document.getElementById("hr").style.display = 'block';


    //Check if weight is valid
    if (weight==='' || weight<=0 || weight >500) {
        document.getElementById('weight_error').innerHTML = 'Please provide valid weight in range 1kg-500kg.';
    } 

    else {
        weightProvided=true;
        document.getElementById('weight_error').innerHTML = '';
    }

    //Check if height is valid
    if (height==='' || height<0.5 || height >2.2) {
        document.getElementById('height_error').innerHTML = 'Please provide valid height in range 0.5m-2.2m.';
    } 

    else {
        heightProvided=true;
        document.getElementById('height_error').innerHTML = '';
    }
    
    //Calculate
    if (weightProvided && heightProvided) {
    
        const bmi = Math.round((weight) / Math.pow(height, 2));

        if (bmi < 18.5){
            document.getElementById("bmi").style.color = "brown";
            bmiMessage.innerHTML ='Your BMI is ';
            bmiResult.innerHTML = bmi;
            bmiDetails.innerHTML ='<br/>It falls within the underweight range which is below 18.5.';
        }
    
        else if (bmi <= 24.90 && bmi >=18.5){
            document.getElementById("bmi").style.color = "lightgreen";
            bmiMessage.innerHTML ='Your BMI is ';
            bmiResult.innerHTML = bmi;
            bmiDetails.innerHTML ='<br/>It falls within the healthy weight range which is 18.5-24.9.';
        }

        else if (bmi <= 29.90 && bmi >=25){
            document.getElementById("bmi").style.color = "brown";
            bmiMessage.innerHTML ='Your BMI is ';
            bmiResult.innerHTML = bmi;
            bmiDetails.innerHTML ='<br/>It falls within the overweight range which is 25-29.9.';
        }

        else if (bmi <= 39.90 && bmi >=30){
            document.getElementById("bmi").style.color = "brown";
            bmiMessage.innerHTML ='Your BMI is ';
            bmiResult.innerHTML = bmi;
            bmiDetails.innerHTML ='<br/>It falls within the obesity range which is 30-39.9.';
        }
    
        else {
            document.getElementById("bmi").style.color = "brown";
            bmiMessage.innerHTML ='Your BMI is ';
            bmiResult.innerHTML = bmi;
            bmiDetails.innerHTML ='<br/>It falls within the class 3 obesity range which is above 40.';
        }
    }

    else {
        bmiMessage.innerHTML = '';
        bmiResult.innerHTML = '';
        bmiDetails.innerHTML = '';
    }
});