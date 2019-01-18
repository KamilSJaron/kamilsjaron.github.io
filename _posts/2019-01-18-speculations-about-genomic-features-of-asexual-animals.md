---
title: 'Speculations about Genomic Features of Asexual Animals'
date: 2019-01-18
permalink: /posts/2019/01/speculations_about_genomic_features_of_asexual_animals/
tags:
  - evolution
  - genomics
  - asexuality
  - heterozygosity
  - transposons
---

About a month ago we have posted [a preprint](https://www.biorxiv.org/content/early/2018/12/17/497495) to bioRxiv about genomic features of asexual animals. We found plenty of cool things I will try to summarize here the main points and mostly do the speculations that were too bold for the manuscript.

The idea behind this study is to

 - avoid conclusions derived out of a single lineage, because every single species is weird in some sense and it's just impossible to tell the difference between lineage specific evolution and a general consequence of asexuality.
 - avoid comparing methodological biases. Looking at the same thing with a different microscope might create a difference that is not really there. We wanted to unify "the microscopes" as much as possible so we have reanalyzed ploidy, heterozygosity and TEs using methods[^1] based on raw reads, not assemblies.

With such a great setting we found genomes of 24 different asexual species that available.

Analyzed species             |  Cellular mechanisms of asexuality
:---------------------------:|:-------------------------------------:
![](https://raw.githubusercontent.com/KamilSJaron/genomic-features-of-asexual-animals/master/figures/presentation/fig1a_sequenced_metazoans_cladogram_presentation.png)  |  ![](https://raw.githubusercontent.com/KamilSJaron/genomic-features-of-asexual-animals/master/figures/presentation/fig1a_legend_cellular_mechanisms_of_asexuality.png) The analyzed species varied greatly in cellular mechanisms of asexuality (colour); ploidy levels (the black points) and origin of asexuality (not in the Figure). The black triangles are **possible** single origins of asexuality

Using argument of Birki, old mitotic "blue" asexuals are expected to carry a lot of heterozygosity (mutations independently accumulated in all of the haplotypes). However, we found no such pattern. Instead of that, all the variability of the dataset was explained by the hybrid origin - regardless of the cellular mechanism.

![](https://raw.githubusercontent.com/KamilSJaron/genomic-features-of-asexual-animals/master/figures/presentation/fig2_heterozygosity_presentation.png)

Fascinating, there are at least two species that should lose heterozygosity over time due to recombination during meiosis. The two are _Diploscapter pachys_ and _D. coronatus_ (the two orange dots on right up). Assuming that literature is right about them being meiotic asexuals there is only one possible explanation - they do not recombine (or recombination is rare and only at the sides of the chromosome - yes this species have one chromosome only!). However, why they don't recombine? Maybe it's just the divergence of haplotypes that physically prevents the recombination. However, this would not explain how comes that all of the hybrid asexuals are heterozygous. My speculation is that these are actually f1 hybrids, they carry full gene sets of both parental species, any loss of heterozygosity must be a process deleterious to fitness. Now imagine the freshly founded asexual population where a small fraction of individuals have lower recombination rates than others. Selection will select for lowly recombining individuals because their offspring will just do better than offspring of happily recombining competitors. So I suspect that recombination will just very fast get selected out.

This ideas are sort of consistent with hybrid zones of sexual species. F1 crosses hardly ever show any lowered fitness in comparison to parents, it's backcrosses that are crewed up... But unlike sexual hybrids, asexual do not have to backcross and therefore I see there this open space for selection against recombination.

So why are there asexual is no heterozygosity at all? Well, absence of recombination and segregation does make selection harder, we all know it from sex chromosomes. Gene conversion (or any force that homogenize haplotypes) can help fight this detrimental process as it was [theoretically shown on Y chromosome](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2997549/). Maybe if the species starts homozygous already, the heterozygosity advantage is not so significant in contrast to benefit to avoid Muller's ratchet by gene conversion. Obviously this is a superspeculation given my data; I would need some non-hybrid mitotic species or compare plenty of meiotic asexuals that are or are not of hybrid origin (the amount of available data is still bit limited)

TODO:

- _M. floridensis_ - according the discussion with Dave Lunt; there must be a meiotic asexual within Meloidogyne - although it's not the one that was sequenced.

- Hybrid origin of _P. virginalis_ - P. fallax; its super strange repetitions

- Genome structure of _A. riciae_ - what they detect can not be an artifact, what i detect either; genome size is completely inconsistent with higher ploidy.


[^1]: We used an extended version of [GenomeScope](http://qb.cshl.edu/genomescope/) for estimates of heterozygosity, [Smudgeplot](https://github.com/tbenavi1/smudgeplot) for estimates of ploidy and [DNApipeTE](https://github.com/clemgoub/dnaPipeTE) to estimate transposons. I declare a conflict of interest - I am a developer of smudgeplot :-)