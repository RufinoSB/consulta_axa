// const postData = {
//     "ClientServiceNumber": "22000935",
//     "TpPasta": "Cível com Sinistro"
// };

// var init = {
//     mode: 'no-cors',
//     method: 'post',
//     body: JSON.stringify(postData),
//     credentials: 'include',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
// };

// url : urlWS,
// type : 'post',
// contentType: 'application/json',
// data: JSON.stringify(postData),
// dataType: 'json',


// fetch('https://dc1.inso.com.br:8092/api/ConsultaProcessoAutoRest', {
//         mode: 'no-cors',
//         method: 'POST',
//         headers: {
//             contentType: 'application/json',
//             dataType: 'json'
//         },
//         body: JSON.stringify(postData)
//     }).then((resposta) => resposta.json())
//     .then((data) => console.log(data));


// const pesquisa = async() => {
//     const urlWS = 'https://dc1.inso.com.br:8092/api/ConsultaProcessoAutoRest'
//         //const dados = await fetch(urlWS, { mode: 'no-cors', method: 'POST', headers: { contentType: 'application/json', dataType: 'json', body: postData } });
//     const dados = await fetch(urlWS, init);

//     // const convert = await dados.json();
//     console.log(dados)
// };


// fetch('https://dc1.inso.com.br:8092/api/ConsultaProcessoAutoRest', { mode: 'no-cors' })
//     .then((resposta) => resposta.json)
//     .then((data) => console.log(data))



// pesquisa();


// url : urlWS,
// type : 'post',
// contentType: 'application/json',
// data: JSON.stringify(postData),
// dataType: 'json',




let headersList = {
    "Accept": "*/*",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "CfDJ8KdYq6TttQdKjgyNwSYrhUC4xm5PDQakXmbZtADnz14gNCFi2P15GLjMIzLB08KGzbp3dpJJAw0xKDZY_0t5GNEkSZyBnsl-LiTvh0QA6ED7_V5DsDThy0N5ZDJydL33sk75CKATEhkPS9GRDmUj7YU"
}

let bodyContent = JSON.stringify({ ClientServiceNumber: 22000935, TpPasta: 'Civel com Sinistro' });

fetch("https://dc1.inso.com.br:8092/api/ConsultaProcessoAutoRest", {
    method: "post",
    mode: 'no-cors',
    body: bodyContent,
    headers: headersList
}).then(function(response) {
    return response;
}).then(function(data) {
    console.log(data);
})