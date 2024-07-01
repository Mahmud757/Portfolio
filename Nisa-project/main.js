let a = document.getElementsByClassName('a');

for (let link of a) {
    link.addEventListener('click', function () {
        link.style.color = '#FF3C78';
    });
}
