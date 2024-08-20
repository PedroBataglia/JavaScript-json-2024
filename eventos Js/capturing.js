const $div = document.querySelectorAll('div');

$div.forEach(
    $div => $div.addEventListener('click', logClass, {
        capture: true
    })
)

function logClass() {
    console.log(this.classList.value);
}