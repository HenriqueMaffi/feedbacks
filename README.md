# Projeto Feedbacker - envio e gerenciamento de feedbacks

Versão em produção publicada aqui(https://feedbacks-sigma.vercel.app/).


## Fluxo da aplicação

Cada página da aplciação tem seu ponto bem definido, sejam criação, mostragem e listagem de feedbacks. 
A página inicial é o dashboard responsável por agrupar as informações que foram coletadas e transformá-las em dados utilizáveis para apresentações, insights ou outra forma de mostragem do que foi agrupado. 
A página de histórico, diferentemente do dashboard não é própria para a mostragem mas para identificar e realizar ações específicas em feedbacks específicos, além disso, o histórico permite buscar e visualizar os dados filtrados por diferentes informações, como setor, data, status e tipo do feedback.
A página de envio de feedback é vital para o cadastro das informações e provê uma interface amigável para o usuário enviar suas observações com tranquilidade.

As páginas tem funções distintas mas complementam-se de forma a criar um fluxo de criar, exibir e agrupar os feedbacks.



## Elementos visuais

#### Fontes
Foram utilizadas as fontes Roboto, Raleway e Lato. Todas são fontes sem serifa, com ótima legibilidade, design mais arredondado que remete a uma sensação amigável e que são boa escolha para um site para uso corporativo ou para uso externo de clientes. 
Lato foi utilizada para simular a logo do site, é uma fonte de aparência limpa, elegante. 
Raleway foi utilizada em botões e textos curtos, como do footer, é elegante, com um pouco mais de contraste visual.
Roboto foi utilizada para o site em geral,é uma fonte simples e neutra com boa legibilidade que pode ser usada de forma mais livre e se encaixa bem em diferentes elementos do site.

#### Cores
[Paleta de cores](https://coolors.co/ffffff-e5e7eb-c6e7f9-56a3cc-3297b0-0c6d85-085162)

A paleta de cores utilizada foi branco, cinza claro e tons que misturam azul e verde, de maior parte azuis.
São tons azulados até tons esverdeados, de cores mais fortes até mais escuras.
Cores verdes e azuis transmitem mais confiança e tranqulidade, uma sensação de calmaria e podem ser usadas em diversas ocasiões. No presente caso, pode ser uma indicação de segurança ao usuário que irá relatar seu feedback.
Foram escolhidas algumas cores com mais presença visual ainda por serem agradáveis e para criar contraste com a maior parte branca ou cinza clara para o site.
A mistura de tons de azul com tons de cinza claro transmite profissionalismo e segurança.

#### Ícones
Foram utilizados ícones da biblioteca Phospor Icons que possui mais de 8 mil ícones disponíveis.
Os ícones utilizados auxiliam na identificação visual de botões, ações e informações na tela pois indicam uma comunicação visual mais rápida e indicativa do que se mostra na tela.
O design dos ícones utilizados é simples, sem muitos traços e de fácil identificação visual, justamente pra que o usuário tenha a navegação facilitada.

#### Microinterações e animações
Foram utilizados hover e animações/transições em diversos locais do projeto, botões, links, mudança de página, inserção de modais e troca de componentes da tela.
Todos esses elementos formam um conjunto de ações que melhoram a usabilidade e fluidez do website. O reconehcimento imediato e a resposta visual de ações executadas pelo usuário ajudam a comunicar exatamente o que aconteceu em cada ação realizada, é o feedback do site para o usuário.
Além do feedback, fazer com que elementos se movam e transicionem transmite presonalidade e remove o aspecto robótico da interação com a tecnologia, fazendo com que o usuário se sinta mais próximo e engajado.
Além disso, as microinterações bem executadas aumentam a percepção de qualidade da interface por mostrarem polidez e profissionalismo.



## Possíveis futuras melhorias

#### Dashboard
- Inserção de gráficos interativos
- Novas métricas como feedbacks por períodos; média de feedbacks mensais/semanais; setor que mais responde os feedbacks; setores mais elogiados, sugeridos e criticados por período; entre outros
- Criar nova propriedade para os dados de feedback para registrar a data da resposta e criar métricas baseadas nesse dado

#### Histórico
- Exibir os arquivos enviados no feedback
- Exibir um contador com o total de feedbacks filtrados encontrados
- Filtrar feedbacks por data específica
- Criar mais ações sobre o feedback, como optar por não responder, arquivar, responder mais de uma vez, entre outros

#### Envio de feedback
- Permitir enviar múltiplos arquivos
- Solicitar email do usuário, enviar email de confirmação e resposta do feedback enviado
- Ao selecionar o setor "produto" possiblitar selecionar um produto específico

#### Gerais
- Separação da área do usuário que provê o feedback e do colaborador da empresa que recebe o feedback
- Criar autenticação para os usuários
- Criar cargos e permissões para usuários, tendo administradores visão geral sobre todos os setores e outros colaboradores permissão para visualizar somente dados relativos a seu setor
- Identificar problemas e sugestões recorrentes advindas dos feedbacks para cada setor

#### Técnicas
- Implementar banco de dados e backend para fazer o manuseio ideal das informações
- Implementar uma API para apresentar os dados ao front-end
- Fazer o escape e sanitização das informações inseridas do usuário para evitar ataques de XSS e SQL injection
- Utilizar cookies e informações do backend para determinar se um usuário já enviou feedbacks passados e personalizar a experi~encia do usuário
