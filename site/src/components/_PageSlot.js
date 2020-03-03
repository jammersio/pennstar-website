import React, { Component } from "react";
//https://sung.codes/blog/2017/12/03/loading-react-components-dynamically-demand/
import { shortid } from '../utils'

class PageSlot extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      pageList: []
    }
  }
  addPageTemplate = async page => {
    console.log(`Loading ${page} page...`)
    import(`../templates/${page}`)
      .then(page =>
        this.setState({
          pageList: this.state.pageList.concat(page.default)
        })
      )
      .catch(error => {
        console.error(`"${page}" not yet supported`)
      })
  }

  async componentDidMount() {
    const { pageList } = this.props.pageContext
    pageList.map(async ({ page }) => await this.addPageTemplate(page))
  }
  render() {
    const { pageList } = this.state
    // const { pageProps } = this.props
    if (pageList.length === 0) return <div>Loading...</div>
    const pagesElements = pageList.map(Page => (
      <Page key={shortid()} {...this.props.pageContext} />
    ));
    return <div className="Page">{pagesElements}</div>;
  }
}

export default PageSlot
