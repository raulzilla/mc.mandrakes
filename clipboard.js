function clipboard() {
  let copyText = document.getElementById("input-copy");
  let copyIp = document.getElementById("copy-ip");


  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}
