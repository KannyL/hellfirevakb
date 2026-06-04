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
    trigger.addEventListener('click', function() {
        // Mencari kotak info-card-mini tempat tombol ini berada
        const cardInduk = this.parentElement;
        
        // Menambah atau menghapus class 'aktif' untuk memicu animasi CSS
        cardInduk.classList.toggle('aktif');
    });
});

// 1. Tutup semua kartu lainnya agar tidak terbuka bersamaan
        document.querySelectorAll('.info-card-mini').forEach(card => {
            // Hanya hapus class 'aktif' jika bukan kartu yang sedang diklik
            if (card !== this.closest('.info-card-mini')) {
                card.classList.remove('aktif');
            }
        });

        // 2. Toggle class 'aktif' pada kartu yang diklik
        const kotakIni = this.closest('.info-card-mini');
        if (kotakIni) {
            kotakIni.classList.toggle('aktif');
        }
    });
});
