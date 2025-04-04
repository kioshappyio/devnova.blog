// gaboleh di ganti
const NavBar = document.getElementById("NavBar");
const foto1 = document.getElementById("foto1");
const titleFoto1 = document.getElementById("titleFoto1");
const deskripsiFoto1 = document.getElementById("deskripsiFoto1");
// sampai sini ga boleh di otak atik

// Resource
const titleNavBar = " TURGUIDE ";
const lokasiFoto1 = " /asset/image/foto-kamu1.jpg ";
const title1 = " Keajaiban Alam yang Menyejukkan ";
const deskripsi1 = " Nikmati keindahan alam yang memukau dengan gemuruh air terjun yang deras, udara segar pegunungan, dan hijaunya hutan yang menenangkan. Tempat sempurna untuk melepas penat dan merasakan harmoni dengan alam. ";

NavBar.innerHTML = titleNavBar;

foto1.src = lokasiFoto1 ;
foto1.alt = " alternatif ";

titleFoto1.innerHTML = title1;
deskripsiFoto1.innerHTML = deskripsi1;