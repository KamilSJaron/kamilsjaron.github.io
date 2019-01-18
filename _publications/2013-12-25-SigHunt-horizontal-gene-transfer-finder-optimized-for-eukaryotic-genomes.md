---
title: "SigHunt: horizontal gene transfer finder optimized for eukaryotic genomes"
collection: publications
permalink: /publications/2013-12-25-SigHunt-horizontal-gene-transfer-finder-optimized-for-eukaryotic-genomes
excerpt: 'A scalable method for prediction of candidates for horizontally transferred genes.'
date: 2013-12-25
venue: 'Bioinformatics'
paperurl: 'http://doi.org/10.1093/bioinformatics/btt727'
citation: 'Jaron, K.S., Moravec, J.C. and Martínková, N., 2013. &quot;SigHunt: horizontal gene transfer finder optimized for eukaryotic genomes.&quot; <i>Bioinformatics</i>, 30(8), pp.1081-1086.'
---

This was a project of despair. I have seen how terribly ineffective and wrong are previous methods for the same purpose. In performance we beat the other tools, in accuracy of prediction, we have not improved much though. Since then a couple new tools got published, currently I would recommend for naive prediction of horizontally transferred genes [MTGIpick](https://doi.org/10.1093/bib/bbw118). I never tried it, but the paper introduces some really neat ideas.

The reason why somebody might be interested in SigHunt is that you can access intermediate results all the way through, we also provide a toolkit to explore genomic signatures (at least a bit). SigHunt is open source mostly written in R with one external program in C available on the [webpage](https://www.iba.muni.cz/index-en.php?pg=research--data-analysis-tools--sighunt) of the institution we studied at the time.

Jiří made a great work at the time (only if I would understand a concept of shared co-authorship back then, he would definitely deserved it), but he have not stopped there, he created a new (cleaner) implementation with unit-tests. It does not contain all functionalities of the original package, but most of it. So if you would like to play with HGT predictions check the [R package](https://github.com/J-Moravec/sighunt) he made.

The follow up of this project is the project of Titouan - [evolutionary processes responsible for species specificity of genomic signature](https://kamilsjaron.github.io/projects/project-signature/). We tried to look at where the species specificity of genomic signature comes from.
