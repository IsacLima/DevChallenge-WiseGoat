const url = 'https://api.adviceslip.com/advice';

function fazGet(u){
	let request = new XMLHttpRequest();
	request.open("GET", u, false);
	request.send();
	return request.responseText
}

function main(){
	let data = fazGet(url);
	let conselho = JSON.parse(data);
	let texto = document.getElementById("texto");
	let conteudo =conselho.slip.advice;
	texto.innerHTML = " ''" + conteudo + " ''";
}

main()
