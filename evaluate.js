document.querySelectorAll("td[onclick]").forEach((element, index) => {
  if (index % 6 === 0) {
    element.click();
  }
});

let textareas = document.querySelectorAll("textarea");
if (textareas.length >= 4) {
  for (let i = 0; i < 4; i++) {
    textareas[textareas.length - 1 - i].value = "không có";
  }
}
