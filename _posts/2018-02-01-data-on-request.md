---
comments: true
title: 'Data on request'
date: 2018-02-01
permalink: /posts/2018/02/data_on_request/
tags:
  - open data
  - genomics
  - htc
---

At the beginning of December 2017 we have decided to do a meta-study/review of several published genomes.
I optimistically started to collect data for some supplementary analyses.
But then I found that about one fifth of genomes were were available "on request" and about one third of genomes were missing sequencing reads.
It was a shock for me,
I thought that every paper needs to deposit data to DDBJ / EMBL-EBI / NCBI.
This was also the case for genomes published in journals that actually claim that data need to be accessible as PloS Biology.

It was too soon to get depressed.
I have decided just to send emails to all the authors asking if they would kindly share data with me.
And they actually did, it was a lot of data pulling from file sharing services like dropbox.
Some authors sooner, some authors latter, but during January I finally collected all the data I wanted.
It felt great, but it was too soon to celebrate.

I am computing on [Vital-it](https://www.vital-it.ch/), our University cluster.
[Vital-it data policy](https://www.vital-it.ch/images/Storage_Guidelines_1_5_72dpi.pdf) says that everything older than one month will be erased[^1].
They send no notifications or warnings, just silently delete your data.
Yes, I guess you now see where it goes...

I made a [cron job](https://en.wikipedia.org/wiki/Cron) that scans my files and send me notification if anything is going to be erased[^2].
But at beginning of this year we had an big software update including upgrade of operating system, during which they (again silently) erased all cron jobs running on our front-end.
I figured out today, because I found that I am missing some reads, but it was too late.
Sadly I was not missing just some reads, but virtually all my data.
The only files that have survived are those I collected / created this year,
which also means that majority of "genomes available on request" are gone as well.

Therefore I would like to ask.
What should I do now?
Re-think my data management, that's for sure.
Send another round of emails to re-collect all the data?
Or accept my defeat and abandon the idea of publishing analyses based on public data?
Is there a way how to convince people to deposit data to public archives?

[^1]: They provide archive service as well, however this data are stored on tapes for eternity and the service is [paid](https://www.vital-it.ch/services/pricing) per year.

[^2]: It's forbidden to write scripts that periodically update timestamps of your files, but monitoring timestamps and sending notifications is not against any rule.

------
