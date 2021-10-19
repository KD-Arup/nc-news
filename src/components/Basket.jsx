function Basket() {
    return (
        <div className="basket-container">
            <header>
                <h1>You have ## items in your basket!</h1>
            </header>
            <div className="basket-list-container">
                <ul>
                    <li>
                        <div>
                            <img src="https://www/w3images/avatar5.png" alt="Avatar" class="avatar" width="50" height="50"></img>
                        </div>
                        <div>1 Product description </div>
                        <div>£123.99</div>
                    </li>
                    <li>
                    <div>
                        <img src="https://www/w3images/avatar5.png" alt="Avatar" class="avatar" width="50" height="50"></img>
                        </div>
                        <div>2 Product description </div>
                        <div>£27.15</div>
                    </li>
                    <li>
                    <div>
                        <img src="https://www/w3images/avatar5.png" alt="Avatar" class="avatar" width="50" height="50"></img>
                        </div>
                        <div>3 Product description </div>
                        <div>£87.25</div>
                    </li>
                </ul>
            </div>
            <div className="basket-checkout-container">
                <div>
                    <p className="Total "></p>
                </div>
                <div className="totalText">Total</div>
                <div className="totalAmount">£9000.49</div>
            </div>
        </div>
    );
}

export default Basket;
