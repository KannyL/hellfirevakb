// --- LOGIKA KLIK UNTUK INFO CARD (CURRENCY, CONVERTER, FORGE) ---
const semuaTrigger = document.querySelectorAll('.card-trigger');

semuaTrigger.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        // Mencegah klik menyebar ke elemen lain
        e.stopPropagation(); 
        
        // Mencari pembungkus terdekat yaitu .info-card-mini
        const kotakIni = this.closest('.info-card-mini');
        
        if (kotakIni) {
            // Toggle class 'aktif' hanya pada kotak yang diklik
            kotakIni.classList.toggle('aktif');
        }
    });
});
