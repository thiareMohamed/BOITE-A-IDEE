const api_url = "https://dvovvuuahlnufggghdnb.supabase.co/rest/v1/idees";
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4ODAzNSwiZXhwIjoxOTU1MTY0MDM1fQ.HwTW2GcvE3GapFOkxiqPXp3BlRqnF-ZVDpLjoWVZ_P4";

// var donnees =
// [
//     {
//         id : 1, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     },
//     {
//         id : 2, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     },
//     {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     },
//     {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     },
//     {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     },
//     {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     },
//     {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     }, {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     }, {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     }, {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     }, {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     }, {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//     }, {
//         id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//         }, {
//             id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//         }, {
//             id : 3, titre : 'Cours', idee : 'lorem impus ldie dsdnsu sdksu efibv dsdid udsd ', statu : 'true'
//         },
// ]

// Afficher les donnees
// for (let donnee of donnees)
// {
//     afficheIdee (donnee.titre,donnee.idee)
// }

// Evennement du formulaire

document.querySelector('.form').addEventListener('submit',infoForm)

// Callback Information Formulaire
function infoForm(e)
{
    e.preventDefault();
    let titreIdee = document.querySelector('.titre-form').value
    let msgIdee = document.querySelector('.msg-form').value

    let nouvelleIdee =
    {
        titre:titreIdee,
        idee:msgIdee,
        statu:false,
    }
    // donnees.push(nouvelleIdee)
    
    fetch(api_url,{
        method:"POST",
        headers:{
            apikey: api_key,
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(nouvelleIdee),
    })

    document.querySelector('.form').reset()

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
    header.innerHTML = nouvelleIdee.titre

    var body = document.createElement("div");
    card.appendChild(body);
    body.classList.add('card-body')
    body.innerHTML = nouvelleIdee.idee

    var footer = document.createElement("div");
    card.appendChild(footer);
    footer.classList.add('card-footer')
    footer.classList.add('border-primary')  

}

// // Creation des elements HTML
// function afficheIdee (titre,idee)
// {

//     var main = document.querySelector('.main-idee')
//     var card = document.createElement("div");
//     main.appendChild(card);
//     card.classList.add('card')
//     card.classList.add('border-primary')
//     card.classList.add('m-auto')
//     card.classList.add('mb-3')
//     card.style.width = "18rem";
     
//     var header = document.createElement("h5");
//     card.appendChild(header);
//     header.classList.add('card-header')
//     header.classList.add('text-primary')
//     header.classList.add('border-primary')
//     header.innerHTML = titre

//     var body = document.createElement("div");
//     card.appendChild(body);
//     body.classList.add('card-body')
//     body.innerHTML = idee

//     var footer = document.createElement("div");
//     card.appendChild(footer);
//     footer.classList.add('card-footer')
//     footer.classList.add('border-primary')

// }

// Evennement de textArea
var textArea = document.querySelector('.msg-form');
var nbrRestant = document.querySelector('.nbr-restant');
var contenuRestant = document.querySelector('.contenu-restant');

textArea.addEventListener('input',saisiInput)
function saisiInput(e)
{
    e.preventDefault();
    const longueurMax = 120
    let longueurSaisi = textArea.value
    nbrRestant.innerHTML = longueurMax - longueurSaisi.length

    if(nbrRestant.innerHTML > 16)
    {
        contenuRestant.style.color = "black"
        document.querySelector('.btnEvoyer').disabled = false
    }
    
    if(nbrRestant.innerHTML <= 16)
    {
        contenuRestant.style.color = "yellow"
        document.querySelector('.btnEvoyer').disabled = false

        if(nbrRestant.innerHTML <= 0)
        {
        contenuRestant.style.color = "red"
        document.querySelector('.btnEvoyer').disabled = true
        }
    }
}
