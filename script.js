// Menambahkan interaktivitas sederhana (Fitur Like)
document.querySelectorAll('.btn-like').forEach(button => {
    button.addEventListener('click', function() {
        // Ambil elemen angka di dalam tombol
        const likeCountSpan = this.querySelector('.like-count');
        
        // Ubah teks angka menjadi tipe data Integer (Angka)
        let currentLikes = parseInt(likeCountSpan.textContent);
        
        // Tambah 1 ke jumlah suka saat tombol diklik
        currentLikes++;
        
        // Update tampilan angka di web
        likeCountSpan.textContent = currentLikes;
        
        // Efek visual sederhana setelah diklik
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});
