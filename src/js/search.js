document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("searchInput");
    let suggestionsBox = document.getElementById("suggestions");

    searchInput.addEventListener("keyup", async function () {
        let query = searchInput.value.trim();

        if (query.length < 3) {
            suggestionsBox.innerHTML = "";
            suggestionsBox.classList.add("hidden");
            return;
        }

        // Photon API für Stadt- & Land-Suche
        let url = `https://photon.komoot.io/api/?q=${query}&limit=5`;
        let response = await fetch(url);
        let data = await response.json();

        // Vorschläge formatieren & filtern (nur Städte & Länder)
        let filteredResults = data.features.filter(place => {
            let type = place.properties.type;
            return type === "city" || type === "town" || type === "village" || type === "country";
        });

        // Vorschläge anzeigen
        suggestionsBox.innerHTML = "";
        if (filteredResults.length === 0) {
            suggestionsBox.innerHTML = "<p class='p-2 text-gray-500'>Keine passenden Orte gefunden</p>";
        } else {
            filteredResults.forEach(place => {
                let displayName = place.properties.name + ", " + (place.properties.country || ""); 
                let type = place.properties.type;
                let icon = type === "country" ? "🌍" : "📍"; // Icons für Länder & Städte

                let suggestion = document.createElement("div");
                suggestion.classList.add("p-2", "hover:bg-gray-200", "cursor-pointer", "flex", "items-center", "gap-2");
                suggestion.innerHTML = `<span>${icon}</span><div><strong>${place.properties.name}</strong><br><span class="text-gray-600">${place.properties.country || ""}</span></div>`;
                suggestion.onclick = () => selectPlace(displayName);
                suggestionsBox.appendChild(suggestion);
            });
        }

        suggestionsBox.classList.remove("hidden");
    });

    function selectPlace(placeName) {
        searchInput.value = placeName;
        suggestionsBox.classList.add("hidden");
    }
});
