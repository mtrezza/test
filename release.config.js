module.exports = {
  'branches': ['main', 'alpha', 'beta', 'next-major'],
  'dryRun': false,
  'debug': true,
  'ci': false,
  'plugins': [
    '@semantic-release/commit-analyzer',
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
