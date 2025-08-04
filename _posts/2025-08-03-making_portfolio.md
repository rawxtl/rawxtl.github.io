---
layout: blog
title: making my first portfolio

credits: Edwin Dileep
tldr: >-
  my first website, made using jekyll and github pages. an easy and straight forward process
  from development to deployment. i like the simplicity in jekyll, generating static html for simple
  and common needs. no react, not typescript or javascript for the most part at least. it's light
  weight yet so powerful!
---

at the time of this writting the website i see on the screen is built using jekyll and hosted on github pages. i always wanted to  make a personal website but the thought of starting a new node project would haunt me. back then i was naive and didn't knew anything about websites or hosting, but as time went on and after i started using markdown for documenting and writing the though of making a portfolio website came back to me multiple times.

initially i thought of using a markdown transpiler to spit the html out and host it. but when i started looking for solutions there were like none. i don't know why but i could't find a simple proper markdown transpiler on the internet. if there were one then it would be some kind of javascript library which would interpret the markdown from a string. i was lazy to build a full on library to load & read files using node and all those other stuff. i just needed something simple and easy to get started with. i could spend time build a whole framework, but to what. i have no experence blogging or writting on the internet. i would start building and rewritting the whole thing again and again.

but for a few weeks i really wanted to make this portfolio and move on, it's in back on my head and i just wish to complete it. so i start writing a simple markdown file with all the headings, paragraphs etc. to feed into a library called [marked.js](https://marked.js.org/), this would turing any markdown string i feed into it to html. and with the help of umm.. chatgpt i wrote a simple function to open that file. i really don't work with javascript i hate it. anyway after doing that i served the file using ``npx serve`` to localhost the file. and there it was, a html document with all the headings, paragaphics and links. later i implement a simple system to fetch the id from a ``div`` and that id would be the file name / file containing markdown for that page. the javascript function would open the file and change the innerhtml to the whatever was in the markdown file.

this was super easy super simple, and now i just want to deploy it to the internet so i start by creating a new git repo and set up github pages, next thing i know. there was the page i made on _rawxtl.github.io_. i was happy and suprised that it worked and  everything i needed was there which is markdown and css.

but problems came when i wanted to write pages and blogs. i knew the drawback of the ``div`` hack to implement file operation would come at a cost of making a html file for each page, like how it would be normally and an additional markdown page. 1 to 1 for all pages doubling the files in my project. maybe i could have implemented enums and change id of the ``div`` when i clicked on a navigation link. but then i would lose the ability to share pages with other because the base url can only be rawxtl.github.io.

so back to the drawing board. while trying to find another solution i remember seeing a paragraph on the setting up github pages website "``style your site with jekyll``" so i go back to see what it was. and oh my lord was it everything i wanted, ever. i could't look for a perfect tool for my job. and under my nose the whole time.

i could't express the combination of perfect technologies together, yml for data serialisation and liquid for looping, branching and storing values. i quickly became familiar with the project structure and file structure. got back to where i was not in minutes but sure quickly. jekyll also solve one other problem i had which is also a problem in html which is you have to rewrite common elements again and again. in obsidian you can use templates. but i didn't have templates or the patience to build a templating system.

with _layout & _includes leveraging the power of liquid you can just insert sections and wrap around sections / layout. just robust & powerful. unfortunately i don't take full advantage of it, the site the time of writting is simple and minimal. but the way it is implemented in jekyll is simply amazing.

and ther is also a dedicated bloging system. under _posts you can make a file with yyyy-mm-dd-title.md and ther you have it.

it becomes even more powerfull with jekyll variables and how it leverages yml, you can virtually pull any kind of data from a file if it has one. for example the tl;dr for this blog is a value in front matter which is just yml inside markdown. i pull this data into blog.html a layout file for the blog and insert it into the header. it's absolutely insane how this framework uses yaml and liquid together. 

in conclusion it was an amazing experence making this site. and would like to finsh on the matter that this is my first blog and is not at all polished in language or grammer even.. but if you read all this way thank you.
