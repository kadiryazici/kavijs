class Kavi {
    constructor(element, options) {
        this.element = false;
        if (typeof element === "string") {
            this.element = document.createElement(element);
        }

        if (!element) {
            throw new Error("Expected string but got " + typeof element);
        }

        const attributes = options?.attributes || null;
        const style = options?.style || null;
        const text = options?.text || null;
        const html = options?.html || null;
        const on = options?.on || null;
        const children = options?.children || null;

        this.random = Math.random().toString();
        this.random = this.random.slice(this.random.length - 7, this.random.length);
        this.element.setAttribute('data-Kavi-' + this.random, '');

        if (attributes && typeof attributes === "object") {
            if (Array.isArray(attributes)) throw this.Error('Attributes', 'Object');
            else this.setAttributes(attributes);
        }
        else if (attributes && typeof attributes !== "object") throw this.Error('Attributes', 'be a Object');

        if (text && typeof text === "string")
            this.setText(text);
        else if (text && typeof text !== "string")
            throw this.Error('Text', 'be a String');

        if (html && typeof html === "string")
            this.setHtml(html);
        else if (html && typeof html !== "string")
            throw this.Error('HTML', 'be a String');

        if (on && typeof on === "object") {
            if (Array.isArray(on)) throw this.Error('On', 'be a Object');
            else this.setOn(on);
        }
        else if (on && typeof on !== "object") throw this.Error('On', 'be a Object');

        if (children && typeof children === "object") {
            if (Array.isArray(children)) {
                if (children.length > 0) {
                    this.setChildren(children);
                } else {
                    throw this.Error('Attributes', 'have at least one element');
                }
            }
            else throw this.Error('Attributes', 'be an Array');
        }
        else if (children && typeof children !== "object") throw this.Error('Children', 'be an Array');

        if (style && typeof style === "object")
            this.setStyle(style);
        else if (typeof style !== "object")
            throw this.Error('Style', 'be a Object');

        return this.element;
    }

    Error(val, type) {
        return new Error(`${val} must ${type}.`)
    }

    setChildren(children) {
        children.forEach(value => {
            this.element.appendChild(value);
        })
    }

    setAttributes(attr) {
        for (const key in attr) {
            if (attr.hasOwnProperty(key)) {
                const element = attr[key];
                this.element.setAttribute(key, element);
            }
        }
    }

    setStyle(style) {
        let value = '';
        for (const key in style) {
            if (style.hasOwnProperty(key)) {
                const element = style[key];
                value += `${this.toKebabCase(key)}: ${element}; `
            }
        }
        const styleElement = new KaviStyle({
            html: `[data-Kavi-${this.random}] {${value}}`
        })
        this.element.appendChild(styleElement);
    }

    setText(txt) {
        this.element.insertAdjacentText('beforeend', txt);
    }

    setHtml(html) {
        this.element.insertAdjacentHTML('beforeend', html);
    }

    setOn(on) {
        for (const key in on) {
            if (on.hasOwnProperty(key)) {
                const element = on[key];
                this.element.addEventListener(key, (e) => {
                    element(e, this.element);
                });
            }
        }
    }

    toKebabCase(string) {
        return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

    }

}

["A", "Article", "Div", "H1", "H2", "H3", "H4", "H5", "H6", "Header", "Footer", "P", "Section", "Span",
    "Button", "Form", "Input", "Select", "Option", "Textarea", "Style", "Address", "B", "Code", "I",
    "Pre", "Small", "Strong", "Ol", "Li", "Ul", "Caption", "Col", "Colgroup", "Table", "Tbody", "Td", "Tfoot",
    "Thead", "Th", "Tr", "Audio", "Canvas", "Embed", "Figcaption", "Figure", "Iframe", "Img", "Object", "Param",
    "Source", "Time", "Video", "Label"]
    .forEach(value => {
        window['Kavi' + value] = class extends Kavi {
            constructor(object) {
                super(value.toLowerCase(), object);
                return this.element;
            }
        }
    })
