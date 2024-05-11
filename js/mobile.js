// step 4
document.getElementById('btn-submit').addEventListener('click', function(){
    const numberField = document.getElementById('number');
    const number = numberField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    const confirmField = document.getElementById('confirm');
    const confirm = confirmField.value;
    console.log('number, password', 'confirm');
})