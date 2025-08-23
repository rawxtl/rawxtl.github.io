---
title: edwin dileep
layout: default
permalink: /
---

<!--i'm edwin dileep, programmer / designer / photographer.  
makes art, random programming projects and takes pictures. i did art & design for my college, learned to do ceramics, pattern making, textiles, animation and sculpting. most of the time i work on random programs drink [redbull](https://www.redbull.com) sleep and repeat.  

my passion right now is to learn about film and make a good contribution. film is an influential and powerful medium of communication, and so wish to make one. hopefully inspiring or helpful to others.


{% assign latest_blog = site.posts | first %}
these are some artists i like listening to{% for artist in site.data.artists %}, [{{artist.name}}]({{artist.url}}){% endfor %}   

checkout my stuff from the links below or read my latest blog -- [{{ latest_blog.title }}]({{ latest_blog.url }})-->

{% include links.html %}

<br/>

**BLOG POSTS**
{% for post in site.posts %}
{% assign date = post.date | date: "%d-%b-%Y" %}
 - {{ date }} / [{{ post.title }}]({{ post.url }})
{% endfor %}
