let currentTab = 0;
let number_of_tabs = document.getElementsByTagName('fieldset').length

create_step_marks(number_of_tabs)
showTab(currentTab);

function create_step_marks(number_of_tabs){
    const steps_field = document.getElementById('steps')
    
    for (let i = 0; i < number_of_tabs; i++){
        let step_mark = document.createElement('span');
        step_mark.className = 'step';
        steps_field.insertAdjacentElement('beforeend', step_mark);
    }
}

function showTab(n) {

    let x = document.getElementsByTagName("fieldset");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } 
    else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Salvar";
    } 
    else {
        document.getElementById("nextBtn").innerHTML = "Próximo";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
    let x = document.getElementsByTagName("fieldset");
    
    x[currentTab].style.display = "none";
    
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementByTagName("Form").submit();
        return false;
    }
    
    showTab(currentTab);
}

function fixStepIndicator(n) {

    let i, x = document.getElementsByClassName("step");

    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
}