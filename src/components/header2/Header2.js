import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
// import { removeFromCart } from "../../store/actions/action";
import Logo from '../../images/logo.png'

const Header2 = (props) => {
    // const [cartActive, setcartState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // const { carts } = props;

    return (
        <header id="header" className={`site-header header-style-2 ${props.hclass}`}>
            <HeaderTopbar />
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <MobileMenu />
                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={Logo} alt="" /></Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                        <button className="close-navbar"><i className="ti-close"></i></button>

                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                            <li>
                                <Link onClick={ClickHandler} to="/">Home</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/about">About</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/solutions">Solutions</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/deployments">Deployments</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/partners">Partners</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/articles">Articles</Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="cart-search-contact">

                        {/* SEARCH FUNCTIONALITY - DISABLED FOR NOW
                        <div className="header-search-form-wrapper">
                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                <form onSubmit={SubmitHandler}>
                                    <div>
                                        <input type="text" className="form-control"
                                            placeholder="Search here..." />
                                        <button type="submit"><i
                                            className="ti-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        */}

                        {/* MINI CART FUNCTIONALITY - DISABLED FOR NOW
                        <div className="mini-cart">
                            <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                {" "}
                                <i className="fi flaticon-shopping-bag-3"></i>{" "}
                                <span className="cart-count">{carts.length}</span>
                            </button>
                            <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                <div className="mini-cart-items">
                                    {carts &&
                                        carts.length > 0 &&
                                        carts.map((catItem, crt) => (
                                            <div className="mini-cart-item clearfix" key={crt}>
                                                <div className="mini-cart-item-image">
                                                    <span>
                                                        <img src={catItem.proImg} alt="icon" />
                                                    </span>
                                                </div>
                                                <div className="mini-cart-item-des">
                                                    <p>{catItem.title} </p>
                                                    <span className="mini-cart-item-price">
                                                        ${catItem.price} x {" "} {catItem.qty}
                                                    </span>
                                                    <span className="mini-cart-item-quantity">
                                                        <button
                                                            onClick={() =>
                                                                props.removeFromCart(catItem.id)
                                                            }
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            <i className="ti-close"></i>
                                                        </button>{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="mini-cart-action clearfix">
                                    <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                    <div className="mini-btn">
                                        <Link to="/cart" className="view-cart-btn">View Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </nav>
        </header>

    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps)(Header2);