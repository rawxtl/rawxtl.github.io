---
layout: default
title: recommendations
permalink: /recommendations/
---

**songs** 

{% for song in site.data.recommendations.songs %}
[{{song.name}}]({{song.url}}) {{song.desc}}  {%endfor%}

<br/>

**movies**  

{% for movie in site.data.recommendations.movies %}
[{{movie.name}}]({{movie.url}}) {{movie.desc}}  {%endfor%}

<br>
<br>
        
<!-- **recommendations on** -->
