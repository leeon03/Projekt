module.exports = {
  content: ["./src/**/*.{html,js}"], // Stellt sicher, dass Tailwind alle HTML- und JS-Dateien scannt
  darkMode: 'class', // Darkmode über Klasse aktivieren
  theme: {
    extend: {
      colors: {
        primary: "#2A9D8F",
        secondary: "#E76F51",
        accent: "#F4A261",
        background: {
          light: "#F4F4F4",
          dark: "#1E1E1E"
        },
        text: {
          light: "#333333",
          dark: "#EAEAEA"
        },
        hover: "#264653"
      }
    }
  },
  plugins: [],
}
