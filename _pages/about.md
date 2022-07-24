---
permalink: /
title: "Gene flow - page about admixture"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hi, I am Kamil. (Now I am testing new layout of this page.) This is my personal blog about my immature (mostly) evolutionary thoughts! I also have this poorly maintained collections of [peculiar genomic observations](https://kamilsjaron.github.io/peculiar-genomic-observations/) and my professional webpage (under construction).

### Blogposts

{% include base_path %}
{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}