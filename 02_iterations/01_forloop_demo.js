for (let i=0; i<=10; i++) {
    if(i==8) break; // terminate loop
    if(i==3) continue; // skip step
    console.log(i);
}

const months = ["Jan", "Mar", "Apr", "May"];
for (let i=0; i<months.length; i++) {
    console.log(months[i]);
}