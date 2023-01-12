export default defineAppConfig({
  docus: {
    title: "Thuongnv Blog",
    description:
      "Write pages in markdown, use Vue components and enjoy the power of Nuxt with a blazing fast developer experience.",
    image: "https://content.nuxtjs.org/preview.png",
    url: "https://content.nuxtjs.org",
    socials: {
      github: "nvthuong1996",
      facebook:'quyluathapdan'
    },
    cover: {
      src: "/cover.jpg",
      alt: "Content made easy for Vue developers",
    },
    aside: {
      level: 1,
    },
    header: {},
    footer: {
      iconLinks: [
        // {
        //   label: "NuxtJS",
        //   href: "https://nuxtjs.org",
        //   icon: "IconNuxt",
        // },
        // {
        //   label: "Vue Telescope",
        //   href: "https://vuetelescope.com",
        //   icon: "IconVueTelescope",
        // },
      ],
    },
  },
});
