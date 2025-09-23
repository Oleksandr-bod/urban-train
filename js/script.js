const buttonGrid = document.getElementById('buttonGrid');
const pages = [];
for (let i = 1; i <= 54; i++) 
    {
         if (i === 1) pages.push('pages/page1.html'); 
         else pages.push(`pages/page${i}.html`); 
    }
for (let i = 0; i < pages.length; i++) {
    const button = document.createElement('button'); 
    button.textContent = `Page ${i + 1}`;
    button.onclick = () => { window.location.href = pages[i]; };
    button.style.opacity = 0; 
    button.style.transition = `opacity 0.5s ease ${(i * 0.05)}s, transform 0.5s ease ${(i * 0.05)}s`;             
    button.style.transform = 'translateY(20px)';
    setTimeout(() => { button.style.opacity = 1; 
    button.style.transform = 'translateY(0)'; }, 50);
    buttonGrid.appendChild(button);
}