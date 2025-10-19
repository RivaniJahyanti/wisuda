document.addEventListener('DOMContentLoaded', function() {
    // Tanggal target wisuda (Ganti dengan tanggal Anda: Tahun, Bulan (0=Jan), Hari, Jam, Menit, Detik)
    const targetDate = new Date("October 28, 2025 09:00:00").getTime();
    
    // Elemen DOM
    const timerElement = document.getElementById("timer");
    const bukaUndanganButton = document.getElementById("bukaUndangan");

    // Fungsi untuk menghitung dan menampilkan waktu mundur
    function updateCountdown() {
        // Ambil tanggal dan waktu saat ini
        const now = new Date().getTime();
        
        // Cari jarak antara sekarang dan tanggal target
        const distance = targetDate - now;

        // Perhitungan waktu untuk hari, jam, menit, dan detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasil di elemen #timer
        if (distance > 0) {
            timerElement.innerHTML = `
                <div>${days}<span>Hari</span></div>
                <div>${hours}<span>Jam</span></div>
                <div>${minutes}<span>Menit</span></div>
                <div>${seconds}<span>Detik</span></div>
            `;
        } else {
            // Jika waktu telah habis
            timerElement.innerHTML = "🎉 **Acara Sedang Berlangsung!** 🎉";
            clearInterval(countdownInterval);
        }
    }

    // Panggil fungsi sekali untuk menghindari kedipan (flicker)
    updateCountdown();

    // Perbarui hitungan mundur setiap 1 detik
    const countdownInterval = setInterval(updateCountdown, 1000);


    // Fungsi untuk menutup tombol "Buka Undangan" (Cover)
    bukaUndanganButton.addEventListener('click', function() {
        bukaUndanganButton.style.opacity = '0';
        // Tunggu transisi selesai, lalu sembunyikan sepenuhnya
        setTimeout(() => {
            bukaUndanganButton.style.display = 'none';
        }, 500); // Sesuaikan dengan durasi transisi di CSS
    });
});
