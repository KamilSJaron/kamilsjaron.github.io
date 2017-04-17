---
title: 'Initial point of secondary contact'
date: 2017-01-28
permalink: /posts/2017/01/initial-point-of-secondary-contact/
tags:
  - evolution
  - speciation
  - hybrid zones
  - secondary contact
  - Conjunction
  - simulation
---

One of the most basic questions of evolutionary biology remains unanswered - how do species evolve? And what makes species separated species? What is causing sexual reproduction barrier between sister taxa? One of very popular systems for study of speciation are [hybrid zones](https://en.wikipedia.org/wiki/Hybrid_zone).

Hybrid zones are formed when one species has two non-admixing populations (usually due to geographical separation). As time goes, populations diverge and mating between individuals from different populations becomes more and more difficult. However, sometimes happens that two semi-diverged populations meet again. This event is called secondary contact. Mating of individuals from different populations leads to hybrid offspring, but with lower fitness than parental populations, which causes barrier to gene flow (therefore the name of my blog). If the divergence of two parental populations is small enough, eventually genetic background will homogenize to one species once again.

Yes, we have cases where genetic background defining species is known, but we still do not know if those incompatibilities existed already at the time of initial secondary contact or if any incompatibilities got lost on the way...

The two main models of formation of sexual reproduction barrier are Dobranzsky-Muller incompatibilities and Wiright's rugged fitness landscapes (reviewed in [Models of speciation: where are we now?](https://www.ncbi.nlm.nih.gov/pubmed/25149251)). The first scenario assumes only neutral evolution of both populations and incompatibilities are rising because of absence of selection against combinations of variants occurring in separated populations. Rugged fitness landscapes describe speciation as two distinct optima in fitness landscape (supposedly driven by positive selection). Despite of the lack of theory predicting scenarios with very few loci of divergence ([Genetic Revolutions, Founder Effects, and Speciation](http://www.annualreviews.org/doi/abs/10.1146/annurev.es.15.110184.001025)) there is a lot of effort to identify magical traits that define species (reviewed in [Magic traits in speciation: ‘magic’ but not rare?](http://www.cell.com/trends/ecology-evolution/abstract/S0169-5347(11)00113-3)).

Either the way, it is more and more obvious that we need mathematics in studies of speciation ([Mayr, mathematics and the study of evolution](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2687772/) or the mentioned review of Gavrilets). I very much agree, I would just use different wording - we need rigour, not mathematics. A lot of recent papers using simulations do not provide compilable source code ([for instance](http://www.pnas.org/content/113/4/E440.abstract)) or provide source code, but have not bothered to test if their code is working ([The genetic architecture of hybrid incompatibilities and their effect on barriers to introgression in secondary contact](http://onlinelibrary.wiley.com/doi/10.1111/evo.12725/abstract)), the problem of those studies is not a lack of mathematics, but rigour.

In 2014 I started to work on my Master thesis with Stuart JE Baird (he is conceptual father of all my work) and in mid 2015 I graduated presenting my simulator in my [master thesis](http://is.muni.cz/th/376090/prif_m/thesis_jaron_zadani.pdf). I made a big effort to generate rather clean, fast and generic code with decent documentation and logical structure using Fisher's junction model for chromosomes. And I verified my simulator against standard hybrid zone literature (according tests in appendix of [Genetic Analysis of Hybrid Zones](https://books.google.ch/books?hl=cs&lr=&id=aFJFkVKskYIC&oi=fnd&pg=PA13&ots=MDjZjhN8QL&sig=SSA-EVcSfQyyixnw-esRLFJMn_Y&redir_esc=y#v=onepage&q&f=false)). Unfortunately, I did not managed to make any meaningful conclusion during my masters.

As a result I am playing with my simulator called [Conjunction](https://github.com/KamilSJaron/Conjunction) (Simulator of secondary CONtact using fisher's JUNCTION representation of genome admixture) during evenings end weekends. With kind help of Amina Echchiki we developed a R package to analyse output of simulator: [ConjunctionStats](https://github.com/KamilSJaron/ConjunctionStats) and finally we are preparing (for very very long time) a manuscript with is slowly reaching a bioRxiv quality and all the analyses we performed for the publication are available in the repository [ConjunctionExamples](https://github.com/KamilSJaron/ConjunctionExamples).

------
