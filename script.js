document.addEventListener('DOMContentLoaded', function () {
    const liInicio = document.getElementById('li-inicio');
    const homePage = document.getElementById('home-page');
    const liTrajetoria = document.getElementById('li-trajetoria');
    const trajetoriaPage = document.getElementById('trajetoria-page');
    const liSkills = document.getElementById('li-skills');
    const skillsPage = document.getElementById('skills-page');
    const liProjetos = document.getElementById('li-projetos');
    const projetosPage = document.getElementById('projetos-page');
    const liPremiacoes = document.getElementById('li-premiacoes');
    const premiosPage = document.getElementById('premios-page');
    const liContato = document.getElementById('li-contato');
    const contatoPage = document.getElementById('contato-page');


    liInicio.addEventListener('click', function () {

        homePage.scrollIntoView({ behavior: 'smooth' });

        if (homePage.style.display === 'none' || homePage.style.display === '') {
            homePage.style.display = 'flex';
            homePage.style.opacity = 0;
            let opacity = 0;


            const fadeIn = setInterval(function () {
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                }
                homePage.style.opacity = opacity;
                opacity += 0.1;
            }, 50);
        } else {
            homePage.style.display = 'none';
        }

        });


        liTrajetoria.addEventListener('click', function () {
            trajetoriaPage.scrollIntoView({ behavior: 'smooth' });
        })

        liSkills.addEventListener('click', function () {
            skillsPage.scrollIntoView({ behavior: 'smooth' });
        })

        liProjetos.addEventListener('click', function () {
            projetosPage.scrollIntoView({ behavior: 'smooth' });
        })

        liPremiacoes.addEventListener('click', function () {
            premiosPage.scrollIntoView({ behavior: 'smooth' });
        })

        liContato.addEventListener('click', function () {
            contatoPage.scrollIntoView({ behavior: 'smooth' });
        })

})

function toggleDescription(descriptionId) {
    const descriptions = document.querySelectorAll('.description');
    const current = document.getElementById(descriptionId);

    
    descriptions.forEach(desc => {
        if (desc !== current) {
            desc.classList.remove('open');
        }
    });

    
    current.classList.toggle('open');
}


document.querySelectorAll('.button-saiba-mais').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        toggleDescription('description' + (index + 1));
    });
});














































