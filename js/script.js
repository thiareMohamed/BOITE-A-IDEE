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

for (let donnee of donnees)
{
    afficheIdee (donnee.titre,donnee.idee)
}


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
