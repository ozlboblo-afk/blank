const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    window.location.href = "/thanks.html";
  }
});
