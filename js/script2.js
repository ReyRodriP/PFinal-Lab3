document.addEventListener('DOMContentLoaded', () => {
    let menuData = [];

    const loadMenu = async () => {
        const response = await fetch('menu.json');
        menuData = await response.json();
        renderMenu();
    };

    const renderMenu = () => {
        const menuElement = document.getElementById('menu');
        menuElement.innerHTML = ''; 

        menuData.menu.forEach(item => {
            const button = document.createElement('button');
            button.textContent = item.nombre;
            button.onclick = () => alert(`Vamos a ${item.enlace}`);
            button.dataset.id = item.id; 
            menuElement.appendChild(button);
        });
    };

    const addOrUpdateMenuItem = (id, nombre, enlace) => {
        const existingItemIndex = menuData.menu.findIndex(item => item.id === id);

        if (existingItemIndex !== -1) {
            menuData.menu[existingItemIndex].nombre = nombre;
            menuData.menu[existingItemIndex].enlace = enlace;
            alert('Opcion actualizada');
        } else {
            menuData.menu.push({ id, nombre, enlace });
            alert('Opcion agregada');
        }

        renderMenu();
    };

    const deleteMenuItem = (id) => {
        const itemIndex = menuData.menu.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            menuData.menu.splice(itemIndex, 1); 
            alert('Opcion eliminada');
            renderMenu();
        } else {
            alert('El ID no existe');
        }
    };

    document.getElementById('menu-form').addEventListener('submit', (event) => {
        event.preventDefault(); 
        const id = parseInt(document.getElementById('id').value);
        const nombre = document.getElementById('nombre').value;
        const enlace = document.getElementById('enlace').value;

        addOrUpdateMenuItem(id, nombre, enlace);
        event.target.reset(); 
    });

    document.getElementById('delete-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const id = parseInt(document.getElementById('delete-id').value);
        deleteMenuItem(id);
        event.target.reset(); 
    });

    loadMenu();
});
