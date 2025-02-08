document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Monatsansicht als Standard
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        themeSystem: 'bootstrap', // Passt sich an Tailwind besser an
        selectable: true,
        editable: true,
        eventColor: '#14b8a6', // Tailwind Farbe (teal-500)
        eventTextColor: '#ffffff',
        eventBorderColor: '#0f766e', // Dunklerer Rand
        events: [
            {
                title: 'Wohnmobil mieten',
                start: '2025-02-15',
                end: '2025-02-18',
                color: '#E76F51' // Deine Tailwind Farbe (secondary)
            },
            {
                title: 'Campingplatz buchen',
                start: '2025-03-10',
                color: '#2A9D8F' // Deine Tailwind Farbe (primary)
            }
        ],
        dateClick: function (info) {
            alert('Datum ausgewählt: ' + info.dateStr);
        },
        eventClick: function (info) {
            alert('Event: ' + info.event.title);
        }
    });

    calendar.render();
});
