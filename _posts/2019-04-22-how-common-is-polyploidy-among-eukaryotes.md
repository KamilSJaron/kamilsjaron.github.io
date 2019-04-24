---
title: 'How common is polyploidy among eukaryotes?'
date: 2019-01-18
permalink: /posts/2019/04/2019-04-22-how-common-is-polyploidy-among-eukaryotes/
tags:
  - evolution
  - genomics
  - polyploidy
---

This easter I have spent on thinking / writing / editing of an introduction to the paper about [smudgeplot](https://github.com/KamilSJaron/smudgeplot) - a tool for predicting ploidy and visualization of genome structure.
I collaborated on this tool for my own data, I have not really thought through how far it goes, so I started to wonder how many polyploid species are out there.
So I asked on Twitter and guess what, so many people have responded to the [tweet](https://twitter.com/KamilSJaron/status/1119582741023076352) that I have decided to compile the answers in a blogpost.

### polyploidy in exant species

When I originally posted the question. The I actually meant the distribution among extant species. So here is a list of different taxonomical groups (they are bit random, sorry for that):

* Flowering plants
  - [Meyers & Levin 2007](https://doi.org/10/bgbg5f): "Over 70% of all angiosperm species have a ploidal level increase somewhere in their evolutionary histories"
* Red algae
  - [Varela-Álvarez et al. 2018](https://www.nature.com/articles/s41598-018-26796-5): Study of three species of _Porphyra_. "Multiple ploidy levels and genome sizes were found in Porphyra _Porphyra_ species." and apparently it's not a simple polyploidy, but it's a bit messier: "In _P. linearis_, genetic differentiation was found among three polyploid lineages: triploid, tetraploid and mixoploids, representing different evolutionary units."
* Frogs
  - [Novikova et al 2019](https://doi.org/10.1101/593699): three indipendent polyploid species of Australian burrowing frogs in the genus _Neobatrachus_ (9 species seuqenced)
* Mollusks
  - [Goldman and LoVerde 1981](https://www.jstor.org/stable/2408272): Hybrid origin of polyploidy in freshwater snails from genus _Bulinus_. Species of _Bulinus_ complex are naturally in diploid, tetraploid, hexaploid and octoploid states.
* Fungi
  - [Campbell et al. 2016](https://www.ncbi.nlm.nih.gov/pubmed/27860510)
  - [Jackson et al. 2018](https://www.nature.com/articles/s41586-018-0030-5) They have done a whole-genome sequencing of 1,011 _Saccharomyces cerevisiae_ isolates, mixture of wild and domesticated samples. Domesticated isolates exhibit high variation in ploidy, aneuploidy: 11.4% were polyploid (various ploidy levels) and 24.3% of the strains exhibited aneuploidy of at least one chromosome.
  - [Todd et al. 2016](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5656283/)
* Amoebas
  - [Demin et al. 2018](https://link.springer.com/article/10.1134/S1990519X18010054) _Amoeba proteus_ and _A. borokensis_ shows something called “Cyclic polyploidy”
* _Ciliates_
  -  [Chen 1940](https://doi.org/10.1073/pnas.26.4.239): Polyploidy commonly found in _Paramecium bursaria_ is probably resulting from fusion of more than two pronuclei during conjugation.
* Archea
  - [Soppa 2011](http://www.biochemsoctrans.org/content/39/1/150): "Euryarchaea are typically oligoploid or polyploidy and their genome copy numbers are tightly regulated in response to growth phase and/or growth rate."

Contributions by [Thomas Wolfe](https://twitter.com/MupdnW), [Murray Cox](https://twitter.com/DrCompBio), [The Tattooed Future Fellow](https://twitter.com/schwessinger), [Mathieu Clément-Ziza](https://twitter.com/zetieum), [Mason Linscott](https://twitter.com/mason_linscott), [Cami Rosso](https://twitter.com/tweetycami).

### Paleopolyploidy

Polyploidy was the ancestral state of many big taxonomical groups we focused on - like two rounds of whole genome duplications[^1] in vertebrates, bony fishes, vast majority of land plants and likely lot more.

* Insects
  - [Li at al. 2017](https://doi.org/10.1073/pnas.1710791115): "evidence for 18 ancient WGDs and at least six other bursts of gene duplication during the evolution of insects."

* General (two recent reviews):
 - [Van de Peer et al. 2017](https://www.nature.com/articles/nrg.2017.26)[^2]
 - [Blischak et al. 2018](https://doi.org/10.1146/annurev-ecolsys-121415-032302): "In this review, we discuss the prevalence of polyploidy across the tree of life"

Contributed by [The Tattooed Future Fellow](https://twitter.com/schwessinger) and [Nils Arrigo](https://twitter.com/nilsarrigo)

### consequences of polyploidy

Here the topic is too complex, so I will just provide paper titles and links:

* General
  - [Otto 2007](https://doi.org/10.1016/j.cell.2007.10.022): The Evolutionary Consequences of Polyploidy
  - [Baduel et al. 2018](https://doi.org/10.3389/fevo.2018.00117): The “Polyploid Hop”: Shifting Challenges and Opportunities Over the Evolutionary Lifespan of Genome Duplications
* Fungi
  - [Selmecki et al. 2016](https://www.nature.com/articles/nature14187): Polyploidy can drive rapid adaptation in yeast
  - [Lu et al 2016](https://doi.org/10.1371/journal.pgen.1006409): Experimental Evolution Reveals Interplay between Sch9 and Polyploid Stability in Yeast
  - [Albertin & Marullo 2012](https://doi.org/10.1098/rspb.2012.0434):  Polyploidy in fungi: evolution after whole-genome duplication

Contributions by [The Tattooed Future Fellow](https://twitter.com/schwessinger)

### polyploidy within organisms

Reviewed in [Edgar and Orr-Weaver 2001](https://bit.ly/2W2oevv): In many animal some cells undergo endoreplication and generate somatic polyploid cells:
- neurons, cardiac and skeletal muscle cells, megakaryocytes, trophoblast and other extra-embryonic cells (placenta) are polyploid. Hepatocytes are tetraploid.
- _Ciliates_ (_Alveolata_) carry a diploid micronucleus (the germline of the cell) but also a polyploid macronucleus (the somatic nucleus; the one that carries all the gene expression and regulation).
- There is the ever popular insect salivary gland polytene cells.
- _C. elegans_ have polyploid intestine cells.

Contributions by [Wallace Marshall](https://twitter.com/WallaceUcsf), [Benoit Bruneau](https://twitter.com/benoitbruneau), [Amy Shaub Maddox](https://twitter.com/AmyShaubMaddox), [Cami Rosso](https://twitter.com/tweetycami) and [Erika Anderson](https://twitter.com/Erikacander). Since it's bit off my own interest I have not tried to look up for sources of the individual statements.

<!-- ### Discussion -->
<!-- There was a discussion about it (check) -->

[^1]: I use here whole genome duplication for consistency with literature, however I dislike it very much because it sort of suggest that the ancestor was autopolyploid. However we have no information about the origin of duplication, the ancestral polyploid could be as well of a hybrid origin - allopolyploid.

[^2]: They call polyploidy an evolutionary dead. I find that strange since there are so many lineages with polyploid ancestors. Perhaps I am missing something, but if nothing else it's very confusing notation.

