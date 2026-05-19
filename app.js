async function draw() {
  const res = await fetch("/api/draw");
  const data = await res.json();

  document.getElementById("card").innerText = "✨";

  document.getElementById("result").innerText =
    data.card + " — " + data.meaning;
}