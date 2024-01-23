export type GamingType = {
  id: number;
  url: string;
  banner: string;
  imgBaseUrl: string;
  homeImage: string;
  imageTitle: string;
  description: string;
  assets: string[];
  logos: string[];
  colors: string[];
  typography: string;
};

export const gaming: GamingType[] = [
  {
    id: 1,
    url: "/gaming?id=1",
    imgBaseUrl: "/gaming/7up",
    banner: "/banner.png",
    homeImage: "/header.png",
    imageTitle: "/title.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sed facilis ea? Consectetur repellat odit, optio dicta enim ipsum numquam nam molestiae similique pariatur voluptatibus cum, voluptatem porro sequi mollitia.",
    assets: [
      "/assets/1.png",
      "/assets/2.png",
      "/assets/3.png",
      "/assets/4.png",
      "/assets/5.png",
      "/assets/6.png",
      "/assets/7.png",
      "/assets/8.png",
      "/assets/9.png",
      "/assets/10.png",
      "/assets/11.png",
      "/assets/12.png",
      "/assets/13.png",
      "/assets/14.png",
      "/assets/15.png",
      "/assets/16.png",
      "/assets/17.png",
      "/assets/18.png",
    ],
    logos: ["/logos/1.png", "/logos/2.png"],
    colors: ["/colors/1.png", "/colors/2.png"],
    typography: "/typography.png",
  },
];
