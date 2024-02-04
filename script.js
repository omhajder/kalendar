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

        fetchHijriDate(date.getFullYear(), date.getMonth() + 1, day)
            .then(hijriDate => {
                dayElement.innerHTML = `<span>${day}</span><div class="info">Hijri: ${hijriDate}</div>`;

                // Add placeholders for 4 individuals
                for (let i = 1; i <= 4; i++) {
                    dayElement.innerHTML += `<div class="individual" contenteditable="true" data-day="${day}" data-individual="${i}">Name ${i}</div>`;
                }

                calendarDays.appendChild(dayElement);
            })
            .catch(error => {
                console.error('Error fetching Hijri date:', error);
            });
    }
}

            // Fetch Hijri date from the API
            fetchHijriDate(date.getFullYear(), date.getMonth() + 1, day)
                .then(hijriDate => {
                    dayElement.innerHTML = `<span>${day}</span><div class="info">Hijri: ${hijriDate}</div>`;
                })
                .catch(error => {
                    console.error('Error fetching Hijri date:', error);
                });

            // Add placeholders for 4 individuals
            for (let i = 1; i <= 4; i++) {
                dayElement.innerHTML += `<div class="individual" contenteditable="true" data-day="${day}" data-individual="${i}">Name ${i}</div>`;
            }

            calendarDays.appendChild(dayElement);
        }
    }
    
    async function fetchHijriDate(year, month, day) {
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const apiUrl = `http://api.aladhan.com/v1/gToH/${year}-${formattedMonth}-${formattedDay}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Assuming the API returns the Hijri date in a specific format
        return data.data.hijri.date;
    } catch (error) {
        throw new Error('Error fetching Hijri date');
    }

});
