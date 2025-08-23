---
layout: recommendations
title: recommendations
permalink: /recommendations/
---

**SONGS** 

{% for song in site.data.recommendations.songs %}
[{{song.name}}]({{song.url}}) {{song.desc}}  {%endfor%}

<br/>

**MOVIES**  

{% for movie in site.data.recommendations.movies %}
[{{movie.name}}]({{movie.url}}) {{movie.desc}}  {%endfor%}
