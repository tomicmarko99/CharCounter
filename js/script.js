function Calculate() {
  let text = document.getElementById("text").value;
  let remText = text.replace(/ /g, "");
  let x = "";
  let result = document.getElementById("result");
  x = remText.length;
  result.innerText = x;
}
