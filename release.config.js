module.exports = {
  "branches": ["main"],
  "dryRun": true,
  "debug": true,
  "ci": false,
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md",
    }],
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md"],
    }],
  ],
};
