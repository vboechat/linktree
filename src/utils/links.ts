type WebsitesProps = "websiteName" | "websiteUrl";
type WebsiteObject = Record<WebsitesProps, string>;

export const websites: WebsiteObject[] = [
  {
    websiteName: "Website (Soon)",
    websiteUrl: "https://vboechat.github.io/",
  },
  {
    websiteName: "LinkedIn",
    websiteUrl: "https://www.linkedin.com/in/victor-ribeiro-boechat-641225238/",
  },
  {
    websiteName: "GitHub",
    websiteUrl: "https://www.github.com/vboechat",
  },
  {
    websiteName: "Dev.to",
    websiteUrl: "https://dev.to/vboechat",
  },
  {
    websiteName: "CodeTrace",
    websiteUrl: "https://codetrace.com/users/vboechat",
  },
  {
    websiteName: "HackerRank",
    websiteUrl: "https://www.hackerrank.com/vboechat",
  },
];
