---
title: "SigHunt: horizontal gene transfer finder optimized for eukaryotic genomes"
collection: publications
permalink: /publications/2014-12-25-SigHunt-horizontal-gene-transfer-finder-optimized-for-eukaryotic-genomes
excerpt: 'A scalable method for prediction of candidates for horizontally transferred genes.'
date: 2013-12-25
venue: 'Bioinformatics'
paperurl: 'http://doi.org/10.1093/bioinformatics/btt727'
citation: 'Kamil S. Jaron, Jiří C. Moravec, Natália Martínková; SigHunt: horizontal gene transfer finder optimized for eukaryotic genomes. Bioinformatics 2014; 30 (8): 1081-1086. doi: 10.1093/bioinformatics/btt727'
---

This was a project of despair. I have seen how terribly ineffective and wrong are previous methods for the same purpose. In performance we beat the other tools, in accuracy of prediction, we have not improved much thought. Since then a couple new tools got published and a few of them learned from our mistakes, for the prediction of horizontally transferred genes I would recommend to try [MTGIpick](https://doi.org/10.1093/bib/bbw118) first.

The big advantage of SigHunt is that you can access intermediate results all the way though. SigHunt is open source mostly written in R with bits in C available on the [webpage](https://www.iba.muni.cz/index-en.php?pg=research--data-analysis-tools--sighunt) of the institution we studied at the time.

Jiří made a great work at the time (only if I would understand a concept of shared co-authorship back then, he would definitely deserved it), but he have not stopped there, he created a new (cleaner) implementation with unit-tests. It does not contain all functionalities of the original package, but most of it. So if you would like to play with HGT predictions, [there you go](https://github.com/J-Moravec/sighunt).
