# SEO Optimized Personal Blog with Next.js, Contentlayer, and Tailwind CSS 
This personal blog and website is shared freely in hopes that it empowers non-technical professionals to build their brand and expand their skillset.  It also serves a personal pain point for me, as someone who enjoys writing blog posts (and code!), but feels frustrated with current self-publishing options.

By leveraging the rich functionality of the new .mdx document standards and modern hosting and deployment solutions, every journalist can now can be both their own CTO and Editor in Chief!

#
## Quick Start (updated)

### 1. Connect to Firebase
- follow instructions from firebase to set up command line
- from top level directory, run `firebase init` in terminal
- This will create a file called 'firebaseConfig.js', which should be updated with the following changes:
```
// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR-INFO-HERE",
  authDomain: "YOUR-INFO-HERE"",
  projectId: "YOUR-INFO-HERE"",
  storageBucket: "YOUR-INFO-HERE"",
  messagingSenderId: "YOUR-INFO-HERE"",
  appId: "YOUR-INFO-HERE"",
  measurementId: "YOUR-INFO-HERE""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db}
```


### 2. Run the Development Server Locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### 3.  Deploy
To deploy, run `firebase deploy --only hosting` from root directory.

#
## Overview
Entry point for app is `src/app/layout.js`

Each blog post contains the following:
```
/content/title-of-a-certain-blog/index.mdx # primary blog doc
/public/blogs/title-of-a-certain-blog/ # folder for blog images, files, etc

``` 

#
## Adding New Blog Post
**Add Post:**

1. Create new blog post directory "content/title-of-new-story" - the title of this directory will be used as the URL slug on the website, so use "all-lowercase-separated-with-dash" for new blog post directory folder names.
2. Create new file called "index.mdx" within the "content/url-of-new-blog-post" directory. Make sure to use template and update meta data tor title, description, image, etc.  Keep 'isPublished: false" until you are ready to publish. Add content using markdown for headings.
3. Create new images directory: public/blogs/title-of-new-story and add all photos/files here. IMPORTANT: make sure the title-of-new-story for this directory is exactly the same as the 'title-of-new-story' for the blog post directory. Place all images related to this blog post within this directory.  When embedding images (which you've placed in this folder), reference must be from from /public, i.e.: "/blogs/title-of-blog/title-of-image.png"
4. PUBLISH STEP 1: In index.mdx file, change 'isPublished: true', then save and close file.
5. PUBLISH STEP 2: In terminal, root folder for project, run "firebase deploy".
    
**Update Featured**
By Default, "featured posts" will include the three most recent blog posts when sorted by the "publishedAt" flag in the meta data.To change this:
1. Open the file 'src/app/components/home/HomeCoverSection.js' to change the cover section.
2. Open the file 'src/app/components/home/FeaturedPosts.js' to change the featured posts section.


#
## Major Thank You To CodeBucks

Major Thankyou to CodeBucks for the tutorial and starter code that helped me learn how to create this website.  I highly recommend their series of tutorials and repos for anyone learning to code.

For Demo and Final Code checkout following links👇: <br />
[Nextjs Personal Blog Website Demo](https://create-blog-with-nextjs.vercel.app/) <br />

Final Code👇: <br />
➡ Link 1💚: [Nextjs Personal Blog Website Final Code](https://github.com/codebucks27/Nextjs-tailwindcss-blog-template) <br />
➡ Link 2💚(If you want to support): [Nextjs Personal Blog Website Final Code](https://codebucks.gumroad.com/l/ypzlu) <br />

If you want to learn how to create it please follow below tutorial👇: <br />
https://youtu.be/1QGLHOaRLwM <br />
[![YouTube Video Views](https://img.shields.io/youtube/views/1QGLHOaRLwM?style=social)](https://youtu.be/1QGLHOaRLwM)<br />


Font.

