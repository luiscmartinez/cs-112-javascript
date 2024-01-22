// Update Cart UI
function updateCartTableUI() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length) {
        let grandTotal = 0;
        const tableContent = cart.map((item) => {
            grandTotal += (item.price * item.quantity)
            return (`
                <tr>
                    <td>
                        <div class="column_1">
                            <img src="../images/${item.image}" alt="item image" />
                            <p>${item.name}</p>
                        </div>
                    </td>
                    <td>
                        <div class="num_stepper">
                            <div>-</div>
							<div>${item.quantity}</div>
							<div>+</div>
						</div>
                    </td>
                    <td>
						$${item.price * item.quantity}
					</td>
                </tr>
            `)
        })
        $('#table').append(tableContent.join(""))
        $('.summary_details').empty()
        $('.summary_details').append(`<h2>Total</h2><h2>$${grandTotal}</h2>`)
    } else {
        //! handle nothing in your shopping cart ui
    }
}