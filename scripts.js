const semuaTrigger = document.querySelectorAll('.card-trigger');

semuaTrigger.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Mencari pembungkus info-card-mini yang spesifik milik tombol ini
        const kotakIni = this.closest('.info-card-mini');
        
        if (kotakIni) {
            kotakIni.classList.toggle('aktif');
        }
    });
});
