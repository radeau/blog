<template>
  <footer class="text-gray-700 text-sm leading-normal flex flex-col flex-wrap justify-center mx-auto max-w-3xl px-6 sm:px-12">
    <div class="w-full flex justify-center">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="px-2">
            <g-link to="/" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300 font-bold">Home</g-link>
          </li>
          <li class="px-2">
            <g-link to="/about/" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300 font-bold">About me</g-link>
          </li>
          <!-- <li class="px-2">
            <a href="/sitemap.xml" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">Sitemap</a>
          </li> -->
          <!-- <li class="px-2">
            <a href="/feed.xml" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">RSS Feed</a>
          </li> -->
        </ul>
      </nav>
    </div>
    <div class="w-full flex justify-center">
      <p class="mx-0 my-auto font-thin">Template from <a href="https://github.com/cossssmin/gridsome-starter-bleda" class="border-b border-transparent hover:border-gray-400 transition-colors duration-300">Bleda</a></p>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
