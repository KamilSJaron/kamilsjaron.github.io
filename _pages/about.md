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
{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}