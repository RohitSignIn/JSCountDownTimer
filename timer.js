const end = "15 July 2022 11:30 PM";
document.getElementById("end").innerHTML = end;

function clock(end) {
  end = new Date(end);
  const now = new Date();
  const diff = (end - now) / 1000;
  const inputs = document.querySelectorAll("input");

  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
}

// Initial Call
clock(end);

setInterval(() => {
  clock(end);
}, 1000);
