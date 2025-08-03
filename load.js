async function renderMarkdownFromFile(path) {
	const src = await fetch(path);
	const md = await src.text();
	const html = marked.parse(md);
	const sanitized_html = DOMPurify.sanitize(html);
	document.getElementById("content").innerHTML = sanitized_html;
}
renderMarkdownFromFile(document.getElementById("content").dataset.path);
