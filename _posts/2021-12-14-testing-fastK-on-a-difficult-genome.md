---
title: 'Testing FastK on a difficult genome'
date: 2021-12-14
permalink: /posts/2021/12/2021-12-14-testing-fastk-on-a-difficult-genome/
tags:
  - genomics
  - kmers
  - benchmarking
---


### Testing FastK on a difficult genome

The world of kmer genomics once per while comes with a new way how to do things and speed up computations. Sometimes the tricks are simply more efficient algorithms, but sometimes the tricks are shortcuts that don't do excatly the same thing.

[Gene Myers](https://www.mpi-cbg.de/research-groups/current-groups/gene-myers/group-leader/) last year shared on GitHub his fork of GenomeScope v2.0 that works on turnicated kmer spectra [GENESCOPE.FK](https://github.com/thegenemyers/GENESCOPE.FK) calculated by his new ultrafast kmer counter [FastK](https://github.com/thegenemyers/FASTK). I immediately started writing this blogpost and then I fogot about it. So, with a year delay, here is testing of the software on a difficult genome, compared to the tools I routinely use.

The difficult benchmarking genome I picked is the triploid Marbled Crayfish genome ([Gutekunst et al. 2018](https://www.nature.com/articles/s41559-018-0467-9)). The genome contains several super-repetitive genomic kmers that were messing up all the initial kmer analyses of the genome ([check this older blogpost](https://kamilsjaron.github.io/peculiar-genomic-observations/biological/2020/01/crayfish.html)).

The aim of this blog is to:
  1. clarify the difference between the two approaches to calculate k-mer spectra
  2. Comparing quality of GenomeScope fits to the two spectra
  3. Benchmark the speed of the two k-mer counters
  4. BONUS: the effect of trimming to the quality of fit

To see how exactly I did analyses for this blog, see Methods sections bellow.

### The practical difference between KMC and FastK

`KMC` is a k-mer counter that is "giving-up" on k-mer coverage over a threshold specified by parameter (`-cx`). Every k-mer with coverage higher than that will be simply reported as with `cx` coverage. This is what is causing problems with the real k-mer coverage is a lot higher for plenty of real genomic k-mers ([as discussed in that already linked older blogpost](https://kamilsjaron.github.io/peculiar-genomic-observations/biological/2020/01/crayfish.html)).

`FastK` on the other hand uses a different strategy - it calculates coverages in fixed coverage range 1 to ~2^15x (32768). And for all k-mers with coverage above, it calculates the total count. Furthermore, `Histex` (`FastK` tool to make histograms) produces histograms of freqiencies of coverages for all but the last calculated coverage values (by default 100x). The last frequency does not represent the number of distinct k-mers with this coverage or higher (as in KMC), but the theoretical number of distinct k-mers with that coverage and would generate the same coverage as the repetitive k-mers.

To demonstrate what I mean, check the following R snippet

```R
# load the two histograms
fastK <- read.table('histograms/FastK_k17_default.hist', col.names = c('cov', 'freq'))
tail(fastK)
#     cov       freq
# 95   95    2425866
# 96   96    2374469
# 97   97    2324463
# 98   98    2274766
# 99   99    2228325
# 100 100 1548557290

KMC <- read.table('histograms/KMC_k17_full.hist', col.names = c('cov', 'freq'))
# tail(KMC)
#              cov freq
# 219790 137051330    1
# 219791 137414120    1
# 219792 195670290    1
# 219793 197284708    1
# 219794 388684031    1
# 219795 393157371    1
# this histogram has a long tail with few kmers with extremly high coverage

# the first 100 values of the two histograms are the same
all(fastK$freq[1:99] == KMC$freq[1:99])
[1] TRUE

# However, the high frequency k-mer behave a bit differentially
KMC_high_freq <- KMC[100:nrow(KMC), ]
sum(KMC_high_freq$cov * KMC_high_freq$freq)
[1] 154855729017

# and cov*freq of k-mers > 100x is 100x"the number of fastK kmers with coverage >100"
fastK$freq[100]
[1] 1548557290
```

So the difference is that while KMC is able to inform us about exact frequencies of k-mers and their repetitiveness, fastK is limited to 32768x. However, we needed to calculate all k-mer explicitly with KMC to get the right genome size estimate, FastK trick actually does not hinder the estimate as the genome size is practically `(cov * freq) / (1n_kmer_coverage * ploidy)`.

### Fitted models

Alright, now we understand the difference between approaches. We fit two models - KMC histogram with regular GenomeScope 2.0 and FastK using the adjusted [GENESCOPE.FK](https://github.com/thegenemyers/GENESCOPE.FK).

This is how the regular model looks like:

![](https://user-images.githubusercontent.com/8181573/145909109-1498fbfb-b784-4eaa-b73d-f89f1c63b32e.png)

and this is how the default fastK model looks like

![](https://user-images.githubusercontent.com/8181573/145909122-84b77398-0106-4ce4-a389-353b4d8e841e.png)

It almost seems that the last of higher frequency k-mers made a better fit of the lower frequency k-mers. The fastK black line look nearly the same as the GenomeScope line. I suspect, if I made the k-mer histogram to more than 100x, the estimates would be nearly (if not completelly) the same.

So main conclusion here is that FastK and GenomeScope.FK are able to estimate properties even difficult genomes (just like KMC/GenomeScope did).

### Speed

The main selling point of `fastK` is the speed up. By not counting all the repetitive k-mers, it saves a lot of time.

I generated the two k-mer spectra above from ~817,000,000 read pairs (245.2G base pairs). Both software had 16 cores and 120GB memory to their disposition. While it took **KMC 89m29s** to get the histogram, **FastK** was done in **33m51s**. That is nearly 3x increase in speed!

I also wanted to test less (4) cores, just to check the quality of paralelization, but I ended up testing a different feature by accident. I calculated the two histograms using 4 cores on raw reads (instead of trimmed ones). On the *raw* reads, it took **234m39s** to get the hitogram to **KMC**, and **146m54s** to **FastK**. With 4 cores, the speed-up, is much less impressive - just about 1.6x. How comes?

I suspect the major difference comes from the ratio of super-repetitive kmers to the total number of k-mers that occur in the read set. The trimmed dataset must have had a lot fewer low, frequency k-mers and therefore the relative gain of FastK to KMC was a lot more significant. I suspect also that genomes with less repetitive nature would also make the two k-mer counters more even.

### BONUS Differences between raw and trimmed data

K-mer spectra analyses are usually quite robust to messiness in data. In vast majority of cases I don't bother trimming the data before caluclating the k-mer spectra. However, there are some cases, where the singal to noise ratio is so much on the edge, the trimming can help get the model nice.

This is exactly the case of the marbeled crayfish:

!(raw_reads)[https://user-images.githubusercontent.com/8181573/145909151-aeea3df4-9556-4aa7-9d90-2a9576117fe6.png]

You see the model is a lot more messy. The error peak and the heterozygosity peaks are blended and both genome size and heterozygosity estimates are quite off comapred to the fits above.

This is just for an inspiration. If you have one of these "edge" datasets, you might want to try decrease your k and trim the reads before fitting a genome model.

### Final remarks

**FastK is quite a bit faster** and the speed-up is more significant for read sets with higher fraction of **repetitive k-mers**. If you run k-mer analyses on daily basis, you might want to consider switching to FastK.

However, that applies only to people that are not interested in the repetitive k-mers. I would be personally really interested to understand what are all these superrepetitive k-mers about and knowing their sequence and exact coverage distribution is a fine way to start.

Also a fair disclaimer, I did run in some issues while I was setting up FastK on our cluster ([reported here](https://github.com/thegenemyers/FASTK/issues/10)). It was not that difficult to overcome them, but if my goal would be to analyse single middle-sized genome, it would be still faster with `KMC`, as it is really easy to set up that one up with simple `conda install -c bioconda kmc`.


### Methods

The Marbled crayfish data were originally sequenced in [Gutekunst et al. 2018](https://www.nature.com/articles/s41559-018-0467-9), available in sra with accessons `SRR5115144,SRR5115147,SRR5115146,SRR5115148,SRR5115143,SRR5115145`. There are billion ways to get them, I like to fetch `fastq` files from EBI. This should work

```bash
mkdir -p data/Pvir1/raw_reads/ # my obssesive organisation, data/<sp>/<data_type>/
for ACCESSION in SRR5115144,SRR5115147,SRR5115146,SRR5115148,SRR5115143,SRR5115145; do
    URL_R1=ftp://ftp.sra.ebi.ac.uk/vol1/fastq/${ACCESION::6}/00${ACCESION: -1}/"$ACCESION"/"$ACCESION"_1.fastq.gz
    URL_R2=ftp://ftp.sra.ebi.ac.uk/vol1/fastq/${ACCESION::6}/00${ACCESION: -1}/"$ACCESION"/"$ACCESION"_2.fastq.gz
		wget $URL_R1 -O data/Pvir1/raw_reads/"$ACCESION"_1.fastq.gz
		wget $URL_R2 -O data/Pvir1/raw_reads/"$ACCESION"_2.fastq.gz
done
```

with all the data, let's jump to kmer counting.

Halfway thought the benchmarking I recalled that the crayfish data were borderline noisy and it was actually really helpful to trim them. It also afect the kmer counters as it will decrease quite a lot the number of distinct kmers in the dataset.


### FastK

Instaling FastK on a cluster was not trivial, but eventually with some help I managed to get it work solely with programs installed via conda (the steps and probems are [here](https://github.com/thegenemyers/FASTK/issues/10)). Anyway, I got FastK compiled and running.

```bash
# /ceph/users/kjaron/src/FASTK
export PATH="/ceph/users/kjaron/src/FASTK:$PATH"

# 1. FastK [-k<int(40)>] [-t[<int(4)>]] [-p[:<table>[.ktab]]] [-c] [-bc<int>]
#          [-v] [-N<path_name>] [-P<dir(/tmp)>] [-M<int(12)>] [-T<int(4)>]
#          <source>[.cram|.[bs]am|.db|.dam|.f[ast][aq][.gz]] ...

time FastK -v -t1 -k17 -M120 -T4 data/Pvir1/raw_reads/* -Ndata/Pvir1/FastK_Table

real    146m54.198s
user    347m45.812s
sys     26m17.831s
```

now let's try to fit the GenomeScopeFK model

```
Histex -G data/Pvir1/FastK_Table | GeneScopeFK -o data/Pvir1/GenomeScopeFK/ -k 17
mkdir -p data/Pvir1/FastK_raw && mv data/Pvir1/FastK_Table* data/Pvir1/FastK_raw
```

16 cores FastK on trimmed reads:

```
time FastK -v -t1 -k17 -M120 -T16 -Ndata/Pvir1/FastK_Table data/Pvir1/trimmed_reads/*.fastq.gz
```

real  33m51.042s    
user  294m18.802s
sys   19m43.606s

```
Histex -G data/Pvir1/FastK_Table | GeneScopeFK.R -p 3 -o data/Pvir1/GenomeScopeFK_trimmed/ -k 17

data/Pvir1/GenomeScopeFK_trimmed/
```


### KMC3

4 threads, 120G of memory

```
ls data/Pvir1/raw_reads/*.fastq.gz > FILES
time kmc -k17 -t4 -m120 -ci1 -cs500000000 @FILES data/Pvir1/kmc_kmer_counts tmp
kmc_tools transform kmer_counts histogram kmer_k21.hist -cx10000
```

real    234m39.822s
user    519m30.516s
sys     20m33.598s

16 threads, 120G of memory
￼
```
ls data/Pvir1/trimmed_reads/*.fastq.gz > FILES
time kmc -k17 -t16 -m120 -ci1 -cs500000000 @FILES data/Pvir1/kmc_kmer_counts tmp
```

real  89m29.979s      
user  1003m9.061s
sys   33m15.212s

```
kmc_tools transform data/Pvir1/kmc_kmer_counts histogram data/Pvir1/kmer_k17_full_with_zeros.hist -cx500000000
awk '{ if( $2 != 0 ){ print $0 } }' data/Pvir1/kmer_k17_full_with_zeros.hist > data/Pvir1/kmer_k17_full.hist && rm data/Pvir1/kmer_k17_full_with_zeros.hist
genomescope.R -p 3 -l 18 -i data/Pvir1/kmer_k17_full.hist -o data/Pvir1/GenomeScope_trimmed/
```





￼
