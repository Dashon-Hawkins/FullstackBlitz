import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Header extends Component {
  renderContent() {
  switch(this.props.auth){
    case  null :
    return;
    case false:
return (
<li><a href="/auth/google">Login With Google </a></li>
);
default:
return(
   <li><a href="/api/logout">Logout</a></li>
)
  }

  }

    render() {
      console.log(this.props.user);
         return(
            <nav>
            <div className="nav-wrapper">
  <Link to={this.props.auth? '/surveys' : '/'} className="left brand-logo">
Blitz
</Link>
              <ul className="right">
                {this.renderContent()}
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

