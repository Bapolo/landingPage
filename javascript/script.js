document.addEventListener("DOMContentLoaded", () =>
{
    const btnMenu = document.querySelector("#btnMenu")
    const menu = document.querySelector("#menu")
    
    btnMenu.addEventListener("click", () =>
    {
        menu.classList.toggle("ativo")
    })
})