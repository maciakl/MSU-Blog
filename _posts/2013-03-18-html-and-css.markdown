---

layout: post
title: HTML and CSS Lab
category: student-resource

excerpt: This lab aims to teach you basic of web design using Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS). These two technologies are the fundamental underlying building blocks of the world wide web, and are used to build every single site you visit during your day.

---

This lab aims to teach you basic of web design using Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS). These two technologies are the fundamental underlying building blocks of the world wide web, and are used to build every single site you visit during your day.

As the name suggests, HTML is a markup language not much unlike Markdown which you used in the previous lab. Markdown offered you a very simple and intuitive way of organizing your file by creating headings, bullet point lists, clickable links and even embedding images in your document using simple "markup" symbols like these:

![Example of Markdown file]({{site.baseurl}}/img/html/markdown-example.png)

HTML is more complex than this but gives you much more creative control over how the end document will look. For example, the above bullet list could be expressed in HTML like so:

{% highlight html %}
<p>This is a bullet list:</p>

<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
{% endhighlight %}

As you can see it is a little bit more complex. Markdown's simple typographical conventions are replaced with sets of enclosing brackets that specifically define where the bullet point begins and where it ends. As you can imagine this gives the author much more control at the expense of a little more typing.

###Separating Style from Content

Unlike Markdown files, or Word documents which are self contained, web pages are typically designed as two separate files, separating the "content" part of the document from the formating. This is actually very useful, because it allows a single content file to have multiple style documents associated with it, and readily switch between them.

HTML files are content files. they are composed of paragraphs, links, bullet point lists and etc. CSS files contain formatting information pertaining to that content: for example the color the links should be. HTML is for organizing content while CSS is for styling it.

![HTML and CSS Files]({{site.baseurl}}/img/html/html-css.png)

Both of these are plain text files you can edit with any text editor, including Notepat. Like Markdown they have special syntax and rules. We are going to talk about HTML first, and then dive into some basic CSS afterwards.

###HTML Tags

HTML documents use the concept of a tag. A HTML tag is usually a word enclosed in the angular brackets `< >`. They usually come in pairs, so we can distinguish between an opening tag (eg. &lt;h1&gt;) and a closing tag (eg. &lt;/h1&gt;). Here is an example:

{% highlight html %}
<h1>Hello World!</h1>
{% endhighlight %}

In this example we are using `<h1>` tag which stands for Heading 1 or first level (aka big) heading. There are six of those tags (`<h1>`-`<h6>`), each creating a smaller, less prominent heading. Most tags (with few notable exceptions) follow similar naming pattern, being either short meaningful words or abbreviations.

Some HTML tags have what we call **attributes**. Attributes are a list of key-value pairs embedded inside an opening tag like this:

{% highlight html %}
<a href="http://example.com" >This is a tag with attributes</a>
{% endhighlight %}

The key is always first, followed by an equal sign and a value enclosed in quotation marks. The attribute keys are special keywords and each tag may or may not have a few attributes it supports. In the above example the **href** is the attribute key, and the text website address in quote marks is its value. 

Some tags do not have a "closing" pair. For example the `<br/>` tag used to create a line break is always used on its own. Therefore we add the slash at the end of the opening tag to let the browser know not to look for the closing tag.

###The HTML Boilerplate

HTML documents must conform to standard defined by World Wide Web Consortium (or W3C). This means you can't just start typing random HTML tags in a document, but instead have to follow a certain pattern:

 - Every web page must start with *document type declaration*. For our purposes this simply means that the first line of the document will always be: `<!DOCTYPE html>`.
 - The remainder of the document needs to be enclosed in `<html>` and `</html>` tags.
 - The document must have a head and a title followed by a body section.
 - Inside of the `<body> </body>` section you are free to use any tags you please.

Here is an example of a very basic webpage in it's entirety:

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <title>My Page Title</title>
    </head>
    
    <body>
        <p>Hello World</p>
    </body>
