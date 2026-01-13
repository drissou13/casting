const castings = [
    {
        role: "YUMNA",
        badge: "Rôle principal",
        description: "Jeune femme noire (18–25 ans), idéalement sénégalaise. Wolof apprécié. Mule entre le Sénégal et Marseille.",
        infos: [
            "📅 2 à 3 jours de tournage",
            "📍 Marseille & région",
            "💰 Tarif syndical rôle"
        ],
        mail: "castingpax3@gmail.com",
        objet: "YOUMNA",
        date: "Casting : 16 ou 19 janvier"
    },
    {
        role: "DIEMBA",
        badge: "Rôle TV",
        description: "Jeune homme noir avec de l’embonpoint (25–50 ans). Passant sur un marché.",
        infos: [
            "📅 21 janvier",
            "📍 Marseille",
            "💰 Tarif syndical TV"
        ],
        mail: "castingpax3@gmail.com",
        objet: "DIEMBA",
        date: "Casting : 16 janvier ou selftape"
    },
    {
        role: "FIGURATION – MOSQUÉE",
        badge: "Figuration",
        description: "20 hommes (20–80 ans) – fidèles sortant d’une mosquée.",
        infos: [
            "📅 21 janvier",
            "📍 Marseille",
            "💰 Tarif syndical figuration"
        ],
        mail: "pm3figu@gmail.com",
        objet: "MOSQUÉE",
        date: "Sélection par mail"
    }
];

const container = document.getElementById("castings");

castings.forEach(c => {
    const div = document.createElement("div");
    div.className = "casting";

    div.innerHTML = `
        <span class="badge">${c.badge}</span>
        <h3>${c.role}</h3>
        <p>${c.description}</p>
        <ul>
            ${c.infos.map(i => `<li>${i}</li>`).join("")}
        </ul>
        <p><strong>${c.date}</strong></p>
        <p>📩 <span class="email">${c.mail}</span><br>
        👉 Objet : <strong>${c.objet}</strong></p>
    `;

    container.appendChild(div);
});
