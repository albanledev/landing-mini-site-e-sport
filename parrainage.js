const parrainageBtn = document.getElementById("parrainage-btn");
const parrainageLink = document.getElementById("parrainage-link");

parrainageBtn.addEventListener("click", () => {
  const baseUrl = "https://farros.com/parrainage/";
  const code = Math.floor(Math.random() * 1000000);
  const link = `${baseUrl}${code}`;
  parrainageLink.innerHTML = link;
});
