module.exports = {
  branches: [
    'main',
    { name: 'alpha', prerelease: true },
    { name: 'beta', prerelease: true },
    'next-major',
    // Long-Term-Support branches
    { name: '1.x', range: '1.x', channel: '1.x' },
    { name: '2.x', range: '2.x', channel: '2.x' },
    { name: '3.x', range: '3.x', channel: '3.x' },
    { name: '4.x', range: '4.x', channel: '4.x' },
    { name: '5.x', range: '5.x', channel: '5.x' },
    { name: '6.x', range: '6.x', channel: '6.x' },
  ],
  dryRun: false,
  debug: true,
  ci: true,
  tagFormat: '${version}',
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { type: 'docs', scope: 'README', release: 'patch' },
        { type: 'refactor', scope: 'core-*', release: 'minor' },
        { type: 'refactor', release: 'patch' },
        { scope: 'no-release', release: false },
      ],
      parserOpts: {
        noteKeywords: [ 'BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING' ],
      },
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
      },
      writerOpts: {
        commitsSort: ['subject', 'scope']
      },
    }],
    ['@semantic-release/changelog', {
      'changelogFile': 'CHANGELOG.md',
    }],
    ['@semantic-release/npm', {
      'npmPublish': false,
    }],
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }],
  ],
};