</html>
{% endhighlight %}

The `<!DOCTYPE>` tag must always be on the first line of the document. This tells the web browser we are using the modern HTML5 standard. If you skip this tag, the browser will have to guess which HTML version you are using, and it may guess wrong, resulting in odd side effects.

The `<html>` tag wraps the entire document and delimits where actual content starts and ends. You should never have more than one set of these tags, and there should never be anything below the closing one. The `</html>` should mark the absolute end of your document. If you put anything below it, the browser may or may not render it properly. 

The `<head>` tag encloses so called "metadata" or data about the document. In this example it containst `<title>` tag which is used to tell the browser what text it should display on the window pane or tab bar. There are some other things we can put here as well, but we will talk about them later. This section may seem superfluous and useless, but you have to have it.

The `<body>` tag has the actual content of the webpage which will be displayed on the screen. In this case it is a single line, enclosed in `<p>` tags. The `p` stands for paragraph.

###Editing a Webpage

To edit a HTML document you will need a **text editor**. Any editor will do and in the lab we will probably be using Notepad or something equivalent. If you are working on this assignment at home, Notepad will do just fine. If you happen to be a Mac user however, please don't use TextEdit. I highly recommend that you download [Sublime Edit](http://www.sublimetext.com/) and use that instead.

Some editors will have syntax highlighting for HTML files so the tags will appear a different color. Note that this is purely a visual effect provided for your convenience. Don't be alarmed if your code is black and white when you open it in notepad.

Please copy and paste the above snippet into notepad (or your chosen editor) and then save it as `webpage.html`. It may look something like this: 

![HTML in Text Editor]({{site.baseurl}}/img/html/editor.png)

Close notepad then double click on your file. It will open in a web browser (this may be Internet Explorer, Mozilla Firefox, Google Chrome or Safari depending on your settings). This is because the `.html` file extension is associated with that application (we talked about file extensions during the Filesystems lecture so this should be a familiar concept by now).

You may ask yourself how to edit this file again, now that it opens in a web browser instead of notepad. If so, this means you have not internalized the lesson from the lecture - shame on you! The file extension is merely a suggestion as to the default application which the OS should use when you double click on a file. You are still free to attempt to open this file in any application you want.

If you want to see the HTML code again, simply open Notepad, and use the File->Open menu to open up your file. Note how the Web Browser automatically "renders" the contents of the file by hiding all the tags, whereas notepad displays them.

###White Space

Since you have worked with Markdown already, this should be familiar. Web browsers will ignore all "white space" in your document. The only exception are the single spaces in between words. White Space is the colloquial term we use to refer to things like spaces, tabs and line breaks. For example word you can align two lines by using the tab key and you start a new paragraph by hitting the Enter key. This will not work with HTML. You have to explicitly state you are starting a new paragraph using an appropriate HTML tag.

Here is an example of how to format paragraphs and headings properly:

{% highlight html %}
<h1>This is a heading</h1>
<p>This is a paragraph. It may contain multiple sentences.</p>
<p>This is a second paragraph.</p>
<h2>This is also a heading</h2>
<p>This is a third paragraph.<br/> It has a line break in the middle.</p>
{% endhighlight %}

When rendered in the web browser the above code should look like this:

![Paragraph Example]({{site.baseurl}}/img/html/paragraphs.png)

Note how there is a little bit of vertical space between the paragraphs and a bit more space above and below headings. When you use the `<p>` or heading tags, the browser will add this padding to keep things separated. If you wish to avoid this, you can use the `<br/>` tag. It breaks the text to the next line immediately without any extra spacing.

|`<p>`      | Creates paragraphs with a little bit of spacing above and below.
|`<br/>`    | Creates a line break without any vertical spacing.
|`<hr/>`    | Horizontal rule - draws a horizontal line across the page with spacing above and below.

