import React, { Component } from 'react'
import { injectStripe } from 'react-stripe-elements'
import StripeCheckout from 'react-stripe-checkout'
import Button from 'components/CustomButtons/Button.jsx'
import ConfirmationPaiement from 'views/Adherent/confirmationPayment'
class CheckoutForm extends Component {
	constructor(props) {
		super(props)
		this.state = { complete: false }
		this.onToken = this.onToken.bind(this)
	}

	async onToken(token) {
		let response = await fetch('/api/charge50', {
			method: 'POST',
			body: token.id
		})
		if (response.ok) this.setState({ complete: true })
	}

	render() {
		if (this.state.complete) return <ConfirmationPaiement />
		return (
			<div className="checkout" style={{ textAlign: 'center' }}>
				<StripeCheckout
					style={{ textAlign: 'center' }}
					stripeKey="pk_live_3YHbiP48Nk6vpFoX1KdlZSb2"
					token={this.onToken} // submit callback
					name="Corpalif" // the pop-in header title
					description="Frais annuel d'adhésion" // the pop-in header subtitle
					ComponentClass="div"
					panelLabel="Adherer" // prepended to the amount in the bottom pay button
					amount={5000} // cents
					currency="EUR"
					locale="fr"
					// email="info@vidhub.co"
					// Note: Enabling either address option will give the user the ability to
					// fill out both. Addresses are sent as a second parameter in the token callback.
					shippingAddress
					billingAddress={true}
					data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
					// // Note: enabling both zipCode checks and billing or shipping address will
					// // cause zipCheck to be pulled from billing address (set to shipping if none provided).
					zipCode={true}
					unauthorizedRememberMe // "Remember Me" option (default true)
					opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
					closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
					// // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
					// // you are using multiple stripe keys
					// reconfigureOnUpdate={false}
					// Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
					// useful if you're using React-Tap-Event-Plugin
				>
					<Button round style={{ backgroundColor: '#337467' }}>
						<b> Paiement</b>
					</Button>
				</StripeCheckout>
			</div>
		)
	}
}

export default injectStripe(CheckoutForm)
