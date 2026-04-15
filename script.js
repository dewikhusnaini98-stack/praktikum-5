// Real-time Clock & Greeting
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const formattedHours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('clock').textContent = `${formattedHours}:${minutes}:${seconds}`;

    let greeting = 'Selamat Malam!';
    if (hours >= 5 && hours < 11) {
        greeting = 'Selamat Pagi!';
    } else if (hours >= 11 && hours < 15) {
        greeting = 'Selamat Siang!';
    } else if (hours >= 15 && hours < 18) {
        greeting = 'Selamat Sore!';
    }
    
    document.getElementById('greeting').textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock();

const form = document.getElementById('formPendaftaran');
const nameInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const nohpInput = document.getElementById('nohp');
const kategoriSelect = document.getElementById('kategori');
const pesanInput = document.getElementById('pesan');
const hasil = document.getElementById('hasilPendaftaran');
const notif = document.getElementById('notif');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = nameInput.value.trim();
    const email = emailInput.value.trim();
    const nohp = nohpInput.value.trim();
    const kategori = kategoriSelect.value;
    const pesan = pesanInput.value.trim();

    if (nama === "" || email === "" || nohp === "" || kategori === "" || pesan === "") {
        alert("Silakan masukkan semua inputan terlebih dahulu!");
        return;
    }

    if (!email.includes('@')) {
        alert('Silahkan masukkan email yang valid.');
        return;
    }

hasil.innerHTML = `
    <h2>Hasil Input:</h2>
    <p style="color:lightgreen;"><b> Data berhasil dikirim! ✅</b></p>
    <p>Nama: ${nama}</p>
    <p>Email: ${email}</p>
    <p>No HP: ${nohp}</p>
    <p>Kategori: ${kategori}</p>
    <p>Pesan: ${pesan}</p>
`;

    form.reset();
});