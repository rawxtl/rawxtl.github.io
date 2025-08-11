---
layout: default
title: gallery
permalink: /gallery/
---
<div class="gallery">
{% for img in site.data.photos.images %} 
<img src="/assets/img/{{img}}"/>
{% endfor %}
</div>
