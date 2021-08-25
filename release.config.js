module.exports = {
  'branches': [
    'main',
    {name: 'alpha', prerelease: true},
    {name: 'beta', prerelease: true},
    'next-major',
    // Long-Term-Support branches
    {name: '1.x', range: '1.x', channel: '1.x'},
    {name: '2.x', range: '2.x', channel: '2.x'},
    {name: '3.x', range: '3.x', channel: '3.x'},
    {name: '4.x', range: '4.x', channel: '4.x'},
    {name: '5.x', range: '5.x', channel: '5.x'},
    {name: '6.x', range: '6.x', channel: '6.x'},
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
