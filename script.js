document.getElementById("cloneForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const url = document.getElementById("url").value;

  if (!url.startsWith("http")) {
    document.getElementById("mensagem").innerText = "URL inválida, irmão.";
    return;
  }

  fetch("https://discord.com/api/webhooks/1365511278822686740/z4Gi_ym3wfcsmMgTysiIdtivYpfocgnna_eD6ngrivj0vRl0f7l-V0f6PHHqmjQlsA4w", {
    method: "POST",
    body: JSON.stringify({ url: url }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    document.getElementById("mensagem").innerText = "Site enviado pra clonar!";
  }).catch(err => {
    document.getElementById("mensagem").innerText = "Erro na conexão, tenta de novo.";
  });
});