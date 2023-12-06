export function setupLoader() {
    document.getElementById('loader').style.display = 'flex';
    
    window.addEventListener('load', () => {
        document.getElementById('loader').style.display = 'none';
    });
}
