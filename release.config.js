module.exports = {
  'branches': [
    'main',
    {name: 'alpha', prerelease: true},
    {name: 'beta', prerelease: true},
    'next-major',
    // Long-Term-Support branches, e.g. 'lts-4.x.x'
    'lts-[0-9]+\.x\.x'
  ],
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
