# `scss` architecture
Fighting against the cascade slows down development and bloats your code, so I don’t do compartmentalized/componentized/modularized CSS. The value of the cascade is that you can create a well-defined, *consistent* design for your website without much effort. The following CSS architecture is an attempt to do just that.

## `core`
This is where all styles start. If you’re styling a component, start with the lowest-level selector you can: the element.

By styling elements, we can create a consistent, cohesive base for our designs. For example:

```scss
.button {
  background-color: orange;
	cursor: pointer;
}
```

This is fine, but it requires adding the `.button` class to every `<button>` element. If you intend to have orange buttons all across your website, start with the element instead:

```scss
button {
  background-color: orange;
	cursor: pointer;
}
```

This ensures that *every `<button>` on the website will look the same*.

### Modifiers
That said, it’s very rare that we want every single button to look the same. It’s great that our buttons have a consistent base style, but say want cancel `<button>` elements to have red backgrounds instead of orange. That makes sense, since it fits with what users expect for cancel buttons across the internet. Instead of moving into the `components` folder, add a modifier class to your styles:

```scss
button {
  background-color: orange;
	cursor: pointer;

	&.cancel {
	  background-color: red;
	}
}
```

This allows us to keep modifier styles near the base styles that they modify.

Modifier names should describe what the class is for, not what it does. For example, the class `.red-button` is pretty clear on what it does: it turns a button red. However, it doesn’t indicate when the class should be used. Should it be used on cancel buttons? Or should it be used on buttons that represent secondary actions (like reset)?

Using a class that describes its *purpose* helps us to use the class in the right instances. A great example is a class like the above, `button.cancel`. It’s applied to a `<button>` element that is intended to cancel something. The added benefit of this naming paradigm is that when we want to change the style of cancel buttons — like when we decide that they should be black instead of red — we can change the styles for the `button.cancel` class and not be concerned that it will also affect buttons that were made red but weren’t intended to be cancel buttons.

### Separating elements by file
We separate elements in individual files to make it easier to isolate their styles from each other. There are some notable exceptions:

* `_headings.scss` - Of course there is no HTML element for `<headings>`. This file is for the `<h1>` - `<h6>` elements, which are often styled very similarly to each other.
* `_lists.scss` - Since both `<ul>` and `<ol>` elements share a lot of styles, we include them in the same file. This allows us to reset their base styles, the provide modifiers to lay them out the way we want.
* `_root.scss` - This an extra special set of styles specific to the root elements of the site. This always includes `*`, `html`, and `body` elements, and may also include the root element to which a JavaScript application is attached.

## `components`
Components are collections of elements that should be styled in a particular way when they are placed together. For example, the main navigation bar of a website tends to have a specific set of styles that don’t get applied to anything else in the website. Here’s a good way to handle that:

```scss
// Since it’s intended to contain navigation, this class should be applied to a `<nav>` element
.application-navigation {
	background-color: black;

	// Navigation links are typically a list, so we expect that they’re in a `<ul>` element
	ul {
	  display: flex;
	}

  // The anchors are usually the most important part of the nav bar, so we’ll override some base styles for them
  a {
    background-color: orange;
    color: white;
    display: block;
  }
}
```

Since the `<ul>` and the `<a>` are colocated inside of a `<nav class=“application-navigation” />`, we can target them specifically and override the base styles.

### Components by `role`
Several components end up leveraging WAI-ARIA to help with accessibility,. We can leverage this to define some of our component styles without adding extra classes. Again, the main application navigation is a great example of this. The main navigation of a website should be given the `banner` role to help screen readers and other assistive technology with navigating the site. We could leverage this role for the same component styles we defined above.

```html
<!-- Example layout for application nav -->
<nav role=“banner”>
  <ul>
    <li><a href=“/”>Home</a></li>
    <li><a href=“/about”>About</a></li>
    <li><a href=“/store”>Store</a></li>
  </ul>
</nav>
```

```scss
[role=banner] {
	ul { ... }

  a { ... }
}
```
