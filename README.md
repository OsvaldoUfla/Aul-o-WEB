# Desenvolvimento web 
Intensivo desenvolvimento crud engenharia de software
Repositório com projeto desenvolvido no aulão de desenvolvimento WEB.

# Exucutar com docker 
1 - execute -> 
docker build -t node-server-image -f ./Dockerfile ./

    O comando docker build -t node-server-image -f ./Dockerfile ./ é usado para construir uma imagem Docker a partir de um Dockerfile. 

    docker build: Este é o comando do Docker usado para construir uma imagem a partir de um Dockerfile.
    -t node-server-image: O -t (tag) flag é usado para dar um nome e opcionalmente uma tag à imagem que você está construindo. Neste caso, a imagem será nomeada node-server-image.
    -f ./Dockerfile: O -f flag especifica o nome e a localização do Dockerfile. Neste caso, o Dockerfile está localizado no diretório atual e é chamado Dockerfile.
    ./: Este é o contexto de build. O contexto de build é o diretório onde o Docker vai procurar o Dockerfile e todos os arquivos necessários para construir a imagem. Neste caso, o contexto de build é o diretório atual (./).
     
2 - execute -> 
docker run -d --name node-server-container -p 3000:3000 -v $(pwd)/:/app -v /app/node_modules --network minha-rede node-server-image

    O comando docker run -d --name node-server-container -p 3000:3000 -v $(pwd)/:/app -v /app/node_modules --network minha-rede node-server-image é usado para executar um contêiner Docker a partir de uma imagem.

    docker run: Este é o comando do Docker usado para criar e iniciar um novo contêiner a partir de uma imagem.

    -d: Este flag (abreviação de "detached") faz com que o contêiner seja executado em segundo plano (em vez de ser ligado ao terminal).

    --name node-server-container: O flag --name permite dar um nome ao contêiner. Neste caso, o contêiner será nomeado node-server-container.

    -p 3000:3000: O flag -p mapeia uma porta do host (primeiro número) para uma porta do contêiner (segundo número). Neste caso, a porta 3000 do host será mapeada para a porta 3000 do contêiner. Isso permite acessar a aplicação Node.js em http://localhost:3000 (ou em outra máquina na rede local usando o IP do host).

    -v $(pwd)/:/app: O flag -v cria um volume, que é uma maneira de mapear um diretório do host para um diretório dentro do contêiner. Neste caso, o diretório atual ($(pwd)) será mapeado para /app no contêiner. Isso permite que qualquer mudança no diretório atual do host seja refletida no contêiner e vice-versa. $(pwd) é um comando que retorna o caminho completo do diretório atual no sistema.

    -v /app/node_modules: Este flag cria um volume anônimo para o diretório /app/node_modules no contêiner. Isso impede que os módulos Node.js instalados no contêiner interfiram com os módulos Node.js no host. Dessa forma, mesmo que node_modules exista no host, ele não será montado no contêiner, mantendo os módulos do contêiner isolados.

    --network minha-rede: O flag --network especifica a rede Docker na qual o contêiner será executado. Neste caso, o contêiner será conectado à rede chamada minha-rede. Isso é útil para contêineres que precisam se comunicar entre si.

    node-server-image: Este é o nome da imagem Docker a partir da qual o contêiner será criado. O Docker usará esta imagem para configurar e iniciar o contêiner.

    ## Resumo do Comando
    Iniciar o Contêiner: O comando inicia um contêiner a partir da imagem node-server-image.
    Nome do Contêiner: O contêiner será nomeado node-server-container.
    Portas: A porta 3000 do host será mapeada para a porta 3000 do contêiner.
    Volumes:
    O diretório atual no host será mapeado para /app no contêiner.
    Um volume anônimo será criado para /app/node_modules no contêiner para isolar os módulos Node.js.
    Rede: O contêiner será conectado à rede Docker chamada minha-rede.
    Modo Detached: O contêiner será executado em segundo plano.
    Contexto de Uso
    Esse comando é frequentemente usado em ambientes de desenvolvimento onde você quer:

    Executar uma aplicação Node.js dentro de um contêiner Docker.
    Manter o código-fonte sincronizado entre o host e o contêiner, permitindo desenvolvimento contínuo.
    Manter os módulos Node.js do contêiner separados dos módulos do host.
    Mapear a porta da aplicação para que ela seja acessível no host.
    Conectar o contêiner a uma rede Docker para comunicação com outros contêineres.

# Exemplo de um Dockerfile
Para dar mais contexto, aqui está um exemplo de um Dockerfile para uma aplicação Node.js:

    Dockerfile
    Copiar código
    # Use a imagem base do Node.js
    FROM node:14

    # Crie o diretório de trabalho da aplicação no contêiner
    WORKDIR /usr/src/app

    # Copie o package.json e o package-lock.json
    COPY package*.json ./

    # Instale as dependências da aplicação
    RUN npm install

    # Copie o código-fonte da aplicação para o diretório de trabalho
    COPY . .

    # Exponha a porta que a aplicação vai usar
    EXPOSE 3000

    # Comando para rodar a aplicação
    CMD ["node", "app.js"]

# Explicação do Processo de Build
Contexto de Build: Quando você executa o comando docker build, o Docker envia todo o conteúdo do diretório atual (./) para o daemon do Docker como contexto de build. Isso inclui todos os arquivos e subdiretórios.

    Dockerfile: O Dockerfile contém uma série de instruções que o Docker executa para construir a imagem. O Docker lê o Dockerfile linha por linha e executa as instruções.

    Imagem Base: No exemplo do Dockerfile acima, FROM node:14 usa a imagem oficial do Node.js como base.

    Diretório de Trabalho: WORKDIR /usr/src/app define o diretório de trabalho dentro do contêiner.

    Copiar Dependências: COPY package*.json ./ copia os arquivos package.json e package-lock.json para o diretório de trabalho no contêiner.

    Instalar Dependências: RUN npm install instala as dependências da aplicação.

    Copiar Código-fonte: COPY . . copia todo o conteúdo do diretório atual para o diretório de trabalho no contêiner.

    Expor Porta: EXPOSE 3000 informa ao Docker que o contêiner escutará na porta 3000 durante a execução.

    Comando de Inicialização: CMD ["node", "app.js"] especifica o comando para rodar a aplicação quando o contêiner iniciar.