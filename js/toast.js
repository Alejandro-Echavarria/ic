const toast = (msg, color) => {
    const $toast = document.querySelectorAll(".toast")[0]
    const $toastbody = $toast.getElementsByClassName("toast-text")[0]
    //como segundo parámetro admite opciones como: animation, autohide, delay
    const bootToast = new bootstrap.Toast($toast)
    
    if($toastbody) {

        $toast.classList = `toast ${color} fade`;
        $toastbody.innerHTML = msg;
        bootToast.show()
    }
}// toast()