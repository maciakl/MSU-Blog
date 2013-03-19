---

layout: post
title: HTML and CSS Lab
category: student-resource

excerpt: This lab aims to teach you basic of web design using Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS). These two technologies are the fundamental underlying building blocks of the world wide web, and are used to build every single site you visit during your day.

---

This lab aims to teach you basic of web design using Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS). These two technologies are the fundamental underlying building blocks of the world wide web, and are used to build every single site you visit during your day.

As the name suggests, HTML is a markup language not much unlike Markdown which you used in the previous lab. Markdown offered you a very simple and intuitive way of organizing your file by creating headings, bullet point lists, clickable links and even embedding images in your document using simple "markup" symbols. HTML is more complex than this but gives you much more creative control over how the end document will look.

CSS is used for "styling" HTML documents. First you create a marked up text file using HTML, defining headings, paragraphs, links and etc. Then you can spruce up that page with colors and effects by adding CSS rules that will for example make all headings specific size or color. In essence, HTML is for organizing content while CSS is for styling it. We are going to talk about HTML first, and then move onto some basic CSS afterwards.

###HTML Tags

HTML documents use the concept of a tag. A HTML tag is usually a word enclosed in the angular brackets `< >`. They usually come in pairs, so we can distinguish between an opening tag (eg. &lt;h1&gt;) and a closing tag (eg. &lt;/h1&gt;). Here is an example:

{% highlight html %}
<h1>Hello World!</h1>
{% endhighlight %}

In this example we are using `<h1>` tag which stands for Heading 1 or first level (aka big) heading. There are six of those tags (`<h1>`-`<h6>`), each creating a smaller, less prominent heading. Most tags (with few notable exceptions) follow similar naming pattern, being either short meaningful words or abbreviations.

Some HTML tags have what we call attributes. Attributes are a list of key-value pairs embedded inside an opening tag like this:

{% highlight html %}
<h1 id="document-title" class="important">This is a tag with attributes</h1>
{% endhighlight %}

The key is always first, followed by an equal sign and a value enclosed in quotation marks. The attribute keys are special keywords and each tag may or may not have a frew attributes it supports. All tags can use the id and class attributes, which are used mostly for identification and will come in useful when we start adding CSS to our pages. The `id` attribute is supposed to be used as a unique identifier that will distinguish that particular tag from all other tags. In this example I used arbitrary value `"document-title"`. Later on I will be able to create CSS rules that apply only to that tag, even though I may have dozens of other H1 tags in the document.

The `class` attribute has opposite meaning. It allows you to group a lot of different tags and style them together. Here I marked this tag as `"important"` which is another arbitrary value I chose. Note that most of your tags will not need any special attributes, although some require them. The id and class are always strictly optional.

Some tags do not have a "closing" pair. For example the `<br/>` tag used to create a line break is always used on its own. Therefore we add the slash at the end of the opening tag to let the browser know not to look for the closing tag.

###The HTML Boilerplate

HTML documents must conform to standard defined by World Wide Web Consortium (or W3C) which defines rules on how the standard HTML tags are supposed to be rendered in the browser. A basic HTML webpage must contain a Doctype declaration (which basically states which version of the HTML standard you will be using), a header section where you define the page title and CSS rules, and body which contains text and images. The simplest webpage you could make will look like this:


