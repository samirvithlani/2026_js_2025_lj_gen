window.addEventListener("DOMContentLoaded", () => {
  const msg = document.getElementById("msg");
  window.addEventListener("blur", () => {
    alert("user left..")
  });
  window.addEventListener("focus",()=>{
    alert("welcome back")
  })
});
