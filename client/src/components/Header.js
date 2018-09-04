import React, {Component} from 'react'
import {connect} from 'react-redux';

class Header extends Component {
  renderContent() {
  switch(this.props.auth){
    case  null :
    return 'i am still deciding';
    case false:
return 'im logout';
default:
return 'i am loggedin';
  }

  }

    render() {
      console.log(this.props);
         return(
            <nav>
            <div className="nav-wrapper">
              <a className="left brand-logo">Blitz</a>
              <ul className="right">
                <li><a>{this.renderContent()}</a></li>
              </ul>
            </div>
          </nav>
         )
    }

}
function mapStateToProps(state) {

   return {
     auth:state.auth
   }
}

export default connect(mapStateToProps)(Header);

