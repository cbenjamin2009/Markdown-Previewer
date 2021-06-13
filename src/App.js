import React from "react";
let marked=require("marked");

//Set marked default options to allow carriage returns


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const placeholder = `# Heading h1!

## Sub-Heading h2
### Sub-heading h3

Example of Hello World in a paragraph, \`<p>Hello World</p>\`

Example of Block of Code
\`\`\`javascript
    if (isAwesome){
      return true
    }
\`\`\`    

Example of **Bold**
Example of _Emphasis_

Want to learn how to code? Click ->   [here](https://www.freecodecamp.org/learn)

Abraham Lincoln Once Said:
>This great country of ours
>should not be at war with itself!

**To Do List**
1. Drink coffee
2. Write Code
3. Repeat as needed

![Random Image](https://visme.co/blog/wp-content/uploads/2016/09/website-1024x512.jpg)
`

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      markdown: placeholder,
    }
  }

  updateMarkdown(markdown) {
    this.setState({markdown})
  }

  render() {

    

    var pageStyle = {
      backgroundColor: '#D4DCFF',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,

    }

    var headingStyle={
      backgroundColor: '#7D00CC',
      color: 'white',
      borderRadius: "5px",
      width: "800px",
      marginRight: "auto",
      marginLeft: "auto",
    }

    var textareaDivStyle = {
      width: "800px",
      height: "30vh",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "5px",
      backgroundColor: '#00008A'
    }

    var textareaStyle = {
      backgroundColor: "rgba(225, 225, 225, .2)",
      width: "800px",
      height: "30vh",
      color: 'black',
      margin: 0,
      padding: '10px',
    }


    var previewStyle = {
      width: "800px",
      height: "40vh",
      backgroundColor: "#1AFFD5",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      borderRadius: "5px",
      overflow: "auto"
    }

    return (
      <div className="App" style={pageStyle}>
        <div className="container" >
          <div className="row mt-4">
            <div className="col text-center">
              <h1 className="text-center">
                    Markdown Previewer
              </h1>
              <br />
              <p className="text-center">Enter HTML in Markdown Input to see it rendered as HTML in the Preview</p>
            </div>
          </div>
            
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="col text-center">
                  <h1 className="text-center" style={headingStyle}>
                        Markdown Input
                    </h1>

                </div>
                <div className="mark-input" style={textareaDivStyle}>
                  <textarea id="editor" className="input" style={textareaStyle}  value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value)}}>{console.log(this.state.markdown)} </textarea>
                </div>
              </div>

              <div className="col-md-12">
              <div className="col text-center">
                  <h1 className="text-center" style={headingStyle}>
                      Preview
                  </h1>

                </div>
                <div id="preview" style={previewStyle} dangerouslySetInnerHTML={{__html: marked(this.state.markdown, { renderer: renderer })}}>
                  </div>
              </div>
            </div>

                
        </div>

      </div>


    );
  }
  
}

