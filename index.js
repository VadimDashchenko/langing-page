let home = document.getElementById('home');
let items = document.getElementsByClassName('list__more-items');
let homeList = document.getElementById('home-list');
let sidebarIcon = document.getElementById('sidebar-icon');
let sidebar = document.getElementById('sidebar');
let content = document.getElementById('content');

home.addEventListener('mouseover', function () {
    items[0].style.display = 'flex';
});

homeList.addEventListener('mouseover', function () {
    items[0].style.display = 'flex';
});

home.addEventListener('mouseout', function () {
    items[0].style.display = 'none';
});

homeList.addEventListener('mouseout', function () {
    items[0].style.display = 'none'
});

sidebarIcon.addEventListener('click', function () {
    sidebar.classList.add('sidebar');
});

content.addEventListener('click', function () {
    if(sidebar.classList.contains('sidebar')){
        sidebar.classList.remove('sidebar')
    }
});