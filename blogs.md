---
layout: default
title: blogs
permalink: /blogs/
---


**BLOG POSTS**
{% for post in site.posts %}
{% assign date = post.date | date: "%d-%b-%Y" %}
 - {{ date }} / [{{ post.title }}]({{ post.url }})
{% endfor %}

<br />
<br />
<br />
<br />
