module.exports = {
  'branches': ['main', 'alpha', 'beta', 'next-major'],
  'dryRun': true,
  'debug': true,
  'ci': false,
  'plugins': [
    ['@semantic-release/commit-analyzer', {
      "preset": "angular",
      "releaseRules": [
        { "type": "docs", "scope": "README", "release": "patch" },
        { "type": "refactor", "scope": "core-*", "release": "minor" },
        { "type": "refactor", "release": "patch" },
        { "scope": "no-release", "release": false }
      ]
    }],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', {
      'npmPublish': false,
    }],
    ['@semantic-release/changelog', {
      'changelogFile': 'CHANGELOG.md',
    }],
    ['@semantic-release/git', {
      'assets': ['CHANGELOG.md'],
    }],
  ],
};
