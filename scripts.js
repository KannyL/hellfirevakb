document.addEventListener('DOMContentLoaded', function() {
    // --- 1. LOGIKA UNTUK TOMBOL MENU ---
    const tombolMenu = document.querySelector('.menu-toggle');
    const kotakMenu = document.querySelector('.dropdown-menu');

    if (tombolMenu && kotakMenu) {
        tombolMenu.addEventListener('click', function(e) {
            e.stopPropagation(); 
            kotakMenu.style.display = (kotakMenu.style.display === 'block') ? 'none' : 'block';
        });
    }

    // Menutup menu jika klik di area luar
    window.addEventListener('click', function(e) {
        if (tombolMenu && kotakMenu) {
            if (!tombolMenu.contains(e.target) && !kotakMenu.contains(e.target)) {
                kotakMenu.style.display = 'none';
            }
        }
    });

    // --- 2. LOGIKA KLIK UNTUK INFO CARD (CURRENCY & CONVERTER) ---
    const semuaTrigger = document.querySelectorAll('.card-trigger');

    semuaTrigger.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation(); 
            const kotakIni = this.closest('.info-card-mini');
            if (kotakIni) {
                kotakIni.classList.toggle('aktif');
            }
        });
    });
});
