let currentTab = 0;

showTab(currentTab);

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
        // document.getElementByTagName("Form").submit();
        // return false;
    }
    
    showTab(currentTab);
}

function fixStepIndicator(n) {

    let element_list = document.getElementsByTagName("step");

    for (let i = 0; i < element_list.length; i++) {
        element_list[i].removeAttribute('active') 
    }

    element_list[n].setAttribute('active', '');
}