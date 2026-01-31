---
title: edwin dileep
layout: default
permalink: /
---

Artis and Programmer, I go by the tag ```rawxtl``` online. Things I like to do are make art, shoot film/photos and program computers

{% include links.html %}

<br/>

**BLOG POSTS**  

**Programming**  
{% for post in site.posts %}
{% if post.category == "programming" %}
{% assign date = post.date | date: "%d-%b-%Y" %}

 - {{ date }} / [{{ post.title }}]({{ post.url }})
 
{% endif %}
{% endfor %}

**Art / Media**  
{% for post in site.posts %}
{% if post.category == "arts" %}
{% assign date = post.date | date: "%d-%b-%Y" %}

 - {{ date }} / [{{ post.title }}]({{ post.url }})
 
{% endif %}
{% endfor %}

**Humanities**  
{% for post in site.posts %}
{% if post.category == "humanities" %}
{% assign date = post.date | date: "%d-%b-%Y" %}

 - {{ date }} / [{{ post.title }}]({{ post.url }})
 
{% endif %}
{% endfor %}

**Ethos**  
{% for post in site.posts %}
{% if post.category == "ethos" %}
{% assign date = post.date | date: "%d-%b-%Y" %}

 - {{ date }} / [{{ post.title }}]({{ post.url }})
 
{% endif %}
{% endfor %}
