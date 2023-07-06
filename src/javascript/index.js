const personagensXmen = document.querySelectorAll(".personagens")

personagensXmen.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const personagemSelecionado = document.querySelector(".selecionado")

        personagemSelecionado.classList.remove("selecionado")
        personagem.classList.add("selecionado")

        const idSelecionado = personagem.attributes.id.value

        const imgSelecionada = document.getElementById("image-selecionada")
        imgSelecionada.src = `./src/image/${idSelecionado}.png`

        const nomeDoPersonagem = document.getElementById("character-name")
        const nomeSelecionado = personagem.getAttribute("name")
        nomeDoPersonagem.innerHTML = nomeSelecionado

        const informacoes = document.getElementById("character-information")
        const inforSelecionado = personagem.getAttribute("data-information")
        informacoes.innerHTML = inforSelecionado
    })
})