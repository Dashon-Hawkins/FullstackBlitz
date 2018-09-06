import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payment'

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
return [
   <li key={1}><Payments /></li>,
   <li key={2} style={{margin:'0 10px'}}>Credits: {this.props.auth.credits}</li>,
<li key={3} style={{margin:'0 2px'}}> {this.props.auth.userName}</li>,
   <li key={4}><a href="/api/logout">Logout</a></li>
];

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

