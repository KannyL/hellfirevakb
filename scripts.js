// --- 1. LOGIKA UNTUK TOMBOL MENU UTAMA (DROP-DOWN) ---
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
    
    
    // --- 2. LOGIKA KLIK UNTUK INFO CARD (CURRENCY & CONVERTER) ---
    const semuaTrigger = document.querySelectorAll('.card-trigger');
    
    semuaTrigger.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation(); 
            
            const cardInduk = this.closest('.info-card-mini');
            
            if (cardInduk) {
                cardInduk.classList.toggle('aktif');
            }
        });
    });
