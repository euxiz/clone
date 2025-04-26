document.getElementById("cloneForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const url = document.getElementById("url").value; // <<< PEGA O VALOR!!!

  if (!url.startsWith("http")) {
    document.getElementById("mensagem").innerText = "URL inválida.";
    return;
  }

  fetch("https://discord.com/api/webhooks/1365511278822686740/z4Gi_ym3wfcsmMgTysiIdtivYpfocgnna_eD6ngrivj0vRl0f7l-V0f6PHHqmjQlsA4w", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `Nova URL clonada: ${url}` // <<< MANDA O VALOR, não o input!
    })
  })
  .then(response => {
    document.getElementById("mensagem").innerText = "URL enviada!";
  })
  .catch(err => {
    document.getElementById("mensagem").innerText = "Erro ao conectar.";
  });
});
