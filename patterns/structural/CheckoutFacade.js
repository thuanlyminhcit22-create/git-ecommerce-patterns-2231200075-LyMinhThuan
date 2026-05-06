import InventoryService from '../../services/InventoryService.js';
import PaymentService from '../../services/PaymentService.js';
import ShippingService from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventory = new InventoryService();
        this.payment = new PaymentService();
        this.shipping = new ShippingService();
    }

    placeOrder(orderDetails) {
        console.log("Starting order process...");

        const inStock = this.inventory.checkStock(orderDetails.productIds);
        if (!inStock) {
            console.log("Products are out of stock. Order failed.");
            return;
        }
        console.log("Stock available");

        const paymentSuccess = this.payment.processPayment(orderDetails.userId);
        if (!paymentSuccess) {
            console.log("Payment failed.");
            return;
        }
        console.log("Payment successful");

        const shippingSuccess = this.shipping.arrangeShipping(orderDetails.shippingInfo);
        if (!shippingSuccess) {
            console.log("Shipping failed.");
            return;
        }
        console.log("Shipping arranged");

        console.log("Order completed successfully!");
    }
}

export default CheckoutFacade;