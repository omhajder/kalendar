document.addEventListener('DOMContentLoaded', function () {
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const currentMonthLabel = document.getElementById('currentMonth');
    const calendarDays = document.getElementById('calendarDays');

    let currentDate = new Date();
    displayCalendar(currentDate);

    prevMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        displayCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        displayCalendar(currentDate);
    });

    function displayCalendar(date) {
        currentMonthLabel.textContent = date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
        calendarDays.innerHTML = '';

        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');

            if (date.getMonth() === currentDate.getMonth() && day === currentDate.getDate()) {
                dayElement.classList.add('today');
            }

            dayElement.innerHTML = `<span>${day}</span><div class="info">Gregorian: ${getGregorianDate(date.getFullYear(), date.getMonth() + 1, day)}<br>Hijri: ${getHijriDate(date.getFullYear(), date.getMonth() + 1, day)}</div>`;
            calendarDays.appendChild(dayElement);
        }
    }

    function getGregorianDate(year, month, day) {
        return new Date(year, month - 1, day).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function getHijriDate(year, month, day) {
        // You would need to implement a function to convert Gregorian to Hijri here
        // This is just a placeholder
        return 'Hijri Date';
    }
});
