// ================================
// Exibir seção selecionada
// ================================
function mostrarSecao(secaoId) {
    document.querySelectorAll(".secao").forEach(sec => sec.style.display = "none");
    const el = document.getElementById(secaoId);
    if (el) el.style.display = "block";
}

/* ============================================
    API 1 – PERSONAGENS & LOCAIS (cards)
============================================ */
const api1 = [
    { nome: "Geralt de Rívia", tipo: "Personagem", descricao: "Bruxo lendário, conhecido como Lobo Branco. É o protagonista da saga." },
    { nome: "Yennefer de Vengerberg", tipo: "Personagem", descricao: "Feiticeira poderosa e amor de Geralt." },
    { nome: "Cirilla (Ciri)", tipo: "Personagem", descricao: "Princesa de Cintra, protegida pelo Destino e possuidora do Sangue Antigo." },
    { nome: "Kaer Morhen", tipo: "Local", descricao: "Fortaleza dos Bruxos da Escola do Lobo." },
    { nome: "Jaskier", tipo: "Personagem", descricao: "Bardo, poeta e melhor amigo de Geralt." },
    { nome: "Triss Merigold", tipo: "Personagem", descricao: "Feiticeira, curandeira e aliada fiel." },
    { nome: "Vesemir", tipo: "Personagem", descricao: "O bruxo mais velho vivo e mentor de Geralt." },
    { nome: "Cintra", tipo: "Local", descricao: "Reino do Norte governado pela Rainha Calanthe." },
    { nome: "Novigrad", tipo: "Local", descricao: "Capital comercial do Continente." },
    { nome: "Nilfgaard", tipo: "Império", descricao: "Império poderoso governado por Emhyr var Emreis." },
    { nome: "Aretuza", tipo: "Local", descricao: "Academia de feiticeiras." },
    { nome: "Regis", tipo: "Personagem", descricao: "Vampiro superior e aliado de Geralt." }
];

function carregarPersonagens() {
    const container = document.getElementById("lista-personagens");
    if (!container) return;
    container.innerHTML = "";
    
    api1.forEach(item => {
        
        // 1. CRIA O NOME DO ARQUIVO PADRONIZADO (em minúsculas, com underscore)
        const nomeArquivo = item.nome
            .toLowerCase()
            .replace(/\s/g, '_') // Substitui espaços por underscore
            .replace(/[()]/g, ''); // Remove caracteres como parênteses
            
        // 2. CONSTRÓI O CAMINHO DA IMAGEM (../img/ é o caminho correto)
        const caminhoImagem = `../img/${nomeArquivo}.jpg`; // Se suas imagens são PNG, mude para .png

        const card = document.createElement("div");
        card.className = "card-personagem";
        card.innerHTML = `
            <img 
                src="${caminhoImagem}" 
                alt="${item.nome}"
                onerror="this.style.display='none'"
            > 
            <h3>${item.nome}</h3>
            <div class="tipo">${item.tipo}</div>
            <p>${item.descricao}</p>
        `;
        container.appendChild(card);
    });
}

/* ============================================
    API 2 – NOTÍCIAS (cada ponto vira um card)
    Opção 2: cards menores, "ler mais" expansível
============================================ */

const api2 = [
    // The Witcher 4 (Projeto Polaris) — card principal (resumo + detalhes)
    {
        categoria: "🎮 Jogos (CD Projekt Red)",
        titulo: "The Witcher 4 (Projeto Polaris)",
        resumo: "O jogo está em desenvolvimento com mais de 450 desenvolvedores; trailer cinematográfico exibido na Unreal Engine 5; lançamento provável em 2027.",
        detalhes: [
            "O jogo está em desenvolvimento total com mais de 450 desenvolvedores.",
            "O estúdio confirmou que não apresentará trailer, teaser ou gameplay no The Game Awards 2025.",
            "O jogo dará início a uma nova trilogia focada em Ciri e na Lince School (medalhão de lince).",
            "Trailer cinematográfico exibido no State of Unreal 2025, destacando o uso da Unreal Engine 5.",
            "Lançamento mais provável: 2027 (sem data oficial)."
        ]
    },

    // Nova Trilogia e Cronograma
    {
        categoria: "🎮 Jogos (CD Projekt Red)",
        titulo: "Nova Trilogia e Cronograma",
        resumo: "A CD Projekt pretende lançar 3 jogos (4,5 e 6) num período de ~6 anos após Polaris, acelerando com a UE5.",
        detalhes: [
            "A CD Projekt Red planeja lançar os três jogos da nova trilogia (The Witcher 4, 5 e 6) em um período de cerca de seis anos após o primeiro.",
            "A empresa acredita que a base criada com The Witcher 4 e Unreal Engine 5 permitirá acelerar os desenvolvimentos subsequentes."
        ]
    },

    // Outros Jogos / Canis Majoris
    {
        categoria: "🎮 Jogos (CD Projekt Red)",
        titulo: "Outros projetos: Canis Majoris e vagas",
        resumo: "Indícios de projetos adicionais no universo Witcher; remake do primeiro jogo (Canis Majoris) em conceito.",
        detalhes: [
            "Há indicações de outro projeto no universo The Witcher em fase inicial.",
            "O Remake de The Witcher 1 (Projeto Canis Majoris) será lançado após The Witcher 4 e está em fase conceitual.",
            "Vagas abertas (ex.: roteirista chefe) sugerem expansão de projetos."
        ]
    },

    // Série Live-Action — Temporada 4
    {
        categoria: "🎬 Séries e Filmes (Netflix)",
        titulo: "Série Live-Action — Temporada 4",
        resumo: "Estreia em 30 de outubro de 2025; Liam Hemsworth assume Geralt; trama adaptará Batismo de Fogo.",
        detalhes: [
            "A quarta temporada tem estreia marcada para 30 de outubro de 2025 na Netflix.",
            "Liam Hemsworth assume o papel de Geralt de Rívia, substituindo Henry Cavill; transição será abordada no enredo.",
            "A trama adaptará elementos do livro 'Batismo de Fogo' mostrando Geralt, Yennefer e Ciri separados durante a guerra.",
            "Novos membros do elenco: Laurence Fishburne (Regis) e Sharlto Copley (Leo Bonhart)."
        ]
    },

    // Animação — Sirens of the Deep
    {
        categoria: "🎬 Séries e Filmes (Netflix/Animação)",
        titulo: "Animação — The Witcher: Sirens of the Deep",
        resumo: "Filme/curta animado com novo trailer divulgado.",
        detalhes: [
            "Animação 'The Witcher: Sirens of the Deep' ganhou novo trailer recentemente."
        ]
    },

    // Livros — Crossroads of the Crow
    {
        categoria: "📚 Livros",
        titulo: "Livro — Crossroads of the Crow",
        resumo: "Novo livro de Sapkowski lançado na Polônia em 2024; traduções internacionais previstas para 2025.",
        detalhes: [
            "Crossroads of the Crow foi lançado na Polônia em 2024, narrando uma história com um jovem Geralt.",
            "Traduções e lançamentos internacionais (incluindo português) foram aguardados para 2025."
        ]
    }
];

