---
title: edwin dileep
layout: default
permalink: /
---

programmer / designer / artist, grew up watching code bullet and learned how to code.
started making art then learned art & design from college, dropped out. now trying to make 
a movie

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
