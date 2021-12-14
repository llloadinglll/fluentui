import { BeachballConfig } from 'beachball';
import { getScopes } from './getScopes';
import { getVNextChangelogGroups } from './getVNextChangelogGroups';
import { writeFile } from 'fs-extra';
import * as path from 'path';

export const config: BeachballConfig = {
  disallowedChangeTypes: ['major', 'prerelease'],
  tag: 'latest',
  generateChangelog: true,
  scope: getScopes(),
  registry:
    'https://uifabric.pkgs.visualstudio.com/4ed167b9-ac3a-405b-b967-443af8db8961/_packaging/ling-test/npm/registry/',
  changelog: {
    groups: [getVNextChangelogGroups()],
  },
  hooks: {
    prepublish: packagePath => {
      const authToken = process.env.ADO_TOKEN;
      return writeFile(
        path.join(packagePath, '.npmrc'),
        `
; begin auth token
//uifabric.pkgs.visualstudio.com/4ed167b9-ac3a-405b-b967-443af8db8961/_packaging/ling-test/npm/registry/:username=uifabric
//uifabric.pkgs.visualstudio.com/4ed167b9-ac3a-405b-b967-443af8db8961/_packaging/ling-test/npm/registry/:_password=${authToken}
//uifabric.pkgs.visualstudio.com/4ed167b9-ac3a-405b-b967-443af8db8961/_packaging/ling-test/npm/registry/:email=npm requires email to be set but doesn't use the value
//uifabric.pkgs.visualstudio.com/4ed167b9-ac3a-405b-b967-443af8db8961/_packaging/ling-test/npm/:username=uifabric
//uifabric.pkgs.visualstudio.com/4ed167b9-ac3a-405b-b967-443af8db8961/_packaging/ling-test/npm/:_password=${authToken}
//uifabric.pkgs.visualstudio.com/4ed167b9-ac3a-405b-b967-443af8db8961/_packaging/ling-test/npm/:email=npm requires email to be set but doesn't use the value
; end auth token
      `,
      );
    },
  },
};
