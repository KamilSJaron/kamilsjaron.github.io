---
title: 'Loss of heterozygosity during inbreeding'
date: 2017-01-28
permalink: /posts/2017/10/inbreeding_heterozygosity_loss/
tags:
  - evolution
  - inbreeding
  - sex
  - heterozygosity
---



# Loss of heterozygosity during inbreeding

This beauty is _Bacillus rossius_ a proud mum of the tiny green stick insect crawling over her. You are maybe asking, who is father? Well, it's her brother.

![bacillus_rossius](https://raw.githubusercontent.com/KamilSJaron/inbreeding_heterozygosity_loss/master/figures/bacillus_rossius_mum_with_baby.jpg)

I wanted to have a stick insect pets in my office.
They are very friendly and low maintenance animal and one have a lot of fun with them.
However having pets just for sake of having pets is kind of boring,
therefore I have decided to keep at least an inbreeding line.
You might wonder what kind of sick person I am when I want to stick insect siblings mate in my office.
It's not that strange for people in genomics to keep inbreeding lines to reduce heterozygosity to negligible levels, so when the genome is sequenced it's efficiently haploid and thus easier to assemble.
I am not planning to sequence _Bacillus_ genome, but if I ever decide to do so, I will have my fully homozygous lineage ready.

While watching stickies mate I started to wonder how much heterozygosity lose every generation.
At beginning I believed that this might be known for long time, but I could not find satisfactory answer online. The best I found is this scheme by [James Mallet and Kevin Fowler](http://www.ucl.ac.uk/~ucbhdjm/courses/b242/InbrDrift/InbrDrift.html), where "F = probability that two alleles in an individual are identical by descent (IBD)" :

![inbreeding_scheme](http://www.ucl.ac.uk/~ucbhdjm/courses/b242/InbrDrift/inbr.gif)

And I started to wonder, how this suppose to work? If both siblings are heterozygous at a locus and not sharing even one allele, then impossible to produce homozygous offspring. I mean, F jut got to be dependent on initial loci state.

## Markov chain inbreeding model

So I have decided to do my own [Markov Chain](https://en.wikipedia.org/wiki/Markov_chain) to describe the situation completely. I realized that if I do not care about actual genotype, but only about heterozygosity, I do not have to explore more than seven different states. The most extreme case of four different alleles in the siblings have just one possible layout `AB CD`. Three allelic states can be either homozygote and heterozygote `AA CD` or two heterozygotes sharing an allele `AB AC`. Since we are not interested in genotype `AA CD` is equivalent of `CC AD` or `AC DD`, the only aspect we have to take into account is the layout of alleles among two individuals. Two allelic states have three different layouts : `AA BB`, `AA AB` and `AB AB`. Finally monoallelic state is the absorb state `AA AA` - the one that is impossible to escape if we neglect mutations.

I calculated transition probabilities between states manually on whiteboard, you can find them in the [markov chain matrix](https://github.com/KamilSJaron/inbreeding_heterozygosity_loss/blob/master/data/inbreeding_mc.tsv) or illustrated on the following scheme. The sanity check was that sum of all outgoing transition probabilities is always one ("leaving" arrows) :

![mc_scheme](https://raw.githubusercontent.com/KamilSJaron/inbreeding_heterozygosity_loss/master/figures/markov_chain_scheme.png)

Then calculating mean time of reaching absorb state can be achieved through fundamental matrix (take a look on lines 7 - 27 in [the R script](mc_analysis.R)), see following table

| initial state  |  mean number of generations  |
| -------------- | ---------------------------- |
|     AB  CD     |         7.667                |
|     AB  AC     |         6.667                |
|     AA  BC     |         7.167                |
|     AB  AB     |         5.667                |
|     AA  AB     |         4.834                |
|     AA  BB     |         6.667                |

One locus will get homozygous on average in 5 - 8 generations dependent on initial state. I was actually surprised how high the number is even for initial states that are very close to the goal like `AA AB`. Have I done a mistake somewhere? If you find it, I would be grateful.

I would also like to know exact probabilities of reaching homozygous state given generation and state. I did not know how to do it elegantly so I have done a lot of matrix multiplication (lines 30 - 64 in the R script) and here I plotted probability of being homozygous against inbreeding generation.

![heterozygosity_loss](https://raw.githubusercontent.com/KamilSJaron/inbreeding_heterozygosity_loss/master/figures/heterozigosity_loss_during_inbreeding.png)

Interesting, it seems that indeed after ~10 generations I can be quite sure that a locus will be homozygous regardless of the initial state.

I was initially interested in potential sequencing of the genome. Then single locus solutions are not exactly what I am searching for. So I calculated probabilities of being fully homozygous given number of independent loci and inbreeding generation. The logic behind is that linked loci will homogenise in the vary same fashion as the loci we actually calculate probabilities of. Reasonable could be to take twice number of chromosomes, however this choice should be very much dependent on recombination rates, and those can vary several order of magnitudes between different species (look at [this review](http://rstb.royalsocietypublishing.org/content/372/1736/20160455) if interested in recombination rates). I assumed a single type initial state `AB  CD` or `AA  AB` ([see the other Figure](https://raw.githubusercontent.com/KamilSJaron/inbreeding_heterozygosity_loss/master/figures/heterozigosity_loss_num_of_AAAB_loci.png)), but it's basically same thing shifted 5 generations to earlier.

![heterozygosity_loss_vs_loci](https://raw.githubusercontent.com/KamilSJaron/inbreeding_heterozygosity_loss/master/figures/heterozigosity_loss_num_of_ABCD_loci.png)

It seems that to get fully homozygous genome I will need to wait ~30 generations. That sounds annoying. Maybe I should figure a better way to expand analysis to multiple loci. The probability of fully homozygous genome is too much, I should probably focus on probability of at least 95% of genome homozygous or maybe directly calculate proportion of homozygous loci in genome with confidence intervals... maybe another time.

------