As a rule, you should always enclose text in the `<p>` tags. Avoid "free floating" text at all cost. Headings should go outside the paragraph tags and be used to logically organize your documents. Think of `<h1>` as "chapter headings", `<h2>` as section headings, `<h3>` as sub-sections and so on. If you need extra spacing or alignment it can be accomplished with CSS.

###Basic Formating

HTML should be used for organization and not styling, but it offers several tags that can be used to emphasize certain words, or make certain things stand out on the page. Please note that the actual look and feel of each of those tags can be redefined via CSS.

| `<em>`        | Emphasis. Used to make words or sentences stand out. Contents will be italicized.
| `<strong>`    | Used for strong emphasis. It tends to make the enclosed text boldface. 
| `<small>`     | Used to make contents smaller than the default text.
| `<blockquote>`| Used to display quotes. Makes contents slightly indented and emphasized.
| `<pre>`       | Pre-formated. Displays text in ugly monospace font and preserves white space.

All of these tags must have accompanying closing tags, and affect only what is inside them. 

You can  combine and "nest" HTML tags together:

{% highlight html %}
<p>This is normal, <em>emphasized <strong>and strong</strong></em></p>
{% endhighlight %}

###Lists

In the Markdown lab you learned that you could create lists just by preceding each line item with a dash or an asterisk. In HTML lists are a little bit more complex. They require you to create a nested tag list. You first open up a tag that tells the browser what kind of list you want to create, then you add list items as their own tags:

{% highlight html %}
<ul>
    <li>A list item</li>
    <li>Another list item</li>
</ul>
{% endhighlight %}

The tags available for making lists are as follows:

| `<ul>`        | Starts an unordered (or bullet point) list
| `<ol>`        | Starts an ordered (or enumerated) list
| `<li>`        | Stands for "list item"

###Links

Links are what binds the World Wide Web together. They are by far one of the most important components of each web page. In the Markdown lab there were three different way to create links. In HTML there is only one: the anchor tag `<a>`. This tag is somewhat unique in that on its own it does absolutely nothing. However if you use it with the `href` attribute (which stands for HTTP Reference) it turns the enclosed text into clickable link that will send the reader to the web page specified as the value of that attribute.

{% highlight html %}
<p>
    <a href="http://montclair.edu">Montclair State University</a>
</p>
{% endhighlight %}

In the above example, the words *Montclair State University* will become a clickable link which will take you to the MSU home page. The `href` attribute is mandatory and without it the link won't work. Note that you also cannot leave the contents of the tag blank, or else there will be nothing for the user to click on.

###Images

Embedding images in your website is accomplished using the `<img/>` tag. Much like `<br/>` it is a stand-alone tag which does not need to be closed. Instead it requires two mandatory attributes: `src` (which stands for "source" as in the source of the image) and `alt` (which stands for "alternate text"). The former lets the web browser know where to find the image, and the second lets it know what to display on the screen if the image is missing or cannot be used (for example if you are browsing the web using a screen reader).

{% highlight html %}
<img src="http://example.com/image.jpg" alt="My Image"/>
{% endhighlight %}

Adding the `alt` tag may seem superfluous but you should keep in mind that vision impaired users of the web cannot see images, and therefore they are absolutely reliant on these tags in order to make sense of web pages.

Also note that the `src` attribute must point to an actual image file. This means it should always end in a file extension associated with images such as (but not limited to) `.jpg`, `.png` or `.gif`. If a link you are using does not end in one of these extensions, the image will probably not display properly on your web pages.

Note that embedding image this way (ie. by using a full web address) is known as hot-linking and is frowned upon. As a rule of thumb, you should never hot-link to images which are hosted on websites you do not own. If you do this, you are putting yourself at risk, because the author of the website may delete or swap the image with a different one at any time.

To ensure your website is not suddenly full of broken images (or worse - defaced with obscene imagery) you should save the image you like to the same folder as your page. If you do so, you can use a simplified form of the tag:

