# Gracie Barra Laranjeiras do Sul — Site Institucional

Site institucional desenvolvido para a academia de Jiu-Jitsu **Gracie Barra Laranjeiras do Sul (PR)**. O projeto apresenta a academia, seus programas de treino, grade de horários, o professor responsável e uma galeria de conquistas, com foco em captação de novos alunos.

🔗 **Acesse o site:** [luizmarinello.github.io/gracie-barra-laranjeiras](https://luizmarinello.github.io/gracie-barra-laranjeiras/)

---

## Sobre o projeto

Trata-se de um **site estático** (sem backend ou banco de dados), escolha técnica adequada para um site institucional cujo conteúdo muda pouco. Essa abordagem traz vantagens de desempenho, segurança (não há servidor a ser explorado) e custo zero de hospedagem.

O código é organizado seguindo a **separação de responsabilidades**: estrutura (HTML), estilo (CSS) e comportamento (JavaScript) ficam em arquivos distintos, o que facilita a manutenção e a leitura.

## Funcionalidades

- **Design responsivo** — layout adaptado para desktop, tablet e celular, com breakpoints dedicados e ajustes finos de tipografia e espaçamento.
- **Navegação fluida** — menu fixo com rolagem suave entre seções e destaque automático da seção ativa.
- **Menu mobile** — menu hambúrguer com animação para telas menores.
- **Galeria com lightbox** — fotos das conquistas abrem ampliadas, com navegação por setas, teclado (← → e Esc) e contador de imagens.
- **Grade de horários** — tabela das modalidades (Jiu-Jitsu Adulto, Teen, Kids e Judô) com dica de rolagem horizontal no mobile.
- **Formulário de contato** — com validação de campos no cliente e integração direta com o WhatsApp.
- **Microinterações e animações** — elementos surgem suavemente ao rolar a página (via `IntersectionObserver`), respeitando a preferência `prefers-reduced-motion`.
- **Acessibilidade** — uso de `aria-labels`, foco visível para navegação por teclado e textos alternativos nas imagens.

## Tecnologias utilizadas

- **HTML5** — marcação semântica
- **CSS3** — Flexbox, Grid, `clamp()` para tipografia fluida, variáveis CSS, media queries e animações
- **JavaScript (Vanilla)** — sem frameworks ou bibliotecas externas
- **Google Fonts** — fontes Oswald e Inter
- **Google Maps** — mapa de localização incorporado
- **GitHub Pages** — hospedagem

## Estrutura de pastas

```
site-gb-laranjeiras/
├── index.html          # Estrutura e conteúdo das seções
├── css/
│   └── style.css       # Estilos, responsividade e animações
├── js/
│   └── script.js       # Menu, lightbox, validação e interações
└── img/                # Logo, fotos do professor, programas e galeria
```

## Como executar localmente

Por usar um mapa incorporado, o ideal é servir os arquivos por um servidor local (em vez de abrir o `index.html` direto pelo navegador):

```bash
# Clone o repositório
git clone https://github.com/luizmarinello/gracie-barra-laranjeiras.git
cd gracie-barra-laranjeiras

# Inicie um servidor local (Python 3)
python -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

## Seções do site

| Seção | Descrição |
|-------|-----------|
| **Início** | Apresentação com o lema da academia |
| **Sobre** | O significado do Escudo Vermelho da Gracie Barra |
| **Programas** | As modalidades oferecidas |
| **Horários** | Grade semanal de treinos |
| **Professor** | Perfil do professor Rodrigo Scopel (faixa preta 3º grau) |
| **Galeria** | Fotos de conquistas e momentos da equipe |
| **Contato** | WhatsApp, Instagram, endereço e mapa |

---

## Licença

Projeto desenvolvido para fins de divulgação da academia Gracie Barra Laranjeiras do Sul. As marcas, logotipos e imagens da Gracie Barra pertencem aos seus respectivos titulares.
