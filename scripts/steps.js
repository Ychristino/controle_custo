const btm_prev = document.getElementById('prevBtn')
const btm_next = document.getElementById('nextBtn')
let currentTab = 0;

showTab(currentTab);

btm_prev.addEventListener('click', ()=> nextTab(-1))
btm_next.addEventListener('click', ()=> nextTab(1))

function showTab(n) {
    let x = document.getElementsByTagName("fieldset");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.visibility = "hidden";
    } 
    else {
        document.getElementById("prevBtn").style.visibility = "";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Salvar";
    } 
    else {
        document.getElementById("nextBtn").innerHTML = "Próximo";
  }
  fixStepIndicator(n)
}

function nextTab(n) {
    let x = document.getElementsByTagName("fieldset");
    
    x[currentTab].style.display = "none";
    
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementsByTagName("Form")[0].submit();
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