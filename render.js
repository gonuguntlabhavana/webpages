fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("articles");
    list.innerHTML = data.articles.map(a =>
      `<li><b>${a.title}</b>: ${a.summary}</li>`
    ).join("");
  })
  .catch(err => console.error("Error loading JSON:", err));
