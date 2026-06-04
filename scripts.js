const tombolMenu = document.querySelector('.menu-toggle');
const kotakMenu = document.querySelector('.dropdown-menu');

if (tombolMenu && kotakMenu) {
    tombolMenu.addEventListener('click', function(e) {
        e.stopPropagation(); 
        if (kotakMenu.style.display === 'block') {
            kotakMenu.style.display = 'none';
        } else {
            kotakMenu.style.display = 'block';
        }
    });
}

window.addEventListener('click', function(e) {
    if (tombolMenu && kotakMenu) {
        if (!tombolMenu.contains(e.target) && !kotakMenu.contains(e.target)) {
            kotakMenu.style.display = 'none';
        }
    }
});


const semuaTrigger = document.querySelectorAll('.card-trigger');

semuaTrigger.forEach(trigger => {
    trigger.addEventListener('click', function() {
        
        const cardInduk = this.parentElement;
        
        cardInduk.classList.toggle('aktif');
    });
});
