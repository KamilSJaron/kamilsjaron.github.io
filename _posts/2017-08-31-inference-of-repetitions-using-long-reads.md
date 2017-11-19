---
title: 'Reference-free inference of repetitions using long reads'
date: 2017-08-31
permalink: /posts/2017/08/inference-of-repetitions-using-long-reads/
tags:
  - evolution
  - asexuality
  - genomics
  - inference
  - transposons
  - repetitions
  - long-reads
---

The ultimate goal of my PhD project is to analyze genomic consequences of asexuality.
The species we are working with (Californian stick insects) are real hardcore asexuals - they just clone, they do not recombine (or at least if they do they do very very rarely).
This kind of "pure" asexuality should lead to independent evolution of both haplotypes.
There are a lot of very very cool consequences (think of how a coalescence of haplotypes of couple of individuals should look like), one of them is the activity of transposons (TEs).
All the transposons that were active in asexual genome will leave trace only in one haplotype only,
and it sounds to be a great fun to track them.

The situation around TEs in heterozygous state seems to be delicate,
inference from sort reads seems to be too noisy or reference based (by the brief literature search).
Luckily, we have couple of individuals resequenced using long reads,
so I thought that this will be probably almost trivial - TE inference from long reads.
Sounds like you just find reads containing transposons a look at the unique flanking regions,
extract the flanking regions and search again the raw reads for the flanking regions without TE in it.
Easy, we get a library of homozygous and heterozygous TEs and their flaking regions.

Ha, wait a minute, this sounds way too easy not to be implemented already...
but I could not find anything, so I asked on [twitter](https://twitter.com/KamilSJaron/status/902448223700312064) if it's just me and it seems that it's not... At least, nobody have pointed me into methods exploiting long reads.

Then I gave it another thought, even cooler it would be,
if we would not use a TE library at all.
To do completely de-novo, reference-free annotation of repetitions (not just TEs) using long reads.

Repetitions are the old archenemy of genome assembly and indeed,
there is a brilliant blog post about it.
[How to mask repetitive regions in reads to speed up genome assembly](https://dazzlerblog.wordpress.com/2016/04/01/detecting-and-soft-masking-repeats/).
Then I got the idea to use this piles for the annotation of repeats without any need for a reference (no reference of TEs not the genome, totally referenceless inference).

Challenges I see :
  - recognize reads coming from the same loci given the error rate of long reads if the flanking region will be short
  - do it reasonably fast (suitable for population data)
  - formate output appropriately (sort of feature file?)
  - inference of states from polyploids

### update 17.11.2017

Thanks to brief correspondence with Alexander Suh I found there is method for quantifying a TE abbundance from long reads using reference set of transposon and reference genome called [LoRTE](https://doi.org/10.1186/s13100-017-0088-x). The method takes a reference genome with annotated TEs, extract flanking regions around known TEs in the reference and map these flaking reagions to long reads. If the flaking regions are mapping in an approximately TE distance from each other, it's just a TE in the same position at the reference, if the flaking regions mapping very close to each other, TE is absent in the sequenced individual. All the TEs found in long reads get masked. Then a library of TEs is mapped to masked reads scanning for remaining TEs that are absent in the reference. The procedue is very sound and they also report very good results on benchmarking. However thre is still the downside of the need of a reference genome with annotated TEs.

I just saw a vert new method [RepLong](https://doi.org/10.1093/bioinformatics/btx717) for de novo repeat identification using long read sequencing data. This method is analogical to search for overlaps between reads. It constructs a graph of overlaps and using modularity optimization for identification of more interconnected areas of graph. Apparently I am not the only one who reads dazzlerblog.

My conclusion is that I do not have to invest time in implementation and I am happy that I can use methods of others. 

 Maybe a combined method using both the idea of flanking regions and the idea of overlaps of reads...






------
