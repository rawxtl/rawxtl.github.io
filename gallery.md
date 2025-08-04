---
layout: default
title: gallery
permalink: /gallery/
---

{% for image in site.data.photography %}
![{{ image.desc }}]( /assets/img/{{image.url}})
{% endfor %}
