// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Book Di Click
document.querySelector('#Siswa-book').onclick = () => {
 navbarNav.classList.toggle('active');
};

// Klick Di Luar Sidebar Untuk Mengilangkan Nav
   const Siswa = document.querySelector("#Siswa-book");

   document.addEventListener('click',function(e){
    if(!Siswa.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
   });