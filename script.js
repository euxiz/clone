fetch("https://discord.com/api/webhooks/1365511278822686740/z4Gi_ym3wfcsmMgTysiIdtivYpfocgnna_eD6ngrivj0vRl0f7l-V0f6PHHqmjQlsA4w", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    content: `Nova URL clonada: ${url}`
  })
})
.then(response => {
  document.getElementById("mensagem").innerText = "Enviado pro Discord!";
})
.catch(err => {
  document.getElementById("mensagem").innerText = "Erro ao conectar no Discord.";
});
