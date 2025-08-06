---
layout: default
title: blogs
permalink: /blogs/
---


**blog posts**
{% for post in site.posts %}
{% assign date = post.date | date: "%B-%d-%Y" %}
 - {{ date | downcase }} / [{{ post.title }}]({{ post.url }})
{% endfor %}

<br />
<br />
<br />
<br />
