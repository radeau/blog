<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">About me</h1>
        <p class="text-grey-dark text-lg sm:text-3xl">&hellip;</p>
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link to="/" class="text-gray-900 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300">&larr; Home</g-link>
      </nav>
      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 border-b border-gray-300 pb-10 mb-16">

        <div class="markdown text-lg leading-normal text-gray-700">

          <h3>Well, hello there!</h3>

          <p>My name is Kevin Rad, and I'm the lucky turtle behind this blog. I'm so thrilled to have you here to join me on my wild and wacky journey through life, technology, and everything in between.</p>
          
          <p>I've always been a bit of a tech nerd, and I love coding (when it worked haha! but mostly furious when there's too many bugs), exploring new gadgets and gizmos. I mean, who doesn't love the thrill of 
          learning a new tech and praying that you don't accidentally hit the self-destruct button? But beyond the tech stuff, I'm also all about 
          living life to the fullest and having fun along the way.</p>

          <p>I've learned a lot over the years - sometimes the hard way - and I love sharing my experiences with others. Whether it's a 
          hilarious story about a misadventure with a new buzzwords or a deep realization about the meaning of life, I always try to keep it 
          real and share what I've learned.</p>

          <p>My hope is that through my blog, I can help others navigate the ups and downs of life and tech with a little more humor and grace. 
          We're all in this together, after all!</p>
          
          <p>And as we navigate this crazy journey, I'll leave you with this quote from the tech legend, Steve Jobs: </p>
          
          <blockquote>
            <p>"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. 
            Don't settle. As with all matters of the heart, you'll know when you find it."</p>
          </blockquote>

          <p>Keep on searching, friends, and never settle for anything less than what sets your heart on fire.</p>

          <img src="../radify.png" alt="Hello there" class="m-6">

        </div>
      </article>
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'

export default {
  components: {
    SiteFooter
  },
  metaInfo () {
    return {
      title: 'About',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.ogDescription
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content:'About' },
        { property: "og:description", content: this.ogDescription },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'About' },
        { name: "twitter:description", content: this.ogDescription },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogDescription () {
      return 'Introduction to the Bleda blog starter for Gridsome.'
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
}
</script>
