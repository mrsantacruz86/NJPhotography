# njphotography
Professional photography website.

## Installing dependencies

After cloning the repo use the `npm install` or `yarn install` to download the dependencies for this project.

## Deployment

Create a branch in github called `gh-pages`.
Remove the `dist` directory from the project’s `.gitignore` file.

Generate the production distribution by excecuting the script: 
```sh
yarn build
```
or 
```sh
npm run build
```

Make sure git knows about your subtree (the subfolder with your site).

```sh
git add dist && git commit -m "Initial dist subtree commit"
```
Use subtree push to send it to the `gh-pages` branch on GitHub.

```sh
git subtree push --prefix dist origin gh-pages
```