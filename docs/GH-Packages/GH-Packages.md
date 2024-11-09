# GitHub Package Registry

The GitHub Package Registry is a package hosting service that allows you to host your packages privately or publicly and use them as dependencies in your projects.

We use this because of the attractive pricing model.

## Usage

At first you need to authenticate with the GitHub Package Registry. You can do this by creating a personal access token with the `read:packages` and `write:packages` scopes.

Put the token into the ~/.yarnrc.yml file:

```yaml
npmRegistries:
  "https://npm.pkg.github.com":
    npmAuthToken: <your-token>
```

Then take care that you have to correct .yarnrc.yml file in the root of the monorepo.

```yaml
npmRegistryServer: "https://registry.npmjs.com"

npmScopes:
  bricksandbraces:
    npmAlwaysAuth: true
    npmRegistryServer: "https://npm.pkg.github.com"
  openbricksandbraces:
    npmAlwaysAuth: true
    npmRegistryServer: "https://registry.npmjs.com"
```

The first statement tells yarn to use the npm registry. The second statement tells yarn to use the GitHub Package Registry for the `@bricksandbraces` scope.

> Note: @openbricksandbraces is the legacy scope for the NPM Package Registry.

Install the packages as usual:

```bash
yarn
```

## Publishing a package

To publish a package to the GitHub Package Registry you must first build it. This varies by package but is usally associated to the "build" command.

Also make sure that the publishConfig in the package.json is set to the GitHub Package Registry:

```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
}
```

To publish, use the following command:

```bash
yarn lerna publish --scope=@bricksandbraces/<package-name>
```

This will pack and publish the package to the GitHub Package Registry.
