const comentarios = [];

async function incializacao() {
    // Inicialização do emailjs
    await emailjs.init({
        publicKey: "DqPGZvIsuEZFHrvJM",
    });
    console.log('emailjs inicializado');
    // Inicialização do AOS
    await AOS.init();
    console.log('AOS inicializado');
    // Consulta com a API DummyJSON
    await fetch('https://dummyjson.com/comments?limit=6')
        .then(response => response.json())
        .then(data => {
            data.comments.forEach(comentario => {
                comentarios.push(comentario);
            });
            console.log(comentarios);
        });

    // Carregar comentários

    await carregarcomentario();
    console.log('Comentários carregados');
}

incializacao();

const testemuho = document.getElementById('testemunhos-list');

async function carregarcomentario() {
    for (const comentario of comentarios) {
        console.log(comentario);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-quinary p-4 m-2 h-25 rounded-lg hover:scale-105" >
        <p class="text-md font-bold">${comentario.user.fullName}</p>
    <p class="text-sm">${comentario.body}</p>
    <p class="text-yellow-900">${comentario.likes === 5 ? '&#9733 &#9733 &#9733 &#9733 &#9733' :
                comentario.likes === 4 ? '&#9733 &#9733 &#9733 &#9733' :
                    comentario.likes === 3 ? '&#9733 &#9733 &#9733' :
                        comentario.likes === 2 ? '&#9733 &#9733' :
                            '&#9733'
            }</p>
    </div>`
        testemuho.appendChild(div);
    }
}
async function enviarEmail() {
    const email = await document.getElementById('email');
    const nome = await document.getElementById('nome');
    const mensagem = await document.getElementById('menssagem');
    const telefone = await document.getElementById('phone');
    const data = {
        email: email.value,
        nome: nome.value,
        messagem: mensagem.value,
        telefone: telefone.value
    };
    emailjs.send("service_vwzo3g8", "template_01qaypp", data)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            email.value = '';
            nome.value = '';
            mensagem.value = '';
            telefone.value = '';
            alert('Email enviado com sucesso');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Erro ao enviar email');
        });
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    let menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});