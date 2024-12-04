function validateInput() {
    const inputValue = document.getElementById('input').value.trim();
    const button = document.getElementById('button');
    if (inputValue) button.disabled = false;
    else button.disabled = true;
}

function changeHeading() {
    const input = document.getElementById('input');
    const newHeading = input.value.trim();
    if (newHeading) {
        const headingEl = document.getElementById('heading');
        headingEl.innerText = newHeading;
    }
    input.value = '';
    const button = document.getElementById('button');
    button.disabled = true;
}
