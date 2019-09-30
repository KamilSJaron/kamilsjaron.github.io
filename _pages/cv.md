---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======

* Ph.D in Evolutionary bioinformatics, Department of Ecology and Evolution, University of Lausanne, 2019
* M.Sc. in Mathematical biology, Institute of Biostatistics and Analyses, Brno, Czech Republic, 2015

Work experience
======

* October 2019 - now
  * Institute of Evolutionary Biology, The University of Edinburgh

* September 2015 - September 2019
  * Department of Ecology and Evolution, University of Lausanne

* Summer 2014, 2015: Data analyst
  * Institute of Vertebrate Biology, Academy of Sciences, Czech Republic
  * Analysis of quantitative PCR
  * Supervisor: Natália Martínková

* Summer 2012: Laboratory technician
  * Institute of Vertebrate Biology, Academy of Sciences, Czech Republic
  * DNA isolation, primer design, optimization of PCR reactions
  * Supervisor: Natália Martínková

Skills
======
* data processing, analysis and visualization in R, Python
* data project management
  * automatization using GNUmake, bash
  * documentation using markdown or LaTeX
  * version control using git
  * cluster computing
* bit of programming in C++

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