function carregarNoticias() {
    const container = document.getElementById("lista-noticias");
    if (!container) return;
    container.innerHTML = "";

    api2.forEach((n, idx) => {
        const card = document.createElement("article");
        card.className = "card-noticia";
        card.id = `noticia-${idx}`;

        // resumo texto curto (usado para vista inicial)
        const detalhesHTML = n.detalhes.map(d => `<li>${d}</li>`).join("");

        card.innerHTML = `
            <div class="categoria">${n.categoria}</div>
            <h4>${n.titulo}</h4>
            <div class="resumo">${n.resumo}</div>
            <div class="detalhes"><ul>${detalhesHTML}</ul></div>
            <button class="btn-ler" aria-expanded="false">Ler mais</button>
        `;

        // botão toggler para "ler mais"
        const btn = card.querySelector(".btn-ler");
        btn.addEventListener("click", () => {
            const aberto = card.classList.toggle("aberto");
            btn.textContent = aberto ? "Ler menos" : "Ler mais";
            btn.setAttribute("aria-expanded", aberto ? "true" : "false");
            // rolar levemente para manter o card à vista quando expandir (suave)
            if (aberto) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });

        container.appendChild(card);
    });
}

/* ============================================
    API 3 – IMAGENS (usando URLs externas)
============================================ */
const api3 = [
    { url: "https://m.media-amazon.com/images/I/71tNwrDWlRL._AC_UF894,1000_QL80_.jpg", nome: "Geralt" },
    { url: "https://pm1.aminoapps.com/6762/9953dee046e7b2931e877f1e980030063085bd61v2_hq.jpg", nome: "Yennefer" },
    { url: "https://www.sideshow.com/storage/product-images/903414/ciri-of-cintra_the-witcher-3-wild-hunt_gallery_5c4cd90a46a7f.jpg", nome: "Ciri" }
];

function carregarImagens() {
    const container = document.getElementById("lista-imagens");
    if (!container) return;
    container.innerHTML = "";
    api3.forEach(img => {
        const el = document.createElement("img");
        el.src = img.url;
        el.alt = img.nome;
        container.appendChild(el);
    });
}

/* ============================================
    API 4 – VÍDEOS
============================================ */
const api4 = [
    { url: "https://www.youtube.com/embed/ndl1W4ltcmg", nome: "Trailer The Witcher (Netflix)" },
    { url: "https://www.youtube.com/embed/c0i88t0Kacs", nome: "Trailer The Witcher 3" }
];

function carregarVideos() {
    const container = document.getElementById("lista-videos");
    if (!container) return;
    container.innerHTML = "";
    api4.forEach(v => {
        const wrapper = document.createElement("div");
        wrapper.className = "card";
        wrapper.innerHTML = `
            <h4>${v.nome}</h4>
            <iframe width="560" height="315" src="${v.url}" title="${v.nome}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
        container.appendChild(wrapper);
    });
}

/* ============================================
    CURSOR: ESPADA SEGUINDO O MOUSE (desktop only)
    - Não ativa em touch devices (pointer: fine)
============================================ */
(function initSwordCursor() {
    const espada = document.getElementById("cursor-espada");
    if (!espada) return;

    // só ativar para ponteiros finos (mouse) e telas que suportam coordinate pointer
    if (window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
        espada.style.display = "block";
        // deixar um pouco rotacionado e acompanhar o movimento
        document.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            // rotaciona a espada conforme movimento horizontal (suave)
            const rot = Math.min(35, Math.max(-35, (e.movementX || 0) * 1.5));
            espada.style.left = x + "px";
            espada.style.top = y + "px";
            espada.style.transform = `translate(-50%,-50%) rotate(${rot}deg)`;
        });
        // esconder quando sair da janela
        document.addEventListener("mouseleave", () => espada.style.display = "none");
        document.addEventListener("mouseenter", () => espada.style.display = "block");
    } else {
        // garante oculto em touch
        espada.style.display = "none";
    }
})();

/* ============================================
    INICIALIZAÇÃO
============================================ */
window.onload = () => {
    carregarPersonagens();
    carregarNoticias();
    carregarImagens();
    carregarVideos();
    mostrarSecao("personagens");
};