{% highlight html %}
<img src="image.jpg" alt="My Image"/>
{% endhighlight %}

You just must make sure you upload `image.jpg` to the server along with your HTML files when you are ready to put your page up on the web.

###Tables

Tables work much like lists in that they require a nested structure. HTML defines a number of tags just to facilitate creation of tables:

|`<table>`      | Starts a new table
|`<caption>`    | Used to add table caption.
|`<thead>`      | Starts table heading (where you define headings)
|`<tbody>`      | Starts table body
|`<tr>`         | Begins a new table row
|`<th>`         | Creates a table heading cell
|`<td>`         | Creates ordinary "table data" cell

Here is an example of how these come together to create a small table:

{% highlight html %}
<table border="1">
    <caption>Price List</caption>
    <thead>
        <tr>
            <th>Product</th>    <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pencil</td>     <td>$2</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

The above will look like this:

![Table Example]({{site.baseurl}}/img/html/table.png)

Note how this table has two rows (each enclosed by a `<tr>` tag) and four cells (two in each row, enclosed by `<th>` and `<td>` tags respectively). In HTML there is not such thing as columns. You define rows, and then you add individual cells in said rows. It is possible to have rows with miss-matched numbers of cells in which case the missing cells will simply be rendered blank.

The `<caption>` tag is optional, but if used it must immediately follow the `<table>` tag.

###Containers

Now that you have learned the table syntax you might be tempted to use it for alignment. You might be thinking that it would be rather clever to create a large table with two rows, and use the leftmost cell for, say, navigation sidebar and the rightmost cell for content. This is actually how web pages were designed in the 90's back when Internet Explorer 6 was the de-facto standard of the web and tables was the only HTML structure that it would render without weird glitches. Today this kind of design is considered amateurish.

HTML5 uses special structural tags that are supposed to act as containers that help to compartmentalize your content. All of these an optional:

| `<nav>`     | Used to group together navigation links or menus (as in a sidebar).
| `<header>`  | Groups page headings, titles, logos and etc..
| `<footer>`  | Groups page footer, copyright notices and etc..
| `<main>`    | Used to denote main portion of the page (you should only ever have one of these).

You could for example organize your web page like this:

{% highlight html %}
<!DOCTYPE html>
<html>
    <head> <title>My Page Title</title> </head>   
    <body>
        <header> 
            <h1>Hello World</h1> 
        </header>
        <main>
            <h2>Welcome</h2>
            <p>This is a web page.</p>
        </main>
        <footer>
            <small>(c) MSU</small>
        </footer>
    </body>
</html>
{% endhighlight %}

This separates the *content* from standardized *boilerplate*. If someone asks you to edit the web page above, you know that you should only be concerned with stuff inside the `<main>` tag and leave everything else alone. Without such structure it might be difficult to say where a page heading begins or ends.

There are also some more granular container tags that you can use to sub-divide your content even further:

| `<article>` | Encloses a single "article" or blog post.
| `<section>` | Encloses an arbitrary portion of text: eg. a single topic.

For example in a personal web page you may want to create separate sections for different topics:

{% highlight html %}
<section>
    <h2>My Hobbies</h2>
    <p>List of you hobbies.</p>
</section>
<section>
    <h2>My Work</h2>
    <p>Stuff about where you work.</p>
</section>
{% endhighlight %}

Note that by themselves these tags do not change the way page look. They simply help you organize it so that it can be styled later on.

There also exist so called *semantic* containers which let the browser know what type of data they contain:

|`<address>`    | Used for displaying street addresses
|`<time>`       | Can be used to enclose dates or times
|`<code>`       | Used for enclosing computer code snippets

There are also two general purpose container tags that can be applied to enclose arbitrary amounts of text:

|`<span>`       | Used to enclose one or more words. Used for applying color and formatting.
|`<div>`        | Used to create a "division" which is not necessarily a section or an article.

