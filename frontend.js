document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
        "Content-Type": "multipart/form-data"
    }).then(response => response.text()).then(response => {
        console.log(response);
    });
});
