[Türkçe dökümantasyon için tıkla](#turkish)
# **EN: Kavi.js is built to create dynamic elements easily and with more feature** 
Use this library in <ins>HEAD</ins> tag.<br>
`kavi.js` is ES5 version compiled by babel.<br>
`kavi.original.es6.js` is ES6 version which is original one.

Kavi is a class that takes two arguments and returns an <ins>`HTML Element`</ins>. <br>

>First one is HTML Element Tag as <ins>`STRING`</ins>. You can create custom elements as well.

>Second one is Object of Options. Options can contain
> - **attributes**:  Object <br>- Attribute name: Attribute Value <br><br> 
> - **style**: Object: <br> - styleName: Value<br><br>
> - **text**: String //Inner Text
> - **html**: String //Inner HTML <br><br>
> - **children**: Array of HTML ELements <br><br>
> - **on**: Object <br> - eventName: Function(event, element)

###  Each element created by Kavi has a randomly generated id as attribute. <br><br>
```html
<div data-kavi-5128416></div>
```
### Style values are not added as attribute. Each element that created by Kavi keeps own style as a child, even if it is input or img.
```html
<div data-kavi-5128416>
	Hi i am created by kavi :)
	<style data-kavi-5128416>
		[data-kavi-5128416] {
			padding: 20px
		}
	</style>
</div>

<!-- even img/input. believe me it works. 
because it has no children. 
Style does not count as an element here, 
so img/imput works as expected-->
<img data-kavi-12345> 
	<style data-kavi-12345>...</style>
</img>

<input data-kavi-17421 type="text" id="helloha"> 
	<style data-kavi-17421>...</style>
</input>
```


 **Example: Creating an image**<br>

```javascript
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

```javascript
const div = new Kavi("div", {
	attributes: {
		id: "MyDiv",
		class: "d-flex align-items-center"
	},
	style: {
		boxShadow: "0px 0px 20px -5px #202020",
		padding: "20px",
		"border-radius": "20px"
	},
	text: "Hi, i am a div"
})

document.body.appendChild(div)
```
**Example: Creating a div with Children that has children**  <br>

```javascript
new Kavi("div", {
	attributes: {
		id: "MyDiv",
		class: "d-flex align-items-center"
	},
	style: {
		boxShadow: "0px 0px 20px -5px #202020",
		padding: "20px",
		"border-radius": "20px"
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

```javascript
new KaviDiv({
	text: "Click Me",
	attributes: {
		id: "MyDiv",
		class: "d-flex align-items-center"
	},
	style: {
		boxShadow: "0px 0px 20px -5px #202020",
		padding: "20px",
		"border-radius": "20px"
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
```javascript
new KaviImg({
	src: "http://satyr.io/300x300"
})
```

## Predefined Classes: new Kavi[class name]\(options) 
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


# <span id="turkish" ></span> **TR: Kavi.js çok özellikli ve dinamik olarak html elementleri oluşturmanın gelişmiş versiyonudur.** 
Bu kütüphaneyi <ins>HEAD</ins> etiketinin içinde kullanın.<br>
`kavi.js` ES5 Versiyonu. Babel tarafından çevirildi..<br>
`kavi.original.es6.js` ES6 ve orijinal versiyonu.

Kavi bir "class"dır, iki tane argüman alır ve geriye <ins>`HTML Elemanı`</ins> döndürür. <br>

<div style="border-left: 2px solid black; border-radius:5px;padding:10px; color: #202020; background-color: rgb(200,200,200)">
İlk eleman html etiketidir ve sadece <ins>`STRING`</ins> kabul eder. Özel etikete sahip elemanlar da oluşturabilir (\<selamlar>\</selamlar>) gibi.

İkinci argüman ise bir "OBJECT"dir ve özellikler taşır. Bu özellikler ise;
 - **attributes**:  Object <br>- Attribute ismi: Değer <br><br> 
 - **style**: Object: <br> - styleName: Değer<br><br>
 - **text**: String //Inner Text
 - **html**: String //Inner HTML <br><br>
 - **children**: HTML Element'lerine sahip Dizi(Array) <br><br>
 - **on**: Object <br> - eventName: Function(event, element)
<br>
</div>

###  Kavi tarafından üretilen her eleman kendine has rastgele üretilmiş bir "id"ye sahiptir. <br>

```html
<div data-kavi-5128416></div>
```

### Style elemanları attribute olarak onun yerine kendi içinde "style" elemanı taşır. IMG ve INPUT elemanları bile buna dahildir.
```html
<div data-kavi-5128416>
	Merhaba ben kavi tarafından oluşturuldum :)
	<style data-kavi-5128416>
		[data-kavi-5128416] {
			padding: 20px
		}
	</style>
</div>

<!-- img/input elemanlarında bile çalışır. inan bana çalışıyor.
Çünkü style bir eleman olarak sayılmıyor. 
ve img/imput elemanları istendiği şekilde çalışmaya devam ediyor-->
<img data-kavi-12345> 
	<style data-kavi-12345>...</style>
</img>

<input data-kavi-17421 type="text" id="helloha"> 
	<style data-kavi-17421>...</style>
</input>
```


 **Örnek: Bir "img" elemanı oluşturalım.**<br>

```javascript
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

**Örnek: İçeriğe sahip bir "div" oluşturalım ve "body"e ekleyelim.**  <br>

```javascript
const div = new Kavi("div", {
	attributes: {
		id: "MyDiv",
		class: "d-flex align-items-center"
	},
	style: {
		boxShadow: "0px 0px 20px -5px #202020",
		padding: "20px",
		"border-radius": "20px"
	},
	text: "Merhabalar ben bir \"div\"im"
})

document.body.appendChild(div)
```
**Örnek: Bir elemana sahip "div" oluştıralım ama o eleman da bir elemana sahip olsun.**  <br>

```javascript
new Kavi("div", {
	attributes: {
		id: "MyDiv",
		class: "d-flex align-items-center"
	},
	style: {
		boxShadow: "0px 0px 20px -5px #202020",
		padding: "20px",
		"border-radius": "20px"
	},
	text: "Benim çocuğum var.",
	children: {
		new Kavi('div', {
			text: "Ben onun çocuğuyum ama benim de çocuğum var",
			children: {
				new KaviSmall({
					html: "<h3>Selam</h3>"
				})
			}
		})
	}
})
```

**Örnek: Bir "event"e sahip bir eleman oluşturalım ve "event" çalıştığında kendi rengini değiştirsin.**  <br>

```javascript
new KaviDiv({
	text: "Merhabalar bana tıklar mısınız rica etsem?",
	attributes: {
		id: "MyDiv",
		class: "d-flex align-items-center"
	},
	style: {
		boxShadow: "0px 0px 20px -5px #202020",
		padding: "20px",
		"border-radius": "20px"
	},
	on: {
		click(event, element) {
			element.style.color = "blue";
			//basitçe: element = event.target :)
		}
	},
	children: {
		new KaviButton({
			text: "Bana tıklarsan renk değişmeyecek gerçekten.",
			on: {
				click(event) {
					event.stopPropagation();
				}
			}
		})
	}
})
```

### Kavi öntanımlı "class"lar içermektedir. Böylece ilk argümanı atlayabilirsiniz.
```javascript
new KaviImg({
	src: "http://satyr.io/300x300"
})
```

## Öntanımlı "class"lar: new Kavi[class ismi]\(özellikler) 
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
