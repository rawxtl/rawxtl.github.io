---
layout: default
title: recommendations
permalink: /recommendations/
---

**songs** 

{% for song in site.data.recommendations.songs %}
<a href="{{ song.url }}" class="foregroundclr">
        {{ song.name }}
</a>
<span class="hyperlinkclr">{{ song.desc }}</span>  {% endfor %}  

<br/>

**movies**  

{% for movie in site.data.recommendations.movies %}
<a href="{{ movie.url }}" class="foregroundclr">
        {{ movie.name }}
</a>
<span class="hyperlinkclr">{{ movie.desc }}</span>  {% endfor %}  

<br>
<br>
        
<!-- **recommendations on** -->
