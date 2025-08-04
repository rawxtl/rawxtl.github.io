---
layout: default
title: gallery
permalink: /gallery/
---

{% for img in site.data.photos.images %} ![shhh no alt mate. i made it so that it just dumps the asset file on this page with a for loop](/assets/img/{{img}}) {% endfor %}
