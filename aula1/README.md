# Aula 1 Fábrica de Programador - T24

<div style="text-align: right">09/02/2019</div>

## Objetivo da Aula

O objetivo da aula foi criar a seguinte tela de login:

![Login](screen1.png)

## Resumo da Aula

Nesta aula conhecemos a IDE Visual Studio Code, assim como as linguagens de marcação: HTML5 e CSS3.

Criamos uma pasta chamada `fabrica-t24` e a abrimos no VSCode (Visual Studio Code). Após isso criamos a pasta `aula1` dentro da pasta já aberta.

Depois das pastas, criamos o arquivo `login.html`. Foi explicado como o HTML funciona e suas `tags`. Lembrando que as `tags` HTML tem o seguinte formato:

```html
<tag atributo="valor">
```
Onde:

+ `tag` é o nome do elemento (ou nome da *tag*) (ex: body, head, h1, form, input, etc).
+ `atributo` é indica uma configuração comportamental que iremos fazer na `tag`.
+ E o `valor` que está entre as aspas representa do valor da configuração indicada no `atributo`. É importante lembrar que o VALOR de um abtributos de *tag* SEMPRE devem estrar entre aspas

Por exemplo, no seguinte código:
 
```html
<input type="password"
```
Temos o elemto (*tag*) sendo o `input` que representa um caixa de entrada, e o `type` sendo `"password"`. Lembra-se que o atributo de *tag* representa um comportamento? Pois bem, o atributo `type` do `input` diz qual é o tipo de dado permitido como entrada. É importante frisar que o funcionamento do atributo depende do elemento elemento que o possui. Por exemplo, o elemento `h1` não suporta o atributo `type`. O que aliás faz todo sentido, pois como eu poderia dizer qual é o "tipo" da "entrada" de um `h1` sendo que ele é um título, ou seja, não tem entrada.

Depois vimos como se uma página HTML com o próprio VSCode, utilizando o seu recurso de autocompletar (autocomplete). A estrutura do documento, por padrão, fica assim:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Onde:
+ `DOCTYPE html` indica que este é um documento HTML5
+ `html` indica o início e o fim do documento HTML
+ `head` é a *tag* de cabeçalho do documento e indica o comportamento do mesmo
+ `meta charset="UTF-8"`
+ `meta name="viewport"`
+ `meta http-equiv="X-UA-Compatible"`
+ `title` indica o título do documento, e fica visível na aba do navegador (browser)
+ `body` é o corpo do documento e contém toda a parte visível da nossa página