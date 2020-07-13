class Renderer {
    constructor() {}

    render(data) {
        this.makeHandlebar("#recipe-template", ".content", data)
    }
}

Renderer.prototype.makeHandlebar = (templateId, containerId, data) => {
    const source = $(templateId).html();
    const template = Handlebars.compile(source);
    const newHTML = template({ data });
    $(containerId).empty().append(newHTML);
}