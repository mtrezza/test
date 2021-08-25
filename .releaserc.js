'use strict';
/**
 * Semantic Release Config
 */

// Get env vars
const ref = process.env.GITHUB_REF;
const branch = ref.split('/').pop();

console.log(`Configuring semantic release`);
console.log(`Running on branch name: ${branch}`);

// Declare params
const changelogFile = `CHANGELOG_${branch}.md`;
console.log(`Changelog file output to: ${changelogFile}`);

// Declare semantic config
const config = {
  branches: [
    'main',
    { name: 'alpha', prerelease: true },
    { name: 'beta', prerelease: true },
    'next-major',
    // Long-Term-Support branches
    { name: '1.x.x', range: '1.x.x', channel: '1.x.x' },
    { name: '2.x.x', range: '2.x.x', channel: '2.x.x' },
    { name: '3.x.x', range: '3.x.x', channel: '3.x.x' },
    { name: '4.x.x', range: '4.x.x', channel: '4.x.x' },
    { name: '5.x.x', range: '5.x.x', channel: '5.x.x' },
    { name: '6.x.x', range: '6.x.x', channel: '6.x.x' },
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
      'changelogFile': changelogFile,
    }],
    ['@semantic-release/npm', {
      'npmPublish': false,
    }],
    ['@semantic-release/git', {
      assets: [changelogFile, 'package.json', 'package-lock.json', 'npm-shrinkwrap.json'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }],
  ],
};

module.exports = config;