The `<span>` and `<div>` containers have no specific meaning and you should only use them if no other tag would make sense. 

###Cascading Style Sheets

Cascading Style Sheets are defined in a separate file with the extension `.css`. HTML documents can have many alternate stylesheets so you need to **link** your document to your stylesheet. You do that using the `<link>` tag which must be placed in the `<head>` section of your document:

{% highlight html %}
<head>
    <title>My Webpage</title>
    <link rel="stylesheet" href="style.css"/>
</head>
{% endhighlight %}

The `type` argument is required (there are other things you can *link* to) and the `href` argument should be the name of your stylesheet file.

###CSS Syntax

The CSS rules have their own syntax which is different from HTML.  

A CSS rule is composed of a *selector*, followed by one or more *declarations* enclosed in curly brackets. The declarations are delimited with semi-colons, and consist of a *property* name followed by a colon and a *value*.

![CSS Rule]({{site.baseurl}}/img/html/selector.gif)

The selectors will usually be HTML tag names. For example if you wanted to change the color of all `<h1>` headings to red, you could create a HTML rule like this:

{% highlight css %}
h1 { color: red; }
{% endhighlight %}

The CSS rules "cascade" over, and affect all the child-tags of the ones you are currently styling. Therefore if you wanted to change the default color of all text on your page to blue you would simply have to do:

{% highlight css %}
body { color: blue; }
{% endhighlight %}

All the other tags contained inside `<body>` "inherit" this rule. A more specific rule can override this color setting but only if it is listed after it. That's because the CSS rules are evaluated and applied in the order in which they appear in the file.

Consider the following HTML snippet:

{% highlight html %}
<section>
    <h2>My Hobbies</h2>
    <p>List of you hobbies.</p>
</section>
<section>
    <h2>My Work</h2>
    <p>Stuff about where you work.</p>
</section>
{% endhighlight %}


By default it would yield black text on white background. We could apply the following CSS rules to add some color:

{% highlight css %}
body    { background-color: black; color: white; }
section { background-color: gray; }
h2      { color: red; }
{% endhighlight %}

This would make the background black, and the text white. Each section would have it's own gray background, and headings would appear red:

![CSS Styling Example]({{site.baseurl}}/img/html/thispage.png)

Note that we have drastically altered the look and feel of the website without actually touching the content. Compare that to editing Word documents where content and formatting are typically intermingled and hard to separate.

Here are some commonly used CSS properties you can use to format your documents:

|`color`            | Change text color.
|`text-align`       | Align text `left`, `center` or `right`.
|`text-decoration`  | Add `underline`, `overline` or `line-trhough` decoration.
|`font-family`      | Specify specific font-face (eg. `Arial`) or font type (eg. `Sans-Serif`).
|`font-size`        | Specify size of font in px (eg `12px`), % or using keyword like `small`, `medum` or `large`.
|`font-style`       | Choose `normal`, `italic` or `oblique`.
|`font-variant`     | Make the font to be `small-caps` or `normal`.
|`font-weight`      | Make the font `bold`, `bolder`, `lighter` or `normal`.
|`background-color` | Change the color of background.
|`border`           | Draw a border around the element.
|`width`            | Width of the element in px or % of the screen.
|`max-width`        | Maximum width to which this element can expand when you resize the browser window.
|`min-width`        | Minimum width to which this element can shrink when you resize the browser window.
|`height`           | Height of the element in px or % of the screen.
|`max-height`       | Maximum height to which this element can expand when you resize the browser window.
|`min-height`       | Minimum height to which this element can shrink when you resize the browser window.

The `color` and `background-color` properties accept names of basic colors such as black, red, white, blue and etc.. They also accept HTML Color Codes which are 6 digit numbers preceded by a number sign. You can find a big list of [HTML Color Codes here][cc].

As an example, you could create a CSS rule like this:

