const clients = {"clients":[{"isManager":true,"id":1,"label":"Client1"},{"isManager":false,"id":2,"label":"Client2"},{"isManager":false,"id":3,"label":"Client3"},{"isManager":false,"id":4,"label":"Client3"},{"isManager":false,"id":5,"label":"Client5"}],"data":{"1":{"address":"NY","name":"Jhon","points":123},"2":{"address":"NY","name":"Dan","points":123},"3":{"address":"NY","name":"Ben","points":123}},"label":"All Clients"};

// Function to generate the client list
function renderClientList() {
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';

    clients.clients.forEach(client => {
        const listItem = document.createElement('li');
        listItem.textContent = `${client.label} - Points: ${clients.data[client.id].points}`;

        listItem.addEventListener('click', () => showPopup(client.id));

        clientList.appendChild(listItem);
    });
}

// Function to filter the client list
function filterClients(filterOption) {
    const filteredClients = clients.clients.filter(client => {
        if (filterOption === 'all') return true;
        if (filterOption === 'managers') return client.isManager;
        if (filterOption === 'nonManagers') return !client.isManager;
    });

    clients.clients = filteredClients;
    renderClientList();
}

// Function to show the popup
function showPopup(clientId) {
    const popup = document.getElementById('popup');
    const popupName = document.getElementById('popupName');
    const popupPoints = document.getElementById('popupPoints');
    const popupAddress = document.getElementById('popupAddress');

    popupName.textContent = clients.data[clientId].name;
    popupPoints.textContent = clients.data[clientId].points;
    popupAddress.textContent = clients.data[clientId].address;

    popup.classList.add('visible');
    DOTween.to(popup, 0.3, { opacity: 1 });
}

// Function to hide the popup
function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('visible');
    DOTween.to(popup, 0.3, { opacity: 0 });
}

// Event listener for the filter dropdown
const filterDropdown = document.getElementById('filterDropdown');
filterDropdown.addEventListener('change', () => filterClients(filterDropdown.value));

// Event listener to close the popup when clicking outside of it
window.addEventListener('click', (event) => {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        hidePopup();
    }
});

// Render the initial client list
renderClientList();
// Rest of the code above...
// ...

// Function to show the popup with animation
function showPopup(clientId) {
    const popup = document.getElementById('popup');
    const popupName = document.getElementById('popupName');
    const popupPoints = document.getElementById('popupPoints');
    const popupAddress = document.getElementById('popupAddress');

    popupName.textContent = clients.data[clientId].name;
    popupPoints.textContent = clients.data[clientId].points;
    popupAddress.textContent = clients.data[clientId].address;

    popup.style.opacity = '0';
    popup.style.pointerEvents = 'auto';

    DOTween.to(popup, 0.3, { opacity: 1 });
}

// Function to hide the popup with animation
function hidePopup() {
    const popup = document.getElementById('popup');
    DOTween.to(popup, 0.3, { opacity: 0 })
        .then(() => {
            popup.style.pointerEvents = 'none';
        });
}

// Event listener for the filter dropdown
const filterDropdown = document.getElementById('filterDropdown');
filterDropdown.addEventListener('change', () => {
    filterClients(filterDropdown.value);
    hidePopup(); // Close popup on filter change
});

// Event listener to close the popup when clicking outside of it
window.addEventListener('click', (event) => {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        hidePopup();
    }
});

// Render the initial client list
renderClientList();
