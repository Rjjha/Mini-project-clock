setInterval(() => {
    let date=new Date();
    let stime=date.getSeconds()*6;
    let mtime=date.getMinutes()*6;
    let htime=date.getHours()*30 + date.getMinutes()/2;
    hour.style.transform=`rotate(${htime}deg)`;
    minute.style.transform=`rotate(${mtime}deg)`;
    second.style.transform=`rotate(${stime}deg)`;
}, 1000);