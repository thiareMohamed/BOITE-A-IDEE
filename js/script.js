const api_url = "https://dvovvuuahlnufggghdnb.supabase.co/rest/v1/idees";
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4ODAzNSwiZXhwIjoxOTU1MTY0MDM1fQ.HwTW2GcvE3GapFOkxiqPXp3BlRqnF-ZVDpLjoWVZ_P4";

// Affichage des donnnes (Chargement de la page)
(function()
{
    fetch(api_url,{
        method:"GET",
        headers:{
            apikey: api_key,
        },
    })
    .then((idees) => idees.json())
    .then((idees) => {
        // Afficher les donnees
        for (let idee of idees)
        {
            afficheIdee (idee.titre,idee.idee,idee.id,idee.id,idee.id,idee.statu)
        }
    })
})()


// Evennement du formulaire

document.querySelector( '.form').addEventListener('submit',infoForm)

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
        statu:"null",
    }
    
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

    var accepter = document.createElement("button");
    footer.appendChild(accepter);
    accepter.classList.add('btn-primary')
    accepter.classList.add('btn')
    accepter.innerHTML = "Accepter"
    accepter.setAttribute('id', accepterId)
    accepter.addEventListener('click', ()=>{
        document.querySelector('div[id="'+idCard+'"]').style.borderColor = "green"
        document.querySelector('div[id="'+idCard+'"]').style.boxShadow = "0px 0px 5px green";
    })

    var refuser = document.createElement("button");
    footer.appendChild(refuser);
    refuser.classList.add('btn-danger')
    refuser.classList.add('btn')
    refuser.innerHTML = "Refuser"
    refuser.setAttribute('id', refuserId)
    refuser.addEventListener('click', ()=>{
        document.querySelector('div[id="'+idCard+'"]').style.borderColor = "red"
        document.querySelector('div[id="'+idCard+'"]').style.boxShadow = "0px 0px 5px red"; 
    })
}

// Creation des elements HTML
function afficheIdee (titre,idee,accepterId,refuserId,idCard,stat)
{

    var main = document.querySelector('.main-idee')
    var card = document.createElement("div");
    main.appendChild(card);
    card.classList.add('card')
    card.classList.add('m-auto')
    card.classList.add('mb-3')
    card.setAttribute('id', idCard)
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
    footer.classList.add('card-footer')
    footer.classList.add('d-flex')
    footer.classList.add('justify-content-between')

    var accepter = document.createElement("button");
    footer.appendChild(accepter);
    accepter.classList.add('btn-primary')
    accepter.classList.add('btn')
    accepter.innerHTML = "Accepter"
    accepter.setAttribute('id', accepterId)
    accepter.addEventListener('click', ()=>{
        document.querySelector('div[id="'+idCard+'"]').style.borderColor = "green"
        document.querySelector('div[id="'+idCard+'"]').style.boxShadow = "0px 0px 5px green";
        let miseAjour =
        {
            statu: "true"
        }
        fetch(`https://dvovvuuahlnufggghdnb.supabase.co/rest/v1/idees?id=eq.${accepterId}`,{
            method:"PATCH",
            headers:{
                apikey: api_key,
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(miseAjour),
        })
    })

    var refuser = document.createElement("button");
    footer.appendChild(refuser);
    refuser.classList.add('btn-danger')
    refuser.classList.add('btn')
    refuser.innerHTML = "Refuser"
    refuser.setAttribute('id', refuserId)
    refuser.addEventListener('click', ()=>{
        document.querySelector('div[id="'+idCard+'"]').style.borderColor = "red"
        document.querySelector('div[id="'+idCard+'"]').style.boxShadow = "0px 0px 5px red"; 
        let miseAjour =
        {
            statu: "false"
        }
        fetch(`https://dvovvuuahlnufggghdnb.supabase.co/rest/v1/idees?id=eq.${refuserId}`,{
            method:"PATCH",
            headers:{
                apikey: api_key,
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(miseAjour),
        })
    })

        console.log(stat);
    if(stat == "false")
    {
            document.querySelector('div[id="'+idCard+'"]').style.borderColor = "red"
            document.querySelector('div[id="'+idCard+'"]').style.boxShadow = "0px 0px 5px red"; 
    }
    else if(stat == "true")
    {
            document.querySelector('div[id="'+idCard+'"]').style.borderColor = "green"
            document.querySelector('div[id="'+idCard+'"]').style.boxShadow = "0px 0px 5px green";
    }
    else
    {
            document.querySelector('div[id="'+idCard+'"]').style.borderColor = "black"
    }
}

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

