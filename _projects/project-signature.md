---
title: "evolutionary processes responsible for species specificity of genomic signature"
excerpt: "How hard is to find a pattern in the chaos?"
collection: projects
---

Genomic signature, kmer frequencies are unique trait if sequences carrying a (more-less) species-specific signal ([Karlin, 1995](http://www.sciencedirect.com/science/article/pii/S0168952500890769); [Karamichalis, 2016](https://doi.org/10.1186/s12859-016-1157-8)). There are attempts to use to reconstruct phylogeny, to detect horizontal gene transfer events or for sorting out metagenomic samples. Well, signature seems like a good statistics for all those applications, but for some reason nobody ever tried to find out, what is actually causing species specificity of genomic signature,

To get a bit of an idea what could possibly lie behind, we decided to associate divergence of all genomic regions to typical genomic signature of the genome and available genomic annotations. This project is my idea that I got when I was trying to develop [SigHunt](https://kamilsjaron.github.io/publications/2014-12-25-SigHunt-horizontal-gene-transfer-finder-optimized-for-eukaryotic-genomes), yet another method searching for candidates for horizontal gene transfer, scalable to eukaryotic genomes. Titouan with bit of my help is working on the project. Progress is publicly available on his GitHub repo: [SouVarGenSig](https://github.com/UrsusSalificus/SouVarGenSig) (there is not much yet).

If you are wondering about the link of genomic signature to chaos, the keyword to look for is "Chaos game representation".
