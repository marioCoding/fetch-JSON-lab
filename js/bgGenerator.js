document.addEventListener('DOMContentLoaded', init);

async function init() {
  let color = await fetch("https://www.colr.org/json/color/random/");
  let res = await color.json();
  try {
    document.body.style.backgroundColor = `#${await res.new_color}`;
  } catch {
    err => console.error('error', err.message);
  }
}
