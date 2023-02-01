const getList = (...items) => {
  return items
    .map(([label, url, description]) => {
      return `- **[${label}](${url})** - ${description}`;
    })
    .join("\n");
};

module.exports = {
  projectList: getList([
    "Personal-Github-Overview",
    "https://github.com/ProgrammerShipon/personal-githuboverview.git",
    "Personal App for overview on gihtub",
  ]),
};
