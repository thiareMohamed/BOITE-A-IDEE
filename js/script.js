var donnees =
[
    {
        id : 1, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    },
    {
        id : 2, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    },
    {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    },
    {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    },
    {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    },
    {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    },
    {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    }, {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    }, {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    }, {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    }, {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    }, {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
    }, {
        id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
        }, {
            id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
        }, {
            id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
        },
]


/* ******************Afficher les donnees********************* */
for (let donnee of donnees)
{
    afficheIdee (donnee.titre,donnee.idee)
}


document.querySelector('.form').addEventListener('submit',infoForm)

/* ******************Callback Information Formulaire********************* */
function infoForm(e)
{
    e.preventDefault();
    let titreIdee = document.querySelector('.titre-form').value
    let msgIdee = document.querySelector('.msg-form').value

    let nouvelleIdee =
    {
        id:4,
        titre:titreIdee,
        idee:msgIdee,
        statu:false,
    }
}

/* ******************Creation des elements HTML********************* */
function afficheIdee (titre,idee)
{

    var main = document.querySelector('.main-idee')
    var card = document.createElement("div");
    main.appendChild(card);
    card.classList.add('card')
    card.classList.add('border-primary')
    card.classList.add('m-auto')
    card.classList.add('mb-3')
    card.style.width = "18rem";
     
    var header = document.createElement("h5");
    card.appendChild(header);
    header.classList.add('card-header')
    header.classList.add('text-primary')
    header.classList.add('border-primary')
    header.innerHTML = titre

    var body = document.createElement("div");
    card.appendChild(body);
    body.classList.add('card-body')
    body.innerHTML = idee

    var footer = document.createElement("div");
    card.appendChild(footer);
    footer.classList.add('card-footer')
    footer.classList.add('border-primary')

}
