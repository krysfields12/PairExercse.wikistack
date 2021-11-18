const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
  <label for="name">Name</label>
    <div><input name="name" type="string" ></div>
    <label for="email">Email</label>
    <div><input name='email' type="string" ></div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    <label for="content">Content</label>
    <div><input name='content' type="text" ></div>
    <label for="status">Status</label>
    <div><input name='status' type="enum" ></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
