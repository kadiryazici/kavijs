# **Kavi.js is built to create dynamic elements easily** 
Use this library in <ins>HEAD</ins> tag.<br>
kavi.js is ES5 version compiled by babel.<br>
kavi.original.es6.js ES6 version which is original one.

Kavi is a class that takes two arguments and returns an <ins>HTML Element</ins>. <br>

>First one is HTML Element Tag as <ins>STRING</ins>. You can create custom elements as well.

>Second one is Object of Options. Options can contain
> - **attributes**:  Object <br>- Attribute name: Attribute Value <br><br> 
> - **style**: Object: <br> - styleName: Value<br><br>
> - **text**: String //Inner Text
> - **html**: String //Inner HTML <br><br>
> - **children**: Array of HTML ELements <br><br>
> - **on**: Object <br> - eventName: Function(event, element)

###  Each element created by Kavi has a randomly generated id as attribute. <br><br>
```
<div data-kavi-5128416></div>

//even img, believe me it works.
<img data-kavi-12345> 
	<style>...</style>
</img>
```
### Style values are not added as attribute. Each element that created by Kavi keeps own style as a child, even if it is input or img.
```
<div data-kavi-5128416>
	Hi i am created by kavi :)
	<style data-kavi-5128416>
		[data-kavi-5128416] {
			padding: 20px
		}
	</style>
</div>
```


 **Example: Creating an image**<br>

```
new Kavi("img", {
            attributes: {
                src: "http://satyr.io/300x300",
				width: 300,
				height: 300
            },
            style: {
                boxShadow: "0px 0px 20px -5px #202020",
				"background-color": "blue",
				padding: "20px"
            },
        })
```

**Example: Creating a div with content**  <br>

```
const div = new Kavi("div", {
            attributes: {
                id: "MyDiv",
				class: "d-flex align-items-center"
            },
            style: {
                boxShadow: "0px 0px 20px -5px #202020",
				padding: "20px",
				borderRadius: "20px"
            },
			text: "Hi, i am a div"
        })

document.body.appendChild(div)
```
**Example: Creating a div with Children that has children**  <br>

```
new Kavi("div", {
            attributes: {
                id: "MyDiv",
				class: "d-flex align-items-center"
            },
            style: {
                boxShadow: "0px 0px 20px -5px #202020",
				padding: "20px",
				borderRadius: "20px"
            },
			text: "I have child",
			children: {
				new Kavi('div', {
					text: "I am the child and also a parent",
					children: {
						new KaviSmall({
							html: "<h3>Hiiii</h3>"
						})
					}
				})
			}
			
        })
```

**Example: Element with Event that changes the color of element's itself**  <br>

```
new KaviDiv({
			text: "Click Me",
            attributes: {
                id: "MyDiv",
				class: "d-flex align-items-center"
            },
            style: {
                boxShadow: "0px 0px 20px -5px #202020",
				padding: "20px",
				borderRadius: "20px"
            },
			on: {
				click(event, element) {
					element.style.color = "blue";
					//basically element = event.target :)
				}
			},
			children: {
				new KaviButton({
					text: "Click me i won't change the color i promise",
					on: {
						click(event) {
							event.stopPropagation();
						}
					}
				})
			}
        })
```

### Kavi has some predefined classes to create elements without first argument.
```
new KaviImg({
	src: "http://satyr.io/300x300"
})
```

## Predefined Classes. new Kavi[class name] // new KaviH3(), new KaviFooter(), new KaviImg()...
- A <br>
- Article<br>
- Div<br>
- H1<br>
- H2<br>
- H3<br>
- H4<br>
- H5<br>
- H6<br>
- Header<br>
- Footer<br>
- P<br>
- Section<br>
- Span<br>
- Button<br>
- Form<br>
- Input<br>
- Select<br>
- Option<br>
- Textarea<br>
- Style<br>
- Address<br>
- B<br>
- Code<br>
- I &nbsp;&nbsp; ```<i></i>``` <br>
- Pre<br>
- Small<br>
- Strong<br>
- Ol<br>
- Li<br>
- Ul<br>
- Caption<br>
- Col<br>
- Colgroup<br>
- Table<br>
- Tbody<br>
- Td<br>
- Tfoot<br>
- Thead<br>
- Th<br>
- Tr<br>
- Audio<br>
- Canvas<br>
- Embed<br>
- Figcaption<br>
- Figure<br>
- Iframe<br>
- Img<br>
- Object<br>
- Param<br>
- Source<br>
- Time<br>
- Video<br>
- Label


