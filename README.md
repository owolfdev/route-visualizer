In Next.js with the app router, you can create several types of dynamic routes beyond the simple `[slug]` pattern. Here are the various kinds of dynamic routing patterns you can utilize:

### 1. **Dynamic Segments** (e.g., `[slug]`)

- This is the most common dynamic route where the segment inside square brackets represents a dynamic value in the URL.
- **Example**: `/blog/[slug]` matches `/blog/hello-world`, `/blog/another-post`, etc.
- Folder Structure:
  ```
  app
  └── blog
      └── [slug]
          └── page.tsx
  ```

### 2. **Catch-All Segments** (e.g., `[...slug]`)

- The catch-all route matches multiple segments or a single segment. It’s useful when you want to match an arbitrary depth of nested paths.
- **Example**: `/docs/[...slug]` matches `/docs/intro`, `/docs/guides/installation`, or even `/docs/guides/installation/linux`.
- Folder Structure:
  ```
  app
  └── docs
      └── [...slug]
          └── page.tsx
  ```

### 3. **Optional Catch-All Segments** (e.g., `[[...slug]]`)

- Optional catch-all segments match zero or more URL segments. It’s like a catch-all route, but it also matches the base route.
- **Example**: `/docs/[[...slug]]` matches `/docs`, `/docs/intro`, or `/docs/guides/installation/linux`.
- Folder Structure:
  ```
  app
  └── docs
      └── [[...slug]]
          └── page.tsx
  ```

### 4. **Named Layout Segments** (e.g., `(auth)`)

- Named segments allow you to define layouts that are conditionally used, such as for authentication. This is especially useful for providing layouts for specific sets of pages without affecting other pages.
- **Example**: `(auth)/login/page.tsx` renders a layout specific to authentication-related pages.
- Folder Structure:
  ```
  app
  └── (auth)
      └── login
          └── page.tsx
  ```

### 5. **Route Groups** (e.g., `(group)`)

- Route groups are used for grouping related routes under a common parent but without affecting the URL structure. They help to organize the codebase while not impacting the routing.
- **Example**: `(admin)/users/page.tsx` allows the grouping of admin-related routes, but the URL remains `/users`.
- Folder Structure:
  ```
  app
  └── (admin)
      └── users
          └── page.tsx
  ```

### 6. **Parallel Routes** (e.g., `@auth`, `@marketing`)

- Parallel routes enable multiple routes to be rendered side by side, allowing you to serve different UI sections based on specific URLs.
- **Example**: `app/@auth/login/page.tsx` and `app/@marketing/landing/page.tsx` can render in parallel in different parts of the layout.
- Folder Structure:
  ```
  app
  └── @auth
      └── login
          └── page.tsx
  └── @marketing
      └── landing
          └── page.tsx
  ```

### 7. **Interceptors**

- Interceptors act as middleware-like components within the routing layer that can intercept and modify the behavior of a request.
- **Example**: Using interceptors for route transitions or previews of pages without fully navigating to the new page.

### 8. **Colocation of Layouts and Pages**

- You can colocate layouts alongside pages within the same route folder. This layout will wrap only the routes in that folder.
- **Example**: Each folder can have its own `layout.tsx` file that wraps the `page.tsx` file inside it.
- Folder Structure:
  ```
  app
  └── blog
      ├── layout.tsx
      └── [slug]
          └── page.tsx
  ```

### 9. **Route Interpolation**

- You can interpolate dynamic segments into the URL using brackets. This is great for when your paths need to contain multiple dynamic parts.
- **Example**: `/blog/[year]/[month]/[slug]` matches `/blog/2024/09/hello-world`.

### Conclusion

With these patterns, Next.js provides a robust and flexible routing system, allowing for dynamic, nested, and deeply structured routes. Each pattern can be combined to build complex and scalable routing architectures while keeping code organized.
