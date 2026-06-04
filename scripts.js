const tombolMenu = document.querySelector('.menu-toggle');
const kotakMenu = document.querySelector('.dropdown-menu');

tombolMenu.addEventListener('click', function(e) {
    e.stopPropagation(); 
    
    if (kotakMenu.style.display === 'block') {
        kotakMenu.style.display = 'none';
    } else {
        kotakMenu.style.display = 'block';
    }
});

// 2. Klik di area luar mana saja -> Otomatis Tutup
window.addEventListener('click', function(e) {
    if (!tombolMenu.contains(e.target) && !kotakMenu.contains(e.target)) {
        kotakMenu.style.display = 'none';
    }
});
