//link da API que consumiremos
const url = 'https://api.adviceslip.com/advice';

//funcao que puxa os conselhos
function fazGet(u){
	//crio um arquivo requirindo o conteudo
	let request = new XMLHttpRequest();
	request.open("GET", u, false);
	//o send() esta vazio porque nao to eviando nada, somente recebendo
	request.send();
	//salva o conteudo recebido em texto
	return request.responseText
}

function main(){
	//chamo a função
	let data = fazGet(url);
	//transformo o texto retornado em .JSON
	let conselho = JSON.parse(data);
	//aqui abro o documento onde o arquivo .JSON vai colocar o texto
	let texto = document.getElementById("texto");
	//aqui pego o conselho e salvo numa variavel
	let conteudo =conselho.slip.advice;
	//aqui adiciono aspas ao conselho e mando como conteudo para o html
	texto.innerHTML = " ''" + conteudo + " ''";
}

main()
