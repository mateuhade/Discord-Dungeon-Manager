const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('navToggleButton');
const sidebarLogo = document.getElementById('navLogo');

function toggleSidebar() {
    sidebar.classList.toggle('collapsed')
    sidebar.classList.toggle('extended')
    sidebarToggle.classList.toggle('flipped')
    sidebarLogo.toggleAttribute('hidden')
}