{% highlight css %}
body { color: #808000; background-color: #FFFFF0; }
h1 { color: red; text-decoration: overline; font-family: Georgia; }
{% endhighlight %}

The `border` property actually takes more than one value. Typically you specify it with at least thee. The first value specifies the thickness, the second specifies type (`solid`, `dashed`, etc..) and the third one describes color. For example:

{% highlight css %}
section { border: 1px solid green; }
{% endhighlight %}

###Using id and class attributes

You don't always have to apply CSS rule to all of the tags of the same type in the document. For example if you only want to apply style to `<h1>` tags inside the `<header>` section you can write the rule like this:

{% highlight css %}
header>h1 { color: blue; }
{% endhighlight %}

This tells the browser to only apply this rule to `<h1>` tags which are children of the `<header>` tag. 

Sometimes you may want to be even more specific and apply formating to one and only specific `<h1>` tag and leave all the other ones alone. In such case you may add an `id` attribute to the `<h1>` tag like this:

{% highlight html %}
<h1 id="special">Special Heading</h1>
{% endhighlight %}

The `id` attribute can be placed on any tag (not just `<h1>`) and it acts as a unique identifier. It allows you to create a rule that only affects the tag with that specific `id` by prefacing it with the `#` sign like this:

{% highlight css %}
#special { color: blue; }
{% endhighlight %}

Sometimes you may want to apply formating to a group of tags. In that case you can give all of them the same `class` attribute:

{% highlight html %}
<ul>
    <li class="important">Important text</li>
    <li>Not important</li>
    <li class="important">Also important</li>
</ul>

<p class="important">This also</p>
{% endhighlight %}

You can create a rule that will change the color of the first and the third `<li>` and the `<p>` tag below the list by prefacing the selector with a dot like this:

{% highlight css %}
.important { color: red; }
{% endhighlight %}

It might be tempting to simply give the above elements a class called *red* but this is not a good idea. Class and id names are merely for organization and they should not imply formatting. Using a meaningful term such as *important* implies that these tags should have formatting that stands out. If you later decide they stand out better in blue rather than in red you can simply change one rule in your CSS. If you have used *red* as your class name, you would now have nonsensical disparity between your HTML which claims these items ought to be red, and CSS which makes them appear in blue.

###The Box Model

When styling HTML tags, it is best to think of each as a box with an invisible border that is structured as so:

![CSS Box Model]({{site.baseurl}}/img/html/box-model.gif)

This box has following properties that can be manipulated:

|`margin`       | The space outside of the border.
|`border`       | A border that surrounds the content and can have color and thickness or be transparent. 
|`padding`      | The space between the border and the actual content.

You can, for example, create a rule like this:

{% highlight css %}
article { margin: 10px; padding: 20px; border: 1px solid blue;  }
{% endhighlight %}

This will give each article a 10 pixel margin on all sides, a thin blue border and a 20 pixels of padding inside that border. If you don't want to apply these properties to all sides of the box you can create separate declarations for each one:

{% highlight css %}
article { margin-right: 10px; padding-bottom: 5px; }
{% endhighlight %}

You can learn more about CSS by reading the [W3C Tutorials][css].

###The Assignment

Your assignment is to create a simple HTML page. The topic matter is up to you. Your page must include:

- Valid HTML5 including the correct DOCTYPE, head and title.
- 4-5 short paragraphs of content (any topic). You should use headings and `<section>` tags organize it.
- At least one image image with alt tags.
- A bullet point or enumerated list list.
- A properly linked CSS file with at least one rule.

For additional credit, please try the following:

- Use a HTML table.
- Use `<header>`, `<footer>`, `<main>` and etc.
- Have more than 3 CSS rules.

Please refer to Blackboard for instructions how to submit this assignment.

[tx]: {{site.baseurl}}/student-resource/2013/03/17/using-textedit-for-html/
[cc]: http://www.computerhope.com/htmcolor.htm
[css]: http://www.w3schools.com/css/ 
