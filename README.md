A small Next.js App Router app where the navbar, with active state, is rendered entirely on the server.

Credit to [this Next.js PR](https://github.com/vercel/next.js/pull/65922).

### What are the drawbacks?

Firstly, this only works in prod mode. Secondly, it requires completely disabling the router cache.

And there could be many edge cases. I don't know, I am not knowledgeable enough on the internal Next.js logic to make any statements regarding this issue.

### Should I use this to make my navbar?

Oh god no. Just

```jsx
"use client";

export function NavbarItem({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href;
  return ...;
}
```

```jsx
function Navbar() {
  return items.map((item) => (
    <NavbarItem href={item.href} key={item.href}>
      {item.name}
    </NavbarItem>
  ));
}
```

You don't want to use internal undocumented APIs just for something as simple as this.

### How is this even possible?

Same question, man. Same question.
