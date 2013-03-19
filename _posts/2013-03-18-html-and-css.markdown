---

layout: post
title: HTML and CSS Lab
category: student-resources

excerpt: 

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
<p>This is a second paragraph.<br/> It has a line break in the middle.</p>
{% endhighlight %}

###Basic Formating

###Links

###Images

###Lists

###Tables

###Styling Basic Tags

###Using id and class attributes

###The Box Model



[cc]: http://www.computerhope.com/htmcolor.htm
