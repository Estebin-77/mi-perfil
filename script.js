document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
    
    // Scroll suave
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modo oscuro
    const toggleMode = document.querySelector(".toggle-mode");
    toggleMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        toggleMode.textContent = isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    });

    // Cargar tema guardado
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleMode.textContent = "☀️ Modo Claro";
    } else {
        toggleMode.textContent = "🌙 Modo Oscuro";
    }
});