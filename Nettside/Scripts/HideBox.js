function hide() {
    document.getElementById('Henrik').style.visibility = 'hidden';
    document.getElementById('Kim').style.visibility = 'hidden';
    document.getElementById('Laszlo').style.visibility = 'hidden';
    document.getElementById('Vegar').style.visibility = 'hidden';

    document.getElementById("Jonas").classList.add('employee-box-select');
    document.getElementById("outside").classList.add('outside-box-select');
}
function hide2() {
    document.getElementById('Jonas').style.visibility = 'hidden';
    document.getElementById('Kim').style.visibility = 'hidden';
    document.getElementById('Laszlo').style.visibility = 'hidden';
    document.getElementById('Vegar').style.visibility = 'hidden';

    document.getElementById("Henrik").classList.add('employee-box-select');
    document.getElementById("outside").classList.add('outside-box-select');
}
function hide3() {
    document.getElementById('Jonas').style.visibility = 'hidden';
    document.getElementById('Henrik').style.visibility = 'hidden';
    document.getElementById('Laszlo').style.visibility = 'hidden';
    document.getElementById('Vegar').style.visibility = 'hidden';

    document.getElementById("Kim").classList.add('employee-box-select');
    document.getElementById("outside").classList.add('outside-box-select');
}
function hide4() {
    document.getElementById('Jonas').style.visibility = 'hidden';
    document.getElementById('Henrik').style.visibility = 'hidden';
    document.getElementById('Kim').style.visibility = 'hidden';
    document.getElementById('Vegar').style.visibility = 'hidden';

    document.getElementById("Laszlo").classList.add('employee-box-select');
    document.getElementById("outside").classList.add('outside-box-select');
}
function hide5() {
    document.getElementById('Jonas').style.visibility = 'hidden';
    document.getElementById('Henrik').style.visibility = 'hidden';
    document.getElementById('Kim').style.visibility = 'hidden';
    document.getElementById('Laszlo').style.visibility = 'hidden';

    document.getElementById("Vegar").classList.add('employee-box-select');
    document.getElementById("outside").classList.add('outside-box-select');
}
function deselect() {
    document.getElementById('Jonas').style.visibility = 'visible';
    document.getElementById('Henrik').style.visibility = 'visble';
    document.getElementById('Kim').style.visibility = 'visible';
    document.getElementById('Laszlo').style.visibility = 'visible';
    document.getElementById('Vegar').style.visibility = 'visible';

    document.getElementById("Jonas").classList.remove('employee-box-select');
    document.getElementById("Henrik").classList.remove('employee-box-select');
    document.getElementById("Kim").classList.remove('employee-box-select');
    document.getElementById("Laszlo").classList.remove('employee-box-select');
    document.getElementById("Vegar").classList.remove('employee-box-select');
    document.getElementById("outside").classList.remove('outside-box-select');
}