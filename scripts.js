document.querySelectorAll('.card-trigger').forEach(item => {
    item.addEventListener('click', function() {
        // Cari parent terdekat dari trigger yang diklik
        const parent = this.closest('.info-card-mini');
        // Toggle class 'aktif' cuma di parent itu saja
        parent.classList.toggle('aktif');
    });
});
