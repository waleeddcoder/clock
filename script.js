setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayOfWeek = daysOfWeek[d.getDay()];

    const ampm = htime >= 12 ? "PM" : "AM";
    const h = htime % 12 || 12;

    const dTime = `${dayOfWeek}, ${h}:${mtime < 10 ? "0" : ""}${mtime} ${ampm}`;
    const dContainer = document.querySelector(".dContainer");
    dContainer.innerHTML = dTime;
}, 1000);