{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <title>My Page Title</title>
        <style></style>
    </head>
    
    <body>
        <p>Hello World</p>
    </body>
</html>
{% endhighlight %}

The `<!DOCTYPE>` tag must always be on the first line of the document. This tells the web browser we are using the modern HTML5 standard. If you skip this tag, the browser will have to guess which HTML version you are using, and usually settles on the lowest common denominator which results in shoddy looking pages.

The `<html>` tag wraps the entire document and delimits where actual content starts and ends. It is a bit superfluous but you have to use it.

The `<head>` tag encloses so called "metadata" or data about the document. In this example it containst `<title>` tag which is used to tell the browser what text it should display on the window pane or tab bar. It also contains an empty `<style>` tag which will later contain CSS rules.

The `<body>` tag has the actual content of the webpage which will be displayed on the screen. In this case it is a single line, enclosed in `<p>` tags. The `p` stands for paragraph.

Please copy and paste the above snippet into notepad and then save it as `webpage.html`. Close notepad then double click on your file. It will open in your default web browser (this may be Internet Explorer, Mozilla Firefox, Google Chrome or Safari depending on your settings). This is because the `.html` file extension is associated with that application (we talked about file extensions during the Filesystems lecture so this should be a familiar concept by now).

You may ask yourself how to edit this file again, now that it opens in a web browser instead of notepad. If so, this means you have not internalized the lesson from the lecture - shame on you! The file extension is merely a suggestion as to the default application which the OS should use when you double click on a file. You are still free to attempt to open this file in any application you want.

If you want to see the HTML code again, simply open Notepad, and use the File->Open menu to open up your file. Note how the Web Browser automatically "renders" the contents of the file by hiding all the tags, whereas notepad displays them.

###White Space

Since you have worked with Markdown already, this should be familiar. Web browsers will ignore all "white space" in your document, except single spaces in between words. White Space is the colloquial term we use to refer to things like spaces, tabs and line breaks. For example word you can align two words by simply using spaces or tabs, but this will not work with HTML.

All alignment and formatting must be done with tags like this:

{% highlight html %}
<h1>This is a heading</h1>
<p>This is a paragraph. It may contain multiple sentences.</p>
<p>This is a second paragraph.</p>
<h2>This is also a heading</h2>
<p>This is a third paragraph.<br/> It has a line break in the middle.</p>
{% endhighlight %}

Note how there is a little bit of vertical space between the paragraphs and a bit more space above and below headings. Also note now the `<br/>` tag breaks the text to the next line immediately without any extra spacing.

|`<p>`      | Creates paragraphs with a little bit of spacing above and below.
|`<br/>`    | Creates a line break without any vertical spacing.
|`<hr/>`    | Horizontal rule - draws a horizontal line across the page with spacing above and below.

As a rule, you should always enclose text in the `<p>` tags. Avoid "free floating" text at all cost. Headings should go outside the paragraph tags and be used to logically organize your documents. Think of `<h1>` as "chapter headings", `<h2>` as section headings, `<h3>` as sub-sections and so on. If you need extra spacing or alignment it can be accomplished with CSS.

###Basic Formating

HTML should be used for organization and not styling, but it offers several tags that can be used to emphasize certain words, or make certain things stand out on the page. Please note that the actual look and feel of each of those tags can be redefined via CSS.

| `<em>`        | Emphasis. Used to make words or sentences stand out. Contents will be italicized.
| `<strong>`    | Used to make contents boldface. 
| `<small>`     | Used to make contents smaller than the default text.
| `<blockquote>`| Used to display quotes. Makes contents slightly indented and emphasized.
| `<pre>`       | Pre-formated. Displays text in monospace font with white space.

All of these tags must have accompanying closing tags, and affect only what is inside them. You can nest them together:

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
<table>
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

Note how this table has two rows (each enclosed by a `<tr>` tag) and four cells (two in each row, enclosed by `<th>` and `<td>` tags respectively). In HTML there is not such thing as columns. You define rows, and then you add individual cells in said rows. It is possible to have rows with miss-matched numbers of cells in which case the missing cells will simply be rendered blank.

The `<caption>` tag is optional, but if used it must immediately follow the `<table>` tag.

###Containers

Now that you have learned the table syntax you might be tempted to use it for alignment. You might be thinking that it would be rather clever to create a large table with two rows, and use the leftmost cell for, say, navigation sidebar and the rightmost cell for content. This is actually how web pages were designed in the 90's back when Internet Explorer 6 was the de-facto standard of the web and tables was the only HTML structure that it would render without weird glitches. Today this kind of design is considered amateurish.

HTML5 uses special structural tags that are supposed to act as containers, which can later be styled and rearranged with CSS. Some of these deal with basic page layout:

|`<header>`     | Encloses page headings, titles, logos and etc..
|`<footer>`     | Encloses page footer, copyright notices and etc..
|`<nav>`        | Encloses navigation bars or menus.
|`<section>`   | Encloses an arbitrary portion of text: eg. a single topic.
|`<article>`   | Encloses a single "article" or blog post

Note that by themselves these tags do not change the way page look. They simply help you organize it so that it can be styled later on.

There also exist so called *semantic* containers which let the browser know what type of data they contain:

|`<address>`    | Used for displaying street addresses
|`<time>`       | Can be used to enclose dates or times
|`<code>`       | Used for enclosing computer code snippets

There are also two general purpose tags that can be applied to enclose arbitrary amounts of text:

|`<span>`       | Used to enclose one or more words. Used for applying color and formatting.
|`<div>`        | Used to create a "division" which is not necessarily a section or an article.

You usually give the `<span>` and `<div>` tags unique `id` attributes in order for them to be easily singled out by a CSS rule or common `class` attribute so that they can be easily styled as a group.

Here is an example of a very simple HTML web page using containers to enforce structure:

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <title>My Page Title</title>
        <style></style>
    </head>   
    <body>
        <header>
            <h1>Hello World</h1>
        </header>
        <section>
            <h2>Welcome</h2>
            <p>This is a web page.</p>
        </section>
        <footer>
            <small>(c) MSU</small>
        </footer>
    </body>
</html>
{% endhighlight %}

Note that you can have multiple sections per page, but only one `<header>` and one `<footer>` tag.

###Cascading Style Sheets

Cascading Style Sheets can be defined in a separate file, but we will be embedding our rules directly in the HTML page inside the `<style>` tag we defined at the beginning of this exercise. The CSS rules have their own syntax which is different from HTML. All the rules must be contained inside `<style>` tags. If they are placed outside of them, they will be rendered on the page as text and will not have the desired effect.

A CSS rule is composed of a selector, followed by one or more declarations enclosed in curly brackets. The declarations are delimited with semi-colons, and consist of a property name followed by a colon and a value.

![CSS Rule]({{site.baseurl}}/img/html/selector.gif)

The selectors will usually be HTML tag names. So for example if you wanted to change the color of all `<h1>` headings to red, you could create a HTML rule like this:

{% highlight css %}
h1 { color: red; }
{% endhighlight %}

The CSS rules "cascade" over, and affect all the child-tags of the ones you are currently styling. Therefore if you wanted to change the default color of all text on your page to blue you would simply have to do:

{% highlight css %}
body { color: blue; }
{% endhighlight %}

All the other tags contained inside `<body>` would "inherit" this rule. Note that this could be overridden by a more specific rule like the one we defined above, but only if you specify it after the rule for the body element. That's because the CSS rules are evaluated and applied in the order in which they appear.

Here are some commonly used properties:

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

This tells the browser to only apply this rule to `<h1>` tags which are children of the `<header>` tag. Sometimes you may want to be even more specific. In such case you may add an `id` attribute yoour chosen `<h1>` tag like this:

{% highlight html %}
<h1 id="special">Special Heading</h1>
{% endhighlight %}

You can then create a rule that only affects the tag with that specific `id`:

{% highlight css %}
#special { color: blue; }
{% endhighlight %}

Sometimes you may want to apply formating to a group of tags. In that case it might be a good idea to give all of them a shared `class` attribute:

{% highlight html %}
<p>Here is some text with <span class="important">colored</span> words
and some <em class="important">color emphasis</em></p>
{% endhighlight %}

You can create a rule that will change the color of both the `<span>` and the `<em>` class like this:

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

- Valid HTML boilerplate including DOCTYPE
- A header and footer with content.
- At least 3 sections, each including a heading and 1-2 paragraphs of text.
- An image.
- A list.
- At least one CSS rule.

For additional credit, please try the following:

- Use a HTML table
- Create CSS rules that use complex selectors (child tags, id's, classes)

Please refer to Blackboard for instructions how to submit this assignment.

[cc]: http://www.computerhope.com/htmcolor.htm
[css]: http://www.w3schools.com/css/ 
