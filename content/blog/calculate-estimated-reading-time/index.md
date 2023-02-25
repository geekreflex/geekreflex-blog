---
title: "Calculate Estimated Reading Time"
date: "2023-02-25"
---

I recently added a reading time feature to this blog, and I want to share with you how I did it. Instead of using a plugin, I decided to create a utility function to calculate the reading time, POssibly providing more accurate estimates.

Here's the code for the `calculateReadingTime()` function:

```js
function calculateReadingTime(text) {
  const wordsPerMinute = 200 // average reading speed in words per minute
  const cleanText = text.replace(/<.*?>/g, "") // remove HTML tags
  const wordCount = cleanText.match(/\w+/g).length // count words
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute) // calculate reading time in minutes
  return `${readingTimeMinutes} ${readingTimeMinutes === 1 ? "min" : "mins"}` // format reading time string
}
```

Here's an example of the `Time` component and how I used the function:

```js
import React from "react"
import { calculateReadingTime } from "../utils/readingTime"

const Time = ({ text }) => {
  return (
    <p>
      <span>🕒</span>
      <span>{text && calculateReadingTime(text)}</span>
    </p>
  )
}

export default Time
```

And here's how I used it in my blog template:

```jsx
...
 <h1 itemProp="headline">{post.frontmatter.title}</h1>
  <div style={{ display: "flex", alignItems: "center" }}>
    <p>{post.frontmatter.date}</p>
    <p>
      <Time text={post.html} />
    </p>
  </div>
</header>
<section
  dangerouslySetInnerHTML={{ __html: post.html }}
  itemProp="articleBody"
/>
...

```

A more [Tweaky version](https://github.com/geekreflex/geekreflex-blog/blob/main/src/utils/readingTime.js) of the `calculateReadingTime` function.

That's a wrap, see ya later.
