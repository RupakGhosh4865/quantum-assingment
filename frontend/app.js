document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8000/top10retosults");
        const data = await response.json();

        // Assuming the response structure is { message: 'Crypto data updated successfully' }
        if (data.message) {
            displayMessage(data.message);
        } else {
            displayCryptoData(data);
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        displayErrorMessage("Error fetching data. Please try again.");
    }
}

function displayMessage(message) {
    const cryptoDataContainer = document.getElementById("cryptoData");
    cryptoDataContainer.innerHTML = `<p>${message}</p>`;
}

function displayCryptoData(cryptoData) {
    const cryptoDataContainer = document.getElementById("cryptoData");

    // Assuming cryptoData is an array of objects with properties like name, last, buy, sell, volume, base_unit
    cryptoDataContainer.innerHTML = "<h2>Crypto Data:</h2>";

    cryptoData.forEach(item => {
        cryptoDataContainer.innerHTML += `
            <div>
                <strong>Name:</strong> ${item.name}<br>
                <strong>Last:</strong> ${item.last}<br>
                <strong>Buy:</strong> ${item.buy}<br>
                <strong>Sell:</strong> ${item.sell}<br>
                <strong>Volume:</strong> ${item.volume}<br>
                <strong>Base Unit:</strong> ${item.base_unit}<br><br>
            </div>
        `;
    });
}

// function displayErrorMessage(message) {
//     const cryptoDataContainer = document.getElementById("cryptoData");
//     cryptoDataContainer.innerHTML = `<p style="color: red;">${message}</p>`;
// }

// document.addEventListener("DOMContentLoaded", fetchData);

// async function fetchData() {
//     try {
//         const response = await fetch("http://localhost:8000/top10results");
//         const data = await response.json();

//         if (Array.isArray(data) && data.length > 0) {
//             displayCryptoData(data);
//         } else {
//             displayMessage("No crypto data available.");
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//         displayErrorMessage("Error fetching data. Please try again.");
//     }
// }

// ... (rest of your code)
