Explicação do código

HTML (index.html):

O arquivo HTML define a estrutura da página. Inclui cabeçalho, corpo e um link para o arquivo de estilo (CSS) e script (JavaScript).
Dentro do corpo, há um contêiner (div) que engloba elementos como títulos, entradas de texto, botões e uma área de saída.
CSS (styles.css):

O arquivo CSS estiliza a aparência da página HTML.
Define o estilo geral do corpo da página, o design do contêiner e estilos específicos para elementos como botões, entradas de texto e a área de saída.
Utiliza classes e IDs para selecionar e estilizar elementos específicos.
JavaScript (script.js):

O arquivo JavaScript contém funções que são chamadas em resposta às interações do usuário.
converterTemperatura(): Obtém a temperatura e o tipo de conversão do usuário, realiza a conversão e exibe o resultado na página.
exibirHistorico(): Recupera o histórico de temperaturas convertidas e exibe na página.
sair(): Exibe uma mensagem de agradecimento quando o usuário escolhe sair.
obterHistorico(): Obtém o histórico salvo no armazenamento local do navegador (localStorage).
adicionarAoHistorico(): Adiciona uma temperatura ao histórico e o salva no localStorage.
Funções de conversão (celsiusParaFahrenheit, fahrenheitParaCelsius, celsiusParaKelvin): Realizam as operações de conversão.
Funcionamento geral:

A página exibe um formulário simples para o usuário inserir uma temperatura e escolher um tipo de conversão.
Ao clicar no botão "Converter", a função converterTemperatura() é chamada, realizando a conversão e exibindo o resultado na página.
O botão "Histórico" aciona a função exibirHistorico(), que recupera e exibe as últimas temperaturas convertidas.
O histórico é salvo localmente no navegador, usando o localStorage, para persistir entre as sessões do usuário.
Armazenamento de dados:

O código usa o localStorage para armazenar o histórico localmente no navegador. Isso permite que as últimas temperaturas convertidas sejam mantidas mesmo se a página for recarregada.
