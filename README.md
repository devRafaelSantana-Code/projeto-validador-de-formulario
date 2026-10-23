# 🛡️ Motor de Validação Customizado — Client-Side Form Validator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Vanilla">
  <img src="https://img.shields.io/badge/RegEx-Expressões%20Regulares-6C63FF?style=for-the-badge" alt="Expressões Regulares">
  <img src="https://img.shields.io/badge/HTML5-Data%20Attributes-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Data Attributes">
  <img src="https://img.shields.io/badge/CSS3-Responsive%20Design-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Responsive Design">
</p>

## 📌 Sobre o Projeto

O **Motor de Validação Customizado** é um projeto desenvolvido a partir dos desafios de lógica e desenvolvimento front-end da plataforma B7Web. A aplicação implementa um mecanismo próprio de validação de formulários, utilizando JavaScript puro para interpretar regras declaradas diretamente nos atributos HTML e verificar os dados inseridos pelo usuário antes da submissão.

O projeto permite aplicar validações de obrigatoriedade, comprimento mínimo de caracteres e formato de endereço de e-mail, mantendo a lógica de validação independente da estrutura visual do formulário.

O principal objetivo é consolidar conhecimentos em manipulação do DOM, expressões regulares, tratamento de eventos e organização de código client-side, sem dependências externas ou bibliotecas de terceiros.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** estruturação do formulário e declaração de regras por meio de atributos `data-*`.
- **CSS3:** estilização da interface, feedback visual de erros e adaptação para diferentes tamanhos de tela.
- **JavaScript Vanilla:** implementação do mecanismo de validação, manipulação do DOM e controle da submissão.
- **Expressões Regulares (RegEx):** verificação sintática dos endereços de e-mail.
- **Flexbox:** construção de um layout flexível e responsivo.

## ⚙️ Funcionalidades

- **Validação de campos obrigatórios:** verifica se os campos configurados foram preenchidos.
- **Comprimento mínimo de caracteres:** permite definir a quantidade mínima de caracteres aceita em um campo.
- **Validação de e-mail:** utiliza uma expressão regular para verificar a estrutura básica do endereço informado.
- **Regras declarativas no HTML:** configura os critérios de validação por meio do atributo `data-rules`.
- **Interrupção da submissão inválida:** impede o envio do formulário quando são identificados campos com erros.
- **Feedback visual dinâmico:** destaca campos inválidos e apresenta mensagens de erro na interface.
- **Limpeza automática de erros:** remove mensagens anteriores e redefine os estados visuais antes de uma nova validação.
- **Interface responsiva:** adapta a apresentação do formulário para dispositivos móveis e telas maiores.

## 🧠 Detalhes Técnicos e Implementação

### 1. Motor de Validação Customizado

O objeto `validator` centraliza a lógica de processamento das regras e a validação dos campos, evitando a dependência de identificadores específicos para cada input.

### 2. Interpretação Dinâmica de Regras

O atributo `data-rules` permite definir diferentes critérios de validação diretamente no HTML. O JavaScript interpreta essas configurações em tempo de execução, separando as regras pelo caractere `|` e identificando parâmetros adicionais, como o comprimento mínimo.

Exemplo de configuração:

```html
<input type="password" name="password" data-rules="required|min=6" />
```

Nesse caso, o campo deve ser preenchido e conter pelo menos seis caracteres.

### 3. Validação de E-mail com RegEx

A verificação do endereço de e-mail utiliza uma expressão regular para identificar uma estrutura básica composta por texto antes e depois do caractere `@`, além de um ponto no domínio.

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

O método `.test()` verifica se o valor informado corresponde ao padrão definido. Essa abordagem realiza uma validação sintática básica, sem confirmar a existência do endereço ou a capacidade de recebimento de mensagens.

### 4. Controle do Fluxo de Submissão

O evento `submit` do formulário é interceptado por meio de `preventDefault()`, permitindo executar as verificações antes de prosseguir.

Durante a validação, uma variável de controle indica se todos os campos atendem às regras configuradas. Caso algum campo apresente uma inconsistência, a submissão é bloqueada e o mecanismo de feedback visual é acionado.

### 5. Manipulação do DOM e Feedback de Erros

A apresentação dos erros é realizada dinamicamente pelo JavaScript:

- A classe `.input-error` identifica visualmente os campos inválidos.
- As mensagens são inseridas na estrutura do formulário, associadas ao respectivo grupo de campos.
- O CSS controla a aparência dos estados de erro, mantendo a separação entre lógica e apresentação.

### 6. Limpeza e Revalidação

A função `clearErrors` remove as mensagens de erro anteriores e redefine as classes aplicadas aos campos antes de uma nova tentativa de submissão.

Esse processo evita a duplicação de mensagens e permite que a interface reflita o resultado da validação mais recente.

## 📐 Layout e Design Responsivo

### Layout Split-Screen

A interface utiliza Flexbox para organizar o painel visual e a área do formulário lado a lado em telas maiores, proporcionando uma apresentação equilibrada entre identidade visual e área operacional.

### Abordagem Mobile-First

As regras de CSS e as Media Queries adaptam o layout para dispositivos com diferentes resoluções. Em telas menores, o painel lateral é ocultado para priorizar o formulário e facilitar a interação em dispositivos móveis.

## 💻 Como Executar o Projeto Localmente

O projeto utiliza tecnologias nativas do navegador e não exige instalação de dependências ou configuração de um ambiente de backend.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/devRafaelSantana-Code/projeto-validador-de-formulario.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd projeto-validador-de-formulario
   ```

3. **Abra a aplicação:**

   Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão Live Server no Visual Studio Code para executar o projeto em um servidor local.

## 👨‍💻 Autor

**Rafael Santana**  
Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack.

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, JavaScript, Expressões Regulares e desenvolvimento de interfaces responsivas.
</p>
