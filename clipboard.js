function clipboard() {
  var copyText = document.getElementById("input-copy");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}