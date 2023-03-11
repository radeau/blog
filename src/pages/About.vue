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

          <h3>Well, hello there!👋</h3>

          <p>I'm here to share with you all the ups and downs of my wild and wacky journey through life. 
          My name is Kevin Rad, and I'm the one behind this blog that's all about the journey, 
          the experience, and the laughs.</p>
          
          <p>I'm not your typical writer, and I'm not here to preach about what's right or wrong. 
          Instead, I'm all about sharing my personal experiences and having a good laugh along the 
          way. Life can be tough, but it's also full of adventure, and I'm here to show you that even 
          the worst moments can be turned into something worth smiling about.</p>

          <p>My journey has taken me down many paths, some good, some not so good, but every experience 
          has taught me something valuable. I've had my fair share of misadventures and laugh-out-loud 
          moments, and I can't wait to share them with you.</p>

          <p>I believe that life is too short to take everything so seriously (though people see me as serious type, 
          well 🤷‍♂️ maybe they don't know me that deep haha), and I hope that through my blog, I can inspire you to take 
          risks, chase your dreams, and find the humor in even the most challenging moments.</p>
          
          <p>And as we navigate this crazy journey, I'll leave you with this quote from the tech legend, Steve Jobs: </p>
          
          <blockquote>
            <p>"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. 
            Don't settle. As with all matters of the heart, you'll know when you find it."</p>
          </blockquote>

          <p>Keep on searching, friends, and never settle for anything less than what sets your heart on fire.❤️</p>

          <img src="../radify.png" alt="rad-nickname" class="m-6">

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
      return 'Rad\'s Blog.'
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
}
</script>
