// 1. Grab the custom cursor
const cursor = document.querySelector('.custom-cursor');

// 2. Make the circle follow the mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 3. Find ALL clickable things (links and buttons)
const allClickables = document.querySelectorAll('a, button'); 

// 4. Make the cursor grow when it touches any clickable item
allClickables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering'); 
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering'); 
    });
});