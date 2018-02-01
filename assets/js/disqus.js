
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_config = function () {
    this.page.url = '{{ page.url | absolute_url }}';
    this.page.identifier = '{{ page.url | absolute_url }}';
    };

    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://kamilsjaron-github-io.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();