document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'multiMonthYear',
        dateClick: function(info) {
        alert('Date: ' + info.dateStr);

        info.dayEl.style.backgroundColor = 'red';
      },
        // initialView: 'listWeek',
        headerToolbar: {
            center: 'dayGridMonth,timeGridFourDay' // buttons for switching between views
          },
          views: {
            timeGridFourDay: {
              type: 'timeGrid',
              duration: { days: 4 },
              buttonText: '4 day'
            }
          }
        
    });
    calendar.render();
});