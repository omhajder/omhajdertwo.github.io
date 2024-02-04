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

            dayElement.innerHTML = `<span>${day}</span><div class="info">Hijri: ${getHijriDate(date.getFullYear(), date.getMonth() + 1, day)}</div>`;

            // Add placeholders for 4 individuals
            for (let i = 1; i <= 4; i++) {
                dayElement.innerHTML += `<div class="individual" contenteditable="true" data-day="${day}" data-individual="${i}">Name ${i}</div>`;
            }

            calendarDays.appendChild(dayElement);
        }
    }

    function getHijriDate(year, month, day) {
        // Placeholder for Hijri date, replace this with actual conversion logic
        const hijriMonth = 'HijriMonth';
        const hijriDay = 'HijriDay';

        return `${hijriMonth} ${hijriDay}`;
    }
});
